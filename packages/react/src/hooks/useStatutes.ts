import { StatuteEntry } from "@openlex/core";
import { UseQueryResult } from "./useOpenLex";
import { useFetch } from "./useFetch";

interface StatutesResponse {
  jurisdiction?: string;
  topic: string;
  statutes: StatuteEntry[];
}

/** Fetch statutes for a topic and optional state */
export function useStatutes(topic: string, state?: string): UseQueryResult<StatuteEntry[]> {
  const path = state
    ? `/statutes/${encodeURIComponent(state)}/${encodeURIComponent(topic)}`
    : `/statutes/${encodeURIComponent(topic)}`;

  const result = useFetch<StatutesResponse>(path, !!topic);

  return {
    data: result.data?.statutes ?? null,
    loading: result.loading,
    error: result.error,
  };
}
