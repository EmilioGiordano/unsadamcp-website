const asideTitles: Record<string, string> = { note: "Nota", tip: "Consejo", caution: "Atención", danger: "Peligro" };

function asideTitle(tag: string): string {
  const title = /title="([^"]*)"/.exec(tag)?.[1];
  const type = /type="([^"]*)"/.exec(tag)?.[1] ?? "note";
  return title ?? asideTitles[type] ?? "Nota";
}

export function mdxToMarkdown(source: string): string {
  const output: string[] = [];
  let inTab = false;
  let inAside = false;

  for (const rawLine of source.split("\n")) {
    if (/^import .*/.test(rawLine)) continue;
    const line = inTab ? rawLine.replace(/^ {1,4}/, "") : rawLine;
    const trimmed = line.trim();

    if (/^<\/?(Tabs|Steps)\b[^>]*>$/.test(trimmed)) continue;
    const tab = /^<TabItem label="([^"]*)">$/.exec(trimmed);
    if (tab) {
      inTab = true;
      output.push("", `#### ${tab[1]}`, "");
      continue;
    }
    if (trimmed === "</TabItem>") {
      inTab = false;
      continue;
    }

    const aside = /^(<Aside\b[^>]*>)(.*?)(<\/Aside>)?$/.exec(trimmed);
    if (aside) {
      output.push(`> **${asideTitle(aside[1])}**`);
      if (aside[2]) output.push(">", `> ${aside[2]}`);
      inAside = !aside[3];
      continue;
    }
    if (inAside) {
      const closing = trimmed.endsWith("</Aside>");
      const text = trimmed.replace(/<\/Aside>$/, "").trim();
      if (text) output.push(">", `> ${text}`);
      inAside = !closing;
      continue;
    }

    output.push(line);
  }

  return output.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
