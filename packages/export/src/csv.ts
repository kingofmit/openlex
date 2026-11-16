import { QueryResult } from "@allem-law/core";

/** Export statutes from query result as CSV */
export function statutesToCSV(result: QueryResult): string {
  const header = "jurisdiction,citation,title,code,section,topics,url";
  const rows = result.authorities.flatMap((auth) =>
    auth.statutes.map((s) =>
      `"${auth.jurisdiction.name}","${s.fullCitation}","${s.title}","${s.code}","${s.section}","${s.topics.join("; ")}","${s.url ?? ""}"`
    ),
  );
  return [header, ...rows].join("\n");
}

/** Export regulations from query result as CSV */
export function regulationsToCSV(result: QueryResult): string {
  const header = "jurisdiction,agency,citation,title,code,section,topics,url";
  const rows = result.authorities.flatMap((auth) =>
    auth.regulations.map((r) =>
      `"${auth.jurisdiction.name}","${r.agency}","${r.fullCitation}","${r.title}","${r.code}","${r.section}","${r.topics.join("; ")}","${r.url ?? ""}"`
    ),
  );
  return [header, ...rows].join("\n");
}
