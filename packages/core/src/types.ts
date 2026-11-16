/** A U.S. jurisdiction (federal, state, territory, or local) */
export interface Jurisdiction {
  id: string;
  name: string;
  abbreviation: string;
  type: "federal" | "state" | "territory" | "district" | "county" | "city";
  fips: string | null;
  parent: string | null;
  capital: string | null;
  timezone: string;
}

/** A legal topic in the taxonomy */
export interface LegalTopic {
  id: string;
  name: string;
  parent: string | null;
  description: string;
  aliases: string[];
  practiceArea: string;
}

/** A statutory provision */
export interface Statute {
  id: string;
  jurisdictionId: string;
  title: string;
  code: string;
  section: string;
  fullCitation: string;
  text: string | null;
  url: string | null;
  effectiveDate: string | null;
  topics: string[];
}

/** A regulation or administrative rule */
export interface Regulation {
  id: string;
  jurisdictionId: string;
  agency: string;
  title: string;
  code: string;
  section: string;
  fullCitation: string;
  text: string | null;
  url: string | null;
  effectiveDate: string | null;
  topics: string[];
}

/** A governing body or agency */
export interface GoverningBody {
  id: string;
  jurisdictionId: string;
  name: string;
  abbreviation: string | null;
  type: "court" | "agency" | "commission" | "board" | "department";
  url: string | null;
  parentBody: string | null;
  topics: string[];
}

/** A court in the judicial hierarchy */
export interface Court {
  id: string;
  jurisdictionId: string;
  name: string;
  abbreviation: string;
  level: "supreme" | "appellate" | "trial" | "specialized" | "magistrate";
  circuit: string | null;
  district: string | null;
  url: string | null;
}

/** A legal authority result — the answer to "what law applies?" */
export interface LegalAuthority {
  jurisdiction: Jurisdiction;
  statutes: Statute[];
  regulations: Regulation[];
  governingBodies: GoverningBody[];
  courts: Court[];
  preemption: PreemptionNote[];
}

/** Federal preemption or state-federal interaction note */
export interface PreemptionNote {
  federalAuthority: string;
  stateAuthority: string;
  relationship: "preempts" | "supplements" | "concurrent" | "defers";
  description: string;
}

/** A query to the jurisdiction engine */
export interface JurisdictionQuery {
  topic: string;
  state?: string;
  county?: string;
  city?: string;
  includeFederal?: boolean;
  includeRegulations?: boolean;
  includeCourts?: boolean;
}

/** Query result */
export interface QueryResult {
  query: JurisdictionQuery;
  authorities: LegalAuthority[];
  timestamp: number;
  disclaimer: string;
}

/** A dollar amount, rate, or time period embedded in a statute */
export interface MonetaryValue {
  type: "limit" | "fine" | "fee" | "threshold" | "wage" | "penalty" | "duration";
  amount: number;
  unit: "usd" | "usd-per-hour" | "usd-per-month" | "usd-per-year" | "months" | "years" | "days" | "multiplier" | "ratio" | "ounces" | "grams" | "percent";
  description: string;
}

/** A column definition in a comparison matrix */
export interface ComparisonColumn {
  key: string;
  label: string;
  type: "text" | "number" | "boolean" | "enum" | "currency";
  description: string;
}

/** A single state's row in a comparison matrix */
export interface ComparisonRow {
  jurisdictionId: string;
  jurisdictionName: string;
  values: Record<string, string | number | boolean | null>;
  statutes: string[];
  sourceUrls: string[];
  notes: string | null;
}

/** Summary statistics for a comparison matrix */
export interface ComparisonSummary {
  totalStates: number;
  categoryCounts: Record<string, number>;
  ranges: Record<string, { min: number; max: number; median: number }>;
  outliers: string[];
}

/** A 50-state comparison matrix for a legal topic */
export interface ComparisonMatrix {
  topic: string;
  topicName: string;
  generatedAt: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  summary: ComparisonSummary;
}

/** Extended statute entry with sourcing metadata and structured provisions */
export interface StatuteEntry extends Statute {
  sourceUrl: string;
  lastVerified: string;
  sunsetDate: string | null;
  supersededBy: string | null;
  keyProvisions: string[];
  penalties: string | null;
  exceptions: string | null;
  monetaryValues: MonetaryValue[];
}
