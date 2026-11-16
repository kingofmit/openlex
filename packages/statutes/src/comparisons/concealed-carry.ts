import { ComparisonColumn, StatuteEntry } from "@openlex/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "permit_type",
    label: "Permit Type",
    type: "enum",
    description: "Type of concealed carry permit regime",
  },
  {
    key: "permit_fee",
    label: "Permit Fee",
    type: "currency",
    description: "Fee to obtain a concealed carry permit",
  },
  {
    key: "training_required",
    label: "Training Required",
    type: "boolean",
    description: "Whether firearms training is required for permit",
  },
  {
    key: "permit_years",
    label: "Permit Validity (Years)",
    type: "number",
    description: "Number of years a concealed carry permit is valid",
  },
];

function determinePermitType(
  entry: StatuteEntry,
): "constitutional" | "shall-issue" | "may-issue" {
  if (
    hasProvision(entry, "constitutional carry") ||
    hasProvision(entry, "permitless") ||
    hasProvision(entry, "unrestricted")
  ) {
    return "constitutional";
  }
  if (hasProvision(entry, "may-issue") || hasProvision(entry, "may issue")) {
    return "may-issue";
  }
  return "shall-issue";
}

export const concealedCarryExtractor: TopicExtractor = {
  topic: "concealed-carry",
  topicName: "Concealed Carry",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const permitType = determinePermitType(entry);

    const permitFee =
      findMonetary(entry, "fee", "permit") ??
      findMonetary(entry, "fee", "license") ??
      findMonetary(entry, "fee", "application");

    const trainingRequired =
      hasProvision(entry, "training") ||
      hasProvision(entry, "firearms course") ||
      hasProvision(entry, "safety course");

    const permitYears =
      findMonetary(entry, "duration", "permit") ??
      findMonetary(entry, "duration", "valid") ??
      extractNumber(entry, /(?:valid|expires?|renewal)\s*(?:for\s+)?(\d+)\s*years?/i);

    return {
      permit_type: permitType,
      permit_fee: permitFee,
      training_required: trainingRequired,
      permit_years: permitYears,
    };
  },
};
