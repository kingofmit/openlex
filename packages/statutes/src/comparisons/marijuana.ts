import { ComparisonColumn, StatuteEntry } from "@openlex/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "recreational_legal",
    label: "Recreational Legal",
    type: "boolean",
    description: "Whether recreational marijuana use is legal",
  },
  {
    key: "medical_legal",
    label: "Medical Legal",
    type: "boolean",
    description: "Whether medical marijuana is legal",
  },
  {
    key: "possession_limit_oz",
    label: "Possession Limit (oz)",
    type: "number",
    description: "Maximum personal possession amount in ounces",
  },
  {
    key: "home_grow",
    label: "Home Growing Allowed",
    type: "boolean",
    description: "Whether individuals may grow marijuana at home",
  },
  {
    key: "retail_sales",
    label: "Retail Sales",
    type: "boolean",
    description: "Whether retail dispensary sales are permitted",
  },
];

export const marijuanaExtractor: TopicExtractor = {
  topic: "marijuana",
  topicName: "Marijuana / Cannabis Laws",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const recreationalLegal =
      hasProvision(entry, "recreational") ||
      hasProvision(entry, "adult use") ||
      hasProvision(entry, "adult-use");

    const medicalLegal =
      hasProvision(entry, "medical") || hasProvision(entry, "medicinal");

    // Look for possession limit in monetaryValues (ounces) or parse from provisions
    const possessionMv = entry.monetaryValues.find(
      (m) =>
        (m.unit === "ounces" || m.unit === "grams") &&
        m.description.toLowerCase().includes("possession"),
    );
    let possessionLimitOz: number | null = null;
    if (possessionMv) {
      possessionLimitOz =
        possessionMv.unit === "grams"
          ? Math.round((possessionMv.amount / 28.3495) * 10) / 10
          : possessionMv.amount;
    } else {
      possessionLimitOz =
        extractNumber(entry, /(\d+(?:\.\d+)?)\s*(?:oz|ounces?)\b/i) ??
        extractNumber(entry, /possess[^\d]*(\d+(?:\.\d+)?)\s*(?:oz|ounces?)/i);
    }

    const homeGrow =
      hasProvision(entry, "home grow") ||
      hasProvision(entry, "home cultivation") ||
      hasProvision(entry, "personal cultivation");

    const retailSales =
      hasProvision(entry, "retail") ||
      hasProvision(entry, "dispensary") ||
      hasProvision(entry, "commercial sale");

    return {
      recreational_legal: recreationalLegal,
      medical_legal: medicalLegal,
      possession_limit_oz: possessionLimitOz,
      home_grow: homeGrow,
      retail_sales: retailSales,
    };
  },
};
