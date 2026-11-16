import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "general_pi_years",
    label: "Personal Injury (Years)",
    type: "number",
    description: "Statute of limitations for general personal injury claims in years",
  },
  {
    key: "med_mal_years",
    label: "Medical Malpractice (Years)",
    type: "number",
    description: "Statute of limitations for medical malpractice claims in years",
  },
  {
    key: "discovery_rule",
    label: "Discovery Rule",
    type: "boolean",
    description: "Whether the statute begins at discovery of injury rather than date of injury",
  },
];

function findDurationYears(entry: StatuteEntry, keyword: string): number | null {
  const mv = entry.monetaryValues.find(
    (m) =>
      m.type === "duration" &&
      m.unit === "years" &&
      m.description.toLowerCase().includes(keyword.toLowerCase()),
  );
  return mv?.amount ?? null;
}

export const statuteOfLimitationsExtractor: TopicExtractor = {
  topic: "statute-of-limitations-pi",
  topicName: "Statute of Limitations (Personal Injury)",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const generalPiYears =
      findDurationYears(entry, "personal injury") ??
      findDurationYears(entry, "general") ??
      findMonetary(entry, "duration", "personal injury") ??
      extractNumber(entry, /personal injury[^\d]*(\d+)\s*years?/i);

    const medMalYears =
      findDurationYears(entry, "medical malpractice") ??
      findDurationYears(entry, "malpractice") ??
      findMonetary(entry, "duration", "malpractice") ??
      extractNumber(entry, /(?:medical )?malpractice[^\d]*(\d+)\s*years?/i);

    const discoveryRule =
      hasProvision(entry, "discovery rule") ||
      hasProvision(entry, "date of discovery") ||
      hasProvision(entry, "discovered");

    return {
      general_pi_years: generalPiYears,
      med_mal_years: medMalYears,
      discovery_rule: discoveryRule,
    };
  },
};
