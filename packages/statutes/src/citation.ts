/**
 * Main citation module — re-exports from sub-modules and provides
 * the primary parseCitation() and formatCitation() API.
 */

export type { ParsedCitation, CitationType, CitationFormat, CitationValidation, StateCodeInfo, StateCode } from "./citation-types";
export { emptyParsedCitation } from "./citation-types";
export { matchCitation, CITATION_PATTERNS, STATE_ABBR_MAP, STATE_CODE_TO_ABBR } from "./citation-patterns";
export { formatCitation } from "./citation-format";
export { validateCitation } from "./citation-validate";
export { STATE_CODE_STRUCTURES } from "./code-structures";

import { ParsedCitation, CitationFormat } from "./citation-types";
import { matchCitation } from "./citation-patterns";
import { formatCitation as format } from "./citation-format";
import { validateCitation as validate } from "./citation-validate";

/**
 * Parse a legal citation string into structured parts.
 * Supports 15+ citation formats including U.S.C., C.F.R., state codes,
 * constitutions, session laws, executive orders, case law, and more.
 */
export function parseCitation(raw: string): ParsedCitation {
  return matchCitation(raw);
}

/**
 * Parse, validate, and format a citation in one call.
 * Returns the formatted string and any validation issues.
 */
export function processCitation(
  raw: string,
  outputFormat: CitationFormat = "bluebook",
): {
  parsed: ParsedCitation;
  formatted: string;
  validation: { valid: boolean; errors: string[]; warnings: string[] };
} {
  const parsed = matchCitation(raw);
  const formatted = format(parsed, outputFormat);
  const validation = validate(parsed);
  return {
    parsed,
    formatted,
    validation: {
      valid: validation.valid,
      errors: validation.errors,
      warnings: validation.warnings,
    },
  };
}
