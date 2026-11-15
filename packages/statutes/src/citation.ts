/** Parsed legal citation */
export interface ParsedCitation {
  type: "usc" | "state" | "cfr" | "case" | "unknown";
  title: string | null;
  code: string | null;
  section: string;
  subsection: string | null;
  jurisdiction: string | null;
  raw: string;
}

/** Parse a legal citation string into structured parts */
export function parseCitation(raw: string): ParsedCitation {
  const trimmed = raw.trim();

  // U.S. Code: "42 U.S.C. § 1983" or "26 USC 501(c)(3)"
  const uscMatch = trimmed.match(/^(\d+)\s*U\.?S\.?C\.?\s*§?\s*(\d+[a-z]?)(?:\(([^)]+)\))?/i);
  if (uscMatch) {
    return {
      type: "usc",
      title: uscMatch[1],
      code: "U.S.C.",
      section: uscMatch[2],
      subsection: uscMatch[3] ?? null,
      jurisdiction: "us",
      raw: trimmed,
    };
  }

  // CFR: "29 C.F.R. § 785.11"
  const cfrMatch = trimmed.match(/^(\d+)\s*C\.?F\.?R\.?\s*§?\s*([\d.]+)/i);
  if (cfrMatch) {
    return {
      type: "cfr",
      title: cfrMatch[1],
      code: "C.F.R.",
      section: cfrMatch[2],
      subsection: null,
      jurisdiction: "us",
      raw: trimmed,
    };
  }

  // State codes: "Cal. Civ. Code § 1950.5" or "Tex. Prop. Code § 92.101"
  const stateMatch = trimmed.match(/^([A-Z][a-z]+\.?)\s+(.+?)\s*§\s*([\d.]+(?:\([^)]*\))?)/);
  if (stateMatch) {
    return {
      type: "state",
      title: null,
      code: `${stateMatch[1]} ${stateMatch[2]}`,
      section: stateMatch[3],
      subsection: null,
      jurisdiction: resolveStateAbbr(stateMatch[1]),
      raw: trimmed,
    };
  }

  return { type: "unknown", title: null, code: null, section: trimmed, subsection: null, jurisdiction: null, raw: trimmed };
}

/** Format a parsed citation back to string */
export function formatCitation(citation: ParsedCitation): string {
  switch (citation.type) {
    case "usc":
      return `${citation.title} U.S.C. § ${citation.section}${citation.subsection ? `(${citation.subsection})` : ""}`;
    case "cfr":
      return `${citation.title} C.F.R. § ${citation.section}`;
    case "state":
      return `${citation.code} § ${citation.section}`;
    default:
      return citation.raw;
  }
}

function resolveStateAbbr(abbr: string): string | null {
  const map: Record<string, string> = {
    "Cal.": "ca", "Tex.": "tx", "N.Y.": "ny", "Fla.": "fl", "Ill.": "il",
    "Pa.": "pa", "Ohio": "oh", "Ga.": "ga", "Mich.": "mi", "N.J.": "nj",
    "Va.": "va", "Wash.": "wa", "Ariz.": "az", "Mass.": "ma", "Ind.": "in",
    "Tenn.": "tn", "Mo.": "mo", "Md.": "md", "Wis.": "wi", "Minn.": "mn",
    "Colo.": "co", "Ala.": "al", "S.C.": "sc", "La.": "la", "Ky.": "ky",
    "Or.": "or", "Okla.": "ok", "Conn.": "ct", "Iowa": "ia", "Miss.": "ms",
    "Ark.": "ar", "Kan.": "ks", "Utah": "ut", "Nev.": "nv", "N.M.": "nm",
    "Neb.": "ne", "W.Va.": "wv", "Idaho": "id", "Haw.": "hi", "Me.": "me",
    "N.H.": "nh", "R.I.": "ri", "Mont.": "mt", "Del.": "de", "S.D.": "sd",
    "N.D.": "nd", "Alaska": "ak", "Vt.": "vt", "Wyo.": "wy",
  };
  return map[abbr.replace(/\.$/, ".")] ?? null;
}
