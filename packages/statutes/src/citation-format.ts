import { ParsedCitation, CitationFormat } from "./citation-types";
import { STATE_CODE_TO_ABBR } from "./citation-patterns";

/** State full names for plain-English format */
const STATE_FULL_NAMES: Record<string, string> = {
  al: "Alabama", ak: "Alaska", az: "Arizona", ar: "Arkansas", ca: "California",
  co: "Colorado", ct: "Connecticut", de: "Delaware", fl: "Florida", ga: "Georgia",
  hi: "Hawaii", id: "Idaho", il: "Illinois", in: "Indiana", ia: "Iowa",
  ks: "Kansas", ky: "Kentucky", la: "Louisiana", me: "Maine", md: "Maryland",
  ma: "Massachusetts", mi: "Michigan", mn: "Minnesota", ms: "Mississippi", mo: "Missouri",
  mt: "Montana", ne: "Nebraska", nv: "Nevada", nh: "New Hampshire", nj: "New Jersey",
  nm: "New Mexico", ny: "New York", nc: "North Carolina", nd: "North Dakota", oh: "Ohio",
  ok: "Oklahoma", or: "Oregon", pa: "Pennsylvania", ri: "Rhode Island", sc: "South Carolina",
  sd: "South Dakota", tn: "Tennessee", tx: "Texas", ut: "Utah", vt: "Vermont",
  va: "Virginia", wa: "Washington", wv: "West Virginia", wi: "Wisconsin", wy: "Wyoming",
  dc: "District of Columbia", us: "United States",
};

/** Code abbreviation → full name mapping for plain-English */
const CODE_FULL_NAMES: Record<string, string> = {
  "U.S.C.": "United States Code",
  "C.F.R.": "Code of Federal Regulations",
  "U.S. Const.": "United States Constitution",
  "Pub. L.": "Public Law",
  "Stat.": "Statutes at Large",
  "Exec. Order": "Executive Order",
  "Op. Att'y Gen.": "Attorney General Opinion",
};

/** Known state code expansions for plain-English */
const STATE_CODE_EXPANSIONS: Record<string, string> = {
  "Civ. Code": "Civil Code", "Fam. Code": "Family Code", "Penal Code": "Penal Code",
  "Lab. Code": "Labor Code", "Bus. & Prof. Code": "Business and Professions Code",
  "Corp. Code": "Corporations Code", "Gov. Code": "Government Code",
  "Prob. Code": "Probate Code", "Veh. Code": "Vehicle Code",
  "Health & Saf. Code": "Health and Safety Code", "Ins. Code": "Insurance Code",
  "Prop. Code": "Property Code", "Prop. Code Ann.": "Property Code",
  "Fam. Code Ann.": "Family Code", "Gen. Oblig. Law": "General Obligations Law",
  "Dom. Rel. Law": "Domestic Relations Law", "Penal Law": "Penal Law",
  "Lab. Law": "Labor Law", "Real Prop. Law": "Real Property Law",
  "Rev. Code": "Revised Code", "Rev. Stat.": "Revised Statutes",
  "Gen. Stat.": "General Statutes", "Ann. Code": "Annotated Code",
  "Code Ann.": "Annotated Code", "Stat. Ann.": "Statutes Annotated",
  "Comp. Stat.": "Compiled Statutes", "Consol. Laws": "Consolidated Laws",
};

function formatBluebook(c: ParsedCitation): string {
  switch (c.type) {
    case "usc":
      return `${c.title} U.S.C. § ${c.section}${c.subsection ? `(${c.subsection})` : ""}`;

    case "cfr":
      return `${c.title} C.F.R. § ${c.section}`;

    case "public-law": {
      let s = `Pub. L. No. ${c.section}`;
      if (c.volume && c.page) s += `, ${c.volume} Stat. ${c.page}`;
      return s;
    }

    case "stat":
      return `${c.volume} Stat. ${c.page}`;

    case "constitution": {
      if (c.amendment) {
        let s = `U.S. Const. amend. ${c.amendment}`;
        if (c.section) s += `, § ${c.section}`;
        return s;
      }
      let s = `U.S. Const. art. ${c.article}`;
      if (c.section) s += `, § ${c.section}`;
      if (c.subsection) s += `, cl. ${c.subsection}`;
      return s;
    }

    case "state-const":
      return `${c.code} art. ${c.article}${c.section ? `, § ${c.section}` : ""}`;

    case "exec-order":
      return `Exec. Order No. ${formatWithCommas(c.section)}`;

    case "ag-opinion": {
      let s = `${c.volume} Op. Att'y Gen. ${c.page}`;
      if (c.year) s += ` (${c.year})`;
      return s;
    }

    case "case": {
      let s = `${c.parties}, ${c.volume} ${c.reporter} ${c.page}`;
      if (c.year) s += ` (${c.year})`;
      return s;
    }

    case "state":
      return `${c.code} § ${c.section}`;

    case "state-reg":
      return c.title
        ? `${c.code} tit. ${c.title}, § ${c.section}`
        : `${c.code} § ${c.section}`;

    case "municipal":
      return `${c.code} § ${c.section}`;

    case "session-law":
      return `${c.year} ${c.code} ch. ${c.section}`;

    default:
      return c.raw;
  }
}

