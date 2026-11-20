import { plantumlAssetName } from "../lib/plantuml.mjs";

export function plantumlFences({ base }) {
  if (!base.startsWith("/") || !base.endsWith("/")) {
    throw new Error("PlantUML base must start and end with /");
  }

  return {
    name: "plantuml-fences",
    code(node) {
      if (node.lang !== "plantuml") return;

      const source = node.value;
      const image = (variant) =>
        `${base}plantuml/${plantumlAssetName(source, variant)}`;

      return {
        type: "html",
        value: `<figure class="plantuml-diagram"><img class="plantuml-light" src="${image("light")}" alt="PlantUML diagram" loading="lazy"><img class="plantuml-dark" src="${image("dark")}" alt="PlantUML diagram" loading="lazy"></figure>`,
      };
    },
  };
}
