import { Suspense } from "react";
import { ALL_TOPICS, buildComparisonMatrix, loadStatuteEntries } from "@allem-law/statutes";
import { ComparisonMatrix } from "@allem-law/core";
import CompareClient from "./CompareClient";

export const metadata = {
  title: "50-State Comparison | OpenLex",
  description: "Compare how all 50 states handle any legal topic",
};

export default function ComparePage() {
  const matrices: Record<string, ComparisonMatrix> = {};

  for (const topicFile of ALL_TOPICS) {
    const entries = loadStatuteEntries(topicFile);
    const matrix = buildComparisonMatrix(topicFile.topic, entries, undefined, "2026-11-15T00:00:00.000Z");
    matrices[topicFile.topic] = matrix;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">50-State Comparison</h1>
        <p className="text-gray-400 mt-1">
          Compare how all 50 states handle any legal topic. Click column headers to sort.
        </p>
      </div>
      <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
        <CompareClient matricesJson={JSON.stringify(matrices)} />
      </Suspense>
    </div>
  );
}
