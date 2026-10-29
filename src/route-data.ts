// SEO for every page, from its frontmatter: the description, Open Graph, Twitter and article tags,
// and a JSON-LD graph. Starlight's own head tags (title, canonical, og:title, og:url, sitemap) are
// kept; the ones below replace or join them.
import { execFileSync } from "node:child_process";
import { defineRouteMiddleware, type StarlightRouteData } from "@astrojs/starlight/route-data";
import { getImage } from "astro:assets";
import { getCollection, getEntry } from "astro:content";
import { getBreadcrumbs } from "./lib/breadcrumbs";
import { tagLabels } from "./lib/tags.mjs";

const siteName = "buddhavacana";
const siteDescription = "The Word of the Buddha, my journey reading and studying Buddhist texts.";
// The site is open source under the Apache licence (see the home page and LICENSE).
const license = "https://www.apache.org/licenses/LICENSE-2.0";
// The author of every page here; a page by someone else would name its author in the frontmatter.
const siteAuthor = { name: "Chris Tham", url: "https://christham.net/" };

type HeadEntry = StarlightRouteData["head"][number];
type PageData = StarlightRouteData["entry"]["data"];
type Picture = { image: ImageMetadata; alt?: string };

/** Replaces any <meta> with the same name/property, or removes it when there is no content. */
function setMeta(head: HeadEntry[], key: "name" | "property", value: string, content?: string | number) {
	for (let i = head.length - 1; i >= 0; i--) {
		if (head[i].tag === "meta" && head[i].attrs?.[key] === value) head.splice(i, 1);
	}
	if (content !== undefined && content !== "") head.push({ tag: "meta", attrs: { [key]: value, content: String(content) } });
}

