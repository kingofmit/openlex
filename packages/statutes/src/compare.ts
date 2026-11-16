import { Statute, StatuteEntry, ComparisonMatrix, ComparisonRow, ComparisonSummary } from "@openlex/core";
import { TopicExtractor } from "./comparisons/extractor";
import { ALL_EXTRACTORS } from "./comparisons";
import { JURISDICTIONS } from "./jurisdiction-names";

/** Legacy comparison interface — kept for backward compatibility */
export interface StatuteComparison {
  topic: string;
  jurisdictions: Array<{
    jurisdiction: string;
    statutes: Statute[];
    summary: string;
  }>;
}

/** Legacy: Compare how different states handle the same legal topic */
export function compareStatutes(
  topic: string,
  statutes: Map<string, Statute[]>,
): StatuteComparison {
  const jurisdictions = Array.from(statutes.entries()).map(([jId, stats]) => ({
    jurisdiction: jId,
    statutes: stats,
    summary: stats.map((s) => s.fullCitation).join("; "),
  }));

  return { topic, jurisdictions };
}

/**
 * Build a structured comparison matrix for a topic across multiple states.
 * This is the primary comparison API — produces sortable, exportable data.
 */
export function buildComparisonMatrix(
  topic: string,
  entries: StatuteEntry[],
  extractor?: TopicExtractor,
  generatedAt?: string,
): ComparisonMatrix {
  const ext = extractor ?? ALL_EXTRACTORS.get(topic);
  if (!ext) {
    throw new Error(`No extractor found for topic "${topic}". Available: ${Array.from(ALL_EXTRACTORS.keys()).join(", ")}`);
  }

  const rows: ComparisonRow[] = entries.map((entry) => {
    const values = ext.extract(entry);
    return {
      jurisdictionId: entry.jurisdictionId,
      jurisdictionName: JURISDICTIONS[entry.jurisdictionId] ?? entry.jurisdictionId.toUpperCase(),
      values,
      statutes: [entry.fullCitation],
      sourceUrls: [entry.sourceUrl],
      notes: entry.exceptions,
    };
  });

  // Sort by state name
  rows.sort((a, b) => a.jurisdictionName.localeCompare(b.jurisdictionName));

  const summary = computeSummary(rows, ext);

  return {
    topic: ext.topic,
    topicName: ext.topicName,
    generatedAt: generatedAt ?? new Date().toISOString(),
    columns: ext.columns,
    rows,
    summary,
  };
}

/**
 * Build a comparison matrix from pre-loaded topic data.
 * Convenience wrapper that loads from TopicDataFile entries.
 */
export function compareTopicAcrossStates(
  topic: string,
  entries: StatuteEntry[],
  states?: string[],
): ComparisonMatrix {
  const filtered = states
    ? entries.filter((e) => states.includes(e.jurisdictionId))
    : entries;
  return buildComparisonMatrix(topic, filtered);
}

function computeSummary(rows: ComparisonRow[], ext: TopicExtractor): ComparisonSummary {
  const categoryCounts: Record<string, number> = {};
  const numericColumns = ext.columns.filter((c) => c.type === "number" || c.type === "currency");
  const numericValues: Record<string, number[]> = {};
  const outliers: string[] = [];

  for (const col of numericColumns) {
    numericValues[col.key] = [];
  }

  // Count enum/boolean categories and collect numeric values
  for (const row of rows) {
    for (const col of ext.columns) {
      const val = row.values[col.key];
      if (col.type === "enum" || col.type === "boolean") {
        const key = `${col.key}:${String(val)}`;
        categoryCounts[key] = (categoryCounts[key] ?? 0) + 1;
      }
      if ((col.type === "number" || col.type === "currency") && typeof val === "number" && !isNaN(val)) {
        numericValues[col.key].push(val);
      }
    }
  }

  // Compute ranges with min, max, median
  const ranges: Record<string, { min: number; max: number; median: number }> = {};
  for (const [key, vals] of Object.entries(numericValues)) {
    if (vals.length === 0) continue;
    const sorted = [...vals].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    ranges[key] = { min, max, median };

    // Find outliers (beyond 2x median or less than 0.25x median)
    for (const row of rows) {
      const val = row.values[key];
      if (typeof val === "number" && (val > median * 3 || (median > 0 && val < median * 0.25))) {
        outliers.push(`${row.jurisdictionName}: ${key}=${val} (median=${median})`);
      }
    }
  }

  return {
    totalStates: rows.length,
    categoryCounts,
    ranges,
    outliers: [...new Set(outliers)],
  };
}
