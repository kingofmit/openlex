import { StatuteVersion } from "@openlex/core";

/**
 * Version history for small claims court jurisdiction limits in states
 * that raised their limits recently (2020-2025).
 *
 * Tracks changes in monetary jurisdiction thresholds to enable temporal queries.
 *
 * Sources: state court administrative offices, Nolo, ABA resources.
 */
export const SMALL_CLAIMS_VERSIONS: StatuteVersion[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // Georgia (ga-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ga-small-claims",
    version: 1,
    effectiveDate: "2015-01-01",
    expirationDate: "2023-07-01",
    changes: "Magistrate Court small claims jurisdiction limit at $15,000 under OCGA 15-10-2",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 15000, unit: "usd", description: "Maximum claim amount in Magistrate Court" }
    ],
    keyProvisions: [
      "Magistrate Court handles claims up to $15,000",
      "No attorney required; simplified procedure",
      "Filing fee varies by county (typically $45-$75)",
      "Counterclaims permitted up to jurisdictional limit"
    ]
  },
  {
    statuteId: "ga-small-claims",
    version: 2,
    effectiveDate: "2023-07-01",
    expirationDate: null,
    changes: "SB 65 increased Magistrate Court jurisdictional limit from $15,000 to $25,000",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 25000, unit: "usd", description: "Maximum claim amount in Magistrate Court" }
    ],
    keyProvisions: [
      "Magistrate Court handles claims up to $25,000",
      "Largest increase in Georgia small claims history",
      "No attorney required; simplified procedure remains",
      "Effective for claims filed on or after July 1, 2023"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Michigan (mi-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mi-small-claims",
    version: 1,
    effectiveDate: "2015-01-01",
    expirationDate: "2024-01-01",
    changes: "Small Claims Division of District Court limited to $6,500 under MCL 600.8401",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 6500, unit: "usd", description: "Maximum claim amount in Small Claims Division" },
      { type: "fee", amount: 60, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Small Claims Division of District Court handles claims up to $6,500",
      "Attorneys not permitted to represent parties in small claims",
      "No jury trial; decided by magistrate or judge",
      "No formal discovery process"
    ]
  },
  {
    statuteId: "mi-small-claims",
    version: 2,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "HB 4454 increased small claims limit from $6,500 to $10,000 effective January 1, 2024",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 10000, unit: "usd", description: "Maximum claim amount in Small Claims Division" },
      { type: "fee", amount: 70, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Small Claims Division handles claims up to $10,000",
      "First increase since 2015; adjusted for inflation",
      "Attorneys still not permitted in small claims proceedings",
      "No formal discovery; simplified evidence rules remain"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Virginia (va-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "va-small-claims",
    version: 1,
    effectiveDate: "2008-07-01",
    expirationDate: "2021-07-01",
    changes: "General District Court small claims division limited to $5,000 under Va. Code 16.1-77",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 5000, unit: "usd", description: "Maximum small claims amount" },
      { type: "fee", amount: 46, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "General District Court small claims division handles claims up to $5,000",
      "Informal procedure; no attorneys required",
      "No right to jury trial in small claims",
      "Appeal to Circuit Court available (de novo trial)"
    ]
  },
  {
    statuteId: "va-small-claims",
    version: 2,
    effectiveDate: "2021-07-01",
    expirationDate: null,
    changes: "HB 2136 and SB 1446 increased General District Court civil jurisdiction to $25,000; small claims limit raised to $5,000 (unchanged) but GDC overall limit significantly expanded",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 5000, unit: "usd", description: "Maximum small claims amount (informal procedure)" },
      { type: "limit", amount: 25000, unit: "usd", description: "Maximum General District Court civil jurisdiction" }
    ],
    keyProvisions: [
      "General District Court civil jurisdiction increased from $4,500 to $25,000",
      "Small claims informal procedure available for claims up to $5,000",
      "Broader access to simplified court proceedings for mid-range claims",
      "Appeal to Circuit Court remains available"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Arizona (az-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "az-small-claims",
    version: 1,
    effectiveDate: "2012-01-01",
    expirationDate: "2023-01-01",
    changes: "Justice Court small claims division limited to $3,500 under ARS 22-503",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 3500, unit: "usd", description: "Maximum small claims amount" },
      { type: "fee", amount: 35, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Justice Court small claims handles claims up to $3,500",
      "No attorneys permitted to represent parties",
      "Simplified rules of evidence and procedure",
      "No right to appeal (judgment is final)"
    ]
  },
  {
    statuteId: "az-small-claims",
    version: 2,
    effectiveDate: "2023-01-01",
    expirationDate: null,
    changes: "SB 1264 increased Justice Court small claims limit from $3,500 to $5,000",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 5000, unit: "usd", description: "Maximum small claims amount" },
      { type: "fee", amount: 35, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Justice Court small claims handles claims up to $5,000",
      "No attorneys permitted; informal procedure preserved",
      "No right to appeal remains in effect",
      "Justice Court general civil jurisdiction also raised to $20,000"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Minnesota (mn-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mn-small-claims",
    version: 1,
    effectiveDate: "2014-08-01",
    expirationDate: "2024-01-01",
    changes: "Conciliation Court limited to $15,000 under Minn. Stat. 491A.01; consumer credit claims limited to $4,000",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 15000, unit: "usd", description: "Maximum conciliation court claim amount" },
      { type: "limit", amount: 4000, unit: "usd", description: "Maximum for consumer credit transaction claims" }
    ],
    keyProvisions: [
      "Conciliation (small claims) Court handles claims up to $15,000",
      "Consumer credit transaction claims capped at lower threshold",
      "No attorneys required; informal hearing before referee or judge",
      "Filing fee: $70-$80 depending on county"
    ]
  },
  {
    statuteId: "mn-small-claims",
    version: 2,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "HF 2887 increased Conciliation Court limit from $15,000 to $20,000; consumer credit claim limit raised to $6,000",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 20000, unit: "usd", description: "Maximum conciliation court claim amount" },
      { type: "limit", amount: 6000, unit: "usd", description: "Maximum for consumer credit transaction claims" }
    ],
    keyProvisions: [
      "Conciliation Court handles claims up to $20,000",
      "Consumer credit transaction claims raised to $6,000",
      "Part of broader judicial modernization legislation",
      "Filing fees adjusted to reflect higher limits"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Delaware (de-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "de-small-claims",
    version: 1,
    effectiveDate: "2010-01-01",
    expirationDate: "2023-07-01",
    changes: "Justice of the Peace Court limited to $15,000 under 10 Del. C. 9301",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 15000, unit: "usd", description: "Maximum JP Court civil claim" },
      { type: "fee", amount: 35, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Justice of the Peace Court handles civil claims up to $15,000",
      "Simplified filing and hearing process",
      "Mediation encouraged before trial",
      "Appeal available to Court of Common Pleas"
    ]
  },
  {
    statuteId: "de-small-claims",
    version: 2,
    effectiveDate: "2023-07-01",
    expirationDate: null,
    changes: "SB 76 increased Justice of the Peace Court civil jurisdiction from $15,000 to $25,000",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 25000, unit: "usd", description: "Maximum JP Court civil claim" },
      { type: "fee", amount: 45, unit: "usd", description: "Filing fee" }
    ],
    keyProvisions: [
      "Justice of the Peace Court handles civil claims up to $25,000",
      "Largest jurisdictional increase in JP Court history",
      "Simplified procedure maintained; mediation still encouraged",
      "Appeal to Court of Common Pleas remains available"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Colorado (co-small-claims)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "co-small-claims",
    version: 1,
    effectiveDate: "2019-01-01",
    expirationDate: "2025-01-01",
    changes: "County Court small claims division limited to $7,500 under CRS 13-6-403",
    previousVersion: null,
    monetaryValues: [
      { type: "limit", amount: 7500, unit: "usd", description: "Maximum small claims amount" },
      { type: "fee", amount: 55, unit: "usd", description: "Filing fee (claims $500-$7,500)" }
    ],
    keyProvisions: [
      "County Court small claims handles claims up to $7,500",
      "No attorneys permitted unless both parties agree or judge allows",
      "Mediation available through court-annexed programs",
      "No right to jury trial in small claims"
    ]
  },
  {
    statuteId: "co-small-claims",
    version: 2,
    effectiveDate: "2025-01-01",
    expirationDate: null,
    changes: "HB 24-1047 increased small claims limit from $7,500 to $10,000 effective January 1, 2025",
    previousVersion: 1,
    monetaryValues: [
      { type: "limit", amount: 10000, unit: "usd", description: "Maximum small claims amount" },
      { type: "fee", amount: 55, unit: "usd", description: "Filing fee (claims $500-$10,000)" }
    ],
    keyProvisions: [
      "County Court small claims handles claims up to $10,000",
      "Attorneys generally not permitted unless both sides agree",
      "Court-annexed mediation still available",
      "Reflects inflation adjustment since last increase in 2019"
    ]
  },
];
