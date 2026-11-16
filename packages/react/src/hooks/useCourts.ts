import { Court, StateCourtSystem } from "@allem-law/core";
import { UseQueryResult } from "./useOpenLex";
import { useFetch } from "./useFetch";

interface CourtsResponse {
  state: string;
  stateName: string;
  hasIntermediateAppellate: boolean;
  judicialDistricts: number | null;
  notes: string[];
  courts: Court[];
}

/** Fetch court hierarchy for a state */
export function useCourts(state: string): UseQueryResult<CourtsResponse> {
  const path = `/courts/${encodeURIComponent(state)}`;
  return useFetch<CourtsResponse>(path, !!state);
}
