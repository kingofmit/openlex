"use client";

import { useState, useMemo } from "react";
import { parseCitation, formatCitation, validateCitation } from "@allem-law/statutes";
import type { ParsedCitation, CitationFormat } from "@allem-law/statutes";

const EXAMPLE_CITATIONS = [
  "42 U.S.C. \u00a7 1983",
  "Cal. Civ. Code \u00a7 1950.5",
  "U.S. Const. amend. XIV, \u00a7 1",
  "Pub. L. No. 117-169",
  "Exec. Order No. 14067",
  "29 C.F.R. \u00a7 785.11",
];

const FORMAT_LABELS: Record<CitationFormat, string> = {
  bluebook: "Bluebook",
  alwd: "ALWD",
  "plain-english": "Plain English",
};

export default function CitationsClient() {
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    const trimmed = input.trim();
    if (!trimmed) return null;

    const parsed = parseCitation(trimmed);
    const validation = validateCitation(parsed);
    const formats: Record<CitationFormat, string> = {
      bluebook: formatCitation(parsed, "bluebook"),
      alwd: formatCitation(parsed, "alwd"),
      "plain-english": formatCitation(parsed, "plain-english"),
    };

    return { parsed, validation, formats };
  }, [input]);

  const parsedFields: { label: string; key: keyof ParsedCitation }[] = [
    { label: "Type", key: "type" },
    { label: "Title", key: "title" },
    { label: "Code", key: "code" },
    { label: "Section", key: "section" },
    { label: "Subsection", key: "subsection" },
    { label: "Jurisdiction", key: "jurisdiction" },
    { label: "Volume", key: "volume" },
    { label: "Page", key: "page" },
    { label: "Year", key: "year" },
    { label: "Article", key: "article" },
    { label: "Amendment", key: "amendment" },
    { label: "Parties", key: "parties" },
    { label: "Reporter", key: "reporter" },
  ];

  return (
    <div className="space-y-8">
      {/* Input */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-2">
          Enter a citation
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 42 U.S.C. &#167; 1983"
          className="text-lg"
        />
      </div>

      {/* Example chips */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-[#5a8a8a]">Try:</span>
        {EXAMPLE_CITATIONS.map((cit) => (
          <button
            key={cit}
            onClick={() => setInput(cit)}
            className={`glass px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              input === cit
                ? "!border-[#00e5cc] glow-border text-[#00e5cc]"
                : "text-[#5a8a8a] glass-hover glow-border-hover"
            }`}
          >
            {cit}
          </button>
        ))}
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Validation */}
          <div
            className={`glass rounded-xl p-5 border-l-2 ${
              result.validation.valid
                ? "!border-l-[#22c55e]"
                : "!border-l-[#ef4444]"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`text-sm font-semibold ${
                  result.validation.valid ? "text-[#22c55e]" : "text-[#ef4444]"
                }`}
              >
                {result.validation.valid ? "Valid Citation" : "Invalid Citation"}
              </span>
              <span className={`badge ${result.validation.valid ? "badge-green" : "badge-red"}`}>
                {result.parsed.type}
              </span>
            </div>
            {result.validation.errors.length > 0 && (
              <ul className="text-sm text-[#ef4444]/80 space-y-1 mt-2">
                {result.validation.errors.map((err, i) => (
                  <li key={i}>Error: {err}</li>
                ))}
              </ul>
            )}
            {result.validation.warnings.length > 0 && (
              <ul className="text-sm text-[#f59e0b]/80 space-y-1 mt-2">
                {result.validation.warnings.map((w, i) => (
                  <li key={i}>Warning: {w}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Formatted Outputs */}
          <div className="grid sm:grid-cols-3 gap-4">
            {(Object.entries(result.formats) as [CitationFormat, string][]).map(
              ([fmt, formatted]) => (
                <div
                  key={fmt}
                  className="glass glass-hover glow-border glow-border-hover rounded-xl p-5 transition-all"
                >
                  <div className="text-xs text-[#00e5cc] font-semibold uppercase tracking-widest mb-3">
                    {FORMAT_LABELS[fmt]}
                  </div>
                  <div className="text-[#e0f2f1] font-mono text-sm break-all leading-relaxed">
                    {formatted}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Parsed Components */}
          <div className="glass glow-border rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-4">
              Parsed Components
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
              {parsedFields.map(({ label, key }) => {
                const val = result.parsed[key];
                if (val == null) return null;
                return (
                  <div key={key}>
                    <div className="text-xs text-[#5a8a8a] mb-0.5">{label}</div>
                    <div className="text-sm text-[#e0f2f1] font-mono truncate">
                      {String(val)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Raw JSON */}
          <details className="glass glow-border rounded-xl">
            <summary className="px-5 py-4 text-sm text-[#5a8a8a] cursor-pointer hover:text-[#b0d4d4] transition-colors">
              Raw parsed output (JSON)
            </summary>
            <div className="px-5 pb-5">
              <pre className="text-xs text-[#5a8a8a] overflow-x-auto font-mono leading-relaxed">
                {JSON.stringify(result.parsed, null, 2)}
              </pre>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
