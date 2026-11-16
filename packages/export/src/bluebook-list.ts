import { StatuteEntry } from "@openlex/core";

export interface BluebookListOptions {
  groupBy?: "jurisdiction" | "topic";
  includeUrls?: boolean;
  includeEffectiveDate?: boolean;
  title?: string;
}

/** Generate a Bluebook-formatted citation list */
export function toBluebookList(
  statutes: StatuteEntry[],
  options?: BluebookListOptions,
): string {
  const opts = options ?? {};
  const lines: string[] = [];

  if (opts.title) {
    lines.push(opts.title);
    lines.push("=".repeat(opts.title.length));
    lines.push("");
  }

  const groupKey = opts.groupBy ?? "jurisdiction";

  const groups = new Map<string, StatuteEntry[]>();
  for (const s of statutes) {
    const key = groupKey === "jurisdiction"
      ? s.jurisdictionId
      : s.topics[0] ?? "uncategorized";
    const list = groups.get(key) ?? [];
    list.push(s);
    groups.set(key, list);
  }

  const sortedGroups = [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));

  for (const [group, entries] of sortedGroups) {
    lines.push(`## ${group.toUpperCase()}`);
    lines.push("");

    for (const entry of entries) {
      let citation = entry.fullCitation;

      if (opts.includeEffectiveDate && entry.effectiveDate) {
        citation += ` (effective ${entry.effectiveDate})`;
      }

      lines.push(`  ${citation}`);

      if (opts.includeUrls && entry.sourceUrl) {
        lines.push(`    Available at ${entry.sourceUrl}`);
      }
    }

    lines.push("");
  }

  return lines.join("\n");
}

/** Generate a LaTeX-formatted Bluebook citation list */
export function toBluebookListLatex(
  statutes: StatuteEntry[],
  options?: BluebookListOptions,
): string {
  const opts = options ?? {};
  const lines: string[] = [];

  if (opts.title) {
    lines.push(`\\section*{${escapeLatex(opts.title)}}`);
    lines.push("");
  }

  lines.push("\\begin{enumerate}");

  const sorted = [...statutes].sort((a, b) =>
    a.jurisdictionId.localeCompare(b.jurisdictionId),
  );

  for (const entry of sorted) {
    let citation = escapeLatex(entry.fullCitation);

    if (opts.includeEffectiveDate && entry.effectiveDate) {
      citation += ` (effective ${entry.effectiveDate})`;
    }

    if (opts.includeUrls && entry.sourceUrl) {
      citation += `, \\textit{available at} \\url{${entry.sourceUrl}}`;
    }

    lines.push(`  \\item ${citation}`);
  }

  lines.push("\\end{enumerate}");

  return lines.join("\n");
}

function escapeLatex(s: string): string {
  return s
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[&%$#_{}]/g, (m) => `\\${m}`)
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}
