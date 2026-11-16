import { Hono } from "hono";
import {
  findPreemptionByTopic,
  findPreemptionByStateAndTopic,
  getPreemptionSummary,
  getAllPreemptionDomains,
} from "@allem-law/regulations";

const preemption = new Hono();

/** GET /preemption/:topic — preemption rules for a topic */
preemption.get("/:topic", (c) => {
  const topic = c.req.param("topic");
  const state = c.req.query("state")?.toLowerCase();

  const rules = state
    ? findPreemptionByStateAndTopic(state, topic)
    : findPreemptionByTopic(topic);

  const summary = state
    ? getPreemptionSummary(state, topic)
    : undefined;

  return c.json({
    topic,
    state: state ?? null,
    count: rules.length,
    summary,
    rules,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

/** GET /preemption — list all preemption domains */
preemption.get("/", (c) => {
  const domains = getAllPreemptionDomains();
  return c.json({
    count: domains.length,
    domains: domains.map((d) => ({
      domain: d.domain,
      description: d.description,
      ruleCount: d.rules.length,
    })),
  });
});

export { preemption };
