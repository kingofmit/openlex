import { ComparisonMatrix } from "@allem-law/core";

/** Export a comparison matrix as CSV */
export function comparisonToCSV(matrix: ComparisonMatrix): string {
  const headers = ["State", ...matrix.columns.map((c) => c.label), "Citation", "Source URL"];
  const rows = matrix.rows.map((row) => {
    const values = matrix.columns.map((col) => {
      const val = row.values[col.key];
      if (val === null || val === undefined) return "";
      if (typeof val === "boolean") return val ? "Yes" : "No";
      return String(val);
    });
    return [
      `"${row.jurisdictionName}"`,
      ...values.map((v) => `"${v}"`),
      `"${row.statutes.join("; ")}"`,
      `"${row.sourceUrls.join("; ")}"`,
    ].join(",");
  });
  return [headers.map((h) => `"${h}"`).join(","), ...rows].join("\n");
}

/** Export a comparison matrix as a Markdown table */
export function comparisonToMarkdown(matrix: ComparisonMatrix): string {
  const lines: string[] = [];

  lines.push(`# ${matrix.topicName} — 50-State Comparison`);
  lines.push(`*Generated: ${matrix.generatedAt}*`);
  lines.push("");

  // Summary
  if (Object.keys(matrix.summary.ranges).length > 0) {
    lines.push("## Summary");
    for (const [key, range] of Object.entries(matrix.summary.ranges)) {
      const col = matrix.columns.find((c) => c.key === key);
      const label = col?.label ?? key;
      lines.push(`- **${label}**: min ${range.min}, max ${range.max}, median ${range.median}`);
    }
    lines.push("");
  }

  if (Object.keys(matrix.summary.categoryCounts).length > 0) {
    lines.push("## Distribution");
    for (const [key, count] of Object.entries(matrix.summary.categoryCounts)) {
      lines.push(`- ${key}: ${count} states`);
    }
    lines.push("");
  }

  // Table
  lines.push("## Detailed Comparison");
  lines.push("");

  const colHeaders = ["State", ...matrix.columns.map((c) => c.label)];
  lines.push(`| ${colHeaders.join(" | ")} |`);
  lines.push(`| ${colHeaders.map(() => "---").join(" | ")} |`);

  for (const row of matrix.rows) {
    const vals = matrix.columns.map((col) => {
      const val = row.values[col.key];
      if (val === null || val === undefined) return "—";
      if (typeof val === "boolean") return val ? "Yes" : "No";
      if (col.type === "currency" && typeof val === "number") return `$${val.toLocaleString()}`;
      return String(val);
    });
    lines.push(`| ${row.jurisdictionName} | ${vals.join(" | ")} |`);
  }

  lines.push("");

  // Outliers
  if (matrix.summary.outliers.length > 0) {
    lines.push("## Notable Outliers");
    for (const o of matrix.summary.outliers) {
      lines.push(`- ${o}`);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("*Data sourced from official state legislature websites. Not legal advice.*");

  return lines.join("\n");
}

/** Export a comparison matrix as a LaTeX table (booktabs style) */
export function comparisonToLatex(
  matrix: ComparisonMatrix,
  options?: {
    caption?: string;
    label?: string;
    landscape?: boolean;
    longtable?: boolean;
    highlightColumn?: string;
  },
): string {
  const opts = options ?? {};
  const lines: string[] = [];
  const colCount = matrix.columns.length + 1; // +1 for state name
  const colSpec = `l${"r".repeat(matrix.columns.length)}`;

  if (opts.landscape) {
    lines.push("\\begin{landscape}");
  }

  const tableEnv = opts.longtable ? "longtable" : "tabular";

  if (!opts.longtable) {
    lines.push("\\begin{table}[htbp]");
    lines.push("\\centering");
    if (opts.caption) lines.push(`\\caption{${escapeLatex(opts.caption)}}`);
    if (opts.label) lines.push(`\\label{${opts.label}}`);
  }

  lines.push(`\\begin{${tableEnv}}{${colSpec}}`);

  if (opts.longtable) {
    if (opts.caption) lines.push(`\\caption{${escapeLatex(opts.caption)}} \\\\`);
  }

  lines.push("\\toprule");

  // Header row
  const headers = ["State", ...matrix.columns.map((c) => escapeLatex(c.label))];
  lines.push(`${headers.join(" & ")} \\\\`);
  lines.push("\\midrule");

  if (opts.longtable) {
    lines.push("\\endfirsthead");
    lines.push("\\toprule");
    lines.push(`${headers.join(" & ")} \\\\`);
    lines.push("\\midrule");
    lines.push("\\endhead");
    lines.push("\\midrule");
    lines.push(`\\multicolumn{${colCount}}{r}{\\textit{Continued on next page}} \\\\`);
    lines.push("\\endfoot");
    lines.push("\\bottomrule");
    lines.push("\\endlastfoot");
  }

  // Data rows
  for (const row of matrix.rows) {
    const vals = matrix.columns.map((col) => {
      const val = row.values[col.key];
      if (val === null || val === undefined) return "---";
      if (typeof val === "boolean") return val ? "Yes" : "No";
      if (col.type === "currency" && typeof val === "number") return `\\$${val.toLocaleString()}`;
      const str = escapeLatex(String(val));
      if (opts.highlightColumn === col.key) return `\\textbf{${str}}`;
      return str;
    });
    lines.push(`${escapeLatex(row.jurisdictionName)} & ${vals.join(" & ")} \\\\`);
  }

  if (!opts.longtable) {
    lines.push("\\bottomrule");
  }

  lines.push(`\\end{${tableEnv}}`);

  if (!opts.longtable) {
    lines.push("\\end{table}");
  }

  if (opts.landscape) {
    lines.push("\\end{landscape}");
  }

  return lines.join("\n");
}

function escapeLatex(s: string): string {
  return s
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[&%$#_{}]/g, (m) => `\\${m}`)
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}
