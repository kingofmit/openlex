import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "filing_fee",
    label: "Filing Fee",
    type: "currency",
    description: "Fee to file articles of organization",
  },
  {
    key: "annual_fee",
    label: "Annual Fee",
    type: "currency",
    description: "Annual report or franchise tax fee",
  },
  {
    key: "operating_agreement_required",
    label: "Operating Agreement Required",
    type: "boolean",
    description: "Whether a written operating agreement is legally required",
  },
  {
    key: "publication_required",
    label: "Publication Required",
    type: "boolean",
    description: "Whether the LLC must publish formation notice in a newspaper",
  },
];

export const llcFormationExtractor: TopicExtractor = {
  topic: "business-formation",
  topicName: "LLC Formation",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const filingFee =
      findMonetary(entry, "fee", "filing") ??
      findMonetary(entry, "fee", "formation") ??
      findMonetary(entry, "fee", "articles");

    const annualFee =
      findMonetary(entry, "fee", "annual") ??
      findMonetary(entry, "fee", "franchise") ??
      findMonetary(entry, "fee", "report");

    const operatingAgreementRequired =
      hasProvision(entry, "operating agreement") &&
      (hasProvision(entry, "required") || hasProvision(entry, "shall"));

    const publicationRequired =
      hasProvision(entry, "publication") || hasProvision(entry, "publish");

    return {
      filing_fee: filingFee,
      annual_fee: annualFee,
      operating_agreement_required: operatingAgreementRequired,
      publication_required: publicationRequired,
    };
  },
};
