// The breadcrumb trail for a page: Home, its parent folders, then the page itself. Shown above the
// title (PageTitle.astro) and given to search engines as a BreadcrumbList (route-data.ts).
import type { StarlightRouteData } from "@astrojs/starlight/route-data";
import { getCollection } from "astro:content";
import { pageUrl } from "./graph-data";

/** A folder without a page of its own has no href. */
export type Crumb = { label: string; href?: string };
// Folders whose pages plugins generate, outside the docs collection, and so the folders under them too
// (each tag's page is under the tag index): this site's starlight-tags pages.
const generatedPages = new Set(["tags"]);
type SidebarEntry = StarlightRouteData["sidebar"][number];

/** The labels of the sidebar groups that hold the current page, outermost first. */
function groupLabels(entries: SidebarEntry[], labels: string[] = []): string[] | undefined {
	for (const entry of entries) {
		if (entry.type === "link" && entry.isCurrent) return labels;
		if (entry.type === "group") {
			const found = groupLabels(entry.entries, [...labels, entry.label]);
			if (found) return found;
		}
	}
	return undefined;
}

export async function getBreadcrumbs(route: StarlightRouteData): Promise<Crumb[]> {
	const id = route.entry.id || "index"; // Starlight gives the home page an empty id
	const home = { label: "Home", href: pageUrl("index") };
	if (id === "index") return [home];
	const docs = await getCollection("docs", ({ data }) => !data.draft);
	const titles = new Map(docs.map((entry) => [entry.id, entry.data.title]));
	// A folder is named by its index page, else by the sidebar group the page is in (when the groups
	// match the folders one to one), else by the folder's own name.
	const folders = id.split("/").slice(0, -1);
	const groups = groupLabels(route.sidebar);
	const sidebarLabels = groups?.length === folders.length ? groups : undefined;
	return [
		home,
		...folders.map((folder, i) => {
			const folderId = folders.slice(0, i + 1).join("/");
			const title = titles.get(folderId);
			const name = folder.charAt(0).toUpperCase() + folder.slice(1).replace(/-/g, " ");
			const hasPage = title !== undefined || generatedPages.has(folders[0]);
			return { label: title ?? sidebarLabels?.[i] ?? name, href: hasPage ? pageUrl(folderId) : undefined };
		}),
		{ label: route.entry.data.title, href: pageUrl(id) },
	];
}
