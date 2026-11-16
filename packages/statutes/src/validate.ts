import { StatuteEntry, MonetaryValue } from "@openlex/core";
import { TopicDataFile, StatuteEntryData } from "./loader";

export interface ValidationError {
  field: string;
  message: string;
  entryId?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
  entriesChecked: number;
}

const VALID_JURISDICTIONS = new Set([
  "us", "al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga",
  "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", "md",
  "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj",
  "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc",
  "sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy",
  "dc", "pr", "gu", "vi", "as", "mp",
]);

const VALID_MONETARY_TYPES = new Set(["limit", "fine", "fee", "threshold", "wage", "penalty", "duration"]);
const VALID_MONETARY_UNITS = new Set(["usd", "usd-per-hour", "usd-per-month", "usd-per-year", "months", "years", "days", "multiplier", "ratio", "ounces", "grams", "percent"]);
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function validateMonetaryValue(mv: MonetaryValue, entryId: string): ValidationError[] {
  const errors: ValidationError[] = [];
  if (!VALID_MONETARY_TYPES.has(mv.type)) {
    errors.push({ field: "monetaryValues.type", message: `Invalid type "${mv.type}"`, entryId });
  }
  if (typeof mv.amount !== "number" || isNaN(mv.amount)) {
    errors.push({ field: "monetaryValues.amount", message: "Amount must be a number", entryId });
  }
  if (!VALID_MONETARY_UNITS.has(mv.unit)) {
    errors.push({ field: "monetaryValues.unit", message: `Invalid unit "${mv.unit}"`, entryId });
  }
  if (!mv.description || mv.description.trim().length === 0) {
    errors.push({ field: "monetaryValues.description", message: "Description required", entryId });
  }
  return errors;
}

function validateEntry(entry: StatuteEntryData, topic: string): { errors: ValidationError[]; warnings: ValidationError[] } {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];
  const id = entry.id ?? `${topic}-${entry.jurisdiction}`;

  // Required fields
  if (!entry.jurisdiction) errors.push({ field: "jurisdiction", message: "Missing jurisdiction", entryId: id });
  if (!VALID_JURISDICTIONS.has(entry.jurisdiction)) errors.push({ field: "jurisdiction", message: `Unknown jurisdiction "${entry.jurisdiction}"`, entryId: id });
  if (!entry.title) errors.push({ field: "title", message: "Missing title", entryId: id });
  if (!entry.code) errors.push({ field: "code", message: "Missing code", entryId: id });
  if (!entry.section) errors.push({ field: "section", message: "Missing section", entryId: id });
  if (!entry.citation) errors.push({ field: "citation", message: "Missing citation", entryId: id });
  if (!entry.sourceUrl) errors.push({ field: "sourceUrl", message: "Missing source URL", entryId: id });
  if (!entry.lastVerified) errors.push({ field: "lastVerified", message: "Missing lastVerified date", entryId: id });
  if (!entry.keyProvisions || entry.keyProvisions.length === 0) errors.push({ field: "keyProvisions", message: "At least one key provision required", entryId: id });

  // Date format
  if (entry.effectiveDate && !ISO_DATE_RE.test(entry.effectiveDate)) {
    errors.push({ field: "effectiveDate", message: `Invalid date format "${entry.effectiveDate}" (expected YYYY-MM-DD)`, entryId: id });
  }
  if (entry.lastVerified && !ISO_DATE_RE.test(entry.lastVerified)) {
    errors.push({ field: "lastVerified", message: `Invalid date format "${entry.lastVerified}" (expected YYYY-MM-DD)`, entryId: id });
  }
  if (entry.sunsetDate && !ISO_DATE_RE.test(entry.sunsetDate)) {
    errors.push({ field: "sunsetDate", message: `Invalid date format "${entry.sunsetDate}" (expected YYYY-MM-DD)`, entryId: id });
  }

  // URL format
  if (entry.sourceUrl && !entry.sourceUrl.startsWith("https://")) {
    warnings.push({ field: "sourceUrl", message: "Source URL should use HTTPS", entryId: id });
  }

  // Freshness check — warn if lastVerified is more than 6 months ago
  if (entry.lastVerified && ISO_DATE_RE.test(entry.lastVerified)) {
    const verified = new Date(entry.lastVerified);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    if (verified < sixMonthsAgo) {
      warnings.push({ field: "lastVerified", message: `Entry last verified ${entry.lastVerified} — older than 6 months`, entryId: id });
    }
  }

  // Monetary values
  if (entry.monetaryValues) {
    for (const mv of entry.monetaryValues) {
      errors.push(...validateMonetaryValue(mv, id));
    }
  }

  return { errors, warnings };
}

/** Validate a topic data file */
export function validateTopicData(data: TopicDataFile): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!data.topic) errors.push({ field: "topic", message: "Missing topic" });
  if (!data.description) errors.push({ field: "description", message: "Missing description" });
  if (!data.entries || data.entries.length === 0) errors.push({ field: "entries", message: "No entries" });

  // Check for duplicate jurisdictions
  const seen = new Set<string>();
  for (const entry of data.entries ?? []) {
    if (seen.has(entry.jurisdiction)) {
      errors.push({ field: "jurisdiction", message: `Duplicate jurisdiction "${entry.jurisdiction}"`, entryId: entry.id });
    }
    seen.add(entry.jurisdiction);

    const result = validateEntry(entry, data.topic);
    errors.push(...result.errors);
    warnings.push(...result.warnings);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    entriesChecked: data.entries?.length ?? 0,
  };
}

/** Validate multiple topic data files and return a combined report */
export function validateAll(files: TopicDataFile[]): {
  valid: boolean;
  results: Map<string, ValidationResult>;
  totalEntries: number;
  totalErrors: number;
  totalWarnings: number;
} {
  const results = new Map<string, ValidationResult>();
  let totalEntries = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of files) {
    const result = validateTopicData(file);
    results.set(file.topic, result);
    totalEntries += result.entriesChecked;
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  return {
    valid: totalErrors === 0,
    results,
    totalEntries,
    totalErrors,
    totalWarnings,
  };
}
