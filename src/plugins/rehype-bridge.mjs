// Runs a rehype plugin inside Sätteri, Astro 7's Rust-based Markdown processor, whose own plugins are
// JavaScript visitors rather than unified transformers. A Sätteri hast plugin's `before` hook sees the
// whole document and may replace it, so the bridge copies the document into a plain hast tree, runs
// the rehype transformer over the copy and swaps the copy in. The plugin factory looks at the raw
// source first and leaves every document that does not match `test` alone, so only the pages that
// need the plugin pay for the copy.
//
//   hastPlugins: [rehypeBridge({ name: "katex", test: /\$/, plugin: rehypeKatex })]
//
// The same file is in the kaccayana, buddhavacana and tidipa repos.
import { fileURLToPath } from "node:url";

export function rehypeBridge({ name, test, plugin, options }) {
	const transform = plugin(options);
	return (factory) => {
		if (test && !test.test(factory.source)) return false;
		return {
			name,
			async before(root, ctx) {
				const copy = JSON.parse(JSON.stringify(root));
				// What the transformer may ask of its vfile: the path, the working directory, Astro's
				// frontmatter, and somewhere to report a problem (rehype-katex does, for a bad formula).
				const file = {
					path: ctx.fileURL ? fileURLToPath(ctx.fileURL) : undefined,
					cwd: process.cwd(),
					data: { astro: { frontmatter: ctx.data.astro?.frontmatter ?? {} } },
					messages: [],
					message() {
						return {};
					},
				};
				await transform(copy, file);
				ctx.replaceNode(root, copy);
			},
		};
	};
}
