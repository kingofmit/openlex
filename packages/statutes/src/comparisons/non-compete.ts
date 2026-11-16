import { ComparisonColumn, StatuteEntry } from "@openlex/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "status",
    label: "Enforceability Status",
    type: "enum",
    description: "Whether non-competes are banned, restricted, or enforceable",
  },
  {
    key: "income_threshold",
    label: "Income Threshold",
    type: "currency",
    description: "Minimum income level for non-compete enforceability",
  },
  {
    key: "max_duration_months",
    label: "Maximum Duration (Months)",
    type: "number",
    description: "Maximum enforceable duration for non-compete agreements",
  },
  {
    key: "garden_leave_required",
    label: "Garden Leave Required",
    type: "boolean",
    description: "Whether employer must pay during the non-compete period",
  },
];

function determineStatus(entry: StatuteEntry): "banned" | "restricted" | "enforceable" {
  if (hasProvision(entry, "ban") || hasProvision(entry, "prohibit") || hasProvision(entry, "void")) {
    return "banned";
  }
  if (
    hasProvision(entry, "restrict") ||
    hasProvision(entry, "limit") ||
    hasProvision(entry, "threshold") ||
    hasProvision(entry, "exception")
  ) {
    return "restricted";
  }
  return "enforceable";
}

export const nonCompeteExtractor: TopicExtractor = {
  topic: "non-compete",
  topicName: "Non-Compete Agreements",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const status = determineStatus(entry);

    const incomeThreshold =
      findMonetary(entry, "threshold", "income") ??
      findMonetary(entry, "threshold", "salary") ??
      findMonetary(entry, "threshold");

    const maxDurationMonths =
      findMonetary(entry, "duration", "non-compete") ??
      findMonetary(entry, "duration", "restrict") ??
      extractNumber(entry, /(\d+)\s*months?/i);

    const gardenLeaveRequired =
      hasProvision(entry, "garden leave") || hasProvision(entry, "garden-leave");

    return {
      status,
      income_threshold: incomeThreshold,
      max_duration_months: maxDurationMonths,
      garden_leave_required: gardenLeaveRequired,
    };
  },
};
