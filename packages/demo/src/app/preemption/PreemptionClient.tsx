"use client";

import { useState, useMemo } from "react";
import { PreemptionDomain, PreemptionRule, PreemptionType } from "@allem-law/core";

interface Props {
  domainsJson: string;
}

const TYPE_BADGE: Record<PreemptionType, string> = {
  floor: "badge-green",
  ceiling: "badge-red",
  field: "badge-amber",
  express: "badge-purple",
  conflict: "badge-red",
};

export default function PreemptionClient({ domainsJson }: Props) {
  const domains: PreemptionDomain[] = useMemo(() => JSON.parse(domainsJson), [domainsJson]);
  const [selectedDomain, setSelectedDomain] = useState(domains[0]?.domain ?? "");

  const domain = domains.find((d) => d.domain === selectedDomain);

  return (
    <div className="space-y-8">
      {/* Domain Selector — Grid of Glass Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {domains.map((d) => (
          <button
            key={d.domain}
            onClick={() => setSelectedDomain(d.domain)}
            className={`glass glass-hover glow-border-hover rounded-xl p-4 text-left transition-all ${
              selectedDomain === d.domain
                ? "!border-[#00e5cc] glow-border"
                : ""
            }`}
          >
            <div className={`text-sm font-medium capitalize ${
              selectedDomain === d.domain ? "text-[#00e5cc]" : "text-[#b0d4d4]"
            }`}>
              {d.domain.replace(/-/g, " ")}
            </div>
            <div className="text-xs text-[#5a8a8a] mt-1">
              {d.rules.length} rule{d.rules.length !== 1 ? "s" : ""}
            </div>
          </button>
        ))}
      </div>

      {/* Domain Content */}
      {domain && (
        <div className="space-y-6">
          {/* Domain Description */}
          <div className="glass glow-border rounded-xl p-5">
            <h2 className="text-lg font-bold text-[#e0f2f1] capitalize">
              {domain.domain.replace(/-/g, " ")}
            </h2>
            <p className="text-sm text-[#b0d4d4] mt-2 leading-relaxed">{domain.description}</p>
          </div>

          {/* Rules */}
          <div className="space-y-4">
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
  const badgeClass = TYPE_BADGE[rule.type];

  return (
    <div className="glass glass-hover glow-border glow-border-hover rounded-xl p-6 space-y-4 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#e0f2f1] text-base">{rule.federalStatute}</h3>
          <p className="text-xs text-[#5a8a8a] font-mono mt-1">{rule.federalCitation}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className={`badge ${badgeClass} capitalize`}>{rule.type}</span>
          <span className={`badge ${rule.stateCanExceed ? "badge-green" : "badge-red"}`}>
            {rule.stateCanExceed ? "States Can Exceed" : "States Cannot Exceed"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#b0d4d4] leading-relaxed">{rule.description}</p>

      {/* Scope */}
      <div>
        <span className="text-xs text-[#5a8a8a]">Scope: </span>
        <span className="text-xs text-[#b0d4d4]">{rule.scope}</span>
      </div>

      {/* Key Case */}
      {rule.keyCase && (
        <div className="glass rounded-lg px-4 py-3 flex items-start gap-2.5">
          <svg
            className="shrink-0 mt-0.5"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00e5cc"
            strokeWidth="2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <span className="text-xs text-[#b0d4d4] italic leading-relaxed">{rule.keyCase}</span>
        </div>
      )}

      {/* Affected Topics */}
      {rule.affectedTopics.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-[#5a8a8a]">Topics:</span>
          {rule.affectedTopics.map((t) => (
            <span key={t} className="badge badge-cyan">
              {t.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      )}

      {/* Exceptions */}
      {rule.exceptions.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-[#5a8a8a] uppercase tracking-widest mb-2">
            Exceptions
          </h4>
          <ul className="space-y-1">
            {rule.exceptions.map((ex, i) => (
              <li key={i} className="text-xs text-[#f59e0b] flex items-start gap-2">
                <span className="shrink-0 mt-0.5">&#x2022;</span>
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
            className="source-link flex items-center gap-1"
          >
            View Source <span>&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
