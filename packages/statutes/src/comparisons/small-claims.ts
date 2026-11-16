import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "max_amount",
    label: "Maximum Claim Amount",
    type: "currency",
    description: "Maximum dollar amount that can be claimed in small claims court",
  },
  {
    key: "attorneys_allowed",
    label: "Attorneys Allowed",
    type: "boolean",
    description: "Whether attorneys are permitted to represent parties",
  },
  {
    key: "appeal_available",
    label: "Appeal Available",
    type: "boolean",
    description: "Whether losing party can appeal the judgment",
  },
  {
    key: "filing_fee",
    label: "Filing Fee",
    type: "currency",
    description: "Fee to file a small claims case",
  },
];

export const smallClaimsExtractor: TopicExtractor = {
  topic: "small-claims",
  topicName: "Small Claims Court",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const maxAmount =
      findMonetary(entry, "limit", "claim") ??
      findMonetary(entry, "limit", "jurisdictional") ??
      findMonetary(entry, "limit", "maximum") ??
      findMonetary(entry, "limit");

    const attorneysAllowed =
      hasProvision(entry, "attorney") || hasProvision(entry, "counsel")
        ? !hasProvision(entry, "no attorney") && !hasProvision(entry, "without attorney")
        : null;

    const appealAvailable =
      hasProvision(entry, "appeal") || hasProvision(entry, "de novo");

    const filingFee =
      findMonetary(entry, "fee", "filing") ?? findMonetary(entry, "fee", "small claims");

    return {
      max_amount: maxAmount,
      attorneys_allowed: attorneysAllowed,
      appeal_available: appealAvailable,
      filing_fee: filingFee,
    };
  },
};
