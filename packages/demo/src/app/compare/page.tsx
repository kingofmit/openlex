import { Suspense } from "react";
import { ALL_TOPICS, buildComparisonMatrix, loadStatuteEntries } from "@openlex/statutes";
import { ComparisonMatrix } from "@openlex/core";
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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e0f2f1] glow-text">50-State Comparison</h1>
        <p className="text-[#5a8a8a] mt-2">
          Compare how all 50 states handle any legal topic. Click column headers to sort.
        </p>
      </div>
      <div className="gradient-line" />
      <Suspense
        fallback={
          <div className="glass glow-border rounded-xl p-12 text-center text-[#5a8a8a]">
            Loading comparison data...
          </div>
        }
      >
        <CompareClient matricesJson={JSON.stringify(matrices)} />
      </Suspense>
    </div>
  );
}
