import { ParsedCitation, emptyParsedCitation } from "./citation-types";

/** A citation pattern with regex and extractor */
interface CitationPattern {
  name: string;
  regex: RegExp;
  extract: (match: RegExpMatchArray, raw: string) => ParsedCitation;
}

/**
 * State abbreviation → 2-letter code mapping (Bluebook style).
 * Exported for use by other modules.
 */
export const STATE_ABBR_MAP: Record<string, string> = {
  "Ala.": "al", "Alaska": "ak", "Ariz.": "az", "Ark.": "ar", "Cal.": "ca",
  "Colo.": "co", "Conn.": "ct", "Del.": "de", "Fla.": "fl", "Ga.": "ga",
  "Haw.": "hi", "Idaho": "id", "Ill.": "il", "Ind.": "in", "Iowa": "ia",
  "Kan.": "ks", "Ky.": "ky", "La.": "la", "Me.": "me", "Md.": "md",
  "Mass.": "ma", "Mich.": "mi", "Minn.": "mn", "Miss.": "ms", "Mo.": "mo",
  "Mont.": "mt", "Neb.": "ne", "Nev.": "nv", "N.H.": "nh", "N.J.": "nj",
  "N.M.": "nm", "N.Y.": "ny", "N.C.": "nc", "N.D.": "nd", "Ohio": "oh",
  "Okla.": "ok", "Or.": "or", "Pa.": "pa", "R.I.": "ri", "S.C.": "sc",
  "S.D.": "sd", "Tenn.": "tn", "Tex.": "tx", "Utah": "ut", "Vt.": "vt",
  "Va.": "va", "Wash.": "wa", "W.Va.": "wv", "Wis.": "wi", "Wyo.": "wy",
  "D.C.": "dc",
};

/** Reverse map: 2-letter code → Bluebook abbreviation */
export const STATE_CODE_TO_ABBR: Record<string, string> = Object.fromEntries(
  Object.entries(STATE_ABBR_MAP).map(([abbr, code]) => [code, abbr]),
);

function resolveStateAbbr(abbr: string): string | null {
  // Try exact match first
  if (STATE_ABBR_MAP[abbr]) return STATE_ABBR_MAP[abbr];
  // Try with period
  const withDot = abbr.endsWith(".") ? abbr : `${abbr}.`;
  return STATE_ABBR_MAP[withDot] ?? null;
}

/**
 * Ordered list of citation patterns. The parser tries each in order
 * and returns the first match. Order matters: more specific patterns first.
 */
