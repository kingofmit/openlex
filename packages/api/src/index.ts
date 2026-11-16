import { serve } from "@hono/node-server";
import { createApp } from "./app";

export { createApp } from "./app";

const app = createApp();
const port = parseInt(process.env.PORT ?? "3000", 10);

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`OpenLex API running at http://localhost:${info.port}`);
});
