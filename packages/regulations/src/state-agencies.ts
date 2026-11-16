import { GoverningBody } from "@allem-law/core";
import { ALL_STATE_AGENCIES, findStateAgencies as findFromData } from "./data/state-agencies";

export { ALL_STATE_AGENCIES } from "./data/state-agencies";

/**
 * Find state agencies for a given state, optionally filtered by topic.
 */
export function findStateAgencies(stateId: string, topicId?: string): GoverningBody[] {
  return findFromData(stateId, topicId);
}

/**
 * Find the primary agency responsible for a topic in a specific state.
 * Returns the first matching agency (typically the main regulatory body).
 */
export function findPrimaryStateAgency(stateId: string, topicId: string): GoverningBody | null {
  const agencies = findFromData(stateId, topicId);
  return agencies[0] ?? null;
}

/**
 * Get all agencies across all states for a given topic.
 * Useful for building a 50-state regulatory body comparison.
 */
export function findAgenciesByTopic(topicId: string): GoverningBody[] {
  return ALL_STATE_AGENCIES.filter((a) => a.topics.includes(topicId));
}

/**
 * Get agency types available in a state (e.g., ["department", "commission", "board"]).
 */
export function getAgencyTypes(stateId: string): string[] {
  const agencies = findFromData(stateId);
  return [...new Set(agencies.map((a) => a.type))];
}
