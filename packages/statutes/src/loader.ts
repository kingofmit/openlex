import { Statute, StatuteEntry } from "@allem-law/core";

/** Raw statute data input — used for loading from data files */
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

/** Raw statute entry data — extended format with sourcing metadata */
export interface StatuteEntryData extends StatuteData {
  sourceUrl: string;
  lastVerified: string;
  sunsetDate?: string;
  supersededBy?: string;
  keyProvisions: string[];
  penalties?: string;
  exceptions?: string;
  monetaryValues?: Array<{
    type: "limit" | "fine" | "fee" | "threshold" | "wage" | "penalty" | "duration";
    amount: number;
    unit: "usd" | "usd-per-hour" | "usd-per-month" | "usd-per-year" | "months" | "years" | "days" | "multiplier" | "ratio" | "ounces" | "grams" | "percent";
    description: string;
  }>;
}

/** Topic data file — one per topic, containing entries for all states */
export interface TopicDataFile {
  topic: string;
  description: string;
  federalBaseline: string | null;
  entries: StatuteEntryData[];
}

/** Load basic statutes from raw data */
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

/** Load extended statute entries from a topic data file */
export function loadStatuteEntries(data: TopicDataFile): StatuteEntry[] {
  return data.entries.map((d, i) => ({
    id: d.id ?? `${data.topic}-${d.jurisdiction}-${i}`,
    jurisdictionId: d.jurisdiction,
    title: d.title,
    code: d.code,
    section: d.section,
    fullCitation: d.citation,
    text: d.text ?? null,
    url: d.url ?? null,
    effectiveDate: d.effectiveDate ?? null,
    topics: d.topics ?? [data.topic],
    sourceUrl: d.sourceUrl,
    lastVerified: d.lastVerified,
    sunsetDate: d.sunsetDate ?? null,
    supersededBy: d.supersededBy ?? null,
    keyProvisions: d.keyProvisions,
    penalties: d.penalties ?? null,
    exceptions: d.exceptions ?? null,
    monetaryValues: d.monetaryValues ?? [],
  }));
}

/** Load all topic data files and return a map of topic → StatuteEntry[] */
export function loadAllTopics(files: TopicDataFile[]): Map<string, StatuteEntry[]> {
  const result = new Map<string, StatuteEntry[]>();
  for (const file of files) {
    result.set(file.topic, loadStatuteEntries(file));
  }
  return result;
}

/** Get entries for a specific state across all loaded topics */
export function getEntriesByState(
  allTopics: Map<string, StatuteEntry[]>,
  stateId: string,
): StatuteEntry[] {
  const result: StatuteEntry[] = [];
  for (const entries of allTopics.values()) {
    result.push(...entries.filter((e) => e.jurisdictionId === stateId));
  }
  return result;
}
