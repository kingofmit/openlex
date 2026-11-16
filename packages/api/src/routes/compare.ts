import { Hono } from "hono";
import { getTopicData, loadStatuteEntries, compareTopicAcrossStates, toGeoJSON } from "@openlex/statutes";
import { comparisonToCSV, comparisonToMarkdown } from "@openlex/export";

const compare = new Hono();

/** GET /compare?topic=X&states=CA,TX,NY&format=json|csv|markdown|geojson */
compare.get("/", (c) => {
  const topic = c.req.query("topic");
  if (!topic) {
    return c.json({ error: "Missing required query parameter: topic" }, 400);
  }

  const topicData = getTopicData(topic);
  if (!topicData) {
    return c.json({ error: `Topic "${topic}" not found` }, 404);
  }

  const statesParam = c.req.query("states");
  const states = statesParam ? statesParam.split(",").map((s) => s.trim().toLowerCase()) : undefined;
  const format = c.req.query("format") ?? "json";

  const entries = loadStatuteEntries(topicData);
  const matrix = compareTopicAcrossStates(topic, entries, states);

  switch (format) {
    case "csv":
      c.header("Content-Type", "text/csv");
      c.header("Content-Disposition", `attachment; filename="${topic}-comparison.csv"`);
      return c.text(comparisonToCSV(matrix));

    case "markdown":
      c.header("Content-Type", "text/markdown");
      return c.text(comparisonToMarkdown(matrix));

    case "geojson": {
      const column = c.req.query("column") ?? matrix.columns[0]?.key;
      if (!column) {
        return c.json({ error: "No columns available for GeoJSON mapping" }, 400);
      }
      return c.json(toGeoJSON(matrix, column));
    }

    default:
      return c.json({
        matrix,
        disclaimer: "OpenLex provides legal information, not legal advice.",
      });
  }
});

export { compare };
