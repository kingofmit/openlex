import { Hono } from "hono";
import { buildLegalIndex } from "@allem-law/search";
import { ALL_TOPICS, loadStatuteEntries } from "@allem-law/statutes";

const search = new Hono();

// Build the search index lazily on first request
let indexBuilt = false;
let searchIndex: ReturnType<typeof buildLegalIndex>;

function ensureIndex() {
  if (!indexBuilt) {
    const allStatutes = ALL_TOPICS.flatMap((t) => loadStatuteEntries(t));
    searchIndex = buildLegalIndex(allStatutes, []);
    indexBuilt = true;
  }
  return searchIndex;
}

/** GET /search?q=X&limit=20 — full-text search across statutes */
search.get("/", (c) => {
  const query = c.req.query("q");
  if (!query) {
    return c.json({ error: "Missing required query parameter: q" }, 400);
  }

  const limit = parseInt(c.req.query("limit") ?? "20", 10);
  const index = ensureIndex();
  const results = index.search(query, Math.min(limit, 100));

  return c.json({
    query,
    count: results.length,
    results,
    disclaimer: "OpenLex provides legal information, not legal advice.",
  });
});

export { search };
