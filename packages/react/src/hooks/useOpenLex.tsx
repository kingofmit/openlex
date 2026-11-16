import { createContext, useContext, ReactNode } from "react";

export interface OpenLexConfig {
  baseUrl: string;
}

const OpenLexContext = createContext<OpenLexConfig | null>(null);

export function OpenLexProvider({
  baseUrl,
  children,
}: {
  baseUrl: string;
  children: ReactNode;
}) {
  return (
    <OpenLexContext.Provider value={{ baseUrl }}>
      {children}
    </OpenLexContext.Provider>
  );
}

export function useOpenLexConfig(): OpenLexConfig {
  const ctx = useContext(OpenLexContext);
  if (!ctx) {
    throw new Error("useOpenLexConfig must be used within an <OpenLexProvider>");
  }
  return ctx;
}

/** Generic query result shape for all hooks */
export interface UseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
