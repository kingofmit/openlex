import { QueryResult } from "@openlex/core";

/** Export query result as a legal research memo in Markdown */
export function toMarkdown(result: QueryResult): string {
  const lines: string[] = [];
  lines.push(`# Legal Authority Report`);
  lines.push(`**Topic:** ${result.query.topic}`);
  if (result.query.state) lines.push(`**Jurisdiction:** ${result.query.state}`);
  lines.push(`**Generated:** ${new Date(result.timestamp).toISOString()}`);
  lines.push("");

  for (const auth of result.authorities) {
    lines.push(`## ${auth.jurisdiction.name}`);
    lines.push("");

    if (auth.statutes.length > 0) {
      lines.push("### Statutes");
      for (const s of auth.statutes) {
        lines.push(`- **${s.fullCitation}** — ${s.title}`);
        if (s.url) lines.push(`  - [Source](${s.url})`);
      }
      lines.push("");
    }

    if (auth.regulations.length > 0) {
      lines.push("### Regulations");
      for (const r of auth.regulations) {
        lines.push(`- **${r.fullCitation}** — ${r.title} (${r.agency})`);
        if (r.url) lines.push(`  - [Source](${r.url})`);
      }
      lines.push("");
    }

    if (auth.governingBodies.length > 0) {
      lines.push("### Governing Bodies");
      for (const b of auth.governingBodies) {
        lines.push(`- **${b.name}** (${b.abbreviation ?? b.type})${b.url ? ` — [Website](${b.url})` : ""}`);
      }
      lines.push("");
    }

    if (auth.courts.length > 0) {
      lines.push("### Courts");
      for (const c of auth.courts) {
        lines.push(`- ${c.name} (${c.abbreviation}) — ${c.level}`);
      }
      lines.push("");
    }
  }

  lines.push("---");
  lines.push(`*${result.disclaimer}*`);
  return lines.join("\n");
}
