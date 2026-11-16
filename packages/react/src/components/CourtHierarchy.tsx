import { Court } from "@allem-law/core";

export interface CourtHierarchyProps {
  courts: Court[];
  stateName?: string;
  className?: string;
}

const LEVEL_ORDER: Record<string, number> = {
  supreme: 0,
  appellate: 1,
  trial: 2,
  specialized: 3,
  magistrate: 4,
};

const LEVEL_LABELS: Record<string, string> = {
  supreme: "Highest Court",
  appellate: "Appellate Courts",
  trial: "Trial Courts",
  specialized: "Specialized Courts",
  magistrate: "Magistrate Courts",
};

export function CourtHierarchy({ courts, stateName, className }: CourtHierarchyProps) {
  const grouped = new Map<string, Court[]>();
  for (const court of courts) {
    const list = grouped.get(court.level) ?? [];
    list.push(court);
    grouped.set(court.level, list);
  }

  const levels = [...grouped.entries()].sort(
    ([a], [b]) => (LEVEL_ORDER[a] ?? 99) - (LEVEL_ORDER[b] ?? 99),
  );

  return (
    <div className={className}>
      {stateName && <h2>{stateName} Court System</h2>}
      {levels.map(([level, levelCourts]) => (
        <div key={level}>
          <h3>{LEVEL_LABELS[level] ?? level}</h3>
          <ul>
            {levelCourts.map((court) => (
              <li key={court.id}>
                <strong>{court.name}</strong>
                {court.abbreviation && ` (${court.abbreviation})`}
                {court.circuit && ` — Circuit ${court.circuit}`}
                {court.url && (
                  <>
                    {" "}
                    <a href={court.url} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
