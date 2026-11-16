import { QueryResult } from "@allem-law/core";

/** Export query result as clean JSON */
export function toJSON(result: QueryResult, pretty = true): string {
  return JSON.stringify(result, null, pretty ? 2 : 0);
}
