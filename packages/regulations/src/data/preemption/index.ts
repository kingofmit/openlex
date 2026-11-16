import { PreemptionDomain, PreemptionRule } from "@openlex/core";

import { employmentPreemption } from "./employment";
import { consumerProtectionPreemption } from "./consumer-protection";
import { privacyPreemption } from "./privacy";
import { firearmsPreemption } from "./firearms";
import { marijuanaPreemption } from "./marijuana";
import { immigrationPreemption } from "./immigration";
import { environmentPreemption } from "./environment";
import { housingPreemption } from "./housing";

export {
  employmentPreemption,
  consumerProtectionPreemption,
  privacyPreemption,
  firearmsPreemption,
  marijuanaPreemption,
  immigrationPreemption,
  environmentPreemption,
  housingPreemption,
};

/** All preemption domains */
export const ALL_PREEMPTION_DOMAINS: PreemptionDomain[] = [
  employmentPreemption,
  consumerProtectionPreemption,
  privacyPreemption,
  firearmsPreemption,
  marijuanaPreemption,
  immigrationPreemption,
  environmentPreemption,
  housingPreemption,
];

/** Find all preemption rules that affect a given topic */
export function findPreemptionRules(topicId: string): PreemptionRule[] {
  return ALL_PREEMPTION_DOMAINS.flatMap((domain) =>
    domain.rules.filter((rule) => rule.affectedTopics.includes(topicId)),
  );
}

/** Get a preemption domain by name */
export function getPreemptionDomain(domain: string): PreemptionDomain | undefined {
  return ALL_PREEMPTION_DOMAINS.find((d) => d.domain === domain);
}
