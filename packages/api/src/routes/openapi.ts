import { Hono } from "hono";
import { openapiSpec } from "../openapi";

const openapi = new Hono();

/** GET / — serves the OpenAPI 3.1 JSON specification */
openapi.get("/", (c) => {
  return c.json(openapiSpec);
});

export { openapi };
