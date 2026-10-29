// Graph view, ported from Quartz v5 (quartz-community/graph, src/components/scripts/graph.inline.ts).
// Copyright (c) 2021 jackyzha0, MIT License (see LICENSE-QUARTZ.txt).
//
// Changes from Quartz v5:
// - D3 and PixiJS are bundled from npm (pinned versions) instead of loaded from jsDelivr at runtime,
//   and this module is only loaded when the graph is shown (see Graph.astro).
// - The data comes from /graph.json (src/lib/graph-data.ts) and is keyed by page URL, so a click on
//   a node is plain navigation. Tag nodes open the starlight-tags pages and show the tag's label.
// - Colours come from the --graph-* custom properties in custom.css (Quartz's palette); a theme
//   change is detected from Starlight's data-theme attribute rather than Quartz's events.
// - Quartz's nav/prenav/render handling is replaced by showLocalGraph() and toggleGlobalGraph().
// - Labels ignore the pointer. In Quartz v5 they take the app's default event mode, "static", so the
//   hidden labels, drawn above the nodes, block the hover on every node they overlap.
// - URLs include the site's base path (BASE_URL), so the graph works on a site served from a subfolder.
import {
	type SimulationLinkDatum,
	type SimulationNodeDatum,
	forceCenter,
	forceCollide,
	forceLink,
	forceManyBody,
	forceRadial,
	forceSimulation,
} from "d3-force";
import { drag } from "d3-drag";
import { select } from "d3-selection";
import { zoom, zoomIdentity, type ZoomTransform } from "d3-zoom";
import { Application, Container, Graphics, Text } from "pixi.js";
import type { GraphData } from "./graph-data";

export interface D3Config {
	drag: boolean;
	zoom: boolean;
	depth: number;
	scale: number;
	repelForce: number;
	centerForce: number;
	linkDistance: number;
	fontSize: number;
	opacityScale: number;
	removeTags: string[];
	showTags: boolean;
	focusOnHover?: boolean;
	enableRadial?: boolean;
}

type NodeData = SimulationNodeDatum & {
	id: string;
	text: string;
	tags: string[];
	__dragOffset?: { x: number; y: number };
};
type LinkData = SimulationLinkDatum<NodeData> & { source: NodeData; target: NodeData };
type NodeRenderData = {
	simulationData: NodeData;
	gfx: Graphics;
	label: Text;
	color: string;
	alpha: number;
	active: boolean;
};
type LinkRenderData = {
	simulationData: LinkData;
	gfx: Graphics;
	color: string;
	alpha: number;
	active: boolean;
};

let graphData: Promise<GraphData> | undefined;
const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
const fetchData = () => (graphData ??= fetch(`${base}graph.json`).then((response) => response.json()));

const tagsPath = `${base}tags/`;
const isTagNode = (id: string) => id.startsWith(tagsPath);

// Pages the reader has visited are coloured differently; Graph.astro records each visit.
const localStorageKey = "graph-visited";
function getVisited(): Set<string> {
	try {
		return new Set(JSON.parse(localStorage.getItem(localStorageKey) || "[]"));
	} catch {
		return new Set();
	}
}

// Resolves CSS color values containing calc()/var() that PixiJS cannot parse.
// Uses a temp DOM element so the browser's CSS engine evaluates the expression.
function resolveColor(value: string, fallback: string) {
	if (!value) return fallback;
	const el = document.createElement("div");
	el.style.color = value;
	el.style.position = "absolute";
	el.style.visibility = "hidden";
	document.body.appendChild(el);
	const resolved = getComputedStyle(el).color;
	el.remove();
	return resolved || fallback;
}

let currentRenderGeneration = 0;

