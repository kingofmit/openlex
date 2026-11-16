import { StatuteVersion } from "@openlex/core";

/**
 * Version history for minimum wage statutes across the 15 states with
 * the most frequent minimum wage changes (~2020-2025).
 *
 * Enables temporal queries such as:
 *   "What was the minimum wage in California on January 1, 2022?"
 *
 * Sources: state labor department publications, DOL wage tables, enacted legislation.
 */
export const MINIMUM_WAGE_VERSIONS: StatuteVersion[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // California (ca-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ca-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $12.00/hr to $13.00/hr for employers with 25 or fewer employees, and from $13.00/hr to $14.00/hr for employers with 26+ employees (SB 3, 2016)",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage (26+ employees)" },
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Standard minimum wage (25 or fewer employees)" }
    ],
    keyProvisions: [
      "Two-tier rate based on employer size under SB 3 phased schedule",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "ca-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased to $14.00/hr for employers with 25 or fewer employees and $15.00/hr for employers with 26+ employees",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (26+ employees)" },
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage (25 or fewer employees)" }
    ],
    keyProvisions: [
      "Larger employers reached $15.00/hr target one year ahead of smaller employers",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "ca-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage unified at $15.00/hr for all employers regardless of size",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (all employers)" }
    ],
    keyProvisions: [
      "Two-tier system eliminated; single rate of $15.00/hr for all employers",
      "SB 3 phase-in schedule completed for smaller employers"
    ]
  },
  {
    statuteId: "ca-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $15.00/hr to $15.50/hr based on CPI adjustment (3.5% cap applied)",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 15.50, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "First CPI-based adjustment under AB 1228 inflation indexing provisions",
      "3.5% annual adjustment cap applied"
    ]
  },
  {
    statuteId: "ca-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $15.50/hr to $16.00/hr effective January 1, 2024",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 16.00, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "General minimum wage reached $16.00/hr for all employers",
      "Fast food workers covered by AB 1228 receive $20.00/hr effective April 1, 2024"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Washington (wa-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "wa-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $12.00/hr to $13.50/hr per Initiative 1433 phase-in schedule",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 13.50, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "Final step of Initiative 1433 (2016) phase-in schedule reached",
      "No tip credit; annual CPI adjustments begin in 2021"
    ]
  },
  {
    statuteId: "wa-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $13.50/hr to $13.69/hr based on CPI adjustment",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 13.69, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "First CPI-indexed adjustment under Initiative 1433",
      "Modest increase reflecting low inflation during 2020"
    ]
  },
  {
    statuteId: "wa-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $13.69/hr to $14.49/hr based on CPI adjustment",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 14.49, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "Larger-than-usual CPI increase reflecting 2021 inflation",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "wa-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $14.49/hr to $15.74/hr based on CPI adjustment",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 15.74, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "Significant CPI-driven increase reflecting elevated 2022 inflation",
      "Washington among highest state minimum wages nationally"
    ]
  },
  {
    statuteId: "wa-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: "2024-12-31",
    changes: "Minimum wage increased from $15.74/hr to $16.28/hr based on CPI adjustment",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 16.28, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "Continued annual CPI adjustment under Initiative 1433",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "wa-minimum-wage",
    version: 6,
    effectiveDate: "2025-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $16.28/hr to $16.66/hr based on CPI adjustment",
    previousVersion: 5,
    monetaryValues: [
      { type: "wage", amount: 16.66, unit: "usd-per-hour", description: "Standard minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment under Initiative 1433",
      "No tip credit; tipped employees receive full minimum wage"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // New York (ny-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ny-minimum-wage",
    version: 1,
    effectiveDate: "2020-12-31",
    expirationDate: "2021-12-30",
    changes: "NYC rate held at $15.00/hr; rest of state increased. General statewide rate $12.50/hr; Long Island and Westchester $14.00/hr",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (NYC)" },
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage (Long Island & Westchester)" },
      { type: "wage", amount: 12.50, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
    ],
    keyProvisions: [
      "Three-tier regional system: NYC, downstate suburbs, rest of state",
      "NYC reached $15.00/hr in 2019; suburbs and rest of state on phased schedule"
    ]
  },
  {
    statuteId: "ny-minimum-wage",
    version: 2,
    effectiveDate: "2021-12-31",
    expirationDate: "2022-12-30",
    changes: "Long Island and Westchester reached $15.00/hr; remainder of state increased to $13.20/hr",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (NYC, Long Island, Westchester)" },
      { type: "wage", amount: 13.20, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
    ],
    keyProvisions: [
      "Long Island and Westchester completed phase-in to $15.00/hr",
      "Remainder of state continued scheduled annual increases"
    ]
  },
  {
    statuteId: "ny-minimum-wage",
    version: 3,
    effectiveDate: "2022-12-31",
    expirationDate: "2023-12-31",
    changes: "Remainder of state increased from $13.20/hr to $14.20/hr; NYC/LI/Westchester held at $15.00/hr",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (NYC, Long Island, Westchester)" },
      { type: "wage", amount: 14.20, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
    ],
    keyProvisions: [
      "Rest-of-state rate continued phased increases toward $15.00",
      "Chapter 58 of Laws of 2023 enacted further scheduled increases statewide"
    ]
  },
  {
    statuteId: "ny-minimum-wage",
    version: 4,
    effectiveDate: "2024-01-01",
    expirationDate: "2024-12-31",
    changes: "NYC/Long Island/Westchester increased to $16.00/hr; remainder of state increased to $15.00/hr per Chapter 58, Laws of 2023",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 16.00, unit: "usd-per-hour", description: "Standard minimum wage (NYC, Long Island, Westchester)" },
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
    ],
    keyProvisions: [
      "Remainder of state reached $15.00/hr",
      "NYC/LI/Westchester entered new scheduled increase series under Part SS of Chapter 58"
    ]
  },
  {
    statuteId: "ny-minimum-wage",
    version: 5,
    effectiveDate: "2025-01-01",
    expirationDate: null,
    changes: "NYC/Long Island/Westchester increased to $16.50/hr; remainder of state increased to $15.50/hr",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 16.50, unit: "usd-per-hour", description: "Standard minimum wage (NYC, Long Island, Westchester)" },
      { type: "wage", amount: 15.50, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
    ],
    keyProvisions: [
      "Continued scheduled increases per Part SS of Chapter 58, Laws of 2023",
      "Annual indexed increases to begin statewide in 2027"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Colorado (co-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "co-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $11.10/hr to $12.00/hr per Amendment 70 phase-in schedule",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 8.98, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Final step of Amendment 70 (2016) phase-in to $12.00/hr",
      "CPI adjustments begin in 2021"
    ]
  },
  {
    statuteId: "co-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $12.00/hr to $12.32/hr based on CPI adjustment",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 12.32, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.30, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "First CPI-indexed adjustment following Amendment 70 phase-in completion",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "co-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $12.32/hr to $12.56/hr based on CPI adjustment",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 12.56, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.54, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment under Amendment 70",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "co-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $12.56/hr to $13.65/hr based on CPI adjustment reflecting elevated inflation",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 13.65, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 10.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Largest single-year CPI increase due to 2022 inflation",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "co-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $13.65/hr to $14.42/hr based on CPI adjustment",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 14.42, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 11.40, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Continued annual CPI adjustment under Amendment 70",
      "Tip credit of $3.02/hr"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Arizona (az-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "az-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $11.00/hr to $12.00/hr per Proposition 206 phase-in schedule",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Final step of Proposition 206 (Fair Wages and Healthy Families Act) phase-in",
      "CPI adjustments begin in 2021"
    ]
  },
  {
    statuteId: "az-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $12.00/hr to $12.15/hr based on CPI adjustment",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 12.15, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.15, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "First CPI-indexed adjustment following Proposition 206 phase-in",
      "Tip credit of $3.00/hr"
    ]
  },
  {
    statuteId: "az-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $12.15/hr to $12.80/hr based on CPI adjustment",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 12.80, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.80, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment under Proposition 206",
      "Tip credit of $3.00/hr"
    ]
  },
  {
    statuteId: "az-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $12.80/hr to $13.85/hr based on CPI adjustment",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 13.85, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 10.85, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Significant CPI-driven increase reflecting elevated 2022 inflation",
      "Tip credit of $3.00/hr"
    ]
  },
  {
    statuteId: "az-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $13.85/hr to $14.35/hr based on CPI adjustment",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 14.35, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 11.35, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Continued annual CPI adjustment under Proposition 206",
      "Tip credit of $3.00/hr"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Florida (fl-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "fl-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-09-29",
    changes: "CPI adjustment brought minimum wage from $8.46/hr to $8.56/hr",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 8.56, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.54, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Pre-Amendment 2 CPI-adjusted rate",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "fl-minimum-wage",
    version: 2,
    effectiveDate: "2021-09-30",
    expirationDate: "2022-09-29",
    changes: "Minimum wage increased from $8.65/hr to $10.00/hr per Amendment 2 (2020) phase-in schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.98, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "First step of Amendment 2 (approved Nov 2020) annual $1.00 increases to $15.00/hr",
      "Effective date September 30 each year per constitutional amendment"
    ]
  },
  {
    statuteId: "fl-minimum-wage",
    version: 3,
    effectiveDate: "2022-09-30",
    expirationDate: "2023-09-29",
    changes: "Minimum wage increased from $10.00/hr to $11.00/hr per Amendment 2 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 7.98, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Second step of Amendment 2 annual $1.00 increase schedule",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "fl-minimum-wage",
    version: 4,
    effectiveDate: "2023-09-30",
    expirationDate: "2024-09-29",
    changes: "Minimum wage increased from $11.00/hr to $12.00/hr per Amendment 2 schedule",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 8.98, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Third step of Amendment 2 annual $1.00 increase schedule",
      "Tip credit of $3.02/hr"
    ]
  },
  {
    statuteId: "fl-minimum-wage",
    version: 5,
    effectiveDate: "2024-09-30",
    expirationDate: null,
    changes: "Minimum wage increased from $12.00/hr to $13.00/hr per Amendment 2 schedule",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.98, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Fourth step of Amendment 2 annual $1.00 increase schedule",
      "Next increase to $14.00/hr on September 30, 2025; $15.00/hr on September 30, 2026"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Massachusetts (ma-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ma-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $12.00/hr to $12.75/hr per Grand Bargain Act (ch. 121 of Acts of 2018)",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.75, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 4.95, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Part of phased increase schedule under Grand Bargain Act of 2018",
      "Tipped minimum wage also on scheduled increase path"
    ]
  },
  {
    statuteId: "ma-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $12.75/hr to $13.50/hr per Grand Bargain Act schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 13.50, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.55, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Continued phased increase under Grand Bargain Act of 2018",
      "Tipped minimum wage increased to $5.55/hr"
    ]
  },
  {
    statuteId: "ma-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $13.50/hr to $14.25/hr per Grand Bargain Act schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 14.25, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.15, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Penultimate step in Grand Bargain Act phase-in to $15.00/hr",
      "Tipped minimum wage increased to $6.15/hr"
    ]
  },
  {
    statuteId: "ma-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $14.25/hr to $15.00/hr, completing the Grand Bargain Act phase-in",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.75, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Grand Bargain Act phase-in completed; $15.00/hr target reached",
      "Tipped minimum wage reached $6.75/hr; no further scheduled increases"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Oregon (or-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "or-minimum-wage",
    version: 1,
    effectiveDate: "2020-07-01",
    expirationDate: "2021-06-30",
    changes: "Standard minimum wage increased to $12.00/hr; Portland metro $13.25/hr; nonurban $11.00/hr (SB 1532 schedule)",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 13.25, unit: "usd-per-hour", description: "Portland metro minimum wage" },
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Nonurban counties minimum wage" }
    ],
    keyProvisions: [
      "Three-tier regional system under SB 1532 (2016): standard, Portland metro, nonurban",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "or-minimum-wage",
    version: 2,
    effectiveDate: "2021-07-01",
    expirationDate: "2022-06-30",
    changes: "Standard minimum wage increased to $12.75/hr; Portland metro $14.00/hr; nonurban $12.00/hr",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 12.75, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Portland metro minimum wage" },
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Nonurban counties minimum wage" }
    ],
    keyProvisions: [
      "Continued SB 1532 phase-in schedule",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "or-minimum-wage",
    version: 3,
    effectiveDate: "2022-07-01",
    expirationDate: "2023-06-30",
    changes: "Standard minimum wage increased to $13.50/hr; Portland metro $14.75/hr; nonurban $12.50/hr",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 13.50, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 14.75, unit: "usd-per-hour", description: "Portland metro minimum wage" },
      { type: "wage", amount: 12.50, unit: "usd-per-hour", description: "Nonurban counties minimum wage" }
    ],
    keyProvisions: [
      "SB 1532 phase-in nearing completion; CPI adjustments begin after phase-in",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "or-minimum-wage",
    version: 4,
    effectiveDate: "2023-07-01",
    expirationDate: "2024-06-30",
    changes: "Standard minimum wage increased to $13.50/hr; Portland metro $15.45/hr; nonurban $12.50/hr (CPI-adjusted)",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 13.50, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 15.45, unit: "usd-per-hour", description: "Portland metro minimum wage" },
      { type: "wage", amount: 12.50, unit: "usd-per-hour", description: "Nonurban counties minimum wage" }
    ],
    keyProvisions: [
      "Portland metro rate CPI-adjusted; standard and nonurban rates held steady",
      "CPI adjustment cap of 3.75% per ORS 653.025(4)"
    ]
  },
  {
    statuteId: "or-minimum-wage",
    version: 5,
    effectiveDate: "2024-07-01",
    expirationDate: null,
    changes: "Standard minimum wage increased to $14.70/hr; Portland metro $15.95/hr; nonurban $13.70/hr (CPI-adjusted)",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 14.70, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 15.95, unit: "usd-per-hour", description: "Portland metro minimum wage" },
      { type: "wage", amount: 13.70, unit: "usd-per-hour", description: "Nonurban counties minimum wage" }
    ],
    keyProvisions: [
      "All three tiers received CPI-based increases",
      "CPI adjustment cap of 3.75% per ORS 653.025(4)"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Connecticut (ct-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ct-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-09-30",
    changes: "Minimum wage increased from $11.00/hr to $12.00/hr per Public Act 19-4 schedule",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Part of scheduled increases under Public Act 19-4",
      "Tipped minimum wage set at 36.8% of tip credit rules"
    ]
  },
  {
    statuteId: "ct-minimum-wage",
    version: 2,
    effectiveDate: "2020-10-01",
    expirationDate: "2021-07-31",
    changes: "Minimum wage increased from $12.00/hr to $13.00/hr per Public Act 19-4 schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Mid-year increase per PA 19-4 schedule (October 1 effective date)",
      "Tipped minimum wage unchanged"
    ]
  },
  {
    statuteId: "ct-minimum-wage",
    version: 3,
    effectiveDate: "2021-08-01",
    expirationDate: "2022-06-30",
    changes: "Minimum wage increased from $13.00/hr to $14.00/hr per Public Act 19-4 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Continued PA 19-4 phase-in schedule",
      "Tipped minimum wage unchanged"
    ]
  },
  {
    statuteId: "ct-minimum-wage",
    version: 4,
    effectiveDate: "2023-06-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $15.00/hr to $15.69/hr; first ECI-indexed adjustment",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 15.69, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "$15.00/hr reached June 1, 2023; ECI adjustment applied same date",
      "Employment Cost Index replaces fixed schedule for future adjustments"
    ]
  },
  {
    statuteId: "ct-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage adjusted to $16.35/hr based on Employment Cost Index",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 16.35, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual ECI-based adjustment effective January 1",
      "Tipped minimum wage remains at $6.38/hr"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Illinois (il-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "il-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-06-30",
    changes: "Minimum wage increased from $9.25/hr to $9.25/hr (no change at start of 2020); mid-year increase to $10.00/hr on July 1",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 9.25, unit: "usd-per-hour", description: "Standard minimum wage (Jan-Jun 2020)" },
      { type: "wage", amount: 5.55, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "SB 1 / Public Act 101-0001 phased increases began in 2020",
      "Tipped minimum wage set at 60% of standard minimum wage"
    ]
  },
  {
    statuteId: "il-minimum-wage",
    version: 2,
    effectiveDate: "2020-07-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $9.25/hr to $10.00/hr per SB 1 schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Mid-year increase per SB 1 / Public Act 101-0001 schedule",
      "Tipped minimum wage 60% of standard rate"
    ]
  },
  {
    statuteId: "il-minimum-wage",
    version: 3,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $10.00/hr to $11.00/hr per SB 1 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.60, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual $1.00 increase per SB 1 phase-in schedule",
      "Tipped minimum wage 60% of standard rate"
    ]
  },
  {
    statuteId: "il-minimum-wage",
    version: 4,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $11.00/hr to $12.00/hr per SB 1 schedule",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 7.20, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual $1.00 increase per SB 1 phase-in schedule",
      "Tipped minimum wage 60% of standard rate"
    ]
  },
  {
    statuteId: "il-minimum-wage",
    version: 5,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $12.00/hr to $13.00/hr per SB 1 schedule",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 7.80, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual $1.00 increase per SB 1 phase-in schedule",
      "Tipped minimum wage 60% of standard rate"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // New Jersey (nj-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "nj-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased from $10.00/hr to $11.00/hr per A-15/S-2019 phase-in schedule",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Part of phased increase to $15.00/hr under A-15/S-2019 (2019)",
      "Seasonal and small employer rates on separate slower schedule"
    ]
  },
  {
    statuteId: "nj-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $11.00/hr to $12.00/hr per A-15/S-2019 schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 4.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual $1.00 increase per A-15/S-2019 schedule",
      "Tipped minimum wage also increased"
    ]
  },
  {
    statuteId: "nj-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $12.00/hr to $13.00/hr per A-15/S-2019 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual $1.00 increase per A-15/S-2019 schedule",
      "Tipped minimum wage increased to $5.13/hr"
    ]
  },
  {
    statuteId: "nj-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $13.00/hr to $14.13/hr per A-15/S-2019 schedule",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 14.13, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.26, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Increase slightly above $1.00 to account for CPI component",
      "Penultimate step before reaching $15.00/hr target"
    ]
  },
  {
    statuteId: "nj-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: "2024-12-31",
    changes: "Minimum wage increased from $14.13/hr to $15.13/hr; $15.00 target reached plus first CPI adjustment",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 15.13, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.26, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "$15.00/hr target reached; CPI adjustment of $0.13 applied on top",
      "Annual CPI adjustments continue going forward"
    ]
  },
  {
    statuteId: "nj-minimum-wage",
    version: 6,
    effectiveDate: "2025-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $15.13/hr to $15.49/hr based on CPI adjustment",
    previousVersion: 5,
    monetaryValues: [
      { type: "wage", amount: 15.49, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 5.62, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment applied to base $15.00 rate",
      "Seasonal/small employer rate: $13.73/hr; agricultural worker rate: $12.81/hr"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Maryland (md-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "md-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage increased to $11.00/hr for all employers per HB 166/SB 280 (2019) phase-in",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Phased increase schedule under Fight for Fifteen Act (HB 166/SB 280, 2019)",
      "Large employers (15+) and small employers on same schedule after override of governor veto"
    ]
  },
  {
    statuteId: "md-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage increased from $11.00/hr to $11.75/hr per HB 166/SB 280 schedule",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 11.75, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Large employer (15+) rate on scheduled path to $15.00 by 2025",
      "Small employer rate on separate slower schedule"
    ]
  },
  {
    statuteId: "md-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage increased from $11.75/hr to $12.50/hr per HB 166/SB 280 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 12.50, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Continued phased increase per Fight for Fifteen Act",
      "Tipped employee minimum wage unchanged at $3.63/hr"
    ]
  },
  {
    statuteId: "md-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $12.50/hr to $13.25/hr per HB 166/SB 280 schedule",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 13.25, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Penultimate step before large employer rate reaches $15.00",
      "Tipped employee minimum wage unchanged at $3.63/hr"
    ]
  },
  {
    statuteId: "md-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $13.25/hr to $15.00/hr for all employers, completing the phase-in",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Fight for Fifteen phase-in completed; $15.00/hr target reached",
      "Annual CPI adjustments begin for large employers (15+) in subsequent years"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Minnesota (mn-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mn-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage CPI-adjusted from $9.86/hr to $10.00/hr for large employers",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
      { type: "wage", amount: 8.15, unit: "usd-per-hour", description: "Small employer minimum wage" }
    ],
    keyProvisions: [
      "Two-tier system: large employer (annual revenue >= $500,000) and small employer",
      "No tip credit permitted; annual CPI adjustment"
    ]
  },
  {
    statuteId: "mn-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage CPI-adjusted from $10.00/hr to $10.08/hr for large employers",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 10.08, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
      { type: "wage", amount: 8.21, unit: "usd-per-hour", description: "Small employer minimum wage" }
    ],
    keyProvisions: [
      "Modest CPI adjustment reflecting low 2020 inflation",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "mn-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage CPI-adjusted from $10.08/hr to $10.33/hr for large employers",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 10.33, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
      { type: "wage", amount: 8.42, unit: "usd-per-hour", description: "Small employer minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment per Minn. Stat. section 177.24 subd. 2",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "mn-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage CPI-adjusted from $10.33/hr to $10.59/hr for large employers",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 10.59, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
      { type: "wage", amount: 8.63, unit: "usd-per-hour", description: "Small employer minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment",
      "No tip credit permitted"
    ]
  },
  {
    statuteId: "mn-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage CPI-adjusted from $10.59/hr to $10.85/hr for large employers",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 10.85, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
      { type: "wage", amount: 8.85, unit: "usd-per-hour", description: "Small employer minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment per Minn. Stat. section 177.24 subd. 2",
      "No tip credit permitted; youth wage (under 18): $8.85/hr"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Maine (me-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "me-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2020-12-31",
    changes: "Minimum wage CPI-adjusted from $11.00/hr to $12.00/hr",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "CPI-indexed rate per 2016 citizen initiative (Question 4)",
      "Tipped minimum wage set at 50% of standard minimum wage"
    ]
  },
  {
    statuteId: "me-minimum-wage",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage CPI-adjusted from $12.00/hr to $12.15/hr",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 12.15, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.08, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Modest CPI adjustment reflecting low 2020 inflation",
      "Tipped minimum wage 50% of standard rate"
    ]
  },
  {
    statuteId: "me-minimum-wage",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-12-31",
    changes: "Minimum wage CPI-adjusted from $12.15/hr to $12.75/hr",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 12.75, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment per citizen initiative",
      "Tipped minimum wage 50% of standard rate"
    ]
  },
  {
    statuteId: "me-minimum-wage",
    version: 4,
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage CPI-adjusted from $12.75/hr to $13.80/hr",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 13.80, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 6.90, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Larger CPI increase reflecting elevated 2022 inflation",
      "Tipped minimum wage 50% of standard rate"
    ]
  },
  {
    statuteId: "me-minimum-wage",
    version: 5,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage CPI-adjusted from $13.80/hr to $14.15/hr",
    previousVersion: 4,
    monetaryValues: [
      { type: "wage", amount: 14.15, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 7.08, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "Annual CPI adjustment per citizen initiative",
      "Tipped minimum wage 50% of standard rate"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Hawaii (hi-minimum-wage)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "hi-minimum-wage",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2021-12-31",
    changes: "Minimum wage held at $10.10/hr (per Act 82 of 2017 schedule; no increase in 2020-2021)",
    previousVersion: null,
    monetaryValues: [
      { type: "wage", amount: 10.10, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.35, unit: "usd-per-hour", description: "Tipped employee minimum wage (tip credit $0.75)" }
    ],
    keyProvisions: [
      "Rate set under Act 82 (2017) which raised minimum to $10.10 in 2018",
      "Tip credit of $0.75/hr"
    ]
  },
  {
    statuteId: "hi-minimum-wage",
    version: 2,
    effectiveDate: "2022-01-01",
    expirationDate: "2022-09-30",
    changes: "Minimum wage increased from $10.10/hr to $10.10/hr (held steady through September 2022; HB 2510/Act 114 signed in 2022 with increases starting October)",
    previousVersion: 1,
    monetaryValues: [
      { type: "wage", amount: 10.10, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 9.35, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
    ],
    keyProvisions: [
      "HB 2510 (Act 114 of 2022) enacted with phased increases beginning October 2022",
      "New schedule: $12 (Oct 2022), $14 (Jan 2024), $16 (Jan 2026), $18 (Jan 2028)"
    ]
  },
  {
    statuteId: "hi-minimum-wage",
    version: 3,
    effectiveDate: "2022-10-01",
    expirationDate: "2023-12-31",
    changes: "Minimum wage increased from $10.10/hr to $12.00/hr per HB 2510/Act 114 schedule",
    previousVersion: 2,
    monetaryValues: [
      { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Tipped employee minimum wage (tip credit $1.00)" }
    ],
    keyProvisions: [
      "First step of Act 114 phase-in; largest single increase ($1.90) in Hawaii history",
      "Tip credit increased to $1.00/hr"
    ]
  },
  {
    statuteId: "hi-minimum-wage",
    version: 4,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Minimum wage increased from $12.00/hr to $14.00/hr per Act 114 schedule",
    previousVersion: 3,
    monetaryValues: [
      { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage" },
      { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Tipped employee minimum wage (tip credit $1.00)" }
    ],
    keyProvisions: [
      "Second step of Act 114 phase-in",
      "Next scheduled increase to $16.00/hr on January 1, 2026"
    ]
  }
];