export const CITATION_PATTERNS: CitationPattern[] = [
  // U.S. Constitution: "U.S. Const. amend. XIV, § 1" or "U.S. Const. art. I, § 8, cl. 3"
  {
    name: "constitution",
    regex: /^U\.?S\.?\s*Const\.?\s*(?:amend\.?\s*([IVXLCDM]+|\d+)(?:\s*,\s*§\s*([\d.]+))?|art\.?\s*([IVXLCDM]+|\d+)(?:\s*,\s*§\s*([\d.]+))?(?:\s*,\s*cl\.?\s*(\d+))?)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "constitution",
      code: "U.S. Const.",
      amendment: m[1] ?? null,
      article: m[3] ?? null,
      section: m[2] ?? m[4] ?? "",
      subsection: m[5] ?? null,
      jurisdiction: "us",
    }),
  },

  // State Constitution: "Cal. Const. art. I, § 7" or "Tex. Const. art. XVI, § 50"
  {
    name: "state-const",
    regex: /^([A-Z][a-z]+\.?(?:\s*[A-Z]\.?)?)\s+Const\.?\s*art\.?\s*([IVXLCDM]+|\d+)(?:\s*,\s*§\s*([\d.]+))?/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "state-const",
      code: `${m[1]} Const.`,
      article: m[2],
      section: m[3] ?? "",
      jurisdiction: resolveStateAbbr(m[1]),
    }),
  },

  // Public Law: "Pub. L. No. 117-169, 136 Stat. 1818"
  {
    name: "public-law",
    regex: /^Pub\.?\s*L\.?\s*No\.?\s*(\d+-\d+)(?:\s*,\s*(\d+)\s*Stat\.?\s*(\d+))?/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "public-law",
      code: "Pub. L.",
      section: m[1],
      volume: m[2] ?? null,
      page: m[3] ?? null,
      jurisdiction: "us",
    }),
  },

  // Statutes at Large: "136 Stat. 1818"
  {
    name: "stat",
    regex: /^(\d+)\s*Stat\.?\s*(\d+)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "stat",
      code: "Stat.",
      section: "",
      volume: m[1],
      page: m[2],
      jurisdiction: "us",
    }),
  },

  // Executive Order: "Exec. Order No. 14,067" or "E.O. 14067"
  {
    name: "exec-order",
    regex: /^(?:Exec\.?\s*Order|E\.?O\.?)\s*(?:No\.?\s*)?([\d,]+)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "exec-order",
      code: "Exec. Order",
      section: m[1].replace(/,/g, ""),
      jurisdiction: "us",
    }),
  },

  // Attorney General Opinion: "43 Op. Att'y Gen. 129 (2024)"
  {
    name: "ag-opinion",
    regex: /^(\d+)\s*Op\.?\s*Att['']?y\s*Gen\.?\s*(\d+)(?:\s*\((\d{4})\))?/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "ag-opinion",
      code: "Op. Att'y Gen.",
      volume: m[1],
      section: "",
      page: m[2],
      year: m[3] ?? null,
      jurisdiction: "us",
    }),
  },

  // U.S. Code: "42 U.S.C. § 1983" or "26 USC 501(c)(3)" or "42 U.S.C. § 1983(a)"
  {
    name: "usc",
    regex: /^(\d+)\s*U\.?S\.?C\.?\s*§?\s*([\da-z]+(?:[-–]\d+)?)(?:\(([^)]+(?:\)\([^)]+)*)\))?/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "usc",
      title: m[1],
      code: "U.S.C.",
      section: m[2],
      subsection: m[3] ?? null,
      jurisdiction: "us",
    }),
  },

  // C.F.R.: "29 C.F.R. § 785.11" or "40 CFR 60.1"
  {
    name: "cfr",
    regex: /^(\d+)\s*C\.?F\.?R\.?\s*§?\s*([\d.]+(?:\([^)]*\))?)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "cfr",
      title: m[1],
      code: "C.F.R.",
      section: m[2],
      jurisdiction: "us",
    }),
  },

  // State regulations: "Cal. Code Regs. tit. 8, § 11040" or "N.Y. Comp. Codes R. & Regs. tit. 12, § 142"
  {
    name: "state-reg",
    regex: /^([A-Z][a-z]+\.?(?:\s*[A-Z]\.?)?)\s+(?:Code\s*Regs?\.?|Comp\.?\s*Codes?\s*R\.?\s*&?\s*Regs?\.?|Admin\.?\s*Code)\s*(?:tit\.?\s*(\d+)\s*,\s*)?§\s*([\d.]+(?:\([^)]*\))?)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "state-reg",
      title: m[2] ?? null,
      code: `${m[1]} Code Regs.`,
      section: m[3],
      jurisdiction: resolveStateAbbr(m[1]),
    }),
  },

  // Case citation: "Brown v. Board of Ed., 347 U.S. 483 (1954)"
  {
    name: "case",
    regex: /^(.+?)\s*v\.?\s+(.+?),\s*(\d+)\s+([A-Za-z.\s]+?)\s+(\d+)\s*(?:\((\d{4})\))?/,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "case",
      parties: `${m[1].trim()} v. ${m[2].trim()}`,
      volume: m[3],
      reporter: m[4].trim(),
      page: m[5],
      section: "",
      year: m[6] ?? null,
      jurisdiction: "us",
    }),
  },

  // Municipal code: "S.F. Admin. Code § 37.9" or "N.Y.C. Admin. Code § 26-501"
  {
    name: "municipal",
    regex: /^([A-Z][A-Za-z.]+(?:\s+[A-Z][A-Za-z.]+)*)\s+(?:Admin\.?\s*Code|Mun\.?\s*Code|City\s*Code|Ord(?:inance)?\.?)\s*§\s*([\d.\-]+(?:\([^)]*\))?)/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "municipal",
      code: `${m[1]} Admin. Code`,
      section: m[2],
      jurisdiction: null, // would need municipal resolver
    }),
  },

  // Session laws: "2024 Cal. Stat. ch. 100" or "2023 Tex. Gen. Laws ch. 50"
  {
    name: "session-law",
    regex: /^(\d{4})\s+([A-Z][a-z]+\.?(?:\s*[A-Z]\.?)?)\s+(?:Stat\.?|Gen\.?\s*Laws?|Sess\.?\s*Laws?|Acts?)\s*(?:ch\.?\s*(\d+)|No\.?\s*(\d+))/i,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "session-law",
      code: `${m[2]} Stat.`,
      section: m[3] ?? m[4] ?? "",
      year: m[1],
      jurisdiction: resolveStateAbbr(m[2]),
    }),
  },

  // State codes (broad): "Cal. Civ. Code § 1950.5" or "Tex. Prop. Code Ann. § 92.101"
  // This is last among specific patterns because it's the broadest state match
  {
    name: "state",
    regex: /^([A-Z][a-z]+\.?(?:\s*[A-Z]\.?)?)\s+(.+?)\s*§\s*([\d.\-]+(?:\([^)]*\))?)/,
    extract: (m, raw) => ({
      ...emptyParsedCitation(raw),
      type: "state",
      code: `${m[1]} ${m[2].trim()}`,
      section: m[3],
      jurisdiction: resolveStateAbbr(m[1]),
    }),
  },
];

/**
 * Parse a citation string by trying each pattern in order.
 * Returns the first successful match, or an "unknown" citation.
 */
export function matchCitation(raw: string): ParsedCitation {
  const trimmed = raw.trim();
  for (const pattern of CITATION_PATTERNS) {
    const match = trimmed.match(pattern.regex);
    if (match) {
      return pattern.extract(match, trimmed);
    }
  }
  return emptyParsedCitation(trimmed);
}
