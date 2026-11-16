import { TopicDataFile, StatuteEntryData } from "./loader";

export interface FreshnessEntry {
  topic: string;
  jurisdiction: string;
  lastVerified: string;
  status: "current" | "stale" | "needs-review";
  daysSinceVerification: number;
}

export interface FreshnessReport {
  generatedAt: string;
  totalEntries: number;
  current: number;
  stale: number;
  needsReview: number;
  byTopic: Record<string, { current: number; stale: number; needsReview: number }>;
  byState: Record<string, { current: number; stale: number; needsReview: number }>;
  entries: FreshnessEntry[];
}

/**
 * Generate a data freshness report across all topic data files.
 * - Current: verified within 6 months
 * - Stale: verified 6-12 months ago
 * - Needs review: verified 12+ months ago or missing date
 */
export function generateFreshnessReport(files: TopicDataFile[]): FreshnessReport {
  const now = new Date();
  const sixMonths = 180;
  const twelveMonths = 365;
  const entries: FreshnessEntry[] = [];
  const byTopic: Record<string, { current: number; stale: number; needsReview: number }> = {};
  const byState: Record<string, { current: number; stale: number; needsReview: number }> = {};

  let current = 0;
  let stale = 0;
  let needsReview = 0;

  for (const file of files) {
    if (!byTopic[file.topic]) byTopic[file.topic] = { current: 0, stale: 0, needsReview: 0 };

    for (const entry of file.entries) {
      const jurisdiction = entry.jurisdiction;
      if (!byState[jurisdiction]) byState[jurisdiction] = { current: 0, stale: 0, needsReview: 0 };

      let status: "current" | "stale" | "needs-review";
      let daysSince: number;

      if (!entry.lastVerified) {
        status = "needs-review";
        daysSince = Infinity;
      } else {
        const verified = new Date(entry.lastVerified);
        daysSince = Math.floor((now.getTime() - verified.getTime()) / (1000 * 60 * 60 * 24));

        if (daysSince <= sixMonths) {
          status = "current";
        } else if (daysSince <= twelveMonths) {
          status = "stale";
        } else {
          status = "needs-review";
        }
      }

      entries.push({ topic: file.topic, jurisdiction, lastVerified: entry.lastVerified, status, daysSinceVerification: daysSince });

      if (status === "current") { current++; byTopic[file.topic].current++; byState[jurisdiction].current++; }
      else if (status === "stale") { stale++; byTopic[file.topic].stale++; byState[jurisdiction].stale++; }
      else { needsReview++; byTopic[file.topic].needsReview++; byState[jurisdiction].needsReview++; }
    }
  }

  return {
    generatedAt: now.toISOString(),
    totalEntries: entries.length,
    current,
    stale,
    needsReview,
    byTopic,
    byState,
    entries,
  };
}
