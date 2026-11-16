import { useState } from "react";
import { ComparisonMatrix } from "@allem-law/core";

export interface ComparisonTableProps {
  matrix: ComparisonMatrix;
  className?: string;
  sortable?: boolean;
  highlightOutliers?: boolean;
}

export function ComparisonTable({
  matrix,
  className,
  sortable = true,
  highlightOutliers = false,
}: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const outlierSet = new Set(
    highlightOutliers ? matrix.summary.outliers.map((o) => o.split(":")[0]) : [],
  );

  const handleSort = (key: string) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortedRows = [...matrix.rows].sort((a, b) => {
    if (!sortKey) return 0;
    const av = a.values[sortKey];
    const bv = b.values[sortKey];
    if (av === null || av === undefined) return 1;
    if (bv === null || bv === undefined) return -1;
    const cmp = typeof av === "number" && typeof bv === "number"
      ? av - bv
      : String(av).localeCompare(String(bv));
    return sortAsc ? cmp : -cmp;
  });

  return (
    <div className={className}>
      <h2>{matrix.topicName}</h2>
      <p>{matrix.rows.length} jurisdictions compared</p>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleSort("_state")}
              style={sortable ? { cursor: "pointer" } : undefined}
            >
              State {sortKey === "_state" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
            {matrix.columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={sortable ? { cursor: "pointer" } : undefined}
                title={col.description}
              >
                {col.label} {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => (
            <tr
              key={row.jurisdictionId}
              style={outlierSet.has(row.jurisdictionName) ? { fontWeight: "bold" } : undefined}
            >
              <td>{row.jurisdictionName}</td>
              {matrix.columns.map((col) => {
                const val = row.values[col.key];
                let display: string;
                if (val === null || val === undefined) {
                  display = "—";
                } else if (typeof val === "boolean") {
                  display = val ? "Yes" : "No";
                } else if (col.type === "currency" && typeof val === "number") {
                  display = `$${val.toLocaleString()}`;
                } else {
                  display = String(val);
                }
                return <td key={col.key}>{display}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
