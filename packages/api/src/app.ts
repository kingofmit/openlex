import { Hono } from "hono";
import { cors } from "./middleware/cors";
import { cacheControl } from "./middleware/cache";
import { errorHandler } from "./middleware/error";
import { health } from "./routes/health";
import { query } from "./routes/query";
import { statutes } from "./routes/statutes";
import { compare } from "./routes/compare";
import { courts } from "./routes/courts";
import { search } from "./routes/search";
import { citations } from "./routes/citations";
import { preemption } from "./routes/preemption";

export function createApp(): Hono {
  const app = new Hono();

  // Middleware
  app.use("*", cors);
  app.use("*", cacheControl);
  app.onError(errorHandler);

  // Routes
  app.route("/health", health);
  app.route("/query", query);
  app.route("/statutes", statutes);
  app.route("/compare", compare);
  app.route("/courts", courts);
  app.route("/search", search);
  app.route("/citations", citations);
  app.route("/preemption", preemption);

  // Root
  app.get("/", (c) =>
    c.json({
      name: "OpenLex API",
      version: "0.1.0",
      description: "Open-source jurisdiction mapping engine for U.S. law",
      endpoints: [
        "GET /health",
        "GET /query?topic=X&state=Y",
        "GET /statutes/:topic",
        "GET /statutes/:jurisdiction/:topic",
        "GET /compare?topic=X&states=CA,TX,NY&format=json|csv|markdown|geojson",
        "GET /courts/:state",
        "GET /search?q=X",
        "POST /citations/parse",
        "GET /citations/format?citation=X&format=bluebook",
        "GET /preemption/:topic",
      ],
      disclaimer: "OpenLex provides legal information, not legal advice.",
    }),
  );

  return app;
}
