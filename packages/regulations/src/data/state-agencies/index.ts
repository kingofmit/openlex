import { GoverningBody } from "@openlex/core";

export { STATE_LABOR_DEPARTMENTS } from "./labor-departments";
export { STATE_ATTORNEYS_GENERAL } from "./attorneys-general";
export { STATE_REAL_ESTATE_COMMISSIONS } from "./real-estate-commissions";
export { STATE_INSURANCE_COMMISSIONERS } from "./insurance-commissioners";
export { STATE_CANNABIS_REGULATORS } from "./cannabis-regulators";
export { STATE_BAR_ASSOCIATIONS } from "./bar-associations";

import { STATE_LABOR_DEPARTMENTS } from "./labor-departments";
import { STATE_ATTORNEYS_GENERAL } from "./attorneys-general";
import { STATE_REAL_ESTATE_COMMISSIONS } from "./real-estate-commissions";
import { STATE_INSURANCE_COMMISSIONERS } from "./insurance-commissioners";
import { STATE_CANNABIS_REGULATORS } from "./cannabis-regulators";
import { STATE_BAR_ASSOCIATIONS } from "./bar-associations";

/** Combined flat array of all state-level regulatory agencies */
export const ALL_STATE_AGENCIES: GoverningBody[] = [
  ...STATE_LABOR_DEPARTMENTS,
  ...STATE_ATTORNEYS_GENERAL,
  ...STATE_REAL_ESTATE_COMMISSIONS,
  ...STATE_INSURANCE_COMMISSIONERS,
  ...STATE_CANNABIS_REGULATORS,
  ...STATE_BAR_ASSOCIATIONS,
];

/**
 * Find state agencies by state ID and optionally by topic.
 * @param stateId - Two-letter lowercase state code (e.g. "ca", "tx")
 * @param topicId - Optional topic ID to filter by (e.g. "employment", "marijuana")
 * @returns Matching GoverningBody entries
 */
export function findStateAgencies(stateId: string, topicId?: string): GoverningBody[] {
  const byState = ALL_STATE_AGENCIES.filter((a) => a.jurisdictionId === stateId);
  if (!topicId) return byState;
  return byState.filter((a) => a.topics.includes(topicId));
}
