// Tags for starlight-tags. Its tag IDs must be ASCII, and pages spell the same tag several ways
// (Rebirth/rebirth, Nirvana/Nirvāṇa, Pāli Canon/Pali Canon), so every spelling is folded to one
// key, and tags.yml (generated from the pages' frontmatter) gives each key a display label.
import fs from "node:fs";
import path from "node:path";
import { parse, stringify } from "yaml";

/** Folds a tag to its starlight-tags ID, e.g. "Pāli Canon" -> "pali-canon". */
export function tagKey(tag) {
	return tag
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

/** Every frontmatter tag in the docs collection, with how often each spelling is used. Drafts are
 * left out: they aren't built, so their tags get no pages (see content.config.ts). */
export function collectTags(contentDir) {
	const counts = new Map();
	for (const file of fs.readdirSync(contentDir, { recursive: true })) {
		if (!/\.mdx?$/.test(String(file))) continue;
		const source = fs.readFileSync(path.join(contentDir, String(file)), "utf8");
		const frontmatter = source.match(/^---\n([\s\S]*?)\n---/);
		const data = frontmatter ? parse(frontmatter[1]) : undefined;
		const tags = data?.draft ? undefined : data?.tags;
		for (const tag of Array.isArray(tags) ? tags : []) {
			counts.set(String(tag), (counts.get(String(tag)) ?? 0) + 1);
		}
	}
	return counts;
}

/** Label for a key: its most-used spelling, then the one with more diacritics, then capitals. */
function bestLabel(spellings) {
	const score = ([tag, count]) => [count, (tag.match(/[^\x00-\x7f]/g) ?? []).length, (tag.match(/\p{Lu}/gu) ?? []).length];
	return spellings.sort((a, b) => {
		const [x, y] = [score(a), score(b)];
		return y[0] - x[0] || y[1] - x[1] || y[2] - x[2] || a[0].localeCompare(b[0]);
	})[0][0];
}

/** The display label for each tag key, sorted by key. */
export function tagLabels(contentDir) {
	const byKey = new Map();
	for (const [tag, count] of collectTags(contentDir)) {
		const key = tagKey(tag);
		if (key) byKey.set(key, [...(byKey.get(key) ?? []), [tag, count]]);
	}
	return new Map(
		[...byKey].sort(([a], [b]) => a.localeCompare(b)).map(([key, spellings]) => [key, bestLabel(spellings)]),
	);
}

/** Writes the starlight-tags config for the current frontmatter, only when it changed. */
export function writeTagsConfig(contentDir, outFile) {
	const tags = Object.fromEntries([...tagLabels(contentDir)].map(([key, label]) => [key, { label }]));
	const yaml = `# Generated from page frontmatter by src/lib/tags.mjs; do not edit.\n${stringify({ tags })}`;
	if (!fs.existsSync(outFile) || fs.readFileSync(outFile, "utf8") !== yaml) {
		fs.mkdirSync(path.dirname(outFile), { recursive: true });
		fs.writeFileSync(outFile, yaml);
	}
}
