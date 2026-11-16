import { useState, useEffect } from "react";
import { UseQueryResult, useOpenLexConfig } from "./useOpenLex";

export interface SearchResult {
  id: string;
  score: number;
  text: string;
  metadata: Record<string, string>;
}

interface SearchResponse {
  query: string;
  count: number;
  results: SearchResult[];
}

/** Debounced full-text search across statutes and regulations */
export function useSearch(query: string, debounceMs = 300): UseQueryResult<SearchResult[]> {
  const { baseUrl } = useOpenLexConfig();
  const [data, setData] = useState<SearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query || query.length < 2) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const timer = setTimeout(() => {
      setLoading(true);
      setError(null);

      const url = `${baseUrl.replace(/\/$/, "")}/search?q=${encodeURIComponent(query)}`;
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((json: SearchResponse) => {
          if (!cancelled) {
            setData(json.results);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(err instanceof Error ? err.message : "Unknown error");
            setLoading(false);
          }
        });
    }, debounceMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [baseUrl, query, debounceMs]);

  return { data, loading, error };
}
