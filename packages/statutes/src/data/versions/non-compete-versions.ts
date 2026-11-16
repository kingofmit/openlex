import { StatuteVersion } from "@openlex/core";

/**
 * Version history for non-compete agreement statutes in states that recently
 * banned or significantly restricted non-competes (2023-2024).
 *
 * Tracks the transition toward broader employee mobility protections.
 *
 * Sources: state legislative records, employment law publications.
 */
export const NON_COMPETE_VERSIONS: StatuteVersion[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // Minnesota (mn-non-compete) — Banned 2023
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mn-non-compete",
    version: 1,
    effectiveDate: "2020-01-01",
    expirationDate: "2023-07-01",
    changes: "Non-competes generally enforceable under common law; courts applied reasonableness test considering duration, geographic scope, and protectable interests",
    previousVersion: null,
    monetaryValues: [],
    keyProvisions: [
      "Non-competes enforceable if reasonable in scope, duration, and geography",
      "Courts applied case-by-case reasonableness analysis (Bennett v. Storz Broadcasting)",
      "No statutory restrictions on non-compete duration or scope",
      "Independent consideration (beyond continued employment) required after hire"
    ]
  },
  {
    statuteId: "mn-non-compete",
    version: 2,
    effectiveDate: "2023-07-01",
    expirationDate: null,
    changes: "HF 3035 (Omnibus Jobs Bill) enacted Minn. Stat. 181.988, voiding all post-employment non-compete agreements entered after July 1, 2023",
    previousVersion: 1,
    monetaryValues: [],
    keyProvisions: [
      "Non-compete agreements entered into on or after July 1, 2023 are void and unenforceable",
      "Applies to employees and independent contractors",
      "Non-solicitation agreements and NDAs remain enforceable",
      "Agreements with choice-of-law provisions selecting another state's law are unenforceable if worker resides or works primarily in MN",
      "Pre-existing non-competes entered before July 1, 2023 remain enforceable"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // California (ca-non-compete) — Strengthened 2024
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ca-non-compete",
    version: 1,
    effectiveDate: "1872-01-01",
    expirationDate: "2024-01-01",
    changes: "Cal. Bus. & Prof. Code 16600 voided non-competes except in narrow statutory exceptions (sale of business, partnership dissolution)",
    previousVersion: null,
    monetaryValues: [],
    keyProvisions: [
      "Non-compete agreements void under Bus. & Prof. Code 16600",
      "Narrow exceptions for sale of business goodwill (16601), partnership dissolution (16602), LLC dissolution (16602.5)",
      "Edwards v. Arthur Andersen (2008) confirmed broad reading of 16600",
      "Out-of-state non-competes unenforceable against CA-based employees"
    ]
  },
  {
    statuteId: "ca-non-compete",
    version: 2,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "AB 1076 and SB 699 strengthened non-compete ban; employers must notify current and former employees that void non-competes are unenforceable",
    previousVersion: 1,
    monetaryValues: [],
    keyProvisions: [
      "AB 1076 codifies Edwards v. Arthur Andersen — no non-compete regardless of where/when signed",
      "SB 699 makes it unlawful for employers to enter or attempt to enforce void non-competes",
      "Employers required to send written notice by February 14, 2024 to current and former employees (employed after Jan 1, 2022) that any non-compete clause is void",
      "Violation constitutes unfair competition; employees may seek injunctive relief and attorney fees",
      "Applies even if contract was signed outside California"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Colorado (co-non-compete) — Threshold updates 2022
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "co-non-compete",
    version: 1,
    effectiveDate: "2013-01-01",
    expirationDate: "2022-08-10",
    changes: "CRS 8-2-113 voided non-competes except for executives, managers, and professional staff; no salary threshold",
    previousVersion: null,
    monetaryValues: [],
    keyProvisions: [
      "Non-competes void except for executive and management personnel and professional staff",
      "Exceptions also for purchase/sale of business and trade secret protection",
      "No specific salary threshold required",
      "Physician non-competes limited: patients must be allowed to continue care"
    ]
  },
  {
    statuteId: "co-non-compete",
    version: 2,
    effectiveDate: "2022-08-10",
    expirationDate: "2024-01-01",
    changes: "HB 22-1317 added salary thresholds: non-competes only enforceable for workers earning above threshold ($101,250 for 2023); non-solicitation threshold lower",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 101250, unit: "usd-per-year", description: "Minimum compensation for enforceable non-compete (2023)" },
      { type: "threshold", amount: 60750, unit: "usd-per-year", description: "Minimum compensation for enforceable non-solicitation (2023)" }
    ],
    keyProvisions: [
      "Non-competes only enforceable for workers earning at or above threshold (adjusted annually)",
      "Customer non-solicitation agreements require lower but still significant salary threshold",
      "Employer must provide notice of non-compete terms at or before acceptance of employment offer",
      "Criminal penalty (misdemeanor) for employers who use void non-compete to intimidate",
      "Choice-of-law provisions cannot circumvent CO law for CO workers"
    ]
  },
  {
    statuteId: "co-non-compete",
    version: 3,
    effectiveDate: "2024-01-01",
    expirationDate: null,
    changes: "Annual threshold adjustment: non-compete salary threshold increased to $112,500; non-solicitation threshold to $67,500 based on CPI",
    previousVersion: 2,
    monetaryValues: [
      { type: "threshold", amount: 112500, unit: "usd-per-year", description: "Minimum compensation for enforceable non-compete (2024)" },
      { type: "threshold", amount: 67500, unit: "usd-per-year", description: "Minimum compensation for enforceable non-solicitation (2024)" }
    ],
    keyProvisions: [
      "Salary thresholds adjusted annually based on CPI per HB 22-1317",
      "Non-competes void for workers earning below $112,500/year",
      "Non-solicitation agreements void for workers earning below $67,500/year",
      "Employer must provide separate written notice of non-compete with specific disclosure language",
      "Void non-competes may give rise to civil penalties"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Illinois (il-non-compete) — Threshold changes 2022
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "il-non-compete",
    version: 1,
    effectiveDate: "2016-01-01",
    expirationDate: "2022-01-01",
    changes: "Illinois Freedom to Work Act (SB 3163) prohibited non-competes for low-wage employees earning at or below $13/hr",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 13, unit: "usd-per-hour", description: "Minimum hourly wage for enforceable non-compete" }
    ],
    keyProvisions: [
      "Non-competes unenforceable for employees earning $13/hr or less",
      "No other statutory restrictions on non-compete scope or duration",
      "Courts continued to apply reasonableness test for higher-earning employees",
      "Adequate consideration required (2 years of continued employment or additional consideration)"
    ]
  },
  {
    statuteId: "il-non-compete",
    version: 2,
    effectiveDate: "2022-01-01",
    expirationDate: null,
    changes: "SB 672 (amending 820 ILCS 90/) significantly raised salary thresholds and added procedural requirements for enforceable non-competes and non-solicitation agreements",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 75000, unit: "usd-per-year", description: "Minimum annual compensation for enforceable non-compete" },
      { type: "threshold", amount: 45000, unit: "usd-per-year", description: "Minimum annual compensation for enforceable non-solicitation" }
    ],
    keyProvisions: [
      "Non-competes unenforceable for employees earning less than $75,000/year",
      "Non-solicitation agreements unenforceable for employees earning less than $45,000/year",
      "Thresholds increase by $5,000 every 5 years (non-compete to $80,000 in 2027, etc.)",
      "Employer must advise employee in writing to consult attorney; 14-day review period required",
      "Non-competes prohibited for workers covered by collective bargaining agreements",
      "Attorney general enforcement authority; actual damages, injunctive relief, $5,000 per violation"
    ]
  },
];
