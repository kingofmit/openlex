import { PreemptionRule } from "@openlex/core";
import { UseQueryResult } from "./useOpenLex";
import { useFetch } from "./useFetch";

interface PreemptionResponse {
  topic: string;
  state: string | null;
  count: number;
  summary?: string;
  rules: PreemptionRule[];
}

/** Fetch preemption rules for a topic and optional state */
export function usePreemption(topic: string, state?: string): UseQueryResult<PreemptionResponse> {
  const stateParam = state ? `?state=${encodeURIComponent(state)}` : "";
  const path = `/preemption/${encodeURIComponent(topic)}${stateParam}`;
  return useFetch<PreemptionResponse>(path, !!topic);
}
