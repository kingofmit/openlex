import { StatuteVersion } from "@openlex/core";
import { MINIMUM_WAGE_VERSIONS } from "./minimum-wage-versions";
import { MARIJUANA_VERSIONS } from "./marijuana-versions";
import { CONCEALED_CARRY_VERSIONS } from "./concealed-carry-versions";
import { NON_COMPETE_VERSIONS } from "./non-compete-versions";
import { SMALL_CLAIMS_VERSIONS } from "./small-claims-versions";

export { MINIMUM_WAGE_VERSIONS } from "./minimum-wage-versions";
export { MARIJUANA_VERSIONS } from "./marijuana-versions";
export { CONCEALED_CARRY_VERSIONS } from "./concealed-carry-versions";
export { NON_COMPETE_VERSIONS } from "./non-compete-versions";
export { SMALL_CLAIMS_VERSIONS } from "./small-claims-versions";

/** All version history data, keyed by topic */
export const ALL_VERSIONS: Map<string, StatuteVersion[]> = new Map([
  ["minimum-wage", MINIMUM_WAGE_VERSIONS],
  ["marijuana", MARIJUANA_VERSIONS],
  ["concealed-carry", CONCEALED_CARRY_VERSIONS],
  ["non-compete", NON_COMPETE_VERSIONS],
  ["small-claims", SMALL_CLAIMS_VERSIONS],
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
