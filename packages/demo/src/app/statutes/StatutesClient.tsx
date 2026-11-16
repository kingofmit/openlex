"use client";

import { useState, useMemo } from "react";
import { StatuteEntry, MonetaryValue } from "@openlex/core";

interface TopicEntries {
  topic: string;
  description: string;
  entries: StatuteEntry[];
}

interface Props {
  topicsJson: string;
  statesJson: string;
}

export default function StatutesClient({ topicsJson, statesJson }: Props) {
  const topics: TopicEntries[] = useMemo(() => JSON.parse(topicsJson), [topicsJson]);
  const states: [string, string][] = useMemo(() => JSON.parse(statesJson), [statesJson]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const matchingEntries = useMemo(() => {
    if (!selectedState) return [];
    return topics
      .filter((t) => !selectedTopic || t.topic === selectedTopic)
      .flatMap((t) =>
        t.entries
          .filter((e) => e.jurisdictionId === selectedState)
          .map((e) => ({ ...e, topicName: t.description })),
      );
  }, [topics, selectedState, selectedTopic]);

  const formatUnit = (unit: string) => {
    const map: Record<string, string> = {
      usd: "USD",
      "usd-per-hour": "/hr",
      "usd-per-month": "/mo",
      "usd-per-year": "/yr",
      months: "months",
      years: "years",
      days: "days",
      multiplier: "x",
      ratio: "",
      ounces: "oz",
      grams: "g",
      percent: "%",
    };
    return map[unit] ?? unit;
  };

  return (
    <div className="space-y-6">
      {/* Selectors */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-400 mb-1">State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-teal-500"
          >
            <option value="">Select a state...</option>
            {states.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-400 mb-1">Topic (optional)</label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-teal-500"
          >
            <option value="">All topics</option>
            {topics.map((t) => (
              <option key={t.topic} value={t.topic}>
                {t.description.split(",")[0].split(" — ")[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      {!selectedState ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3 text-gray-700">&#167;</div>
          <p className="text-gray-400">Select a state to view its statutes.</p>
        </div>
      ) : matchingEntries.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <p className="text-gray-400">No statutes found for this selection.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            {matchingEntries.length} statute{matchingEntries.length !== 1 ? "s" : ""} found
          </p>
          {matchingEntries.map((entry, i) => (
            <StatuteCard key={entry.id ?? i} entry={entry} formatUnit={formatUnit} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatuteCard({
  entry,
  formatUnit,
}: {
  entry: StatuteEntry & { topicName: string };
  formatUnit: (unit: string) => string;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
      {/* Header */}
      <div>
        <div className="text-xs text-teal-400 font-medium uppercase tracking-wide mb-1">
          {entry.topicName.split(",")[0].split(" — ")[0]}
        </div>
        <h3 className="text-lg font-bold text-gray-100">{entry.fullCitation}</h3>
        <p className="text-sm text-gray-400 mt-0.5">{entry.title}</p>
      </div>

      {/* Key Provisions */}
      {entry.keyProvisions.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1.5">Key Provisions</h4>
          <ul className="space-y-1">
            {entry.keyProvisions.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-teal-400 mt-0.5 shrink-0">&bull;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Penalties */}
      {entry.penalties && (
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Penalties</h4>
          <p className="text-sm text-red-400/80 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
            {entry.penalties}
          </p>
        </div>
      )}

      {/* Exceptions */}
      {entry.exceptions && (
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Exceptions</h4>
          <p className="text-sm text-amber-400/80 bg-amber-500/5 border border-amber-500/10 rounded-lg px-3 py-2">
            {entry.exceptions}
          </p>
        </div>
      )}

      {/* Monetary Values */}
      {entry.monetaryValues.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1.5">Monetary Values</h4>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="px-3 py-1.5 text-left text-gray-500 text-xs font-medium">Type</th>
                  <th className="px-3 py-1.5 text-right text-gray-500 text-xs font-medium">Amount</th>
                  <th className="px-3 py-1.5 text-left text-gray-500 text-xs font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {entry.monetaryValues.map((mv: MonetaryValue, j: number) => (
                  <tr key={j} className="border-t border-gray-800/50">
                    <td className="px-3 py-1.5 text-gray-400 capitalize">{mv.type}</td>
                    <td className="px-3 py-1.5 text-right text-teal-400 font-mono">
                      {mv.unit.startsWith("usd")
                        ? `$${mv.amount.toLocaleString()}`
                        : mv.unit === "percent"
                          ? `${mv.amount}%`
                          : mv.amount.toLocaleString()}
                      <span className="text-gray-500 ml-1 text-xs">{formatUnit(mv.unit)}</span>
                    </td>
                    <td className="px-3 py-1.5 text-gray-400">{mv.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-800 text-xs text-gray-500">
        {entry.sourceUrl && (
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400/70 hover:text-teal-400 underline"
          >
            Official Source
          </a>
        )}
        {entry.effectiveDate && <span>Effective: {entry.effectiveDate}</span>}
        {entry.lastVerified && <span>Verified: {entry.lastVerified}</span>}
      </div>
    </div>
  );
}
