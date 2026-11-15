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
