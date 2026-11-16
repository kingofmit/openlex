"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ComparisonMatrix, ComparisonColumn } from "@allem-law/core";

interface Props {
  matricesJson: string;
}

export default function CompareClient({ matricesJson }: Props) {
  const matrices: Record<string, ComparisonMatrix> = useMemo(
    () => JSON.parse(matricesJson),
    [matricesJson],
  );

  const searchParams = useSearchParams();
  const topicIds = Object.keys(matrices);
  const initialTopic = searchParams.get("topic") ?? topicIds[0] ?? "";

  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const matrix = matrices[selectedTopic];

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc((prev) => !prev);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortedRows = useMemo(() => {
    if (!matrix) return [];
    const rows = [...matrix.rows];
    if (!sortKey) return rows;

    rows.sort((a, b) => {
      if (sortKey === "state") {
        return sortAsc
          ? a.jurisdictionName.localeCompare(b.jurisdictionName)
          : b.jurisdictionName.localeCompare(a.jurisdictionName);
      }
      const va = a.values[sortKey];
      const vb = b.values[sortKey];
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === "number" && typeof vb === "number") {
        return sortAsc ? va - vb : vb - va;
      }
      if (typeof va === "boolean" && typeof vb === "boolean") {
        return sortAsc ? (va === vb ? 0 : va ? -1 : 1) : (va === vb ? 0 : va ? 1 : -1);
      }
      const sa = String(va);
      const sb = String(vb);
      return sortAsc ? sa.localeCompare(sb) : sb.localeCompare(sa);
    });
    return rows;
  }, [matrix, sortKey, sortAsc]);

  if (!matrix) {
    return (
      <div className="glass glow-border rounded-xl p-12 text-center text-[#5a8a8a]">
        No data available.
      </div>
    );
  }

  const { summary } = matrix;

  const formatValue = (val: string | number | boolean | null, col: ComparisonColumn) => {
    if (val == null) return <span className="text-[#5a8a8a]/50">N/A</span>;
    if (col.type === "boolean") {
      return val ? (
        <span className="badge badge-green">Yes</span>
      ) : (
        <span className="badge badge-red">No</span>
      );
    }
    if (col.type === "currency" && typeof val === "number") {
      return `$${val.toLocaleString()}`;
    }
    if (col.type === "number" && typeof val === "number") {
      return val.toLocaleString();
    }
    return String(val);
  };

  const SortArrow = ({ colKey }: { colKey: string }) => {
    if (sortKey !== colKey)
      return <span className="text-[#5a8a8a]/30 ml-1">{"\u25B4\u25BE"}</span>;
    return (
      <span className="text-[#00e5cc] ml-1">{sortAsc ? "\u25B4" : "\u25BE"}</span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Topic Selector — Horizontal Pill Tabs */}
      <div className="flex flex-wrap gap-2">
        {topicIds.map((id) => (
          <button
            key={id}
            onClick={() => {
              setSelectedTopic(id);
              setSortKey(null);
            }}
            className={`glass px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTopic === id
                ? "!border-[#00e5cc] glow-border text-[#00e5cc]"
                : "text-[#5a8a8a] glass-hover glow-border-hover"
            }`}
          >
            {matrices[id].topicName}
          </button>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="glass glow-border rounded-xl p-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-4">
          Summary Statistics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold stat-glow">{summary.totalStates}</div>
            <div className="text-xs text-[#5a8a8a] mt-1">States Covered</div>
          </div>
          {Object.entries(summary.ranges).slice(0, 3).map(([key, range]) => {
            const col = matrix.columns.find((c) => c.key === key);
            const isCurrency = col?.type === "currency";
            const fmt = (n: number) =>
              isCurrency ? `$${n.toLocaleString()}` : n.toLocaleString();
            return (
              <div key={key} className="text-center">
                <div className="text-xs text-[#5a8a8a] mb-2">{col?.label ?? key}</div>
                <div className="text-sm space-x-1">
                  <span className="text-[#3b82f6]">{fmt(range.min)}</span>
                  <span className="text-[#5a8a8a]/40">/</span>
                  <span className="stat-glow font-bold">{fmt(range.median)}</span>
                  <span className="text-[#5a8a8a]/40">/</span>
                  <span className="text-[#f59e0b]">{fmt(range.max)}</span>
                </div>
                <div className="text-xs text-[#5a8a8a]/60 mt-1">Min / Median / Max</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="glass glow-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="lex-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("state")}>
                  State <SortArrow colKey="state" />
                </th>
                {matrix.columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    title={col.description}
                  >
                    {col.label} <SortArrow colKey={col.key} />
                  </th>
                ))}
                <th>Citation</th>
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => (
                <tr key={row.jurisdictionId}>
                  <td className="font-medium text-[#e0f2f1] whitespace-nowrap">
                    {row.jurisdictionName}
                  </td>
                  {matrix.columns.map((col) => (
                    <td key={col.key} className="whitespace-nowrap">
                      {formatValue(row.values[col.key], col)}
                    </td>
                  ))}
                  <td className="max-w-xs">
                    {row.sourceUrls[0] ? (
                      <a
                        href={row.sourceUrls[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link font-mono text-xs"
                        title={row.statutes[0]}
                      >
                        {row.statutes[0]}
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[#5a8a8a]">
                        {row.statutes[0]}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Outliers */}
      {summary.outliers.length > 0 && (
        <div className="glass rounded-xl p-5 border-l-2 !border-l-[#f59e0b]">
          <h3 className="text-sm font-semibold text-[#f59e0b] mb-3">Notable Outliers</h3>
          <ul className="text-sm text-[#b0d4d4] space-y-1.5">
            {summary.outliers.map((o, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#f59e0b] shrink-0">&#x2022;</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
