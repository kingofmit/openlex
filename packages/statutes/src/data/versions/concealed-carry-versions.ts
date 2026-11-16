import { StatuteVersion } from "@openlex/core";

/**
 * Version history for concealed carry statutes in states that recently
 * transitioned to constitutional (permitless) carry (2022-2023).
 *
 * Tracks the change from shall-issue permit systems to constitutional carry.
 *
 * Sources: state legislative records, NRA-ILA, USCCA, Giffords Law Center.
 */
export const CONCEALED_CARRY_VERSIONS: StatuteVersion[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // Florida (fl-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "fl-concealed-carry",
    version: 1,
    effectiveDate: "2012-01-01",
    expirationDate: "2023-07-01",
    changes: "Shall-issue concealed weapons license (CWL) system under Fla. Stat. 790.06; license required for concealed carry",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 97, unit: "usd", description: "Initial concealed weapons license fee" },
      { type: "fee", amount: 50, unit: "usd", description: "Renewal fee" },
      { type: "duration", amount: 7, unit: "years", description: "License validity period" }
    ],
    keyProvisions: [
      "Concealed weapons license required; shall-issue to qualifying applicants",
      "Background check and firearms training course required",
      "Applicants must be 21+ (or 18+ for military/veterans)",
      "Prohibited places include schools, courthouses, bars, and government buildings"
    ]
  },
  {
    statuteId: "fl-concealed-carry",
    version: 2,
    effectiveDate: "2023-07-01",
    expirationDate: null,
    changes: "HB 543 signed, establishing constitutional carry; concealed carry without a permit for eligible individuals 21+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 97, unit: "usd", description: "Optional concealed weapons license fee (for reciprocity)" }
    ],
    keyProvisions: [
      "Eligible individuals 21+ may carry concealed firearms without a license",
      "CWL still available for interstate reciprocity and other benefits",
      "Same prohibited places apply as under prior permit system",
      "Eligibility requirements mirror prior CWL qualifications (no felony convictions, etc.)",
      "Open carry remains prohibited"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Indiana (in-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "in-concealed-carry",
    version: 1,
    effectiveDate: "2019-07-01",
    expirationDate: "2022-07-01",
    changes: "Shall-issue License to Carry Handgun (LTCH) under IC 35-47-2; free lifetime license option available",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 0, unit: "usd", description: "License fee (eliminated in 2019 for 5-year; free lifetime)" }
    ],
    keyProvisions: [
      "License to Carry Handgun required for carrying (concealed or open)",
      "Shall-issue; background check through local police chief or sheriff",
      "Lifetime license available at no cost",
      "Prohibited places include schools, government buildings, and secured areas"
    ]
  },
  {
    statuteId: "in-concealed-carry",
    version: 2,
    effectiveDate: "2022-07-01",
    expirationDate: null,
    changes: "HEA 1296 signed, establishing constitutional carry; permit no longer required to carry a handgun for eligible individuals 18+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 0, unit: "usd", description: "Optional license fee for reciprocity purposes" }
    ],
    keyProvisions: [
      "Eligible individuals 18+ may carry a handgun (concealed or open) without a permit",
      "Must not be prohibited from possessing a firearm under state or federal law",
      "LTCH still available voluntarily for reciprocity with other states",
      "Same prohibited-places restrictions apply",
      "Law enforcement retains authority to verify eligibility during lawful stops"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Ohio (oh-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "oh-concealed-carry",
    version: 1,
    effectiveDate: "2004-04-08",
    expirationDate: "2022-06-13",
    changes: "Shall-issue Concealed Handgun License (CHL) under ORC 2923.125; training and background check required",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 67, unit: "usd", description: "Initial concealed handgun license fee" },
      { type: "fee", amount: 50, unit: "usd", description: "Renewal fee" },
      { type: "duration", amount: 5, unit: "years", description: "License validity period" }
    ],
    keyProvisions: [
      "Concealed Handgun License required; shall-issue upon meeting requirements",
      "8 hours of firearms training required (including live-fire)",
      "Background check through county sheriff",
      "Duty to inform law enforcement of CHL during traffic stops"
    ]
  },
  {
    statuteId: "oh-concealed-carry",
    version: 2,
    effectiveDate: "2022-06-13",
    expirationDate: null,
    changes: "SB 215 signed, establishing constitutional carry; concealed carry without a license for eligible individuals 21+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 67, unit: "usd", description: "Optional CHL fee for reciprocity" }
    ],
    keyProvisions: [
      "Eligible individuals 21+ may carry concealed without a license",
      "Duty to inform law enforcement removed (no longer required to volunteer CHL status)",
      "CHL still available voluntarily for reciprocity and other benefits",
      "Same prohibited-places restrictions apply (schools, courthouses, government buildings)",
      "Must not be prohibited from possessing firearms under state or federal law"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Alabama (al-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "al-concealed-carry",
    version: 1,
    effectiveDate: "2013-08-01",
    expirationDate: "2023-01-01",
    changes: "Shall-issue concealed carry permit under Ala. Code 13A-11-75; permit issued by county sheriff",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 20, unit: "usd", description: "Maximum annual permit fee (varies by county)" },
      { type: "duration", amount: 1, unit: "years", description: "Standard permit validity (some counties issued up to 5 years)" }
    ],
    keyProvisions: [
      "Concealed carry permit required; shall-issue through county sheriff",
      "No training requirement",
      "Background check required",
      "Prohibited in courthouses, police stations, and certain government buildings"
    ]
  },
  {
    statuteId: "al-concealed-carry",
    version: 2,
    effectiveDate: "2023-01-01",
    expirationDate: null,
    changes: "HB 272 signed, establishing constitutional carry; concealed carry without a permit for eligible individuals 21+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 20, unit: "usd", description: "Optional permit fee for reciprocity" }
    ],
    keyProvisions: [
      "Eligible individuals 21+ may carry concealed without a permit",
      "Optional permit still available for reciprocity with other states",
      "Same prohibited-places restrictions apply",
      "Must be legally eligible to possess firearms (no felony convictions, domestic violence orders, etc.)",
      "Counties lost significant revenue from permit fees; fiscal impact addressed in legislation"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Georgia (ga-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ga-concealed-carry",
    version: 1,
    effectiveDate: "2014-07-01",
    expirationDate: "2022-04-12",
    changes: "Shall-issue Georgia Weapons Carry License (WCL) under OCGA 16-11-129; Safe Carry Protection Act (HB 60) expanded permitted carry locations",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 75, unit: "usd", description: "New weapons carry license application fee" },
      { type: "fee", amount: 30, unit: "usd", description: "Renewal fee" },
      { type: "duration", amount: 5, unit: "years", description: "License validity period" }
    ],
    keyProvisions: [
      "Weapons Carry License required for concealed carry; shall-issue",
      "Background check through probate court; no training requirement",
      "HB 60 (2014) expanded carry to bars, churches, and certain government buildings",
      "Prohibited in schools, government buildings beyond security checkpoints, and courthouses"
    ]
  },
  {
    statuteId: "ga-concealed-carry",
    version: 2,
    effectiveDate: "2022-04-12",
    expirationDate: null,
    changes: "SB 319 (Constitutional Carry Act) signed, eliminating the license requirement for concealed carry for eligible individuals 21+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 75, unit: "usd", description: "Optional WCL fee for reciprocity" }
    ],
    keyProvisions: [
      "Eligible individuals 21+ (or 18+ for military) may carry concealed without a license",
      "WCL still available voluntarily for reciprocity with other states",
      "Same prohibited-places restrictions apply",
      "Must pass NICS background check criteria (no felony convictions, etc.)",
      "Open carry also permitted without license for eligible individuals"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Nebraska (ne-concealed-carry)
  // ═══════════════════════════════════════════════════════════════════════
  {
    statuteId: "ne-concealed-carry",
    version: 1,
    effectiveDate: "2007-01-01",
    expirationDate: "2023-09-10",
    changes: "Shall-issue Concealed Handgun Permit (CHP) under Neb. Rev. Stat. 69-2427 et seq.; training and background check required",
    previousVersion: null,
    monetaryValues: [
      { type: "fee", amount: 100, unit: "usd", description: "Initial concealed handgun permit fee" },
      { type: "fee", amount: 50, unit: "usd", description: "Renewal fee" },
      { type: "duration", amount: 5, unit: "years", description: "Permit validity period" }
    ],
    keyProvisions: [
      "Concealed Handgun Permit required; shall-issue upon meeting requirements",
      "NRA-approved or equivalent firearms training course required",
      "Background check through Nebraska State Patrol",
      "Prohibited in schools, financial institutions (posted), and certain government buildings"
    ]
  },
  {
    statuteId: "ne-concealed-carry",
    version: 2,
    effectiveDate: "2023-09-10",
    expirationDate: null,
    changes: "LB 77 signed, establishing constitutional carry; concealed carry without a permit for eligible individuals 21+",
    previousVersion: 1,
    monetaryValues: [
      { type: "fee", amount: 100, unit: "usd", description: "Optional CHP fee for reciprocity" }
    ],
    keyProvisions: [
      "Eligible individuals 21+ may carry concealed without a permit",
      "CHP still available voluntarily for reciprocity with other states",
      "Same prohibited-places restrictions apply",
      "Must be legally eligible to possess firearms under state and federal law",
      "Cities and counties preempted from enacting more restrictive regulations"
    ]
  },
];
