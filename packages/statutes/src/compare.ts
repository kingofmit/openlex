import { Statute } from "@openlex/core";

export interface StatuteComparison {
  topic: string;
  jurisdictions: Array<{
    jurisdiction: string;
    statutes: Statute[];
    summary: string;
  }>;
}

/** Compare how different states handle the same legal topic */
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
