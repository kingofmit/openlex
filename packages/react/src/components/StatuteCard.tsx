import { StatuteEntry } from "@allem-law/core";

export interface StatuteCardProps {
  statute: StatuteEntry;
  className?: string;
  showProvisions?: boolean;
  showMonetary?: boolean;
}

export function StatuteCard({
  statute,
  className,
  showProvisions = true,
  showMonetary = true,
}: StatuteCardProps) {
  return (
    <div className={className}>
      <h3>{statute.title}</h3>
      <p>
        <strong>{statute.fullCitation}</strong>
      </p>

      {statute.url && (
        <p>
          <a href={statute.url} target="_blank" rel="noopener noreferrer">
            Official Source
          </a>
        </p>
      )}

      {showProvisions && statute.keyProvisions.length > 0 && (
        <ul>
          {statute.keyProvisions.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {statute.penalties && (
        <p>
          <strong>Penalties:</strong> {statute.penalties}
        </p>
      )}

      {statute.exceptions && (
        <p>
          <strong>Exceptions:</strong> {statute.exceptions}
        </p>
      )}

      {showMonetary && statute.monetaryValues.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {statute.monetaryValues.map((mv, i) => (
              <tr key={i}>
                <td>{mv.type}</td>
                <td>
                  {mv.unit.startsWith("usd") ? "$" : ""}
                  {mv.amount}
                  {mv.unit === "usd-per-hour" ? "/hr" : ""}
                </td>
                <td>{mv.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {statute.effectiveDate && (
        <p>
          <small>Effective: {statute.effectiveDate}</small>
        </p>
      )}
    </div>
  );
}
