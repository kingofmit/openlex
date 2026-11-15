import { JurisdictionQuery, QueryResult, LegalAuthority } from "./types";
import { findJurisdiction, getHierarchy } from "./jurisdiction";
import { searchTopics } from "./topics";
import { AuthorityRegistry } from "./authority";

const DISCLAIMER = "OpenLex provides legal information, not legal advice. This data is for informational and educational purposes only. Consult a licensed attorney for advice on your specific situation.";

/** Execute a jurisdiction query */
export function queryJurisdiction(
  query: JurisdictionQuery,
  registry: AuthorityRegistry,
): QueryResult {
  const { topic, state, includeFederal = true, includeRegulations = true, includeCourts = true } = query;

  // Resolve topics
  const matchedTopics = searchTopics(topic);
  const topicIds = matchedTopics.map((t) => t.id);

  // Resolve jurisdictions
  const jurisdictionIds: string[] = [];
  if (state) {
    const j = findJurisdiction(state);
    if (j) {
      const hierarchy = getHierarchy(j.id);
      for (const h of hierarchy) {
        if (h.type === "federal" && !includeFederal) continue;
        jurisdictionIds.push(h.id);
      }
    }
  }
  if (includeFederal && !jurisdictionIds.includes("us")) {
    jurisdictionIds.push("us");
  }

  // Build authorities for each jurisdiction
  const authorities: LegalAuthority[] = [];
  for (const jId of jurisdictionIds) {
    const jurisdiction = findJurisdiction(jId);
    if (!jurisdiction) continue;

    const statutes = topicIds.flatMap((tid) => registry.findStatutes(jId, tid));
    const regulations = includeRegulations
      ? topicIds.flatMap((tid) => registry.findRegulations(jId, tid))
      : [];
    const governingBodies = topicIds.flatMap((tid) => registry.findBodies(jId, tid));
    const courts = includeCourts ? registry.findCourts(jId) : [];

    if (statutes.length > 0 || regulations.length > 0 || governingBodies.length > 0 || courts.length > 0) {
      authorities.push({
        jurisdiction,
        statutes,
        regulations,
        governingBodies,
        courts,
        preemption: [],
      });
    }
  }

  return {
    query,
    authorities,
    timestamp: Date.now(),
    disclaimer: DISCLAIMER,
  };
}
