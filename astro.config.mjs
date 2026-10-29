// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTags from "starlight-tags";
import mermaid from "astro-mermaid";
import plantuml from "astro-plantuml";
import { satteri } from "@astrojs/markdown-satteri";
import kaccayanaLinks from "./src/plugins/remark-kaccayana-links.mjs";
import endingsChart from "./src/plugins/remark-endings-chart.mjs";
import { writeTagsConfig } from "./src/lib/tags.mjs";

// starlight-tags reads its tag definitions (labels for the folded tag IDs) from this file.
writeTagsConfig("./src/content/docs", "./.astro/tags.yml");

// https://astro.build/config
export default defineConfig({
  site: "https://christham.net",
  base: "/buddhavacana/",
  // Fetch pages on hover so navigation is near-instant (with the cross-fade in custom.css).
  prefetch: { prefetchAll: true },
  // PixiJS, for the graph view, is one large chunk, loaded only when the graph is shown.
  vite: { build: { chunkSizeWarningLimit: 1500 } },
  // the chapter 2 sections of the Pāḷi textbook were renumbered on 2026-10-18 (2.2–2.4 merged into 2.2 and 2.3)
  redirects: {
    "/pali-textbook/2-3-vowel-lemmas": "/buddhavacana/pali-textbook/2-2-nouns/",
    "/pali-textbook/2-4-irregular": "/buddhavacana/pali-textbook/2-3-irregular/",
    "/pali-textbook/2-5-pronouns": "/buddhavacana/pali-textbook/2-4-pronouns/",
    "/pali-textbook/2-6-numbers": "/buddhavacana/pali-textbook/2-5-numbers/",
    "/pali-textbook/2-7-upasagga": "/buddhavacana/pali-textbook/2-6-upasagga/",
    "/pali-textbook/2-8-nipata": "/buddhavacana/pali-textbook/2-7-nipata/",
    "/pali-textbook/4-1-ablative": "/buddhavacana/pali-textbook/4-1-apadana/",
    "/pali-textbook/4-2-dative": "/buddhavacana/pali-textbook/4-2-sampadana/",
    "/pali-textbook/4-3-locative": "/buddhavacana/pali-textbook/4-3-okasa/",
    "/pali-textbook/4-4-instrumental": "/buddhavacana/pali-textbook/4-4-karana/",
    "/pali-textbook/4-5-accusative": "/buddhavacana/pali-textbook/4-5-kamma/",
    "/pali-textbook/4-6-agent": "/buddhavacana/pali-textbook/4-6-katta/",
    "/pali-textbook/4-7-genitive": "/buddhavacana/pali-textbook/4-7-sami/",
    "/pali-textbook/4-8-nominative": "/buddhavacana/pali-textbook/4-8-lingattha/",
  },
  markdown: {
    // `{344}` in the Pāḷi Textbook links to Kaccāyana §344 on kaccayana.github.io
    processor: satteri({ mdastPlugins: [kaccayanaLinks(), endingsChart()] }),
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--sl-font",
      weights: [400, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Mono",
      cssVariable: "--sl-font-mono",
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["monospace"],
    },
  ],
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
        // Tag badges, a tag index at /tags/ and a page per tag; labels come from .astro/tags.yml.
        starlightTags({ configPath: ".astro/tags.yml", onInlineTagsNotFound: "error" }),
      ],
      components: {
        // the fonts configured above, reader mode and link popovers
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
        LastUpdated: "./src/components/LastUpdated.astro",
        // Quartz v5's graph view and backlinks (src/components/Graph.astro, Backlinks.astro).
        PageSidebar: "./src/components/PageSidebar.astro",
        Footer: "./src/components/Footer.astro",
        // Reader mode (Quartz v5) and a toggle for each sidebar, beside the theme picker.
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./public/favicon.svg",
      },
      favicon: "/favicon.svg",
      lastUpdated: true,
      // SEO tags (the social image among them) and JSON-LD for each page, from its frontmatter.
      routeMiddleware: "./src/route-data.ts",
    }),
  ],
});
