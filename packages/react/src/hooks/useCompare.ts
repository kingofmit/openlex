import { ComparisonMatrix } from "@allem-law/core";
import { UseQueryResult } from "./useOpenLex";
import { useFetch } from "./useFetch";

interface CompareResponse {
  matrix: ComparisonMatrix;
}

/** Fetch a 50-state comparison matrix for a topic */
export function useCompare(topic: string, states?: string[]): UseQueryResult<ComparisonMatrix> {
  const statesParam = states?.length ? `&states=${states.join(",")}` : "";
  const path = `/compare?topic=${encodeURIComponent(topic)}${statesParam}`;

  const result = useFetch<CompareResponse>(path, !!topic);

  return {
    data: result.data?.matrix ?? null,
    loading: result.loading,
    error: result.error,
  };
}
