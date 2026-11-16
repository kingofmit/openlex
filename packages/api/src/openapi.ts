/**
 * OpenAPI 3.1 specification for the OpenLex API.
 *
 * Manually defined to match the route handlers in ./routes/*.ts
 * and the TypeScript interfaces in @openlex/core.
 */

export const openapiSpec = {
  openapi: "3.1.0",
  info: {
    title: "OpenLex API",
    version: "0.1.0",
    description:
      "Open-source jurisdiction mapping engine for U.S. law. Provides statutes, regulations, court hierarchies, citation parsing, 50-state comparisons, and federal preemption data.",
    license: {
      name: "MIT",
    },
    contact: {
      name: "OpenLex",
      url: "https://github.com/openlex",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local development server",
    },
  ],
  paths: {
    "/health": {
      get: {
        operationId: "getHealth",
        summary: "Health check",
        description: "Returns API status, version, topic count, and total statute entries.",
        tags: ["System"],
        responses: {
          "200": {
            description: "API is healthy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["status", "version", "topics", "totalStatuteEntries", "disclaimer"],
                  properties: {
                    status: { type: "string", example: "ok" },
                    version: { type: "string", example: "0.1.0" },
                    topics: { type: "integer", example: 12 },
                    totalStatuteEntries: { type: "integer", example: 600 },
                    disclaimer: { type: "string", example: "OpenLex provides legal information, not legal advice." },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/query": {
      get: {
        operationId: "queryJurisdiction",
        summary: "Query jurisdiction authorities",
        description:
          "Main jurisdiction query. Returns statutes, regulations, governing bodies, courts, and preemption notes for a given topic and optional state.",
        tags: ["Query"],
        parameters: [
          { name: "topic", in: "query", required: true, schema: { type: "string" }, description: "Legal topic ID (e.g. minimum-wage, cannabis)" },
          { name: "state", in: "query", required: false, schema: { type: "string" }, description: "State abbreviation (e.g. CA, TX)" },
          { name: "includeFederal", in: "query", required: false, schema: { type: "boolean", default: true }, description: "Include federal authorities" },
          { name: "includeRegulations", in: "query", required: false, schema: { type: "boolean", default: true }, description: "Include regulations" },
          { name: "includeCourts", in: "query", required: false, schema: { type: "boolean", default: true }, description: "Include court information" },
          { name: "asOfDate", in: "query", required: false, schema: { type: "string", format: "date" }, description: "Temporal query date (YYYY-MM-DD)" },
        ],
        responses: {
          "200": {
            description: "Jurisdiction query result",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/QueryResult" },
              },
            },
          },
          "400": {
            description: "Missing required parameter",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },

    "/statutes/{topic}": {
      get: {
        operationId: "getStatutesByTopic",
        summary: "All states for a topic",
        description: "Returns all statute entries across every jurisdiction for the given topic.",
        tags: ["Statutes"],
        parameters: [
          { name: "topic", in: "path", required: true, schema: { type: "string" }, description: "Legal topic ID" },
        ],
        responses: {
          "200": {
            description: "Statutes for the topic",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["topic", "count", "statutes", "disclaimer"],
                  properties: {
                    topic: { type: "string" },
                    count: { type: "integer" },
                    statutes: { type: "array", items: { $ref: "#/components/schemas/StatuteEntry" } },
                    disclaimer: { type: "string" },
                  },
                },
              },
            },
          },
          "404": {
            description: "Topic not found",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/statutes/{jurisdiction}/{topic}": {
      get: {
        operationId: "getStatutesByJurisdictionAndTopic",
        summary: "Single jurisdiction + topic",
        description: "Returns statute entries for a specific jurisdiction and topic combination.",
        tags: ["Statutes"],
        parameters: [
          { name: "jurisdiction", in: "path", required: true, schema: { type: "string" }, description: "Jurisdiction ID (e.g. ca, tx, federal)" },
          { name: "topic", in: "path", required: true, schema: { type: "string" }, description: "Legal topic ID" },
        ],
        responses: {
          "200": {
            description: "Statutes for the jurisdiction and topic",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["jurisdiction", "topic", "statutes", "disclaimer"],
                  properties: {
                    jurisdiction: { type: "string" },
                    topic: { type: "string" },
                    statutes: { type: "array", items: { $ref: "#/components/schemas/StatuteEntry" } },
                    disclaimer: { type: "string" },
                  },
                },
              },
            },
          },
          "404": {
            description: "Topic or jurisdiction not found",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/compare": {
      get: {
        operationId: "compareStates",
        summary: "50-state comparison",
        description:
          "Generates a comparison matrix for a legal topic across states. Supports JSON, CSV, Markdown, and GeoJSON output formats.",
        tags: ["Compare"],
        parameters: [
          { name: "topic", in: "query", required: true, schema: { type: "string" }, description: "Legal topic ID" },
          { name: "states", in: "query", required: false, schema: { type: "string" }, description: "Comma-separated state abbreviations (e.g. CA,TX,NY). Omit for all states." },
          { name: "format", in: "query", required: false, schema: { type: "string", enum: ["json", "csv", "markdown", "geojson"], default: "json" }, description: "Output format" },
          { name: "column", in: "query", required: false, schema: { type: "string" }, description: "Column key for GeoJSON mapping (required when format=geojson)" },
        ],
        responses: {
          "200": {
            description: "Comparison result. Content-Type varies by format parameter.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["matrix", "disclaimer"],
                  properties: {
                    matrix: { $ref: "#/components/schemas/ComparisonMatrix" },
                    disclaimer: { type: "string" },
                  },
                },
              },
              "text/csv": {
                schema: { type: "string" },
              },
              "text/markdown": {
                schema: { type: "string" },
              },
            },
          },
          "400": {
            description: "Missing required parameter",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
          "404": {
            description: "Topic not found",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/courts/{state}": {
      get: {
        operationId: "getCourtsByState",
        summary: "Court hierarchy for a state",
        description: "Returns the court system for a given state, optionally including federal courts.",
        tags: ["Courts"],
        parameters: [
          { name: "state", in: "path", required: true, schema: { type: "string" }, description: "State abbreviation (e.g. ca, ny)" },
          { name: "includeFederal", in: "query", required: false, schema: { type: "boolean", default: true }, description: "Include federal courts" },
        ],
        responses: {
          "200": {
            description: "Court hierarchy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["state", "stateName", "hasIntermediateAppellate", "judicialDistricts", "notes", "courts", "disclaimer"],
                  properties: {
                    state: { type: "string" },
                    stateName: { type: "string" },
                    hasIntermediateAppellate: { type: "boolean" },
                    judicialDistricts: { type: ["integer", "null"] },
                    notes: { type: "array", items: { type: "string" } },
                    courts: { type: "array", items: { $ref: "#/components/schemas/Court" } },
                    disclaimer: { type: "string" },
                  },
                },
              },
            },
          },
          "404": {
            description: "State not found",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/search": {
      get: {
        operationId: "searchStatutes",
        summary: "Full-text search",
        description: "Full-text search across all statutes using an inverted index.",
        tags: ["Search"],
        parameters: [
          { name: "q", in: "query", required: true, schema: { type: "string" }, description: "Search query" },
          { name: "limit", in: "query", required: false, schema: { type: "integer", default: 20, maximum: 100 }, description: "Maximum number of results" },
        ],
        responses: {
          "200": {
            description: "Search results",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["query", "count", "results", "disclaimer"],
                  properties: {
                    query: { type: "string" },
                    count: { type: "integer" },
                    results: {
                      type: "array",
                      items: { $ref: "#/components/schemas/SearchResult" },
                    },
                    disclaimer: { type: "string" },
                  },
                },
              },
            },
          },
          "400": {
            description: "Missing required parameter",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/citations/parse": {
      post: {
        operationId: "parseCitation",
        summary: "Parse a legal citation",
        description:
          "Parses a raw citation string into structured parts. Supports 15+ citation formats including U.S.C., C.F.R., state codes, constitutions, session laws, executive orders, and case law.",
        tags: ["Citations"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["citation"],
                properties: {
                  citation: { type: "string", example: "42 U.S.C. \u00a7 1983" },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Parsed citation with validation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["parsed", "validation"],
                  properties: {
                    parsed: { $ref: "#/components/schemas/ParsedCitation" },
                    validation: { $ref: "#/components/schemas/CitationValidation" },
                  },
                },
              },
            },
          },
          "400": {
            description: "Missing citation field",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/citations/format": {
      get: {
        operationId: "formatCitation",
        summary: "Format a legal citation",
        description: "Parses, validates, and reformats a citation string in the specified style.",
        tags: ["Citations"],
        parameters: [
          { name: "citation", in: "query", required: true, schema: { type: "string" }, description: "Raw citation string" },
          { name: "format", in: "query", required: false, schema: { type: "string", enum: ["bluebook", "alwd", "plain-english"], default: "bluebook" }, description: "Output citation format" },
        ],
        responses: {
          "200": {
            description: "Formatted citation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["parsed", "formatted", "validation"],
                  properties: {
                    parsed: { $ref: "#/components/schemas/ParsedCitation" },
                    formatted: { type: "string" },
                    validation: {
                      type: "object",
                      required: ["valid", "errors", "warnings"],
                      properties: {
                        valid: { type: "boolean" },
                        errors: { type: "array", items: { type: "string" } },
                        warnings: { type: "array", items: { type: "string" } },
                      },
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Missing citation parameter",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },

    "/preemption/{topic}": {
      get: {
        operationId: "getPreemptionByTopic",
        summary: "Preemption rules for a topic",
        description: "Returns federal preemption rules for a topic, optionally filtered by state.",
        tags: ["Preemption"],
        parameters: [
          { name: "topic", in: "path", required: true, schema: { type: "string" }, description: "Legal topic ID" },
          { name: "state", in: "query", required: false, schema: { type: "string" }, description: "State abbreviation to filter results" },
        ],
        responses: {
          "200": {
            description: "Preemption rules",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["topic", "state", "count", "rules", "disclaimer"],
                  properties: {
                    topic: { type: "string" },
                    state: { type: ["string", "null"] },
                    count: { type: "integer" },
                    summary: { type: ["string", "null"], description: "Preemption summary (present when state is specified)" },
                    rules: { type: "array", items: { $ref: "#/components/schemas/PreemptionRule" } },
                    disclaimer: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/preemption": {
      get: {
        operationId: "listPreemptionDomains",
        summary: "List all preemption domains",
        description: "Returns a list of all preemption domains with their descriptions and rule counts.",
        tags: ["Preemption"],
        responses: {
          "200": {
            description: "List of preemption domains",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["count", "domains"],
                  properties: {
                    count: { type: "integer" },
                    domains: {
                      type: "array",
                      items: {
                        type: "object",
                        required: ["domain", "description", "ruleCount"],
                        properties: {
                          domain: { type: "string" },
                          description: { type: "string" },
                          ruleCount: { type: "integer" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Error: {
        type: "object",
        required: ["error"],
        properties: {
          error: { type: "string" },
        },
      },

      Jurisdiction: {
        type: "object",
        required: ["id", "name", "abbreviation", "type", "fips", "parent", "capital", "timezone"],
        properties: {
          id: { type: "string" },
          name: { type: "string", example: "California" },
          abbreviation: { type: "string", example: "CA" },
          type: { type: "string", enum: ["federal", "state", "territory", "district", "county", "city"] },
          fips: { type: ["string", "null"] },
          parent: { type: ["string", "null"] },
          capital: { type: ["string", "null"], example: "Sacramento" },
          timezone: { type: "string", example: "America/Los_Angeles" },
        },
      },

      Statute: {
        type: "object",
        required: ["id", "jurisdictionId", "title", "code", "section", "fullCitation", "text", "url", "effectiveDate", "topics"],
        properties: {
          id: { type: "string" },
          jurisdictionId: { type: "string" },
          title: { type: "string" },
          code: { type: "string" },
          section: { type: "string" },
          fullCitation: { type: "string", example: "Cal. Lab. Code \u00a7 1182.12" },
          text: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
          effectiveDate: { type: ["string", "null"], format: "date" },
          topics: { type: "array", items: { type: "string" } },
        },
      },

      StatuteEntry: {
        description: "Extended statute entry with sourcing metadata and structured provisions",
        allOf: [
          { $ref: "#/components/schemas/Statute" },
          {
            type: "object",
            required: ["sourceUrl", "lastVerified", "sunsetDate", "supersededBy", "keyProvisions", "penalties", "exceptions", "monetaryValues"],
            properties: {
              sourceUrl: { type: "string", format: "uri" },
              lastVerified: { type: "string", format: "date" },
              sunsetDate: { type: ["string", "null"], format: "date" },
              supersededBy: { type: ["string", "null"] },
              keyProvisions: { type: "array", items: { type: "string" } },
              penalties: { type: ["string", "null"] },
              exceptions: { type: ["string", "null"] },
              monetaryValues: { type: "array", items: { $ref: "#/components/schemas/MonetaryValue" } },
            },
          },
        ],
      },

      MonetaryValue: {
        type: "object",
        required: ["type", "amount", "unit", "description"],
        properties: {
          type: { type: "string", enum: ["limit", "fine", "fee", "threshold", "wage", "penalty", "duration"] },
          amount: { type: "number" },
          unit: { type: "string", enum: ["usd", "usd-per-hour", "usd-per-month", "usd-per-year", "months", "years", "days", "multiplier", "ratio", "ounces", "grams", "percent"] },
          description: { type: "string" },
        },
      },

      Regulation: {
        type: "object",
        required: ["id", "jurisdictionId", "agency", "title", "code", "section", "fullCitation", "text", "url", "effectiveDate", "topics"],
        properties: {
          id: { type: "string" },
          jurisdictionId: { type: "string" },
          agency: { type: "string" },
          title: { type: "string" },
          code: { type: "string" },
          section: { type: "string" },
          fullCitation: { type: "string" },
          text: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
          effectiveDate: { type: ["string", "null"], format: "date" },
          topics: { type: "array", items: { type: "string" } },
        },
      },

      GoverningBody: {
        type: "object",
        required: ["id", "jurisdictionId", "name", "abbreviation", "type", "url", "parentBody", "topics"],
        properties: {
          id: { type: "string" },
          jurisdictionId: { type: "string" },
          name: { type: "string" },
          abbreviation: { type: ["string", "null"] },
          type: { type: "string", enum: ["court", "agency", "commission", "board", "department"] },
          url: { type: ["string", "null"] },
          parentBody: { type: ["string", "null"] },
          topics: { type: "array", items: { type: "string" } },
        },
      },

      Court: {
        type: "object",
        required: ["id", "jurisdictionId", "name", "abbreviation", "level", "circuit", "district", "url"],
        properties: {
          id: { type: "string" },
          jurisdictionId: { type: "string" },
          name: { type: "string", example: "Supreme Court of California" },
          abbreviation: { type: "string", example: "Cal." },
          level: { type: "string", enum: ["supreme", "appellate", "trial", "specialized", "magistrate"] },
          circuit: { type: ["string", "null"] },
          district: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
        },
      },

      PreemptionNote: {
        type: "object",
        required: ["federalAuthority", "stateAuthority", "relationship", "description"],
        properties: {
          federalAuthority: { type: "string" },
          stateAuthority: { type: "string" },
          relationship: { type: "string", enum: ["preempts", "supplements", "concurrent", "defers"] },
          description: { type: "string" },
        },
      },

      PreemptionRule: {
        type: "object",
        required: ["id", "federalStatute", "federalCitation", "type", "scope", "description", "stateCanExceed", "affectedTopics", "affectedStates", "exceptions", "keyCase", "sourceUrl"],
        properties: {
          id: { type: "string" },
          federalStatute: { type: "string", example: "Fair Labor Standards Act" },
          federalCitation: { type: "string", example: "29 U.S.C. \u00a7 218(a)" },
          type: { type: "string", enum: ["express", "field", "conflict", "floor", "ceiling"] },
          scope: { type: "string" },
          description: { type: "string" },
          stateCanExceed: { type: "boolean" },
          affectedTopics: { type: "array", items: { type: "string" } },
          affectedStates: {
            oneOf: [
              { type: "array", items: { type: "string" } },
              { type: "string", const: "all" },
            ],
          },
          exceptions: { type: "array", items: { type: "string" } },
          keyCase: { type: ["string", "null"] },
          sourceUrl: { type: "string", format: "uri" },
        },
      },

      LegalAuthority: {
        type: "object",
        required: ["jurisdiction", "statutes", "regulations", "governingBodies", "courts", "preemption"],
        properties: {
          jurisdiction: { $ref: "#/components/schemas/Jurisdiction" },
          statutes: { type: "array", items: { $ref: "#/components/schemas/Statute" } },
          regulations: { type: "array", items: { $ref: "#/components/schemas/Regulation" } },
          governingBodies: { type: "array", items: { $ref: "#/components/schemas/GoverningBody" } },
          courts: { type: "array", items: { $ref: "#/components/schemas/Court" } },
          preemption: { type: "array", items: { $ref: "#/components/schemas/PreemptionNote" } },
        },
      },

      JurisdictionQuery: {
        type: "object",
        required: ["topic"],
        properties: {
          topic: { type: "string" },
          state: { type: "string" },
          county: { type: "string" },
          city: { type: "string" },
          includeFederal: { type: "boolean" },
          includeRegulations: { type: "boolean" },
          includeCourts: { type: "boolean" },
          asOfDate: { type: "string", format: "date" },
        },
      },

      QueryResult: {
        type: "object",
        required: ["query", "authorities", "timestamp", "disclaimer"],
        properties: {
          query: { $ref: "#/components/schemas/JurisdictionQuery" },
          authorities: { type: "array", items: { $ref: "#/components/schemas/LegalAuthority" } },
          timestamp: { type: "integer", description: "Unix timestamp in milliseconds" },
          disclaimer: { type: "string" },
        },
      },

      ComparisonColumn: {
        type: "object",
        required: ["key", "label", "type", "description"],
        properties: {
          key: { type: "string" },
          label: { type: "string" },
          type: { type: "string", enum: ["text", "number", "boolean", "enum", "currency"] },
          description: { type: "string" },
        },
      },

      ComparisonRow: {
        type: "object",
        required: ["jurisdictionId", "jurisdictionName", "values", "statutes", "sourceUrls", "notes"],
        properties: {
          jurisdictionId: { type: "string" },
          jurisdictionName: { type: "string" },
          values: {
            type: "object",
            additionalProperties: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                { type: "boolean" },
                { type: "null" },
              ],
            },
          },
          statutes: { type: "array", items: { type: "string" } },
          sourceUrls: { type: "array", items: { type: "string", format: "uri" } },
          notes: { type: ["string", "null"] },
        },
      },

      ComparisonSummary: {
        type: "object",
        required: ["totalStates", "categoryCounts", "ranges", "outliers"],
        properties: {
          totalStates: { type: "integer" },
          categoryCounts: {
            type: "object",
            additionalProperties: { type: "integer" },
          },
          ranges: {
            type: "object",
            additionalProperties: {
              type: "object",
              required: ["min", "max", "median"],
              properties: {
                min: { type: "number" },
                max: { type: "number" },
                median: { type: "number" },
              },
            },
          },
          outliers: { type: "array", items: { type: "string" } },
        },
      },

      ComparisonMatrix: {
        type: "object",
        required: ["topic", "topicName", "generatedAt", "columns", "rows", "summary"],
        properties: {
          topic: { type: "string" },
          topicName: { type: "string" },
          generatedAt: { type: "string", format: "date-time" },
          columns: { type: "array", items: { $ref: "#/components/schemas/ComparisonColumn" } },
          rows: { type: "array", items: { $ref: "#/components/schemas/ComparisonRow" } },
          summary: { $ref: "#/components/schemas/ComparisonSummary" },
        },
      },

      ParsedCitation: {
        type: "object",
        required: ["type", "title", "code", "section", "subsection", "jurisdiction", "raw", "volume", "page", "year", "article", "amendment", "parties", "reporter"],
        properties: {
          type: {
            type: "string",
            enum: ["usc", "cfr", "public-law", "stat", "constitution", "exec-order", "state", "state-const", "session-law", "municipal", "ag-opinion", "case", "state-reg", "unknown"],
          },
          title: { type: ["string", "null"] },
          code: { type: ["string", "null"] },
          section: { type: "string" },
          subsection: { type: ["string", "null"] },
          jurisdiction: { type: ["string", "null"] },
          raw: { type: "string", example: "42 U.S.C. \u00a7 1983" },
          volume: { type: ["string", "null"] },
          page: { type: ["string", "null"] },
          year: { type: ["string", "null"] },
          article: { type: ["string", "null"] },
          amendment: { type: ["string", "null"] },
          parties: { type: ["string", "null"] },
          reporter: { type: ["string", "null"] },
        },
      },

      CitationValidation: {
        type: "object",
        required: ["valid", "errors", "warnings", "suggestedCorrection"],
        properties: {
          valid: { type: "boolean" },
          errors: { type: "array", items: { type: "string" } },
          warnings: { type: "array", items: { type: "string" } },
          suggestedCorrection: { type: ["string", "null"] },
        },
      },

      SearchResult: {
        type: "object",
        required: ["id", "score", "metadata"],
        properties: {
          id: { type: "string", description: "Statute or regulation ID" },
          score: { type: "number", description: "TF-IDF relevance score" },
          metadata: {
            type: "object",
            additionalProperties: true,
            description: "Document metadata (jurisdiction, topic, citation, etc.)",
          },
        },
      },
    },
  },

  tags: [
    { name: "System", description: "Health checks and API metadata" },
    { name: "Query", description: "Jurisdiction authority queries" },
    { name: "Statutes", description: "Statute lookup by topic and jurisdiction" },
    { name: "Compare", description: "50-state comparison matrices" },
    { name: "Courts", description: "Court hierarchy data" },
    { name: "Search", description: "Full-text search" },
    { name: "Citations", description: "Citation parsing and formatting" },
    { name: "Preemption", description: "Federal preemption rules" },
  ],
} as const;
