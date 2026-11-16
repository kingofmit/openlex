"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ComparisonMatrix, ComparisonColumn } from "@openlex/core";

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
    return <p className="text-gray-400">No data available.</p>;
  }

  const { summary } = matrix;

  const formatValue = (val: string | number | boolean | null, col: ComparisonColumn) => {
    if (val == null) return <span className="text-gray-600">N/A</span>;
    if (col.type === "boolean") {
      return val ? (
        <span className="text-green-400 font-medium">Yes</span>
      ) : (
        <span className="text-red-400 font-medium">No</span>
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
    if (sortKey !== colKey) return <span className="text-gray-700 ml-1">&#x25B4;&#x25BE;</span>;
    return <span className="text-teal-400 ml-1">{sortAsc ? "\u25B4" : "\u25BE"}</span>;
  };

  return (
    <div className="space-y-6">
      {/* Topic Selector */}
      <div className="flex flex-wrap gap-2">
        {topicIds.map((id) => (
          <button
            key={id}
            onClick={() => {
              setSelectedTopic(id);
              setSortKey(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedTopic === id
                ? "bg-teal-500/20 text-teal-400 border border-teal-500/40"
                : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
            }`}
          >
            {matrices[id].topicName}
          </button>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-teal-400">{summary.totalStates}</div>
          <div className="text-xs text-gray-400 mt-1">States Covered</div>
        </div>
        {Object.entries(summary.ranges).slice(0, 3).map(([key, range]) => {
          const col = matrix.columns.find((c) => c.key === key);
          const isCurrency = col?.type === "currency";
          const fmt = (n: number) => isCurrency ? `$${n.toLocaleString()}` : n.toLocaleString();
          return (
            <div key={key} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-xs text-gray-500 mb-1">{col?.label ?? key}</div>
              <div className="text-sm">
                <span className="text-blue-400">{fmt(range.min)}</span>
                <span className="text-gray-600 mx-1">/</span>
                <span className="text-teal-400 font-bold">{fmt(range.median)}</span>
                <span className="text-gray-600 mx-1">/</span>
                <span className="text-amber-400">{fmt(range.max)}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Min / Median / Max</div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-800">
              <th
                className="px-3 py-2 text-left text-gray-400 font-medium cursor-pointer hover:text-white select-none"
                onClick={() => handleSort("state")}
              >
                State <SortArrow colKey="state" />
              </th>
              {matrix.columns.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-2 text-left text-gray-400 font-medium cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort(col.key)}
                  title={col.description}
                >
                  {col.label} <SortArrow colKey={col.key} />
                </th>
              ))}
              <th className="px-3 py-2 text-left text-gray-400 font-medium">Citation</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, i) => (
              <tr
                key={row.jurisdictionId}
                className={`border-b border-gray-800/50 ${
                  i % 2 === 0 ? "bg-gray-950" : "bg-gray-900/30"
                } hover:bg-gray-800/40 transition-colors`}
              >
                <td className="px-3 py-2 font-medium text-gray-100 whitespace-nowrap">
                  {row.jurisdictionName}
                </td>
                {matrix.columns.map((col) => (
                  <td key={col.key} className="px-3 py-2 text-gray-300 whitespace-nowrap">
                    {formatValue(row.values[col.key], col)}
                  </td>
                ))}
                <td className="px-3 py-2 text-gray-400 text-xs max-w-xs">
                  {row.sourceUrls[0] ? (
                    <a
                      href={row.sourceUrls[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400/70 hover:text-teal-400 underline"
                      title={row.statutes[0]}
                    >
                      {row.statutes[0]}
                    </a>
                  ) : (
                    <span>{row.statutes[0]}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Outliers */}
      {summary.outliers.length > 0 && (
        <div className="bg-gray-900 border border-amber-500/30 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-amber-400 mb-2">Notable Outliers</h3>
          <ul className="text-xs text-gray-400 space-y-1">
            {summary.outliers.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
