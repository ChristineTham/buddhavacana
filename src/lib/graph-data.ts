// The site's link graph, built from the docs collection: each page's outgoing links and tags. Serves
// the graph view (graph.json) and the backlinks. This replaces Quartz's contentIndex.json.
import { getCollection } from "astro:content";
import { tagLabels } from "./tags.mjs";

export type GraphPage = { title: string; links: string[]; tags: string[] };
/** `pages` is keyed by page URL (e.g. "/buddhavacana/pali-textbook/7-anatta/"); `tags` maps tag keys to labels. */
export type GraphData = { pages: Record<string, GraphPage>; tags: Record<string, string> };

const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
export const pageUrl = (id: string) => (id === "index" ? base : `${base}${id}/`);

// A link in the Markdown, ](target), or in the JSX or HTML of an MDX page, href="target".
const linkPattern = /\]\(\s*<?([^)\s>]+)|\bhref=["']([^"']+)["']/g;

/** The page a link points to, resolved as the browser would from the page at `from`. */
function linkTarget(href: string, from: string) {
	if (/^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(href)) return undefined; // another site, or this page
	try {
		const path = decodeURI(new URL(href, `https://site.invalid${from}`).pathname).normalize("NFC");
		return path.endsWith("/") ? path : `${path}/`;
	} catch {
		return undefined; // malformed
	}
}

async function buildGraphData(): Promise<GraphData> {
	const docs = await getCollection("docs", ({ id, data }) => id !== "404" && !data.draft);
	const urls = new Set(docs.map(({ id }) => pageUrl(id).normalize("NFC")));
	const pages: Record<string, GraphPage> = {};
	const usedTags = new Set<string>();
	for (const { id, body = "", data } of docs) {
		const url = pageUrl(id).normalize("NFC");
		const links = new Set<string>();
		for (const [, markdownLink, htmlLink] of body.matchAll(linkPattern)) {
			const target = linkTarget(markdownLink ?? htmlLink, url);
			if (target && target !== url && urls.has(target)) links.add(target);
		}
		const tags = data.tags ?? [];
		tags.forEach((tag) => usedTags.add(tag));
		pages[url] = { title: data.title, links: [...links], tags };
	}
	const labels = tagLabels("./src/content/docs");
	const tags = Object.fromEntries([...usedTags].sort().map((key) => [key, labels.get(key) ?? key]));
	return { pages, tags };
}

let cached: Promise<GraphData> | undefined;
/** Built once per production build; rebuilt on each request in dev so edits show up. */
export function getGraphData() {
	return import.meta.env.DEV ? buildGraphData() : (cached ??= buildGraphData());
}

/** Pages that link to `url`, sorted by title. */
export async function getBacklinks(url: string) {
	const { pages } = await getGraphData();
	const target = url.normalize("NFC");
	return Object.entries(pages)
		.filter(([, page]) => page.links.includes(target))
		.map(([href, page]) => ({ href, title: page.title }))
		.sort((a, b) => a.title.localeCompare(b.title));
}
