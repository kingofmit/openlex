import { Court, StateCourtSystem } from "@allem-law/core";
import { STATE_COURT_SYSTEMS } from "./data/state-courts";
import { FEDERAL_DISTRICT_COURTS, getDistrictCourts } from "./data/federal-districts";

export { STATE_COURT_SYSTEMS } from "./data/state-courts";
export { FEDERAL_DISTRICT_COURTS, getDistrictCourts } from "./data/federal-districts";

/** Get the complete court system for a state */
export function getStateCourtSystem(stateId: string): StateCourtSystem | undefined {
  return STATE_COURT_SYSTEMS.find((s) => s.stateId === stateId.toLowerCase());
}

/** Get all courts for a state (state + federal) */
export function getAllCourtsForState(stateId: string): Court[] {
  const system = getStateCourtSystem(stateId);
  const federalDistricts = getDistrictCourts(stateId);

  if (!system) {
    return federalDistricts;
  }

  const stateCourts: Court[] = [
    system.supremeCourt,
    ...system.appellateCourts,
    ...system.trialCourts,
    ...system.specializedCourts,
  ];

  return [...stateCourts, ...federalDistricts];
}

/** Get the highest court for a state */
export function getHighestCourt(stateId: string): Court | undefined {
  const system = getStateCourtSystem(stateId);
  return system?.supremeCourt;
}

/** Get trial courts for a state */
export function getTrialCourts(stateId: string): Court[] {
  const system = getStateCourtSystem(stateId);
  return system?.trialCourts ?? [];
}

/** Get specialized courts for a state */
export function getSpecializedCourts(stateId: string): Court[] {
  const system = getStateCourtSystem(stateId);
  return system?.specializedCourts ?? [];
}

/** Search courts by name keyword */
export function searchCourts(query: string): Court[] {
  const lowerQuery = query.toLowerCase();

  const matchingStateCourts: Court[] = [];
  for (const system of STATE_COURT_SYSTEMS) {
    const allCourts = [
      system.supremeCourt,
      ...system.appellateCourts,
      ...system.trialCourts,
      ...system.specializedCourts,
    ];
    for (const court of allCourts) {
      if (
        court.name.toLowerCase().includes(lowerQuery) ||
        court.abbreviation.toLowerCase().includes(lowerQuery)
      ) {
        matchingStateCourts.push(court);
      }
    }
  }

  const matchingFederalCourts = FEDERAL_DISTRICT_COURTS.filter(
    (court) =>
      court.name.toLowerCase().includes(lowerQuery) ||
      court.abbreviation.toLowerCase().includes(lowerQuery),
  );

  return [...matchingStateCourts, ...matchingFederalCourts];
}
