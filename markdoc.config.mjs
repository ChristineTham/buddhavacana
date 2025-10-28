import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  tags: {
    download: {
      render: component("./src/components/Download.astro"),
      attributes: {
        href: { type: String },
        title: { type: String },
        description: { type: String },
      },
    },
  },
  extends: [starlightMarkdoc()],
});
