"use client";

import { useState, useMemo } from "react";
import { parseCitation, formatCitation, validateCitation } from "@openlex/statutes";
import type { ParsedCitation, CitationFormat } from "@openlex/statutes";

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
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Enter a citation</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 42 U.S.C. &sect; 1983"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 text-lg font-mono focus:outline-none focus:border-amber-500 placeholder:text-gray-600"
        />
      </div>

      {/* Example chips */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-gray-500 self-center">Try:</span>
        {EXAMPLE_CITATIONS.map((cit) => (
          <button
            key={cit}
            onClick={() => setInput(cit)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
              input === cit
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
            }`}
          >
            {cit}
          </button>
        ))}
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Validation */}
          <div
            className={`rounded-xl border p-4 ${
              result.validation.valid
                ? "bg-green-500/5 border-green-500/20"
                : "bg-red-500/5 border-red-500/20"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-sm font-semibold ${
                  result.validation.valid ? "text-green-400" : "text-red-400"
                }`}
              >
                {result.validation.valid ? "Valid Citation" : "Invalid Citation"}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${
                  result.validation.valid
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                {result.parsed.type}
              </span>
            </div>
            {result.validation.errors.length > 0 && (
              <ul className="text-sm text-red-400/80 space-y-1">
                {result.validation.errors.map((err, i) => (
                  <li key={i}>Error: {err}</li>
                ))}
              </ul>
            )}
            {result.validation.warnings.length > 0 && (
              <ul className="text-sm text-amber-400/80 space-y-1">
                {result.validation.warnings.map((w, i) => (
                  <li key={i}>Warning: {w}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Formatted Outputs */}
          <div className="grid sm:grid-cols-3 gap-3">
            {(Object.entries(result.formats) as [CitationFormat, string][]).map(
              ([fmt, formatted]) => (
                <div
                  key={fmt}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4"
                >
                  <div className="text-xs text-amber-400 font-medium uppercase tracking-wide mb-2">
                    {FORMAT_LABELS[fmt]}
                  </div>
                  <div className="text-gray-100 font-mono text-sm break-all">{formatted}</div>
                </div>
              ),
            )}
          </div>

          {/* Parsed Fields */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Parsed Components</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
              {parsedFields.map(({ label, key }) => {
                const val = result.parsed[key];
                if (val == null) return null;
                return (
                  <div key={key}>
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-sm text-gray-200 font-mono truncate">
                      {String(val)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Raw JSON */}
          <details className="bg-gray-900 border border-gray-800 rounded-xl">
            <summary className="px-4 py-3 text-sm text-gray-400 cursor-pointer hover:text-gray-200">
              Raw parsed output (JSON)
            </summary>
            <pre className="px-4 pb-4 text-xs text-gray-500 overflow-x-auto font-mono">
              {JSON.stringify(result.parsed, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
