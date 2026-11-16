import { Hono } from "hono";
import { parseCitation, formatCitation, validateCitation, processCitation } from "@allem-law/statutes";
import type { CitationFormat } from "@allem-law/statutes";

const citations = new Hono();

/** POST /citations/parse — parse a citation string */
citations.post("/parse", async (c) => {
  const body = await c.req.json<{ citation: string }>();
  if (!body.citation) {
    return c.json({ error: "Missing required field: citation" }, 400);
  }

  const parsed = parseCitation(body.citation);
  const validation = validateCitation(parsed);

  return c.json({ parsed, validation });
});

/** GET /citations/format?citation=X&format=bluebook|alwd|plain-english */
citations.get("/format", (c) => {
  const citation = c.req.query("citation");
  if (!citation) {
    return c.json({ error: "Missing required query parameter: citation" }, 400);
  }

  const format = (c.req.query("format") ?? "bluebook") as CitationFormat;
  const result = processCitation(citation, format);

  return c.json(result);
});

export { citations };
