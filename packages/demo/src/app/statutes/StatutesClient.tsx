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
    <div className="space-y-8">
      {/* Selectors */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-2">
            State
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full"
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
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-2">
            Topic (optional)
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full"
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
        <div className="glass glow-border rounded-xl p-16 text-center">
          <svg
            className="mx-auto mb-4 opacity-30"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00e5cc"
            strokeWidth="1.5"
          >
            <path d="M12 3c-1.5 0-3 .5-3 2v2H5c-1 0-2 .5-2 1.5S4 10 5 10h1v8c0 1 1 3 6 3s6-2 6-3v-8h1c1 0 2-.5 2-1.5S20 7 19 7h-4V5c0-1.5-1.5-2-3-2z" />
            <line x1="12" y1="3" x2="12" y2="8" />
            <line x1="8" y1="13" x2="8" y2="17" />
            <line x1="16" y1="13" x2="16" y2="17" />
          </svg>
          <p className="text-[#5a8a8a] text-lg">Select a state to view its statutes.</p>
        </div>
      ) : matchingEntries.length === 0 ? (
        <div className="glass glow-border rounded-xl p-12 text-center">
          <p className="text-[#5a8a8a]">No statutes found for this selection.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-sm text-[#5a8a8a]">
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
    <div className="glass glass-hover glow-border glow-border-hover rounded-xl p-6 space-y-5 transition-all">
      {/* Header */}
      <div>
        <div className="text-xs text-[#5a8a8a] font-medium uppercase tracking-wide mb-1">
          {entry.topicName.split(",")[0].split(" — ")[0]}
        </div>
        <h3 className="text-lg font-bold font-mono text-[#00e5cc]">{entry.fullCitation}</h3>
        <p className="text-sm text-[#b0d4d4] mt-1">{entry.title}</p>
      </div>

      {/* Key Provisions */}
      {entry.keyProvisions.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e0f2f1] mb-2">
            Key Provisions
          </h4>
          <ul className="space-y-1.5">
            {entry.keyProvisions.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#b0d4d4]">
                <span className="text-[#00e5cc] mt-0.5 shrink-0 text-xs">&#x25CF;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Penalties */}
      {entry.penalties && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e0f2f1] mb-2">
            Penalties
          </h4>
          <div className="rounded-lg px-4 py-3 text-sm text-[#ef4444] bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)]">
            {entry.penalties}
          </div>
        </div>
      )}

      {/* Exceptions */}
      {entry.exceptions && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e0f2f1] mb-2">
            Exceptions
          </h4>
          <div className="rounded-lg px-4 py-3 text-sm text-[#f59e0b] bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)]">
            {entry.exceptions}
          </div>
        </div>
      )}

      {/* Monetary Values */}
      {entry.monetaryValues.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e0f2f1] mb-2">
            Monetary Values
          </h4>
          <div className="rounded-lg overflow-hidden border border-[rgba(0,229,204,0.12)]">
            <table className="lex-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th className="text-right">Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {entry.monetaryValues.map((mv: MonetaryValue, j: number) => (
                  <tr key={j}>
                    <td className="capitalize">{mv.type}</td>
                    <td className="text-right text-[#00e5cc] font-mono">
                      {mv.unit.startsWith("usd")
                        ? `$${mv.amount.toLocaleString()}`
                        : mv.unit === "percent"
                          ? `${mv.amount}%`
                          : mv.amount.toLocaleString()}
                      <span className="text-[#5a8a8a] ml-1 text-xs">{formatUnit(mv.unit)}</span>
                    </td>
                    <td>{mv.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="gradient-line" />
      <div className="flex flex-wrap items-center gap-4 text-xs text-[#5a8a8a]">
        {entry.sourceUrl && (
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="source-link flex items-center gap-1"
          >
            Official Source <span>&rarr;</span>
          </a>
        )}
        {entry.effectiveDate && <span>Effective: {entry.effectiveDate}</span>}
        {entry.lastVerified && <span>Verified: {entry.lastVerified}</span>}
      </div>
    </div>
  );
}
