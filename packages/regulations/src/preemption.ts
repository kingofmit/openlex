import { PreemptionRule, PreemptionDomain, PreemptionType } from "@openlex/core";
import { ALL_PREEMPTION_DOMAINS } from "./data/preemption";

/**
 * Find all preemption rules that affect a given topic.
 */
export function findPreemptionByTopic(topicId: string): PreemptionRule[] {
  const results: PreemptionRule[] = [];
  for (const domain of ALL_PREEMPTION_DOMAINS) {
    for (const rule of domain.rules) {
      if (rule.affectedTopics.includes(topicId)) {
        results.push(rule);
      }
    }
  }
  return results;
}

/**
 * Find preemption rules that affect a specific state and topic.
 * Returns only rules where the state is in affectedStates (or "all").
 */
export function findPreemptionByStateAndTopic(
  stateId: string,
  topicId: string,
): PreemptionRule[] {
  return findPreemptionByTopic(topicId).filter(
    (rule) => rule.affectedStates === "all" || rule.affectedStates.includes(stateId),
  );
}

/**
 * Find preemption rules by type (express, field, conflict, floor, ceiling).
 */
export function findPreemptionByType(type: PreemptionType): PreemptionRule[] {
  const results: PreemptionRule[] = [];
  for (const domain of ALL_PREEMPTION_DOMAINS) {
    for (const rule of domain.rules) {
      if (rule.type === type) {
        results.push(rule);
      }
    }
  }
  return results;
}

/**
 * Determine if a state can exceed the federal standard for a given topic.
 * Returns true if any applicable rule allows the state to go further.
 */
export function canStateExceedFederal(stateId: string, topicId: string): boolean {
  const rules = findPreemptionByStateAndTopic(stateId, topicId);
  return rules.some((r) => r.stateCanExceed);
}

/**
 * Get a preemption summary for a state and topic.
 * Returns a human-readable description of the federal-state relationship.
 */
export function getPreemptionSummary(stateId: string, topicId: string): string {
  const rules = findPreemptionByStateAndTopic(stateId, topicId);
  if (rules.length === 0) {
    return "No federal preemption identified. State law governs.";
  }

  const types = new Set(rules.map((r) => r.type));
  const parts: string[] = [];

  if (types.has("field")) {
    parts.push("Federal law occupies the field — state regulation is largely preempted.");
  }
  if (types.has("express")) {
    parts.push("Federal statute expressly preempts certain state laws.");
  }
  if (types.has("conflict")) {
    parts.push("State law may conflict with federal law.");
  }
  if (types.has("floor")) {
    const floorRules = rules.filter((r) => r.type === "floor");
    parts.push(
      `Federal law sets a minimum standard${floorRules.some((r) => r.stateCanExceed) ? " — states may provide greater protections" : ""}.`,
    );
  }
  if (types.has("ceiling")) {
    parts.push("Federal law sets a maximum — states cannot exceed.");
  }

  return parts.join(" ");
}

/**
 * Get all preemption domains.
 */
export function getAllPreemptionDomains(): PreemptionDomain[] {
  return ALL_PREEMPTION_DOMAINS;
}
