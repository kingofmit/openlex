import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "bac_limit",
    label: "BAC Limit",
    type: "number",
    description: "Standard blood alcohol concentration limit",
  },
  {
    key: "enhanced_bac",
    label: "Enhanced BAC Threshold",
    type: "number",
    description: "BAC level triggering enhanced penalties",
  },
  {
    key: "first_offense_jail",
    label: "First Offense Jail",
    type: "text",
    description: "Jail time for first DUI offense",
  },
  {
    key: "first_offense_fine_min",
    label: "First Offense Fine (Min)",
    type: "currency",
    description: "Minimum fine for first DUI offense",
  },
  {
    key: "first_offense_fine_max",
    label: "First Offense Fine (Max)",
    type: "currency",
    description: "Maximum fine for first DUI offense",
  },
  {
    key: "ignition_interlock",
    label: "Ignition Interlock",
    type: "boolean",
    description: "Whether ignition interlock device is required for first offense",
  },
];

function findBacValue(entry: StatuteEntry, keyword?: string): number | null {
  const mv = entry.monetaryValues.find(
    (m) =>
      m.type === "limit" &&
      m.unit === "ratio" &&
      (!keyword || m.description.toLowerCase().includes(keyword.toLowerCase())),
  );
  return mv?.amount ?? null;
}

export const duiExtractor: TopicExtractor = {
  topic: "dui",
  topicName: "DUI / DWI",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const bacLimit =
      findBacValue(entry, "standard") ??
      findBacValue(entry) ??
      extractNumber(entry, /(?:bac|blood alcohol)[^\d]*(\d+\.?\d*)/i);

    const enhancedBac =
      findBacValue(entry, "enhanced") ??
      findBacValue(entry, "aggravated") ??
      extractNumber(entry, /enhanced[^\d]*(\d+\.?\d*)/i);

    let firstOffenseJail: string | null = null;
    const jailProv = entry.keyProvisions.find(
      (p) =>
        (p.toLowerCase().includes("first") || p.toLowerCase().includes("1st")) &&
        (p.toLowerCase().includes("jail") || p.toLowerCase().includes("imprison")),
    );
    if (jailProv) {
      firstOffenseJail = jailProv;
    } else if (entry.penalties) {
      firstOffenseJail = entry.penalties;
    }

    const firstOffenseFineMin =
      findMonetary(entry, "fine", "minimum") ?? findMonetary(entry, "fine", "min");
    const firstOffenseFineMax =
      findMonetary(entry, "fine", "maximum") ?? findMonetary(entry, "fine", "max");

    const ignitionInterlock =
      hasProvision(entry, "interlock") || hasProvision(entry, "ignition interlock");

    return {
      bac_limit: bacLimit,
      enhanced_bac: enhancedBac,
      first_offense_jail: firstOffenseJail,
      first_offense_fine_min: firstOffenseFineMin,
      first_offense_fine_max: firstOffenseFineMax,
      ignition_interlock: ignitionInterlock,
    };
  },
};
