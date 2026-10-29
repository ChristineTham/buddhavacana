import { defineCollection } from 'astro:content';
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { describe, describeMarkdown } from './lib/description';
import { tagKey } from './lib/tags.mjs';

/**
 * Starlight's docs loader, giving pages without a description one made from their text. Drafts, which
 * aren't built, lose their tags, so the tag pages don't list them (starlight-tags doesn't skip drafts).
 */
function withDescriptions(loader: Loader): Loader {
	return {
		...loader,
		load: (context) =>
			loader.load({
				...context,
				store: new Proxy(context.store, {
					get(store, prop) {
						if (prop === 'set') {
							return (entry: Parameters<typeof store.set>[0]) => {
								const data = entry.data.draft ? { ...entry.data, tags: undefined } : entry.data;
								// Markdown pages arrive rendered; MDX pages only as source.
								const text = entry.rendered?.html
									? describe(entry.rendered.html)
									: entry.body
										? describeMarkdown(entry.body)
										: undefined;
								return store.set({
									...entry,
									data:
										data.description || !text
											? data
											: // Flagged so the page doesn't show it as the description box (PageTitle.astro).
												{ ...data, description: text, descriptionGenerated: true },
								});
							};
						}
						const value = Reflect.get(store, prop, store);
						return typeof value === 'function' ? value.bind(store) : value;
					},
				}),
			}),
	};
}

export const collections = {
	docs: defineCollection({
		loader: withDescriptions(docsLoader()),
		schema: docsSchema({
			extend: ({ image }) =>
				z.object({
					// Each spelling of a tag folds to its starlight-tags ID; tags.yml holds the labels.
					tags: z
						.array(z.string())
						.optional()
						.transform((tags) => tags && [...new Set(tags.map(tagKey).filter(Boolean))]),
					hideTags: z.boolean().default(false),
					// Only on a page not written by the site's author, for its SEO metadata (route-data.ts).
					author: z.union([z.string(), z.array(z.string())]).optional(),
					// A longer summary, shown under the description.
					summary: z.string().optional(),
					// Shown under the description (PageTitle.astro) and used as the page's social image.
					cover: z
						.object({
							image: image(), // relative to the page
							alt: z.string(),
							caption: z.string().optional(),
						})
						.optional(),
					// Set by the loader for pages whose description was made from their text (see above).
					descriptionGenerated: z.boolean().optional(),
				}),
		}),
	}),
};