async function renderGraph(graph: HTMLElement, slug: string, renderGeneration?: number) {
	const visited = getVisited();
	graph.replaceChildren();

	if (renderGeneration !== undefined && renderGeneration !== currentRenderGeneration) {
		return () => {};
	}

	const config: Partial<D3Config> = JSON.parse(graph.dataset["cfg"] || "{}");
	const enableDrag = config.drag;
	const enableZoom = config.zoom;
	const depth = config.depth ?? 1;
	const scale = config.scale || 1;
	const repelForce = config.repelForce || 0.5;
	const centerForce = config.centerForce || 0.3;
	const linkDistance = config.linkDistance || 30;
	const fontSize = config.fontSize || 0.6;
	const opacityScale = config.opacityScale || 1;
	const removeTags = config.removeTags || [];
	const showTags = config.showTags;
	const focusOnHover = config.focusOnHover;
	const enableRadial = config.enableRadial;

	let data: Map<string, GraphData["pages"][string]>;
	let tagLabels: GraphData["tags"];
	try {
		const dataRaw = await fetchData();
		data = new Map(Object.entries(dataRaw.pages));
		tagLabels = dataRaw.tags;
	} catch (err) {
		console.error("[Graph] Error loading data:", err);
		return () => {};
	}

	const width = graph.offsetWidth;
	const height = Math.max(graph.offsetHeight, 250);

	const links: { source: string; target: string }[] = [];
	const allTags: string[] = [];
	const validLinks = new Set(data.keys());

	data.forEach((details, source) => {
		for (const dest of details.links || []) {
			if (validLinks.has(dest)) {
				links.push({ source, target: dest });
			}
		}

		if (showTags) {
			for (const tag of details.tags || []) {
				if (!removeTags.includes(tag)) {
					const tagSlug = `${tagsPath}${tag}/`;
					if (!allTags.includes(tagSlug)) {
						allTags.push(tagSlug);
					}
					links.push({ source, target: tagSlug });
				}
			}
		}
	});

	const neighbourhood = new Set<string>();
	if (depth >= 0) {
		let queue = [slug];
		const seen = new Set([slug]);
		for (let d = 0; d <= depth && queue.length > 0; d++) {
			const nextQueue: string[] = [];
			for (const cur of queue) {
				neighbourhood.add(cur);
				for (const link of links) {
					if (link.source === cur && !seen.has(link.target)) {
						seen.add(link.target);
						nextQueue.push(link.target);
					}
					if (link.target === cur && !seen.has(link.source)) {
						seen.add(link.source);
						nextQueue.push(link.source);
					}
				}
			}
			queue = nextQueue;
		}
	} else {
		validLinks.forEach((id) => neighbourhood.add(id));
		allTags.forEach((tag) => neighbourhood.add(tag));
	}

	const nodes: NodeData[] = [];
	const nodeMap = new Map<string, NodeData>();
	neighbourhood.forEach((url) => {
		const isTag = isTagNode(url);
		const text = isTag ? "#" + (tagLabels[url.slice(tagsPath.length, -1)] ?? url) : data.get(url)?.title || url;
		const node: NodeData = {
			id: url,
			text,
			tags: isTag ? [] : data.get(url)?.tags || [],
			x: Math.random() * width - width / 2,
			y: Math.random() * height - height / 2,
			vx: 0,
			vy: 0,
		};
		nodes.push(node);
		nodeMap.set(url, node);
	});

	const graphLinks: LinkData[] = [];
	for (const link of links) {
		if (neighbourhood.has(link.source) && neighbourhood.has(link.target)) {
			const sourceNode = nodeMap.get(link.source);
			const targetNode = nodeMap.get(link.target);
			if (sourceNode && targetNode) {
				graphLinks.push({ source: sourceNode, target: targetNode });
			}
		}
	}

	const styles = getComputedStyle(document.documentElement);
	const secondary = resolveColor(styles.getPropertyValue("--graph-secondary").trim(), "#c792ea");
	const tertiary = resolveColor(styles.getPropertyValue("--graph-tertiary").trim(), "#82aaff");
	const gray = resolveColor(styles.getPropertyValue("--graph-gray").trim(), "#6c6c6c");
	const lightgray = resolveColor(styles.getPropertyValue("--graph-lightgray").trim(), "#d4d4d4");
	const dark = resolveColor(styles.getPropertyValue("--graph-dark").trim(), "#1a1a1a");
	const light = resolveColor(styles.getPropertyValue("--graph-light").trim(), "#f5f5f5");
	const bodyFont = styles.getPropertyValue("--sl-font").trim() || "inherit";

	const app = new Application();
	await app.init({
		width,
		height,
		antialias: true,
		backgroundAlpha: 0,
		resolution: window.devicePixelRatio || 1,
		autoDensity: true,
		eventMode: "static",
	});

	graph.appendChild(app.canvas);

	const stage = new Container();
	app.stage.addChild(stage);

	function nodeRadius(d: NodeData) {
		let numLinks = 0;
		for (const link of graphLinks) {
			if (link.source.id === d.id || link.target.id === d.id) {
				numLinks++;
			}
		}
		return 2 + Math.sqrt(numLinks);
	}

	const simulation = forceSimulation<NodeData>(nodes)
		.force("charge", forceManyBody().strength(-100 * repelForce))
		.force("center", forceCenter().strength(centerForce))
		.force("link", forceLink<NodeData, LinkData>(graphLinks).distance(linkDistance))
		.force("collide", forceCollide<NodeData>().radius(nodeRadius).iterations(3));

	if (enableRadial) {
		const radius = (Math.min(width, height) / 2) * 0.8;
		simulation.force("radial", forceRadial(radius).strength(0.2));
	}

	const linkContainer = new Container();
	const nodesContainer = new Container();
	const labelsContainer = new Container();
	stage.addChild(linkContainer);
	stage.addChild(nodesContainer);
	stage.addChild(labelsContainer);

	const nodeRenderData: NodeRenderData[] = [];
	const linkRenderData: LinkRenderData[] = [];
	let hoveredNodeId: string | null = null;
	let hoveredNeighbours = new Set<string>();
	let dragStartTime = 0;
	let dragging = false;
	let currentTransform: ZoomTransform = zoomIdentity;

	function nodeColor(d: NodeData) {
		const isCurrent = d.id === slug;
		if (isCurrent) {
			return secondary;
		} else if (visited.has(d.id) || isTagNode(d.id)) {
			return tertiary;
		} else {
			return gray;
		}
	}

	function updateHoverInfo(newHoveredId: string | null) {
		hoveredNodeId = newHoveredId;

		if (newHoveredId === null) {
			hoveredNeighbours = new Set();
			for (const n of nodeRenderData) n.active = false;
			for (const l of linkRenderData) l.active = false;
		} else {
			hoveredNeighbours = new Set();

			for (const l of linkRenderData) {
				const linkData = l.simulationData;
				if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
					hoveredNeighbours.add(linkData.source.id);
					hoveredNeighbours.add(linkData.target.id);
					l.active = true;
				} else {
					l.active = false;
				}
			}

			hoveredNeighbours.add(newHoveredId);

			for (const n of nodeRenderData) {
				n.active = hoveredNeighbours.has(n.simulationData.id);
			}
		}
	}

	function renderLinks() {
		for (const linkData of linkRenderData) {
			let alpha = 1;
			if (hoveredNodeId !== null) {
				alpha = linkData.active ? 1 : 0.2;
			}
			linkData.alpha = alpha;
			linkData.color = linkData.active ? gray : lightgray;
		}
	}

	function renderLabels() {
		const defaultScale = 1 / scale;
		const activeScale = defaultScale * 1.1;

		for (const nodeData of nodeRenderData) {
			if (hoveredNodeId === nodeData.simulationData.id) {
				nodeData.label.alpha = 1;
				nodeData.label.scale.set(activeScale);
			} else {
				nodeData.label.scale.set(defaultScale);
			}
		}
	}

	function renderNodes() {
		for (const nodeData of nodeRenderData) {
			let alpha = 1;
			if (hoveredNodeId !== null && focusOnHover) {
				alpha = nodeData.active ? 1 : 0.2;
			}
			nodeData.gfx.alpha = alpha;
		}
	}

	function renderPixiFromD3() {
		renderNodes();
		renderLinks();
		renderLabels();
	}

	for (const node of nodes) {
		const nodeId = node.id;
		const isTag = isTagNode(nodeId);
		const radius = nodeRadius(node);
		const color = nodeColor(node);

		const label = new Text({
			text: node.text,
			style: {
				fontSize: fontSize * 15,
				fill: dark,
				fontFamily: bodyFont,
			},
			resolution: window.devicePixelRatio * 4,
		});
		label.anchor.set(0.5, 1.2);
		label.alpha = 0;
		label.scale.set(1 / scale);
		// A transparent label is still hit-tested, and it sits over its node's upper half and any
		// neighbours it overlaps; let the pointer through to the nodes.
		label.eventMode = "none";
		labelsContainer.addChild(label);

		const gfx = new Graphics();
		gfx.circle(0, 0, radius);
		gfx.fill({ color: isTag ? light : color });
		if (isTag) {
			gfx.stroke({ width: 2, color: tertiary });
		}

		gfx.eventMode = "static";
		gfx.cursor = "pointer";
		gfx.label = nodeId;

		let oldLabelOpacity = 0;
		gfx.on("pointerover", () => {
			updateHoverInfo(node.id);
			oldLabelOpacity = label.alpha;
			if (!dragging) {
				renderPixiFromD3();
			}
		});

		gfx.on("pointerleave", () => {
			updateHoverInfo(null);
			label.alpha = oldLabelOpacity;
			if (!dragging) {
				renderPixiFromD3();
			}
		});

		nodesContainer.addChild(gfx);

		nodeRenderData.push({
			simulationData: node,
			gfx,
			label,
			color,
			alpha: 1,
			active: false,
		});
	}

	for (const link of graphLinks) {
		const gfx = new Graphics();
		gfx.eventMode = "none";
		linkContainer.addChild(gfx);

		linkRenderData.push({
			simulationData: link,
			gfx,
			color: lightgray,
			alpha: 1,
			active: false,
		});
	}

	if (enableDrag) {
		const dragSubject = (event: { x: number; y: number }) => {
			const mouseX = (event.x - currentTransform.x) / currentTransform.k;
			const mouseY = (event.y - currentTransform.y) / currentTransform.k;

			for (const n of nodes) {
				const dx = mouseX - n.x! - width / 2;
				const dy = mouseY - n.y! - height / 2;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < nodeRadius(n) + 5) {
					return n;
				}
			}
			return null;
		};

		select<HTMLCanvasElement, unknown>(app.canvas).call(
			drag<HTMLCanvasElement, unknown, NodeData>()
				.container(app.canvas)
				.subject(dragSubject as never)
				.on("start", (event) => {
					if (!event.active) simulation.alphaTarget(1).restart();
					event.subject.fx = event.subject.x;
					event.subject.fy = event.subject.y;
					const mouseSimX = (event.x - currentTransform.x) / currentTransform.k - width / 2;
					const mouseSimY = (event.y - currentTransform.y) / currentTransform.k - height / 2;
					event.subject.__dragOffset = {
						x: mouseSimX - event.subject.x!,
						y: mouseSimY - event.subject.y!,
					};
					dragStartTime = Date.now();
					dragging = true;
					hoveredNodeId = event.subject.id;
				})
				.on("drag", (event) => {
					const mouseSimX = (event.x - currentTransform.x) / currentTransform.k - width / 2;
					const mouseSimY = (event.y - currentTransform.y) / currentTransform.k - height / 2;
					event.subject.fx = mouseSimX - event.subject.__dragOffset!.x;
					event.subject.fy = mouseSimY - event.subject.__dragOffset!.y;
				})
				.on("end", (event) => {
					if (!event.active) simulation.alphaTarget(0);
					event.subject.fx = null;
					event.subject.fy = null;
					dragging = false;
					updateHoverInfo(null);
					renderPixiFromD3();

					if (Date.now() - dragStartTime < 500) {
						window.location.href = event.subject.id;
					}
				}),
		);
	} else {
		for (const nodeData of nodeRenderData) {
			nodeData.gfx.on("click", () => {
				window.location.href = nodeData.simulationData.id;
			});
		}
	}

	if (enableZoom) {
		select<HTMLCanvasElement, unknown>(app.canvas).call(
			zoom<HTMLCanvasElement, unknown>()
				.extent([
					[0, 0],
					[width, height],
				])
				.scaleExtent([0.25, 4])
				.on("zoom", (event) => {
					currentTransform = event.transform;
					stage.scale.set(currentTransform.k, currentTransform.k);
					stage.position.set(currentTransform.x, currentTransform.y);

					const newScale = currentTransform.k * opacityScale;
					const scaleOpacity = Math.max((newScale - 1) / 3.75, 0);

					const activeLabels = nodeRenderData.filter((n) => n.active).map((n) => n.label);
					for (const label of labelsContainer.children) {
						if (!activeLabels.includes(label as Text)) {
							label.alpha = scaleOpacity;
						}
					}
				}),
		);
	}

	let stopAnimation = false;
	function animate() {
		if (stopAnimation) return;

		for (const n of nodeRenderData) {
			const { x, y } = n.simulationData;
			if (x != null && y != null) {
				n.gfx.position.set(x + width / 2, y + height / 2);
				n.label.position.set(x + width / 2, y + height / 2);
			}
		}

		for (const l of linkRenderData) {
			const { source, target } = l.simulationData;
			if (source.x != null && source.y != null && target.x != null && target.y != null) {
				l.gfx.clear();
				l.gfx.moveTo(source.x + width / 2, source.y + height / 2);
				l.gfx.lineTo(target.x + width / 2, target.y + height / 2);
				l.gfx.stroke({ alpha: l.alpha, width: 1, color: l.color });
			}
		}

		requestAnimationFrame(animate);
	}

	simulation.restart();
	renderPixiFromD3();
	animate();

	return () => {
		stopAnimation = true;
		simulation.stop();
		try {
			app.destroy(true);
		} catch {
			// PixiJS may throw if WebGL context was already lost.
		}
	};
}

