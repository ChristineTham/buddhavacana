// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSiteGraph from "starlight-site-graph";
import mermaid from "astro-mermaid";
import plantuml from "astro-plantuml";

// https://astro.build/config
export default defineConfig({
  site: "https://christham.net",
  base: "/buddhavacana/",
  integrations: [
    mermaid(),
    plantuml(),
    starlight({
      title: "buddhavacana",
      description:
        "The Word of the Buddha, my journey reading and studying Buddhist texts.",
      social: [
        {
          icon: "information",
          label: "About",
          href: "/buddhavacana/about/",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ChristineTham/buddhavacana",
        },
        {
          icon: "external",
          label: "Chris Tham",
          href: "https://christham.net/",
        },
      ],
      plugins: [
        starlightSiteGraph({
          // the plugin derives this path itself without its leading slash (main branch, 2026-10)
          sitemapConfig: {
            contentRoot: "./src/content/docs",
            // draft pages are not built, but the plugin reads every file in the content folder
            // (first matching rule wins, so the exclusions come before the catch-all)
            pageInclusionRules: [
              "!**/Pali/**",
              "!**/Buddha/personality.md",
              "!**/Pali Textbook/4-pbt.md",
              "!**/Sutta/pasarasi.mdx",
              "!**/Sutta/recitation.mdx",
              "!**/Sutta/refuges.md",
              "!**/Sutta/restraining.md",
              "!**/Sutta/template.mdx",
              "**/*",
            ],
            // the pali.txt download is not a page (rules see the slugified link path)
            linkInclusionRules: ["!**/palitxt", "!**/palitxt/**", "**/*"],
          },
        }),
      ],
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/noto-sans-mono/400.css",
        "@fontsource/noto-sans-mono/600.css",
        "@fontsource/noto-sans/400.css",
        "@fontsource/noto-sans/600.css",
      ],
      logo: {
        src: "./public/favicon.svg",
      },
      favicon: "/favicon.svg",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            // The absolute URL of the image to use.
            content:
              "https://christham.net/buddhavacana/featured-background.jpg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            // The absolute URL of the image to use.
            content:
              "https://christham.net/buddhavacana/featured-background.jpg",
          },
        },
      ],
      lastUpdated: true,
    }),
  ],
});
