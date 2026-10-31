// Pandoc-style citations, [@Norman1997] or @Norman1997, resolved against bibliography.bib and rendered
// in APA style by rehype-citation, with the bibliography appended to the page under its last heading,
// `## References` (or at a `[^ref]` line). The plugin runs only on the pages whose source contains a
// citation; rehype-bridge.mjs is how a rehype plugin runs inside Sätteri.
//
// The same file is in the kaccayana, buddhavacana and tidipa repos.
import rehypeCitation from "rehype-citation";
import { rehypeBridge } from "./rehype-bridge.mjs";

// A key after `[`, `(` or white space, with or without the `-` that suppresses the author; an email
// address or a handle inside a word does not match.
const CITATION = /(^|[\s(\[])-?@[\p{L}\d_]/u;

export function citations(options = {}) {
	return rehypeBridge({
		name: "citations",
		test: CITATION,
		plugin: rehypeCitation,
		options: { bibliography: "./bibliography.bib", csl: "apa", ...options },
	});
}
