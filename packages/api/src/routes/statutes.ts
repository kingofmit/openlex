import { Hono } from "hono";
import { getTopicData, loadStatuteEntries } from "@openlex/statutes";

const statutes = new Hono();

/** GET /statutes/:jurisdiction/:topic — statutes for a jurisdiction + topic */
statutes.get("/:jurisdiction/:topic", (c) => {
  const jurisdiction = c.req.param("jurisdiction").toLowerCase();
  const topic = c.req.param("topic");

  const topicData = getTopicData(topic);
  if (!topicData) {
    return c.json({ error: `Topic "${topic}" not found` }, 404);
  }

  const entries = loadStatuteEntries(topicData).filter(
    (e) => e.jurisdictionId === jurisdiction,
  );

  if (entries.length === 0) {
    return c.json({ error: `No statutes found for ${jurisdiction}/${topic}` }, 404);
  }

  return c.json({
    jurisdiction,
    topic,
    statutes: entries,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

/** GET /statutes/:topic — all states for a topic */
statutes.get("/:topic", (c) => {
  const topic = c.req.param("topic");

  const topicData = getTopicData(topic);
  if (!topicData) {
    return c.json({ error: `Topic "${topic}" not found` }, 404);
  }

  const entries = loadStatuteEntries(topicData);
  return c.json({
    topic,
    count: entries.length,
    statutes: entries,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

export { statutes };
