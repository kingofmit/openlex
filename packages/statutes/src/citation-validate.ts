import { ParsedCitation, CitationValidation } from "./citation-types";
import { STATE_ABBR_MAP } from "./citation-patterns";
import { STATE_CODE_STRUCTURES } from "./code-structures";

/**
 * Validate a parsed citation for structural correctness.
 * Checks format rules, jurisdiction matching, and code structure.
 */
export function validateCitation(citation: ParsedCitation): CitationValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  let suggestedCorrection: string | null = null;

  if (citation.type === "unknown") {
    errors.push("Could not parse citation format");
    return { valid: false, errors, warnings, suggestedCorrection };
  }

  // Check that federal citations have federal jurisdiction
  if (["usc", "cfr", "public-law", "stat", "constitution", "exec-order"].includes(citation.type)) {
    if (citation.jurisdiction && citation.jurisdiction !== "us") {
      warnings.push(`Federal citation type "${citation.type}" has non-federal jurisdiction "${citation.jurisdiction}"`);
    }
  }

  // Validate U.S.C. citations
  if (citation.type === "usc") {
    const titleNum = parseInt(citation.title ?? "", 10);
    if (isNaN(titleNum) || titleNum < 1 || titleNum > 54) {
      errors.push(`U.S.C. title "${citation.title}" is outside valid range (1-54)`);
    }
    if (!citation.section || citation.section === "") {
      errors.push("U.S.C. citation missing section number");
    }
  }

  // Validate C.F.R. citations
  if (citation.type === "cfr") {
    const titleNum = parseInt(citation.title ?? "", 10);
    if (isNaN(titleNum) || titleNum < 1 || titleNum > 50) {
      errors.push(`C.F.R. title "${citation.title}" is outside valid range (1-50)`);
    }
  }

  // Validate constitutional citations
  if (citation.type === "constitution") {
    if (!citation.amendment && !citation.article) {
      errors.push("Constitutional citation must specify an amendment or article");
    }
    if (citation.amendment) {
      const num = romanToInt(citation.amendment) ?? parseInt(citation.amendment, 10);
      if (isNaN(num) || num < 1 || num > 27) {
        errors.push(`Amendment "${citation.amendment}" is outside valid range (I-XXVII / 1-27)`);
      }
    }
    if (citation.article) {
      const num = romanToInt(citation.article) ?? parseInt(citation.article, 10);
      if (isNaN(num) || num < 1 || num > 7) {
        errors.push(`Article "${citation.article}" is outside valid range (I-VII / 1-7)`);
      }
    }
  }

  // Validate state citations against code structures
  if (citation.type === "state" && citation.jurisdiction) {
    const stateStructure = STATE_CODE_STRUCTURES.get(citation.jurisdiction);
    if (stateStructure) {
      const codeMatch = stateStructure.codes.some(
        (sc) =>
          citation.code?.includes(sc.abbreviation) ||
          citation.code?.includes(sc.bluebook),
      );
      if (!codeMatch && stateStructure.codes.length > 0) {
        warnings.push(
          `Code "${citation.code}" not recognized for ${stateStructure.stateName}. ` +
          `Known codes: ${stateStructure.codes.map((c) => c.bluebook).join(", ")}`,
        );
      }
    }
  }

  // Validate state jurisdiction is recognized
  if (citation.type === "state" && citation.jurisdiction === null && citation.code) {
    const firstWord = citation.code.split(/\s+/)[0];
    warnings.push(`Could not resolve state abbreviation "${firstWord}" to a jurisdiction`);
  }

  // Validate case citations
  if (citation.type === "case") {
    if (!citation.parties) {
      errors.push("Case citation missing party names");
    }
    if (!citation.volume) {
      errors.push("Case citation missing volume number");
    }
    if (!citation.reporter) {
      errors.push("Case citation missing reporter");
    }
    if (!citation.page) {
      errors.push("Case citation missing page number");
    }
  }

  // Validate year format where present
  if (citation.year) {
    const yearNum = parseInt(citation.year, 10);
    if (isNaN(yearNum) || yearNum < 1776 || yearNum > new Date().getFullYear() + 1) {
      warnings.push(`Year "${citation.year}" seems unlikely`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    suggestedCorrection,
  };
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
