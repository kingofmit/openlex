"use client";

import { useState, useMemo } from "react";
import { PreemptionDomain, PreemptionRule, PreemptionType } from "@openlex/core";

interface Props {
  domainsJson: string;
}

const TYPE_COLORS: Record<PreemptionType, { bg: string; text: string; border: string }> = {
  floor: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  ceiling: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  field: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  express: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  conflict: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
};

export default function PreemptionClient({ domainsJson }: Props) {
  const domains: PreemptionDomain[] = useMemo(() => JSON.parse(domainsJson), [domainsJson]);
  const [selectedDomain, setSelectedDomain] = useState(domains[0]?.domain ?? "");

  const domain = domains.find((d) => d.domain === selectedDomain);

  return (
    <div className="space-y-6">
      {/* Domain Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {domains.map((d) => (
          <button
            key={d.domain}
            onClick={() => setSelectedDomain(d.domain)}
            className={`rounded-xl p-3 text-left transition-colors border ${
              selectedDomain === d.domain
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
            }`}
          >
            <div className="text-sm font-medium capitalize">{d.domain.replace(/-/g, " ")}</div>
            <div className="text-xs text-gray-500 mt-0.5">{d.rules.length} rules</div>
          </button>
        ))}
      </div>

      {/* Domain Content */}
      {domain && (
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <h2 className="text-lg font-bold text-gray-100 capitalize">
              {domain.domain.replace(/-/g, " ")}
            </h2>
            <p className="text-sm text-gray-400 mt-1">{domain.description}</p>
          </div>

          {/* Rules */}
          <div className="space-y-3">
            {domain.rules.map((rule) => (
              <RuleCard key={rule.id} rule={rule} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RuleCard({ rule }: { rule: PreemptionRule }) {
  const colors = TYPE_COLORS[rule.type];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
      {/* Header */}
      <div className="flex flex-wrap items-start gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-100">{rule.federalStatute}</h3>
          <p className="text-xs text-gray-500 font-mono mt-0.5">{rule.federalCitation}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium capitalize ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {rule.type}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
              rule.stateCanExceed
                ? "bg-green-500/10 text-green-400 border-green-500/20"
                : "bg-red-500/10 text-red-400 border-red-500/20"
            }`}
          >
            {rule.stateCanExceed ? "States Can Exceed" : "States Cannot Exceed"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400">{rule.description}</p>

      {/* Scope */}
      <div>
        <span className="text-xs text-gray-500">Scope: </span>
        <span className="text-xs text-gray-300">{rule.scope}</span>
      </div>

      {/* Key Case */}
      {rule.keyCase && (
        <div className="bg-gray-800/50 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-500">Key Case: </span>
          <span className="text-xs text-gray-300 italic">{rule.keyCase}</span>
        </div>
      )}

      {/* Affected Topics */}
      {rule.affectedTopics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs text-gray-500 self-center">Topics:</span>
          {rule.affectedTopics.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
            >
              {t.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      )}

      {/* Exceptions */}
      {rule.exceptions.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-1">Exceptions</h4>
          <ul className="space-y-0.5">
            {rule.exceptions.map((ex, i) => (
              <li key={i} className="text-xs text-amber-400/70 flex items-start gap-1.5">
                <span className="text-amber-400 mt-0.5 shrink-0">&bull;</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Source link */}
      {rule.sourceUrl && (
        <div className="pt-1">
          <a
            href={rule.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-red-400/70 hover:text-red-400 underline"
          >
            View Source &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
