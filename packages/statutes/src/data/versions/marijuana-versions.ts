import { StatuteVersion } from "@openlex/core";

/**
 * Version history for marijuana/cannabis legalization statutes across states
 * that changed their legal status recently (2020-2025).
 *
 * Tracks the transition from medical-only or illegal to recreational legalization.
 *
 * Sources: state legislative records, NORML, Marijuana Policy Project.
 */
export const MARIJUANA_VERSIONS: StatuteVersion[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // New York (ny-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ny-marijuana",
    version: 1,
    effectiveDate: "2014-07-05",
    expirationDate: "2021-03-30",
    changes: "Compassionate Care Act (2014) established limited medical marijuana program with restricted conditions and no smokable flower",
    previousVersion: null,
    monetaryValues: [
      { type: "fine", amount: 100, unit: "usd", description: "Civil penalty for unlawful possession of small amounts (up to 25g)" }
    ],
    keyProvisions: [
      "Medical marijuana only; limited qualifying conditions",
      "Possession of up to 25g decriminalized (civil penalty, not criminal)"
    ]
  },
  {
    statuteId: "ny-marijuana",
    version: 2,
    effectiveDate: "2021-03-31",
    expirationDate: "2023-12-27",
    changes: "Marijuana Regulation and Taxation Act (MRTA, S.854-A/A.1248-A) signed, legalizing adult-use cannabis; possession and home cultivation permitted immediately",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 3, unit: "ounces", description: "Legal possession limit for flower" },
      { type: "threshold", amount: 24, unit: "grams", description: "Legal possession limit for concentrates" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 3 ounces of flower and 24g of concentrates",
      "Home cultivation of up to 6 plants (3 mature) permitted per person",
      "Office of Cannabis Management (OCM) established to regulate market",
      "Automatic expungement of past convictions for newly legal activities"
    ]
  },
  {
    statuteId: "ny-marijuana",
    version: 3,
    effectiveDate: "2023-12-28",
    expirationDate: null,
    changes: "First licensed dispensaries opened; CAURD (Conditional Adult-Use Retail Dispensary) licenses prioritized for social equity applicants",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 2000, unit: "usd", description: "Adult-use dispensary license application fee" },
      { type: "threshold", amount: 3, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Licensed retail sales operational with CAURD social equity applicants prioritized",
      "13% state excise tax plus local option taxes",
      "Illicit market enforcement actions increased alongside licensed rollout"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // New Jersey (nj-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "nj-marijuana",
    version: 1,
    effectiveDate: "2010-01-18",
    expirationDate: "2021-02-21",
    changes: "New Jersey Compassionate Use Medical Marijuana Act (CUMMA) established medical marijuana program with limited dispensaries",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 2, unit: "ounces", description: "Monthly purchase limit for medical patients" }
    ],
    keyProvisions: [
      "Medical marijuana only; limited qualifying conditions",
      "Small number of licensed alternative treatment centers (ATCs)",
      "No home cultivation permitted"
    ]
  },
  {
    statuteId: "nj-marijuana",
    version: 2,
    effectiveDate: "2021-02-22",
    expirationDate: "2022-04-20",
    changes: "Constitutional amendment approved by voters in Nov 2020; enabling legislation (NJCREAMMA) signed Feb 2021 legalizing adult-use cannabis",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 6, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 6 ounces of cannabis",
      "Cannabis Regulatory Commission (CRC) established",
      "No home cultivation for recreational users",
      "Social equity provisions for licensing"
    ]
  },
  {
    statuteId: "nj-marijuana",
    version: 3,
    effectiveDate: "2022-04-21",
    expirationDate: null,
    changes: "Legal recreational sales began at licensed dispensaries; CRC issued first adult-use licenses to existing medical operators",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 10000, unit: "usd", description: "Annual dispensary license fee" },
      { type: "threshold", amount: 6, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Retail sales commenced April 21, 2022",
      "6.625% state sales tax plus social equity excise fee",
      "Municipalities may opt out of allowing cannabis businesses (over 70% did)",
      "Existing medical ATCs dual-licensed for adult-use sales"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Connecticut (ct-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ct-marijuana",
    version: 1,
    effectiveDate: "2012-10-01",
    expirationDate: "2021-06-30",
    changes: "Public Act 12-55 established medical marijuana program with registered dispensaries and qualifying patients",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 2.5, unit: "ounces", description: "Monthly supply limit for patients" }
    ],
    keyProvisions: [
      "Medical marijuana only; physician certification required",
      "Limited number of licensed producers and dispensaries",
      "No home cultivation for medical patients"
    ]
  },
  {
    statuteId: "ct-marijuana",
    version: 2,
    effectiveDate: "2021-07-01",
    expirationDate: "2023-01-09",
    changes: "SB 1201 (Public Act 21-1) signed, legalizing adult-use cannabis; possession limits effective immediately, sales to follow",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 1.5, unit: "ounces", description: "Legal possession limit for flower (on person)" },
      { type: "threshold", amount: 5, unit: "ounces", description: "Legal possession limit for flower (in home)" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 1.5 oz on person, 5 oz at home",
      "Home cultivation permitted (up to 6 plants, 3 mature) starting July 2023",
      "Social equity provisions with priority licensing for disproportionately impacted communities",
      "Automatic erasure of prior convictions for possession under 4 oz"
    ]
  },
  {
    statuteId: "ct-marijuana",
    version: 3,
    effectiveDate: "2023-01-10",
    expirationDate: null,
    changes: "Licensed retail sales commenced; first adult-use dispensaries opened with existing medical operators receiving hybrid licenses",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 3000, unit: "usd", description: "Retailer license application fee" },
      { type: "threshold", amount: 1.5, unit: "ounces", description: "Legal possession limit for flower (on person)" }
    ],
    keyProvisions: [
      "Retail recreational sales began January 10, 2023",
      "6.35% state sales tax plus 3% municipal surcharge option",
      "Home cultivation for recreational users began July 1, 2023",
      "Social equity applicants receive priority in licensing queue"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Virginia (va-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "va-marijuana",
    version: 1,
    effectiveDate: "2020-07-01",
    expirationDate: "2021-07-01",
    changes: "Decriminalization of simple possession (SB 2 / HB 972): possession of up to 1 oz reduced from criminal misdemeanor to civil penalty",
    previousVersion: null,
    monetaryValues: [
      { type: "fine", amount: 25, unit: "usd", description: "Maximum civil penalty for possession up to 1 oz" }
    ],
    keyProvisions: [
      "Possession of up to 1 oz reduced to $25 civil penalty (no criminal record)",
      "Medical cannabis oil (CBD/THC-A) available through pharmaceutical processors",
      "No legal recreational market"
    ]
  },
  {
    statuteId: "va-marijuana",
    version: 2,
    effectiveDate: "2021-07-01",
    expirationDate: null,
    changes: "Adult-use possession and home cultivation legalized (HB 2312 / SB 1406); no retail sales framework enacted",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 1, unit: "ounces", description: "Legal public possession limit for flower" },
      { type: "fine", amount: 25, unit: "usd", description: "Civil penalty for public possession over 1 oz up to 4 oz" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 1 oz in public and cultivate up to 4 plants at home",
      "No legal retail sales; commercial market legislation stalled in General Assembly",
      "Sharing up to 1 oz permitted (no remuneration)",
      "Public consumption prohibited; $25 civil penalty"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // New Mexico (nm-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "nm-marijuana",
    version: 1,
    effectiveDate: "2007-07-01",
    expirationDate: "2021-06-28",
    changes: "Lynn and Erin Compassionate Use Act established medical cannabis program with licensed producers and qualifying patients",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 8, unit: "ounces", description: "90-day adequate supply for medical patients" }
    ],
    keyProvisions: [
      "Medical cannabis only; 21 qualifying conditions",
      "Licensed Non-Profit Producers (LNPPs) operate dispensaries",
      "Personal production licenses available for patients"
    ]
  },
  {
    statuteId: "nm-marijuana",
    version: 2,
    effectiveDate: "2021-06-29",
    expirationDate: "2022-04-01",
    changes: "Cannabis Regulation Act (HB 2) signed, legalizing adult-use cannabis; possession and home cultivation effective immediately",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 2, unit: "ounces", description: "Legal possession limit for flower" },
      { type: "threshold", amount: 16, unit: "grams", description: "Legal possession limit for concentrates" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 2 oz of flower and 16g of concentrates",
      "Home cultivation of up to 6 mature and 6 immature plants per person (max 12 per household)",
      "Cannabis Control Division (CCD) established under RLD",
      "Automatic expungement of prior convictions for newly legal conduct"
    ]
  },
  {
    statuteId: "nm-marijuana",
    version: 3,
    effectiveDate: "2022-04-01",
    expirationDate: null,
    changes: "Legal recreational sales commenced; CCD issued first retail licenses with social equity and microbusiness tiers",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 2500, unit: "usd", description: "Cannabis retailer license fee" },
      { type: "threshold", amount: 2, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Retail recreational sales began April 1, 2022",
      "12% excise tax plus GRT (gross receipts tax)",
      "Microbusiness license tier for small operators",
      "Municipal opt-out not permitted; local governments may impose reasonable time/place/manner restrictions"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Montana (mt-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mt-marijuana",
    version: 1,
    effectiveDate: "2004-11-02",
    expirationDate: "2021-01-01",
    changes: "Initiative I-148 (2004) established medical marijuana program; significantly restricted by SB 423 (2011) and partially restored by I-182 (2016)",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 1, unit: "ounces", description: "Medical patient usable amount" }
    ],
    keyProvisions: [
      "Medical marijuana for qualifying patients with provider certification",
      "Licensed dispensaries operating under Montana Marijuana Act framework",
      "Home cultivation permitted for medical patients (4 mature, 12 seedlings)"
    ]
  },
  {
    statuteId: "mt-marijuana",
    version: 2,
    effectiveDate: "2021-01-01",
    expirationDate: "2022-01-01",
    changes: "Initiative I-190 (approved Nov 2020) legalized adult-use cannabis; possession and home cultivation effective January 1, 2021; sales delayed",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 1, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 1 oz and cultivate up to 2 mature and 2 seedling plants",
      "Sales scheduled to begin January 1, 2022",
      "Department of Revenue designated as regulatory authority",
      "20% tax on recreational sales (phased: 20% initially)"
    ]
  },
  {
    statuteId: "mt-marijuana",
    version: 3,
    effectiveDate: "2022-01-01",
    expirationDate: null,
    changes: "Legal recreational sales commenced; existing medical dispensaries permitted to serve adult-use customers",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 1000, unit: "usd", description: "Adult-use dispensary license fee" },
      { type: "threshold", amount: 1, unit: "ounces", description: "Legal possession limit for flower" }
    ],
    keyProvisions: [
      "Retail recreational sales began January 1, 2022",
      "20% state tax on adult-use sales",
      "Local jurisdictions may prohibit cannabis businesses via voter referendum",
      "Existing medical providers could apply for dual adult-use licensing"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Minnesota (mn-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "mn-marijuana",
    version: 1,
    effectiveDate: "2014-05-29",
    expirationDate: "2023-07-01",
    changes: "SF 1641 established medical cannabis program; one of the most restrictive in the nation (no smokable flower initially)",
    previousVersion: null,
    monetaryValues: [
      { type: "fine", amount: 200, unit: "usd", description: "Petty misdemeanor fine for possession of small amount (up to 42.5g)" }
    ],
    keyProvisions: [
      "Medical cannabis only; limited qualifying conditions",
      "No smokable flower permitted (non-intoxicating forms only, later expanded)",
      "Two licensed manufacturers operating eight dispensary locations statewide"
    ]
  },
  {
    statuteId: "mn-marijuana",
    version: 2,
    effectiveDate: "2023-07-01",
    expirationDate: "2025-01-01",
    changes: "HF 100 signed, legalizing adult-use cannabis; possession and home cultivation effective immediately, retail sales framework under development",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 2, unit: "ounces", description: "Legal possession limit for flower (in public)" },
      { type: "threshold", amount: 2, unit: "ounces", description: "Legal possession limit for flower at home is 2 lbs" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 2 oz in public and 2 lbs at home",
      "Home cultivation of up to 8 plants (4 mature) per household",
      "Office of Cannabis Management (OCM) established under new state agency",
      "Automatic expungement of prior convictions for possession and low-level offenses"
    ]
  },
  {
    statuteId: "mn-marijuana",
    version: 3,
    effectiveDate: "2025-01-01",
    expirationDate: null,
    changes: "First licensed retail dispensaries opened; OCM issued initial licenses with social equity applicant priority",
    previousVersion: 2,
    monetaryValues: [
      { type: "fee", amount: 5000, unit: "usd", description: "Cannabis retailer license fee" },
      { type: "threshold", amount: 2, unit: "ounces", description: "Legal possession limit for flower (in public)" }
    ],
    keyProvisions: [
      "Licensed retail sales commenced in early 2025",
      "10% state excise tax on gross receipts",
      "Social equity applicants (from disproportionately impacted communities) receive priority licensing",
      "Local governments may adopt reasonable time, place, and manner restrictions but cannot ban retail"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Ohio (oh-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "oh-marijuana",
    version: 1,
    effectiveDate: "2016-09-08",
    expirationDate: "2023-12-07",
    changes: "HB 523 established Ohio Medical Marijuana Control Program with licensed dispensaries, processors, and cultivators",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 90, unit: "days", description: "Maximum supply period for medical patients" }
    ],
    keyProvisions: [
      "Medical marijuana for qualifying patients with physician recommendation",
      "Licensed dispensary, processor, and cultivator framework",
      "No home cultivation permitted for medical patients",
      "Smoking/combustion of medical marijuana prohibited (vaporization required)"
    ]
  },
  {
    statuteId: "oh-marijuana",
    version: 2,
    effectiveDate: "2023-12-07",
    expirationDate: null,
    changes: "Issue 2 (citizen initiative) approved by voters in Nov 2023, legalizing adult-use cannabis; possession effective December 7, 2023",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 2.5, unit: "ounces", description: "Legal possession limit for flower" },
      { type: "threshold", amount: 15, unit: "grams", description: "Legal possession limit for concentrates" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 2.5 oz of flower and 15g of concentrates",
      "Home cultivation of up to 6 plants per person (12 per household)",
      "10% excise tax on adult-use sales",
      "Division of Cannabis Control under Dept. of Commerce to regulate market; retail sales licensing underway"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Delaware (de-marijuana)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "de-marijuana",
    version: 1,
    effectiveDate: "2011-07-01",
    expirationDate: "2023-04-23",
    changes: "Delaware Medical Marijuana Act (SB 17) established medical cannabis program with compassion centers",
    previousVersion: null,
    monetaryValues: [
      { type: "threshold", amount: 6, unit: "ounces", description: "Maximum supply for qualifying patients" }
    ],
    keyProvisions: [
      "Medical marijuana for qualifying patients; physician certification required",
      "Licensed compassion centers (dispensaries)",
      "No home cultivation permitted for medical patients",
      "Possession of up to 1 oz decriminalized (civil penalty) under HB 39 (2015)"
    ]
  },
  {
    statuteId: "de-marijuana",
    version: 2,
    effectiveDate: "2023-04-23",
    expirationDate: null,
    changes: "HB 1 signed, legalizing adult-use possession for adults 21+; no commercial sales framework enacted",
    previousVersion: 1,
    monetaryValues: [
      { type: "threshold", amount: 1, unit: "ounces", description: "Legal possession limit for flower" },
      { type: "threshold", amount: 12, unit: "grams", description: "Legal possession limit for concentrates" }
    ],
    keyProvisions: [
      "Adults 21+ may possess up to 1 oz of flower and 12g of concentrates",
      "No home cultivation permitted",
      "No legal retail sales; commercial market bill (HB 2) failed to pass",
      "Sharing up to 1 oz between adults permitted without remuneration"
    ]
  },
];
