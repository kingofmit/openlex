import { MiddlewareHandler } from "hono";

/** Add cache headers — data changes infrequently */
export const cacheControl: MiddlewareHandler = async (c, next) => {
  await next();
  if (c.req.method === "GET" && c.res.status === 200) {
    c.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
  }
};