let localCleanups: (() => void)[] = [];
let globalCleanups: (() => void)[] = [];

function cleanupLocal() {
	localCleanups.forEach((cleanup) => cleanup());
	localCleanups = [];
}

function cleanupGlobal() {
	globalCleanups.forEach((cleanup) => cleanup());
	globalCleanups = [];
}

// The overlay lives on <body> so no ancestor's stacking context or transform can clip it.
function globalContainer(panel: HTMLElement) {
	const outer = panel.querySelector<HTMLElement>(".global-graph-outer");
	if (outer) document.body.append(outer);
	return document.querySelector<HTMLElement>("body > .global-graph-outer")!;
}

const anyGlobalGraphActive = () => !!document.querySelector("body > .global-graph-outer.active");

function hideGlobalGraph() {
	cleanupGlobal();
	document.querySelector("body > .global-graph-outer")?.classList.remove("active");
}

function showGlobalGraph(panel: HTMLElement, slug: string) {
	cleanupGlobal();
	const container = globalContainer(panel);
	container.classList.add("active");
	const graphContainer = container.querySelector<HTMLElement>(".global-graph-container");
	if (graphContainer) {
		renderGraph(graphContainer, slug)
			.then((cleanup) => globalCleanups.push(cleanup))
			.catch((err) => console.error("[Graph] Global render error:", err));
	}
}

