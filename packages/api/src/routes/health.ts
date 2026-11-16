import { Hono } from "hono";
import { getAvailableTopics, ALL_TOPICS } from "@allem-law/statutes";

const health = new Hono();

health.get("/", (c) => {
  const topics = getAvailableTopics();
  const totalEntries = ALL_TOPICS.reduce((sum, t) => sum + t.entries.length, 0);
  return c.json({
    status: "ok",
    version: "0.1.0",
    topics: topics.length,
    totalStatuteEntries: totalEntries,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

export { health };
