import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "no_fault",
    label: "No-Fault Divorce",
    type: "boolean",
    description: "Whether no-fault divorce is available",
  },
  {
    key: "fault_grounds",
    label: "Fault Grounds Available",
    type: "boolean",
    description: "Whether fault-based divorce grounds exist",
  },
  {
    key: "waiting_period_days",
    label: "Waiting Period (Days)",
    type: "number",
    description: "Mandatory waiting period before divorce is finalized",
  },
  {
    key: "residency_days",
    label: "Residency Requirement (Days)",
    type: "number",
    description: "Minimum days of residency required before filing",
  },
  {
    key: "filing_fee",
    label: "Filing Fee",
    type: "currency",
    description: "Fee to file a divorce petition",
  },
];

export const divorceExtractor: TopicExtractor = {
  topic: "divorce",
  topicName: "Divorce",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const noFault =
      hasProvision(entry, "no-fault") ||
      hasProvision(entry, "no fault") ||
      hasProvision(entry, "irreconcilable") ||
      hasProvision(entry, "irretrievable breakdown");

    const faultGrounds =
      hasProvision(entry, "fault") ||
      hasProvision(entry, "adultery") ||
      hasProvision(entry, "cruelty") ||
      hasProvision(entry, "abandonment");

    const waitingPeriodDays =
      findMonetary(entry, "duration", "waiting") ??
      findMonetary(entry, "duration", "cooling") ??
      extractNumber(entry, /waiting\s+period[^\d]*(\d+)\s*days?/i);

    const residencyDays =
      findMonetary(entry, "duration", "residen") ??
      extractNumber(entry, /residen(?:cy|ce)[^\d]*(\d+)\s*days?/i);

    const filingFee =
      findMonetary(entry, "fee", "filing") ??
      findMonetary(entry, "fee", "divorce") ??
      findMonetary(entry, "fee", "petition");

    return {
      no_fault: noFault,
      fault_grounds: faultGrounds,
      waiting_period_days: waitingPeriodDays,
      residency_days: residencyDays,
      filing_fee: filingFee,
    };
  },
};
