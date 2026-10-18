// Renders an ```endings fenced block in the Pāḷi Textbook pages as a small horizontal bar chart:
// one bar per reading of a word ending, the bar's length its share. The block keeps the data in
// the Markdown, where it can be edited by hand:
//
//   ```endings
//   -a · 99 in every thousand words · see [2.7](../2-7-nipata/), [2.1](../2-1-sandhi/)
//   a particle or a prefix | 55 | `ca`, `na`, `pana`
//   🚹⨀⓪ | 10 | `mahārāja`, `ānanda`
//   ```
//
// The first line is the title: the ending, then any notes, separated by " · "; a note that
// begins with "see" may hold Markdown links. Each later line is a reading: its label, its
// share (a number, "under 5" or "rare") and its examples, separated by " | ". Backticks in a
// label or example become <code>. The styles are in src/styles/custom.css (.endings).

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (s) => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
const links = (s) => inline(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

function render(value) {
  const lines = value.split("\n").map((l) => l.trim()).filter(Boolean);
  if (!lines.length) return "";
  const [ending, ...notes] = lines[0].split(" · ");
  const caption = [`<code class="endings-ending">${esc(ending.trim())}</code>`]
    .concat(notes.map((n) => `<span class="${n.trim().startsWith("see") ? "endings-see" : "endings-note"}">${links(n.trim())}</span>`))
    .join(" ");
  const rows = lines.slice(1).map((line) => {
    const [label = "", share = "", examples = ""] = line.replace(/\s*\|\s*$/, "").split(/\s*\|\s*/).map((c) => c.trim());
    const n = parseFloat(share);
    const width = Number.isFinite(n) ? Math.max(n, 1.5) : 1.5;
    const text = Number.isFinite(n) ? `${share}%` : esc(share);
    const ex = examples ? `<div class="endings-ex">${inline(examples)}</div>` : "";
    return `<div class="endings-row"><div class="endings-label">${inline(label)}${ex}</div>` +
      `<div class="endings-bar"><span class="endings-fill" style="width:${width}%"></span><span class="endings-pct">${text}</span></div></div>`;
  });
  return `<figure class="endings"><figcaption>${caption}</figcaption>${rows.join("")}</figure>`;
}

const plugin = {
  name: "endings-chart",
  code(node, ctx) {
    if (node.lang !== "endings") return;
    ctx.replaceNode(node, { type: "html", value: render(node.value) });
  },
};

export default function endingsChart() {
  return (ctx) => {
    const path = ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname) : "";
    return path.includes("Pali Textbook") ? plugin : false;
  };
}