/** Cuts text to at most `max` characters, at a sentence end if there is one, else at a word. */
function clip(text: string, max: number) {
	const plain = text.replace(/[`*_]/g, "").replace(/\s+/g, " ").trim();
	if (plain.length <= max) return plain;
	const cut = plain.slice(0, max - 1);
	const sentence = cut.lastIndexOf(". ");
	return sentence > max / 2 ? cut.slice(0, sentence + 1) : cut.replace(/\s+\S*$/, "") + "…";
}

// When each page was first published (its oldest commit, following renames) and last changed.
const gitDates = new Map<string, { published?: string; modified?: string }>();
function datesOf(filePath?: string) {
	if (!filePath) return {};
	if (!gitDates.has(filePath)) {
		let commits: string[] = [];
		try {
			commits = execFileSync("git", ["log", "--follow", "--format=%cI", "--", filePath], { encoding: "utf8" })
				.trim()
				.split("\n")
				.filter(Boolean);
		} catch {
			// Not in a git checkout: no dates.
		}
		gitDates.set(filePath, { published: commits.at(-1), modified: commits[0] });
	}
	return gitDates.get(filePath)!;
}

// Pages from the docs collection, as opposed to the tag pages that starlight-tags generates.
let docsIds: Promise<Set<string>> | undefined;
const isDocsPage = async (id: string) =>
	(await (docsIds ??= getCollection("docs").then((docs) => new Set(docs.map((doc) => doc.id))))).has(id);

let labels: Map<string, string> | undefined;
const tagLabel = (key: string) => (labels ??= tagLabels("./src/content/docs")).get(key) ?? key;

/** The page's own picture: its cover, else its hero image. */
function pagePicture(data: PageData): Picture | undefined {
	if (data.cover) return data.cover;
	const hero = data.hero?.image;
	if (hero && "file" in hero) return { image: hero.file, alt: hero.alt || undefined };
	if (hero && "light" in hero) return { image: hero.light, alt: hero.alt || undefined };
	return undefined;
}

// The home page's picture is every other page's default social image.
let homePicture: Promise<Picture | undefined> | undefined;
const defaultPicture = () => (homePicture ??= getEntry("docs", "index").then((home) => home && pagePicture(home.data)));
const socialImages = new Map<ImageMetadata, Promise<{ url: string; width: number; height: number }>>();
function socialImage(image: ImageMetadata, site: URL) {
	if (!socialImages.has(image)) {
		socialImages.set(
			image,
			getImage({ src: image, width: 1200, format: "jpeg", quality: 80 }).then((img) => ({
				url: new URL(img.src, site).href,
				width: Number(img.attributes.width),
				height: Number(img.attributes.height),
			})),
		);
	}
	return socialImages.get(image)!;
}

export const onRequest = defineRouteMiddleware(async (context) => {
	const route = context.locals.starlightRoute;
	const site = context.site;
	if (!site || route.id === "404") return;
	const home = new URL(import.meta.env.BASE_URL, site);

	const { entry, head } = route;
	const { data } = entry;
	const id = entry.id || "index";
	const url = new URL(context.url.pathname, site).href;
	const authors = data.author === undefined ? [] : [data.author].flat(); // a work by someone else
	const kind = !(await isDocsPage(id)) ? "collection" : id === "index" ? "home" : authors.length > 0 ? "work" : "page";
	const keywords = (data.tags ?? []).map(tagLabel);
	const { published, modified } = datesOf(entry.filePath);
	// Starlight finds dates by parsing `git log --name-status`, where git escapes non-ASCII paths
	// ("An\304\201layo"), so such pages get none. Fill in the date git gave us.
	if (!route.lastUpdated && modified && kind !== "collection") route.lastUpdated = new Date(modified);

	// Descriptions: search results show about 155 characters, social cards about 200. Tag pages
	// come with only a page count ("2 pages") from starlight-tags.
	const tag = kind === "collection" ? data.title.match(/^Tagged: (.+)$/)?.[1] : undefined;
	const description = tag ? `Pages on ${siteName} tagged “${tag}”.` : (data.description ?? siteDescription);
	setMeta(head, "name", "description", clip(description, 160));
	setMeta(head, "property", "og:description", clip(description, 200));
	setMeta(head, "name", "author", authors.length > 0 ? authors.join(", ") : siteAuthor.name);
	setMeta(head, "property", "og:type", kind === "home" || kind === "collection" ? "website" : "article");
	setMeta(head, "property", "og:locale", "en_AU");

	// Social image: the page's cover or hero image, else the home page's.
	const picture = pagePicture(data) ?? (await defaultPicture());
	const image = picture ? await socialImage(picture.image, site) : undefined;
	setMeta(head, "property", "og:image", image?.url);
	setMeta(head, "property", "og:image:width", image?.width);
	setMeta(head, "property", "og:image:height", image?.height);
	setMeta(head, "property", "og:image:alt", picture?.alt);
	setMeta(head, "name", "twitter:image", image?.url);
	setMeta(head, "name", "twitter:image:alt", picture?.alt);

	if (kind !== "home" && kind !== "collection") {
		setMeta(head, "property", "article:published_time", published);
		setMeta(head, "property", "article:modified_time", modified);
		for (const keyword of keywords) head.push({ tag: "meta", attrs: { property: "article:tag", content: keyword } });
	}

	// JSON-LD: the site, its author, the page itself and its breadcrumb trail.
	const websiteId = new URL("#website", home).href;
	const authorId = new URL("#chris-tham", home).href;
	const graph: Record<string, unknown>[] = [
		{
			"@type": "WebSite",
			"@id": websiteId,
			url: home.href,
			name: siteName,
			description: siteDescription,
			inLanguage: "en",
			publisher: { "@id": authorId },
			license,
		},
		{ "@type": "Person", "@id": authorId, name: siteAuthor.name, url: siteAuthor.url },
	];
	const common = {
		"@id": `${url}#page`,
		url,
		name: data.title,
		description,
		inLanguage: "en",
		isPartOf: { "@id": websiteId },
		mainEntityOfPage: url,
		...(keywords.length ? { keywords: keywords.join(", ") } : {}),
		...(image ? { image: { "@type": "ImageObject", url: image.url, width: image.width, height: image.height } } : {}),
	};
	if (kind === "page" || kind === "work") {
		graph.push({
			"@type": "Article",
			...common,
			headline: clip(data.title, 110),
			// A work by someone else keeps its own terms; the site is not its author or publisher.
			...(kind === "work"
				? { author: authors.map((name) => ({ "@type": "Person", name })) }
				: { author: { "@id": authorId }, publisher: { "@id": authorId }, license }),
			...(published ? { datePublished: published } : {}),
			...(modified ? { dateModified: modified } : {}),
			...(data.summary ? { abstract: data.summary.replace(/[`*_]/g, "") } : {}),
		});
	} else {
		graph.push({ "@type": kind === "home" ? "WebPage" : "CollectionPage", ...common });
	}
	if (kind !== "home") {
		// Folders without a page of their own are left out: each item needs a URL.
		const crumbs = (await getBreadcrumbs(route)).filter((crumb) => crumb.href);
		graph.push({
			"@type": "BreadcrumbList",
			itemListElement: crumbs.map(({ label, href }, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: label,
				item: new URL(href!, site).href,
			})),
		});
	}
	head.push({
		tag: "script",
		attrs: { type: "application/ld+json" },
		// "<" is escaped so no text in the data can close the script element.
		content: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
	});
});
