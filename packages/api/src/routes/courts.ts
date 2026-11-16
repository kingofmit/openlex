import { Hono } from "hono";
import { getStateCourtSystem, getAllCourtsForState, searchCourts } from "@openlex/courts";

const courts = new Hono();

/** GET /courts/:state — court hierarchy for a state */
courts.get("/:state", (c) => {
  const stateId = c.req.param("state").toLowerCase();

  const system = getStateCourtSystem(stateId);
  if (!system) {
    return c.json({ error: `State "${stateId}" not found` }, 404);
  }

  const includeFederal = c.req.query("includeFederal") !== "false";
  const courts = includeFederal
    ? getAllCourtsForState(stateId)
    : [system.supremeCourt, ...system.appellateCourts, ...system.trialCourts, ...system.specializedCourts];

  return c.json({
    state: stateId,
    stateName: system.stateName,
    hasIntermediateAppellate: system.hasIntermediateAppellate,
    judicialDistricts: system.judicialDistricts,
    notes: system.notes,
    courts,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

/** GET /courts/search?q=X — search courts by name */
courts.get("/search", (c) => {
  const query = c.req.query("q");
  if (!query) {
    return c.json({ error: "Missing required query parameter: q" }, 400);
  }

  const results = searchCourts(query);
  return c.json({ query, count: results.length, courts: results });
});

export { courts };
