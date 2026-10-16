// Turns a Kaccāyana citation `{344}` in the Pāḷi Textbook pages into a link to that sutta
// on kaccayana.github.io, so the chapters can stay short and still lead the reader to the
// full rule. The visible text stays `{344}`, the convention chapter 1 explains.
//
// A Sätteri mdast plugin (Astro 7's Markdown processor): the factory form leaves the plugin
// out of every document outside the textbook folder. The sutta numbers are Kaccāyana's own
// (§1–§673); the split chapters on the site keep one page per kaṇḍa, so a number maps to the
// page whose range holds it, with the `#mN` anchor every sutta carries.

const SITE = "https://kaccayana.github.io/kaccayana/";

const RANGES = [
  [1, 51, "1-sandhikappa"],
  [52, 119, "2-namakappa/1-pathamakanda"],
  [120, 160, "2-namakappa/2-dutiyakanda"],
  [161, 210, "2-namakappa/3-tatiyakanda"],
  [211, 246, "2-namakappa/4-catutthakanda"],
  [247, 270, "2-namakappa/5-pancamakanda"],
  [271, 315, "3-karakakappa"],
  [316, 343, "4-samasakappa"],
  [344, 405, "5-taddhitakappa"],
  [406, 431, "6-akhyatakappa/1-pathamakanda"],
  [432, 457, "6-akhyatakappa/2-dutiyakanda"],
  [458, 481, "6-akhyatakappa/3-tatiyakanda"],
  [482, 523, "6-akhyatakappa/4-catutthakanda"],
  [524, 549, "7-kibbidhanakappa/1-pathamakanda"],
  [550, 570, "7-kibbidhanakappa/2-dutiyakanda"],
  [571, 589, "7-kibbidhanakappa/3-tatiyakanda"],
  [590, 606, "7-kibbidhanakappa/4-catutthakanda"],
  [607, 623, "7-kibbidhanakappa/5-pancamakanda"],
  [624, 673, "8-unadikappa"],
];

export function ruleUrl(n) {
  const range = RANGES.find(([lo, hi]) => n >= lo && n <= hi);
  return range ? `${SITE}${range[2]}#m${n}` : null;
}

const CITATION = /\{(\d{1,3})\}/;

const plugin = {
  name: "kaccayana-links",
  text(node, ctx) {
    if (!CITATION.test(node.value)) return;
    const parent = ctx.parent(node);
    if (parent && (parent.type === "link" || parent.type === "linkReference")) return;
    ctx.replaceNode(node, split(node.value));
  },
};

export default function kaccayanaLinks() {
  return (ctx) => {
    const path = ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname) : "";
    return path.includes("Pali Textbook") ? plugin : false;
  };
}

function split(value) {
  const out = [];
  let rest = value;
  for (;;) {
    const m = CITATION.exec(rest);
    if (!m) break;
    const n = Number(m[1]);
    const url = ruleUrl(n);
    if (m.index > 0) out.push({ type: "text", value: rest.slice(0, m.index) });
    out.push(
      url
        ? { type: "link", url, title: `Kaccāyana §${n}`, children: [{ type: "text", value: m[0] }] }
        : { type: "text", value: m[0] },
    );
    rest = rest.slice(m.index + m[0].length);
  }
  if (rest) out.push({ type: "text", value: rest });
  return out;
}
