// Mermaid diagrams, build side: a ```mermaid fence becomes <pre class="mermaid"> holding the diagram's
// source, which src/components/Mermaid.astro renders in the browser. A Sätteri mdast plugin, so it runs
// on .md and .mdx pages alike; the fence is replaced by a raw html node, which neither the syntax
// highlighter nor Expressive Code claims, and whose text reaches the browser verbatim (Sätteri's
// `rawHtml` would escape the braces of `B{Decision}` for MDX).
//
// The same file is in the kaccayana, buddhavacana and tidipa repos.

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

const escape = (text) => text.replace(/[&<>"']/g, (character) => ESCAPES[character]);

export function mermaidFences() {
	return {
		name: "mermaid",
		code(node) {
			if (node.lang !== "mermaid") return;
			return { type: "html", value: `<pre class="mermaid">${escape(node.value)}</pre>` };
		},
	};
}
