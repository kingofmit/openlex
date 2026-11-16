import { Regulation } from "@allem-law/core";

/** Load regulations from data */
export function loadRegulations(data: RegulationData[]): Regulation[] {
  return data.map((d, i) => ({
    id: d.id ?? `reg-${i}`,
    jurisdictionId: d.jurisdiction,
    agency: d.agency,
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

export interface RegulationData {
  id?: string;
  jurisdiction: string;
  agency: string;
  title: string;
  code: string;
  section: string;
  citation: string;
  text?: string;
  url?: string;
  effectiveDate?: string;
  topics?: string[];
}
