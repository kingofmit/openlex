import { Statute } from "@openlex/core";

/** Load statutes from a JSON data file */
export function loadStatutes(data: StatuteData[]): Statute[] {
  return data.map((d, i) => ({
    id: d.id ?? `statute-${i}`,
    jurisdictionId: d.jurisdiction,
    title: d.title,
    code: d.code,
    section: d.section,
    fullCitation: d.citation,
    text: d.text ?? null,
    url: d.url ?? null,
    effectiveDate: d.effectiveDate ?? null,
    topics: d.topics ?? [],
  }));
}

export interface StatuteData {
  id?: string;
  jurisdiction: string;
  title: string;
  code: string;
  section: string;
  citation: string;
  text?: string;
  url?: string;
  effectiveDate?: string;
  topics?: string[];
}
