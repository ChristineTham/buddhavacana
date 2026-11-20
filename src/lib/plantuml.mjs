import { createHash } from "node:crypto";
import { deflateRawSync } from "node:zlib";

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

const THEMES = {
  light: [
    "!theme plain",
    "skinparam backgroundColor #f4eee8",
    "skinparam defaultFontColor #1c1425",
    "skinparam ArrowColor #85677b",
    "skinparam ArrowFontColor #1c1425",
    "skinparam classBackgroundColor #f8d7dd",
    "skinparam classBorderColor #b565a7",
    "skinparam classFontColor #1c1425",
  ].join("\n"),
  dark: [
    "!theme plain",
    "skinparam backgroundColor #1c1425",
    "skinparam defaultFontColor #f4eee8",
    "skinparam ArrowColor #be9cc1",
    "skinparam ArrowFontColor #f4eee8",
    "skinparam classBackgroundColor #615f5f",
    "skinparam classBorderColor #b565a7",
    "skinparam classFontColor #f4eee8",
  ].join("\n"),
};

export function plantumlSource(source, variant) {
  const theme = THEMES[variant];
  if (!theme) throw new Error(`Unknown PlantUML theme: ${variant}`);

  let text = source.trim();
  if (!text) throw new Error("Empty PlantUML diagram");

  let start = /^@start([a-z]+)\b[^\r\n]*/im.exec(text);
  if (!start) {
    text = `@startuml\n${text}\n@enduml`;
    start = /^@start([a-z]+)\b[^\r\n]*/im.exec(text);
  } else {
    const end = new RegExp(`^@end${start[1]}\\b`, "im");
    if (!end.test(text)) text += `\n@end${start[1]}`;
  }
  if (!start) throw new Error("PlantUML diagram has no start directive");
  const insertionPoint = start.index + start[0].length;
  return `${text.slice(0, insertionPoint)}\n${theme}${text.slice(insertionPoint)}`;
}

export function plantumlAssetName(source, variant) {
  const renderedSource = plantumlSource(source, variant);
  const hash = createHash("sha256").update(renderedSource).digest("hex");
  return `${hash}-${variant}.svg`;
}

export function encodePlantuml(source) {
  const compressed = deflateRawSync(Buffer.from(source), { level: 9 });
  let result = "";

  for (let i = 0; i < compressed.length; i += 3) {
    const first = compressed[i];
    const second = compressed[i + 1];
    const third = compressed[i + 2];
    result += ALPHABET[first >> 2];
    result += ALPHABET[((first & 0x03) << 4) | ((second ?? 0) >> 4)];
    if (second !== undefined) result += ALPHABET[((second & 0x0f) << 2) | ((third ?? 0) >> 6)];
    if (third !== undefined) result += ALPHABET[third & 0x3f];
  }

  return result;
}
