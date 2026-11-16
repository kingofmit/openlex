import { ComparisonColumn, StatuteEntry } from "@allem-law/core";
import {
  TopicExtractor,
  findMonetary,
  hasProvision,
  extractNumber,
} from "./extractor";

const columns: ComparisonColumn[] = [
  {
    key: "standard_rate",
    label: "Standard Hourly Rate",
    type: "currency",
    description: "Standard minimum wage rate per hour",
  },
  {
    key: "tipped_rate",
    label: "Tipped Employee Rate",
    type: "currency",
    description: "Minimum wage rate for tipped employees",
  },
  {
    key: "follows_federal",
    label: "Follows Federal Rate",
    type: "boolean",
    description: "Whether the state follows the federal minimum wage",
  },
  {
    key: "scheduled_increases",
    label: "Scheduled Increases",
    type: "text",
    description: "Upcoming scheduled minimum wage increases",
  },
];

export const minimumWageExtractor: TopicExtractor = {
  topic: "minimum-wage",
  topicName: "Minimum Wage",
  columns,

  extract(entry: StatuteEntry): Record<string, string | number | boolean | null> {
    const standardRate =
      findMonetary(entry, "wage", "standard") ??
      findMonetary(entry, "wage", "minimum") ??
      findMonetary(entry, "wage");

    const tippedRate =
      findMonetary(entry, "wage", "tipped") ??
      findMonetary(entry, "wage", "tip");

    const followsFederal =
      hasProvision(entry, "federal") && !hasProvision(entry, "exceeds federal");

    let scheduledIncreases: string | null = null;
    const increaseProv = entry.keyProvisions.find(
      (p) =>
        p.toLowerCase().includes("increase") ||
        p.toLowerCase().includes("scheduled") ||
        p.toLowerCase().includes("adjustment"),
    );
    if (increaseProv) {
      scheduledIncreases = increaseProv;
    }

    return {
      standard_rate: standardRate,
      tipped_rate: tippedRate,
      follows_federal: followsFederal,
      scheduled_increases: scheduledIncreases,
    };
  },
};
