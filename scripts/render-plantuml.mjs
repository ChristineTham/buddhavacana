import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { encodePlantuml, plantumlAssetName, plantumlSource } from "../src/lib/plantuml.mjs";

const DOCS = fileURLToPath(new URL("../src/content/docs/", import.meta.url));
const OUTPUT = fileURLToPath(new URL("../public/plantuml/", import.meta.url));
const SERVER = "https://www.plantuml.com/plantuml/svg/";
const VARIANTS = ["light", "dark"];
const CONCURRENCY = 4;
const FENCE = /^```plantuml[ \t]*\r?\n([\s\S]*?)^```[ \t]*$/gm;

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(path)));
    else if (/\.(md|mdx)$/.test(entry.name)) files.push(path);
  }
  return files;
}

async function readCachedSvg(path) {
  try {
    const svg = await readFile(path, "utf8");
    return /<svg(?:\s|>)/i.test(svg);
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function render(source, variant, label) {
  const url = `${SERVER}${encodePlantuml(plantumlSource(source, variant))}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) {
    throw new Error(`${label}: PlantUML server returned HTTP ${response.status}`);
  }

  const svg = await response.text();
  if (!/<svg(?:\s|>)/i.test(svg)) {
    throw new Error(`${label}: PlantUML server did not return SVG`);
  }
  return svg;
}

const diagrams = new Map();
for (const file of await markdownFiles(DOCS)) {
  const content = await readFile(file, "utf8");
  FENCE.lastIndex = 0;
  for (const match of content.matchAll(FENCE)) {
    const source = match[1].trim();
    const line = content.slice(0, match.index).split("\n").length;
    const label = `${file}:${line}`;
    for (const variant of VARIANTS) {
      const name = plantumlAssetName(source, variant);
      if (!diagrams.has(name)) diagrams.set(name, { source, variant, label });
    }
  }
}

await mkdir(OUTPUT, { recursive: true });
const pending = [];
let reused = 0;
for (const [name, diagram] of diagrams) {
  const path = join(OUTPUT, name);
  if (await readCachedSvg(path)) reused++;
  else pending.push({ name, path, ...diagram });
}

let rendered = 0;
for (let i = 0; i < pending.length; i += CONCURRENCY) {
  const batch = pending.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(async ({ name, path, source, variant, label }) => {
    const svg = await render(source, variant, label);
    await writeFile(path, svg);
    rendered++;
    console.log(`Rendered ${label} (${variant}) -> ${name}`);
  }));
}

console.log(`PlantUML assets: ${rendered} rendered, ${reused} reused, ${diagrams.size} total.`);
