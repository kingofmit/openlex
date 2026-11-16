import { ErrorHandler } from "hono";

const DISCLAIMER = "OpenLex provides legal information, not legal advice. This data is for informational and educational purposes only.";

export const errorHandler: ErrorHandler = (err, c) => {
  console.error(`[OpenLex API Error] ${err.message}`);
  return c.json(
    {
      error: err.message || "Internal Server Error",
      disclaimer: DISCLAIMER,
    },
    500,
  );
};
