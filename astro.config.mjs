// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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
        "My journey reading and studying Buddhist texts, thoughts on what the Buddha may have meant",
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
      lastUpdated: true,
    }),
  ],
});
