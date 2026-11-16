import { StatuteVersion } from "@allem-law/core";
import { MINIMUM_WAGE_VERSIONS } from "./minimum-wage-versions";

export { MINIMUM_WAGE_VERSIONS } from "./minimum-wage-versions";

/** All version history data, keyed by topic */
export const ALL_VERSIONS: Map<string, StatuteVersion[]> = new Map([
  ["minimum-wage", MINIMUM_WAGE_VERSIONS],
]);

/** Get version history for a specific statute by its ID */
export function getVersionHistory(statuteId: string): StatuteVersion[] {
  for (const versions of ALL_VERSIONS.values()) {
    const matched = versions.filter((v) => v.statuteId === statuteId);
    if (matched.length > 0) {
      return matched.sort((a, b) => a.version - b.version);
    }
  }
  return [];
}

/** Get all statutes that have version history for a topic */
export function getVersionedStatuteIds(topic: string): string[] {
  const versions = ALL_VERSIONS.get(topic);
  if (!versions) return [];
  return [...new Set(versions.map((v) => v.statuteId))];
}
