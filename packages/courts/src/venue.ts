import { Court } from "@allem-law/core";
import { getCircuit, FEDERAL_COURTS } from "./federal";

export interface VenueResult {
  trialCourt: string;
  appellateCourt: Court | null;
  supremeCourt: Court;
  circuit: string | null;
}

/** Determine federal court venue for a state */
export function determineFederalVenue(stateId: string): VenueResult {
  const circuit = getCircuit(stateId);
  const appellateCourt = circuit
    ? FEDERAL_COURTS.find((c) => c.circuit === circuit && c.level === "appellate") ?? null
    : null;
  const supremeCourt = FEDERAL_COURTS.find((c) => c.level === "supreme")!;

  return {
    trialCourt: `U.S. District Court for the District of ${stateId.toUpperCase()}`,
    appellateCourt,
    supremeCourt,
    circuit,
  };
}
