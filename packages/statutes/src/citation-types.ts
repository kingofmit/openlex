/** All supported citation types */
export type CitationType =
  | "usc"           // 42 U.S.C. § 1983
  | "cfr"           // 29 C.F.R. § 785.11
  | "public-law"    // Pub. L. No. 117-169, 136 Stat. 1818
  | "stat"          // 136 Stat. 1818
  | "constitution"  // U.S. Const. amend. XIV, § 1
  | "exec-order"    // Exec. Order No. 14,067
  | "state"         // Cal. Civ. Code § 1950.5
  | "state-const"   // Cal. Const. art. I, § 7
  | "session-law"   // 2024 Cal. Stat. ch. 100
  | "municipal"     // S.F. Admin. Code § 37.9
  | "ag-opinion"    // 43 Op. Att'y Gen. 129 (2024)
  | "case"          // Brown v. Board of Ed., 347 U.S. 483 (1954)
  | "state-reg"     // Cal. Code Regs. tit. 8, § 11040
  | "unknown";

/** Parsed legal citation with extended type support */
export interface ParsedCitation {
  type: CitationType;
  title: string | null;
  code: string | null;
  section: string;
  subsection: string | null;
  jurisdiction: string | null;
  raw: string;
  /** Volume number for session laws, statutes at large */
  volume: string | null;
  /** Page number for session laws, case reporters */
  page: string | null;
  /** Year of decision or enactment */
  year: string | null;
  /** Article number for constitutions */
  article: string | null;
  /** Amendment number for constitutions */
  amendment: string | null;
  /** Party names for case citations */
  parties: string | null;
  /** Reporter name for case citations */
  reporter: string | null;
}

/** Output format for citation formatting */
export type CitationFormat = "bluebook" | "alwd" | "plain-english";

/** Result of citation validation */
export interface CitationValidation {
  valid: boolean;
  errors: string[];
  warnings: string[];
  suggestedCorrection: string | null;
}

/** State code naming structure */
export interface StateCodeInfo {
  stateId: string;
  stateName: string;
  codes: StateCode[];
  constitutionFormat: string;
  sessionLawFormat: string;
}

export interface StateCode {
  abbreviation: string;
  fullName: string;
  bluebook: string;
  alwd: string;
}

/** Create an empty/default parsed citation */
export function emptyParsedCitation(raw: string): ParsedCitation {
  return {
    type: "unknown",
    title: null,
    code: null,
    section: raw.trim(),
    subsection: null,
    jurisdiction: null,
    raw: raw.trim(),
    volume: null,
    page: null,
    year: null,
    article: null,
    amendment: null,
    parties: null,
    reporter: null,
  };
}
