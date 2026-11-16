import { Hono } from "hono";
import { queryJurisdiction, AuthorityRegistry } from "@allem-law/core";
import { ALL_TOPICS, loadStatuteEntries } from "@allem-law/statutes";

const query = new Hono();

// Build a registry lazily on first request
let registry: AuthorityRegistry | null = null;

function ensureRegistry(): AuthorityRegistry {
  if (!registry) {
    registry = new AuthorityRegistry();
    for (const topicData of ALL_TOPICS) {
      const entries = loadStatuteEntries(topicData);
      for (const entry of entries) {
        registry.registerStatute(entry);
      }
    }
  }
  return registry;
}

/** GET /query?topic=X&state=Y&includeFederal=true&asOfDate=YYYY-MM-DD */
query.get("/", (c) => {
  const topic = c.req.query("topic");
  if (!topic) {
    return c.json({ error: "Missing required query parameter: topic" }, 400);
  }

  const state = c.req.query("state")?.toLowerCase();
  const includeFederal = c.req.query("includeFederal") !== "false";
  const includeRegulations = c.req.query("includeRegulations") !== "false";
  const includeCourts = c.req.query("includeCourts") !== "false";
  const asOfDate = c.req.query("asOfDate");

  const reg = ensureRegistry();
  const result = queryJurisdiction(
    { topic, state, includeFederal, includeRegulations, includeCourts, asOfDate },
    reg,
  );

  return c.json(result);
});

export { query };