function renderLocal(panel: HTMLElement, slug: string) {
	cleanupLocal();
	const thisGeneration = ++currentRenderGeneration;
	for (const container of panel.querySelectorAll<HTMLElement>(".graph-container")) {
		renderGraph(container, slug, thisGeneration)
			.then((cleanup) => {
				if (thisGeneration === currentRenderGeneration) {
					localCleanups.push(cleanup);
				}
			})
			.catch((err) => console.error("[Graph] Local render error:", err));
	}
}

let listening = false;
function listen(panel: HTMLElement, slug: string) {
	if (listening) return;
	listening = true;

	// A click outside the global graph, or Escape, closes it.
	document.addEventListener("click", (e) => {
		if (anyGlobalGraphActive()) {
			const target = e.target as Element;
			if (!target.closest(".global-graph-container") && !target.closest(".global-graph-icon")) {
				hideGlobalGraph();
			}
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && anyGlobalGraphActive()) hideGlobalGraph();
	});

	// Re-render in the new colours when the reader switches between light and dark.
	new MutationObserver(() => {
		renderLocal(panel, slug);
		if (anyGlobalGraphActive()) showGlobalGraph(panel, slug);
	}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}

/** Renders the local graph in the panel. Only pages and tag pages are nodes; elsewhere it goes. */
export async function showLocalGraph(panel: HTMLElement, slug: string) {
	const { pages } = await fetchData();
	if (!(slug in pages) && !isTagNode(slug)) {
		// Removed rather than hidden: Starlight's lg:sl-block utility would override [hidden].
		// The global graph still opens, since its overlay is moved to <body> first.
		panel.remove();
		return;
	}
	listen(panel, slug);
	renderLocal(panel, slug);
}

/** Opens the full-site graph, or closes it if it is open. */
export function toggleGlobalGraph(panel: HTMLElement, slug: string) {
	listen(panel, slug);
	if (anyGlobalGraphActive()) {
		hideGlobalGraph();
	} else {
		showGlobalGraph(panel, slug);
	}
}
