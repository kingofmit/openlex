import { QueryResult } from "@allem-law/core";

/** Generate a LaTeX table from query results (booktabs style) */
export function queryToLatex(
  result: QueryResult,
  options?: {
    caption?: string;
    label?: string;
    longtable?: boolean;
  },
): string {
  const opts = options ?? {};
  const lines: string[] = [];

  lines.push("% Requires: \\usepackage{booktabs}");
  if (opts.longtable) lines.push("% Requires: \\usepackage{longtable}");
  lines.push("");

  const tableEnv = opts.longtable ? "longtable" : "tabular";

  if (!opts.longtable) {
    lines.push("\\begin{table}[htbp]");
    lines.push("\\centering");
    if (opts.caption) lines.push(`\\caption{${escapeLatex(opts.caption)}}`);
    if (opts.label) lines.push(`\\label{${opts.label}}`);
  }

  lines.push(`\\begin{${tableEnv}}{llll}`);

  if (opts.longtable && opts.caption) {
    lines.push(`\\caption{${escapeLatex(opts.caption)}} \\\\`);
  }

  lines.push("\\toprule");
  lines.push("Jurisdiction & Citation & Title & Topics \\\\");
  lines.push("\\midrule");

  if (opts.longtable) {
    lines.push("\\endfirsthead");
    lines.push("\\toprule");
    lines.push("Jurisdiction & Citation & Title & Topics \\\\");
    lines.push("\\midrule");
    lines.push("\\endhead");
  }

  for (const auth of result.authorities) {
    for (const s of auth.statutes) {
      lines.push(
        `${escapeLatex(auth.jurisdiction.name)} & ${escapeLatex(s.fullCitation)} & ${escapeLatex(s.title)} & ${escapeLatex(s.topics.join(", "))} \\\\`,
      );
    }
  }

  if (!opts.longtable) lines.push("\\bottomrule");
  lines.push(`\\end{${tableEnv}}`);

  if (!opts.longtable) lines.push("\\end{table}");

  return lines.join("\n");
}

function escapeLatex(s: string): string {
  return s
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[&%$#_{}]/g, (m) => `\\${m}`)
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}
