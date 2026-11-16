import { ComparisonColumn, ComparisonRow, StatuteEntry } from "@allem-law/core";

/** Base interface for topic-specific comparison extractors */
export interface TopicExtractor {
  topic: string;
  topicName: string;
  columns: ComparisonColumn[];
  extract(entry: StatuteEntry): Record<string, string | number | boolean | null>;
}

/** Helpers for extractors */

/** Find a monetary value by type and optional keyword in description */
export function findMonetary(
  entry: StatuteEntry,
  type: string,
  keyword?: string,
): number | null {
  const mv = entry.monetaryValues.find(
    (m) => m.type === type && (!keyword || m.description.toLowerCase().includes(keyword.toLowerCase())),
  );
  return mv?.amount ?? null;
}

/** Find a monetary value description */
export function findMonetaryDesc(
  entry: StatuteEntry,
  type: string,
  keyword?: string,
): string | null {
  const mv = entry.monetaryValues.find(
    (m) => m.type === type && (!keyword || m.description.toLowerCase().includes(keyword.toLowerCase())),
  );
  return mv?.description ?? null;
}

/** Check if keyProvisions contain a keyword (case-insensitive) */
export function hasProvision(entry: StatuteEntry, keyword: string): boolean {
  return entry.keyProvisions.some((p) => p.toLowerCase().includes(keyword.toLowerCase()));
}

/** Extract a numeric value from keyProvisions by regex */
export function extractNumber(entry: StatuteEntry, pattern: RegExp): number | null {
  for (const p of entry.keyProvisions) {
    const m = p.match(pattern);
    if (m) return parseFloat(m[1]);
  }
  return null;
}