function formatAlwd(c: ParsedCitation): string {
  // ALWD is very similar to Bluebook for statutes/codes
  // Key differences: no small caps, simpler reporter abbreviations
  switch (c.type) {
    case "usc":
      return `${c.title} U.S.C. § ${c.section}${c.subsection ? `(${c.subsection})` : ""}`;

    case "cfr":
      return `${c.title} C.F.R. § ${c.section}`;

    case "public-law": {
      let s = `Pub. L. No. ${c.section}`;
      if (c.volume && c.page) s += `, ${c.volume} Stat. ${c.page}`;
      return s;
    }

    case "constitution": {
      if (c.amendment) {
        let s = `U.S. Const. amend. ${c.amendment}`;
        if (c.section) s += `, § ${c.section}`;
        return s;
      }
      let s = `U.S. Const. art. ${c.article}`;
      if (c.section) s += `, § ${c.section}`;
      return s;
    }

    case "state-const":
      return `${c.code} art. ${c.article}${c.section ? `, § ${c.section}` : ""}`;

    case "exec-order":
      return `Exec. Or. No. ${formatWithCommas(c.section)}`;

    case "case": {
      let s = `${c.parties}, ${c.volume} ${c.reporter} ${c.page}`;
      if (c.year) s += ` (${c.year})`;
      return s;
    }

    case "state":
      return `${c.code} § ${c.section}`;

    default:
      return formatBluebook(c); // fall back to Bluebook for types with identical ALWD format
  }
}

function formatPlainEnglish(c: ParsedCitation): string {
  const stateName = c.jurisdiction ? STATE_FULL_NAMES[c.jurisdiction] : null;

  switch (c.type) {
    case "usc":
      return `Title ${c.title} of the United States Code, Section ${c.section}${c.subsection ? `(${c.subsection})` : ""}`;

    case "cfr":
      return `Title ${c.title} of the Code of Federal Regulations, Section ${c.section}`;

    case "public-law": {
      let s = `Public Law ${c.section}`;
      if (c.volume && c.page) s += ` (${c.volume} Statutes at Large ${c.page})`;
      return s;
    }

    case "stat":
      return `Volume ${c.volume} of the Statutes at Large, page ${c.page}`;

    case "constitution": {
      if (c.amendment) {
        const ordinal = toOrdinal(c.amendment);
        let s = `${ordinal} Amendment to the United States Constitution`;
        if (c.section) s += `, Section ${c.section}`;
        return s;
      }
      let s = `Article ${c.article} of the United States Constitution`;
      if (c.section) s += `, Section ${c.section}`;
      if (c.subsection) s += `, Clause ${c.subsection}`;
      return s;
    }

    case "state-const": {
      const name = stateName ?? c.code?.replace(" Const.", "") ?? "";
      return `${name} Constitution, Article ${c.article}${c.section ? `, Section ${c.section}` : ""}`;
    }

    case "exec-order":
      return `Executive Order ${c.section}`;

    case "ag-opinion":
      return `Attorney General Opinion, Volume ${c.volume}, page ${c.page}${c.year ? ` (${c.year})` : ""}`;

    case "case":
      return `${c.parties} (${c.volume} ${c.reporter} ${c.page}${c.year ? `, ${c.year}` : ""})`;

    case "state": {
      const prefix = stateName ?? "";
      const codeBody = c.code ?? "";
      // Try to expand the code name
      const parts = codeBody.split(/\s+/);
      const stateAbbr = parts[0]; // e.g., "Cal."
      const codePart = parts.slice(1).join(" "); // e.g., "Civ. Code"
      const expandedCode = STATE_CODE_EXPANSIONS[codePart] ?? codePart;
      const displayState = prefix || stateAbbr;
      return `${displayState} ${expandedCode}, Section ${c.section}`;
    }

    case "state-reg": {
      const name = stateName ?? "";
      return c.title
        ? `${name} Code of Regulations, Title ${c.title}, Section ${c.section}`
        : `${name} Code of Regulations, Section ${c.section}`;
    }

    case "municipal":
      return `${c.code?.replace("Admin. Code", "Administrative Code") ?? c.code}, Section ${c.section}`;

    case "session-law":
      return `${c.year} ${stateName ?? ""} Session Laws, Chapter ${c.section}`;

    default:
      return c.raw;
  }
}

/** Format a parsed citation in the specified format */
export function formatCitation(citation: ParsedCitation, format: CitationFormat = "bluebook"): string {
  switch (format) {
    case "bluebook":
      return formatBluebook(citation);
    case "alwd":
      return formatAlwd(citation);
    case "plain-english":
      return formatPlainEnglish(citation);
  }
}

/** Format a number with commas for executive orders */
function formatWithCommas(num: string): string {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Convert Roman numeral or number to ordinal ("XIV" → "Fourteenth") */
function toOrdinal(value: string): string {
  const num = romanToInt(value) ?? parseInt(value, 10);
  if (isNaN(num)) return value;

  const ordinals: Record<number, string> = {
    1: "First", 2: "Second", 3: "Third", 4: "Fourth", 5: "Fifth",
    6: "Sixth", 7: "Seventh", 8: "Eighth", 9: "Ninth", 10: "Tenth",
    11: "Eleventh", 12: "Twelfth", 13: "Thirteenth", 14: "Fourteenth",
    15: "Fifteenth", 16: "Sixteenth", 17: "Seventeenth", 18: "Eighteenth",
    19: "Nineteenth", 20: "Twentieth", 21: "Twenty-First", 22: "Twenty-Second",
    23: "Twenty-Third", 24: "Twenty-Fourth", 25: "Twenty-Fifth",
    26: "Twenty-Sixth", 27: "Twenty-Seventh",
  };
  return ordinals[num] ?? `${num}th`;
}

function romanToInt(s: string): number | undefined {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  if (!/^[IVXLCDM]+$/i.test(s)) return undefined;
  let total = 0;
  const upper = s.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    const curr = map[upper[i]];
    const next = map[upper[i + 1]];
    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }
  return total;
}
