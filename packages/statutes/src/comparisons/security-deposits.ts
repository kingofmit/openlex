import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "max_deposit",
    label: "Maximum Deposit",
    type: "currency",
    description: "Maximum security deposit amount or multiplier allowed by law",
  },
  {
    key: "return_days",
    label: "Return Period (Days)",
    type: "number",
    description: "Number of days landlord has to return the deposit after move-out",
  },
  {
    key: "itemization_required",
    label: "Itemization Required",
    type: "boolean",
    description: "Whether landlord must provide itemized list of deductions",
  },
  {
    key: "interest_required",
    label: "Interest Required",
    type: "boolean",
    description: "Whether landlord must pay interest on held deposit",
  },
  {
    key: "penalty",
    label: "Penalty for Violations",
    type: "text",
    description: "Penalty imposed on landlord for non-compliance",
  },
];

export const securityDepositsExtractor: TopicExtractor = {
  topic: "security-deposits",
  topicName: "Security Deposits",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const maxDeposit = findMonetary(entry, "limit", "deposit");
    const returnDaysMv = findMonetary(entry, "duration", "return");
    const returnDays =
      returnDaysMv ?? extractNumber(entry, /(\d+)\s*(?:calendar\s+)?days?\s+(?:to\s+)?return/i);

    const itemizationRequired = hasProvision(entry, "itemiz");
    const interestRequired = hasProvision(entry, "interest");

    let penalty: string | null = entry.penalties;
    if (!penalty && hasProvision(entry, "penalty")) {
      const prov = entry.keyProvisions.find((p) =>
        p.toLowerCase().includes("penalty"),
      );
      penalty = prov ?? null;
    }

    return {
      max_deposit: maxDeposit,
      return_days: returnDays,
      itemization_required: itemizationRequired,
      interest_required: interestRequired,
      penalty,
    };
  },
};
