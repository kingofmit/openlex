import { TopicDataFile } from "../loader";

export const statuteOfLimitations: TopicDataFile = {
  topic: "statute-of-limitations-pi",
  description:
    "Time limits for filing personal injury lawsuits including negligence, medical malpractice, and product liability",
  federalBaseline: null,
  entries: [
    // ── Alabama ──
    {
      id: "al-sol-pi",
      jurisdiction: "al",
      title: "Alabama Statute of Limitations — Personal Injury",
      code: "Code of Alabama",
      section: "§ 6-2-38",
      citation: "Ala. Code § 6-2-38",
      url: "https://law.justia.com/codes/alabama/title-6/chapter-2/section-6-2-38/",
      sourceUrl: "https://legislature.state.al.us/",
      effectiveDate: "1985-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or omission, or 6 months from discovery, not to exceed 4 years (§ 6-5-482)",
        "Product liability: 2 years (§ 6-2-38); 10-year statute of repose for products (§ 6-5-502)",
        "Wrongful death: 2 years from date of death (§ 6-5-410)",
        "Minors: tolled until age 19 (age of majority in Alabama)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice with a 4-year outer limit. Statute tolled for minors until age 19. Fraud or concealment by defendant may toll the statute.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Alaska ──
    {
      id: "ak-sol-pi",
      jurisdiction: "ak",
      title: "Alaska Statute of Limitations — Personal Injury",
      code: "Alaska Statutes",
      section: "§ 09.10.070",
      citation: "Alaska Stat. § 09.10.070",
      url: "https://law.justia.com/codes/alaska/title-9/chapter-9-10/section-9-10-070/",
      sourceUrl: "https://www.akleg.gov/",
      effectiveDate: "1997-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from discovery, not to exceed 3 years from act (§ 09.55.548)",
        "Product liability: 2 years; statute of repose of the longer of 6 years or the useful life of the product",
        "Wrongful death: 2 years from date of death (§ 09.55.580)",
        "Minors: tolled until age 18, but no more than 2 additional years after reaching majority",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice. Tolling for minors until age 18 with a cap. Disability of plaintiff may toll the statute.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Arizona ──
    {
      id: "az-sol-pi",
      jurisdiction: "az",
      title: "Arizona Statute of Limitations — Personal Injury",
      code: "Arizona Revised Statutes",
      section: "§ 12-542",
      citation: "Ariz. Rev. Stat. § 12-542",
      url: "https://law.justia.com/codes/arizona/title-12/section-12-542/",
      sourceUrl: "https://www.azleg.gov/",
      effectiveDate: "1956-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from date of injury or discovery (§ 12-542)",
        "Product liability: 2 years; 12-year statute of repose (§ 12-551)",
        "Wrongful death: 2 years from date of death (§ 12-542)",
        "Minors: tolled until age 18 (§ 12-502)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies generally to personal injury claims. Statute tolled for minors until age 18. Defendant's absence from state tolls the statute.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Arkansas ──
    {
      id: "ar-sol-pi",
      jurisdiction: "ar",
      title: "Arkansas Statute of Limitations — Personal Injury",
      code: "Arkansas Code",
      section: "§ 16-56-105",
      citation: "Ark. Code Ann. § 16-56-105",
      url: "https://law.justia.com/codes/arkansas/title-16/subtitle-4/chapter-56/subchapter-1/section-16-56-105/",
      sourceUrl: "https://www.arkleg.state.ar.us/",
      effectiveDate: "1987-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 2 years from date of act or from discovery, not to exceed 3 years (§ 16-114-203)",
        "Product liability: 3 years (§ 16-56-105)",
        "Wrongful death: 3 years from date of death (§ 16-62-102)",
        "Minors: tolled until age 18, then regular period runs (§ 16-56-116)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies in medical malpractice with 3-year outer limit. Tolling for minors until age 18. Foreign object discovery rule extends the period.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── California ──
    {
      id: "ca-sol-pi",
      jurisdiction: "ca",
      title: "California Statute of Limitations — Personal Injury",
      code: "California Code of Civil Procedure",
      section: "§ 335.1",
      citation: "Cal. Civ. Proc. Code § 335.1",
      url: "https://law.justia.com/codes/california/code-of-civil-procedure/part-2/title-2/chapter-3/section-335-1/",
      sourceUrl: "https://leginfo.legislature.ca.gov/",
      effectiveDate: "2003-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 1 year from discovery or 3 years from injury, whichever is first (§ 340.5)",
        "Product liability: 2 years from injury (§ 335.1)",
        "Wrongful death: 2 years from date of death (§ 335.1)",
        "Minors: tolled until age 18; for med mal, minors under 6 have until age 8 (§ 340.5)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice with 3-year outer limit. Special rules for minors under 6 in med mal. Delayed discovery doctrine applies to latent injuries. Tolling for defendant's absence from state.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Colorado ──
    {
      id: "co-sol-pi",
      jurisdiction: "co",
      title: "Colorado Statute of Limitations — Personal Injury",
      code: "Colorado Revised Statutes",
      section: "§ 13-80-102",
      citation: "Colo. Rev. Stat. § 13-80-102",
      url: "https://law.justia.com/codes/colorado/title-13/article-80/section-13-80-102/",
      sourceUrl: "https://leg.colorado.gov/",
      effectiveDate: "1986-07-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury (§ 13-80-102)",
        "Medical malpractice: 2 years from discovery, not to exceed 3 years from act (§ 13-80-102.5)",
        "Product liability: 2 years; 10-year statute of repose (§ 13-80-106)",
        "Wrongful death: 2 years from date of death (§ 13-21-204)",
        "Minors: tolled until age 18 (§ 13-81-103)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice with 3-year outer limit. Tolling for minors until age 18. Concealment by defendant may toll the statute.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Connecticut ──
    {
      id: "ct-sol-pi",
      jurisdiction: "ct",
      title: "Connecticut Statute of Limitations — Personal Injury",
      code: "Connecticut General Statutes",
      section: "§ 52-584",
      citation: "Conn. Gen. Stat. § 52-584",
      url: "https://law.justia.com/codes/connecticut/title-52/chapter-926/section-52-584/",
      sourceUrl: "https://www.cga.ct.gov/",
      effectiveDate: "1979-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of act or omission (§ 52-584)",
        "Medical malpractice: 2 years from act or omission, or from discovery, not to exceed 3 years (§ 52-584)",
        "Product liability: 3 years from date of injury (§ 52-577a)",
        "Wrongful death: 2 years from date of death (§ 52-555)",
        "Minors: tolled until age 18 (§ 52-599)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to negligence and med mal with 3-year outer limit. Tolling for minors until age 18. Continuous treatment doctrine may extend the period.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Delaware ──
    {
      id: "de-sol-pi",
      jurisdiction: "de",
      title: "Delaware Statute of Limitations — Personal Injury",
      code: "Delaware Code",
      section: "Title 10, § 8119",
      citation: "Del. Code Ann. tit. 10, § 8119",
      url: "https://law.justia.com/codes/delaware/title-10/chapter-81/section-8119/",
      sourceUrl: "https://legis.delaware.gov/",
      effectiveDate: "1953-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from injury, or 3 years from act with discovery rule (tit. 18, § 6856)",
        "Product liability: 2 years (§ 8119)",
        "Wrongful death: 2 years from date of death (tit. 10, § 8107)",
        "Minors: tolled until age 18 (tit. 10, § 8116)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice. Tolling for minors until age 18. Affidavit of merit required in medical malpractice cases.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── District of Columbia ──
    {
      id: "dc-sol-pi",
      jurisdiction: "dc",
      title: "District of Columbia Statute of Limitations — Personal Injury",
      code: "D.C. Code",
      section: "§ 12-301",
      citation: "D.C. Code § 12-301(8)",
      url: "https://law.justia.com/codes/district-of-columbia/division-ii/title-12/chapter-3/section-12-301/",
      sourceUrl: "https://code.dccouncil.gov/",
      effectiveDate: "1972-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from injury or discovery (§ 12-301(8))",
        "Product liability: 3 years (§ 12-301(8))",
        "Wrongful death: 2 years from date of death (§ 16-2702)",
        "Minors: tolled until age 18 (§ 12-302)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies. Tolling for minors until age 18. Tolling for mental incapacity.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Florida ──
    {
      id: "fl-sol-pi",
      jurisdiction: "fl",
      title: "Florida Statute of Limitations — Personal Injury",
      code: "Florida Statutes",
      section: "§ 95.11(3)(a)",
      citation: "Fla. Stat. § 95.11(3)(a)",
      url: "https://law.justia.com/codes/florida/title-viii/chapter-95/section-95-11/",
      sourceUrl: "https://www.leg.state.fl.us/",
      effectiveDate: "2023-03-24",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury (reduced from 4 years in 2023)",
        "Medical malpractice: 2 years from discovery, not to exceed 4 years from incident; 7 years for fraud or concealment (§ 95.11(4)(b))",
        "Product liability: 2 years; 12-year statute of repose (§ 95.031(2))",
        "Wrongful death: 2 years from date of death (§ 95.11(4)(d))",
        "Minors: tolled for up to 7 years for persons under disability (§ 95.051)",
      ],
      penalties: undefined,
      exceptions:
        "Florida reduced the general PI SOL from 4 to 2 years effective March 24, 2023 (HB 837). Discovery rule applies to med mal with 4-year repose. Tolling for minors and incapacitated persons. Fraud or concealment extends med mal to 7 years.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Georgia ──
    {
      id: "ga-sol-pi",
      jurisdiction: "ga",
      title: "Georgia Statute of Limitations — Personal Injury",
      code: "Official Code of Georgia Annotated",
      section: "§ 9-3-33",
      citation: "O.C.G.A. § 9-3-33",
      url: "https://law.justia.com/codes/georgia/title-9/chapter-3/article-2/section-9-3-33/",
      sourceUrl: "https://www.legis.ga.gov/",
      effectiveDate: "1985-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act, or 5 years from act for foreign objects (§ 9-3-71)",
        "Product liability: 2 years; 10-year statute of repose (§ 51-1-11)",
        "Wrongful death: 2 years from date of death (§ 9-3-33)",
        "Minors: tolled until age 18 (§ 9-3-90)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies in medical malpractice for foreign objects with 5-year limit. Tolling for minors until age 18. Affidavit of expert required for med mal claims.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Hawaii ──
    {
      id: "hi-sol-pi",
      jurisdiction: "hi",
      title: "Hawaii Statute of Limitations — Personal Injury",
      code: "Hawaii Revised Statutes",
      section: "§ 657-7",
      citation: "Haw. Rev. Stat. § 657-7",
      url: "https://law.justia.com/codes/hawaii/division-4/title-36/chapter-657/section-657-7/",
      sourceUrl: "https://www.capitol.hawaii.gov/",
      effectiveDate: "1972-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from discovery or from when it should have been discovered; 6-year repose (§ 657-7.3)",
        "Product liability: 2 years (§ 657-7)",
        "Wrongful death: 2 years from date of death (§ 663-3)",
        "Minors: tolled until age 18 (§ 657-13)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to medical malpractice with 6-year outer repose period. Tolling for minors until age 18. Tolling for mental incapacity.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Idaho ──
    {
      id: "id-sol-pi",
      jurisdiction: "id",
      title: "Idaho Statute of Limitations — Personal Injury",
      code: "Idaho Code",
      section: "§ 5-219",
      citation: "Idaho Code § 5-219(4)",
      url: "https://law.justia.com/codes/idaho/title-5/chapter-2/section-5-219/",
      sourceUrl: "https://legislature.idaho.gov/",
      effectiveDate: "1980-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, whichever is later (§ 5-219(4))",
        "Product liability: 2 years; subject to useful life limitation (§ 6-1403)",
        "Wrongful death: 2 years from date of death (§ 5-219(4))",
        "Minors: tolled until age 18, then 2 years (§ 5-230)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies broadly to PI and med mal claims. Tolling for minors until age 18. Foreign object rule applies.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Illinois ──
    {
      id: "il-sol-pi",
      jurisdiction: "il",
      title: "Illinois Statute of Limitations — Personal Injury",
      code: "Illinois Compiled Statutes",
      section: "735 ILCS 5/13-202",
      citation: "735 ILCS 5/13-202",
      url: "https://law.justia.com/codes/illinois/chapter-735/act-735-ilcs-5/article-xiii/part-2/section-735-ilcs-5-13-202/",
      sourceUrl: "https://www.ilga.gov/",
      effectiveDate: "1982-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from discovery, not to exceed 4 years from act (735 ILCS 5/13-212)",
        "Product liability: 2 years; 12-year statute of repose (735 ILCS 5/13-213)",
        "Wrongful death: 2 years from date of death (740 ILCS 180/2)",
        "Minors: tolled until age 18, but med mal limited to 8 years from act (735 ILCS 5/13-212)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 4-year repose (8 years for minors). Tolling for minors until age 18. Fraudulent concealment tolls the statute.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Indiana ──
    {
      id: "in-sol-pi",
      jurisdiction: "in",
      title: "Indiana Statute of Limitations — Personal Injury",
      code: "Indiana Code",
      section: "§ 34-11-2-4",
      citation: "Ind. Code § 34-11-2-4",
      url: "https://law.justia.com/codes/indiana/title-34/article-11/chapter-2/section-34-11-2-4/",
      sourceUrl: "https://iga.in.gov/",
      effectiveDate: "1998-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act, discovery, or last treatment (§ 34-18-7-1)",
        "Product liability: 2 years; 10-year statute of repose (§ 34-20-3-1)",
        "Wrongful death: 2 years from date of death (§ 34-23-1-1)",
        "Minors: tolled until age 18, then 2 years; med mal minor has until age 8 (§ 34-18-7-2)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal. Medical malpractice claims go through a medical review panel. Tolling for minors under 6 in med mal (until age 8). Product liability has 10-year repose.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Iowa ──
    {
      id: "ia-sol-pi",
      jurisdiction: "ia",
      title: "Iowa Statute of Limitations — Personal Injury",
      code: "Iowa Code",
      section: "§ 614.1(2)",
      citation: "Iowa Code § 614.1(2)",
      url: "https://law.justia.com/codes/iowa/chapter-614/section-614-1/",
      sourceUrl: "https://www.legis.iowa.gov/",
      effectiveDate: "1998-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from discovery or act, whichever is later; 6-year repose (§ 614.1(9))",
        "Product liability: 2 years; 15-year statute of repose (§ 614.1(2A))",
        "Wrongful death: 2 years from date of death (§ 611.22)",
        "Minors: tolled until age 18, then 1 year (§ 614.8)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 6-year repose. Tolling for minors until age 18, then 1 year to file. Product liability has 15-year repose period.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Kansas ──
    {
      id: "ks-sol-pi",
      jurisdiction: "ks",
      title: "Kansas Statute of Limitations — Personal Injury",
      code: "Kansas Statutes Annotated",
      section: "§ 60-513",
      citation: "Kan. Stat. Ann. § 60-513",
      url: "https://law.justia.com/codes/kansas/chapter-60/article-5/section-60-513/",
      sourceUrl: "https://www.kslegislature.org/",
      effectiveDate: "1983-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 4 years (§ 60-513(c))",
        "Product liability: 2 years; 10-year statute of repose (§ 60-3303)",
        "Wrongful death: 2 years from date of death (§ 60-1901)",
        "Minors: tolled until age 18, then regular period runs (§ 60-515)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies with 4-year outer limit. Tolling for minors until age 18. Substantial-factor discovery rule for latent injury cases.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Kentucky ──
    {
      id: "ky-sol-pi",
      jurisdiction: "ky",
      title: "Kentucky Statute of Limitations — Personal Injury",
      code: "Kentucky Revised Statutes",
      section: "§ 413.140",
      citation: "Ky. Rev. Stat. § 413.140(1)(a)",
      url: "https://law.justia.com/codes/kentucky/chapter-413/section-413-140/",
      sourceUrl: "https://legislature.ky.gov/",
      effectiveDate: "1980-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 1 year from date of injury",
        "Medical malpractice: 1 year from act, discovery, or last treatment; 5-year repose (§ 413.140(2))",
        "Product liability: 1 year; no specific statute of repose",
        "Wrongful death: 1 year from appointment of personal representative (§ 413.180)",
        "Minors: tolled until age 18, then applicable period runs (§ 413.170)",
      ],
      penalties: undefined,
      exceptions:
        "Kentucky has one of the shortest PI SOLs at 1 year. Discovery rule applies to med mal with 5-year repose. Tolling for minors until age 18.",
      monetaryValues: [
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Louisiana ──
    {
      id: "la-sol-pi",
      jurisdiction: "la",
      title: "Louisiana Statute of Limitations — Personal Injury",
      code: "Louisiana Civil Code",
      section: "Art. 3492",
      citation: "La. Civ. Code art. 3492",
      url: "https://law.justia.com/codes/louisiana/civil-code/article-3492/",
      sourceUrl: "https://www.legis.la.gov/",
      effectiveDate: "1984-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury (delictual actions): 1 year from date of injury",
        "Medical malpractice: 1 year from discovery, not to exceed 3 years from act (La. R.S. 9:5628)",
        "Product liability: 1 year from discovery, 10-year repose (La. R.S. 9:2800.57)",
        "Wrongful death: 1 year from date of death (La. Civ. Code art. 2315.2)",
        "Minors: prescription suspended during minority (La. Civ. Code art. 3496)",
      ],
      penalties: undefined,
      exceptions:
        "Louisiana uses prescriptive periods (civil law system). 1-year period from injury or discovery. Med mal has 3-year repose. Claims must go through medical review panel. Tolling (suspension) for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Maine ──
    {
      id: "me-sol-pi",
      jurisdiction: "me",
      title: "Maine Statute of Limitations — Personal Injury",
      code: "Maine Revised Statutes",
      section: "Title 14, § 752",
      citation: "Me. Rev. Stat. tit. 14, § 752",
      url: "https://law.justia.com/codes/maine/title-14/chapter-205/section-752/",
      sourceUrl: "https://legislature.maine.gov/",
      effectiveDate: "1979-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 6 years from date of injury",
        "Medical malpractice: 3 years from act or discovery, whichever is later (tit. 24, § 2902)",
        "Product liability: 6 years (tit. 14, § 752)",
        "Wrongful death: 2 years from date of death (tit. 18-C, § 2-807)",
        "Minors: tolled until age 18, then 6 years (tit. 14, § 853)",
      ],
      penalties: undefined,
      exceptions:
        "Maine has one of the longest general PI SOLs at 6 years. Med mal has a separate 3-year limit. Discovery rule applies to med mal. Tolling for minors and incapacitated persons.",
      monetaryValues: [
        {
          type: "duration",
          amount: 6,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Maryland ──
    {
      id: "md-sol-pi",
      jurisdiction: "md",
      title: "Maryland Statute of Limitations — Personal Injury",
      code: "Maryland Code, Courts and Judicial Proceedings",
      section: "§ 5-101",
      citation: "Md. Code, Cts. & Jud. Proc. § 5-101",
      url: "https://law.justia.com/codes/maryland/courts-and-judicial-proceedings/section-5-101/",
      sourceUrl: "https://mgaleg.maryland.gov/",
      effectiveDate: "1973-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 5 years from act or 3 years from discovery, whichever is shorter (§ 5-109)",
        "Product liability: 3 years (§ 5-101)",
        "Wrongful death: 3 years from date of death (§ 3-904)",
        "Minors: tolled until age 18, then 3 years (§ 5-201)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies broadly. Med mal has a 5-year outer repose but 3 years from discovery. Tolling for minors until age 18. Certificate of merit required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Massachusetts ──
    {
      id: "ma-sol-pi",
      jurisdiction: "ma",
      title: "Massachusetts Statute of Limitations — Personal Injury",
      code: "Massachusetts General Laws",
      section: "Ch. 260, § 2A",
      citation: "Mass. Gen. Laws ch. 260, § 2A",
      url: "https://law.justia.com/codes/massachusetts/part-iii/title-iv/chapter-260/section-2a/",
      sourceUrl: "https://malegislature.gov/",
      effectiveDate: "1973-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or discovery, not to exceed 7 years (ch. 260, § 4)",
        "Product liability: 3 years (ch. 260, § 2A); 6-year statute of repose for improvements to real property",
        "Wrongful death: 3 years from date of death (ch. 229, § 2)",
        "Minors: tolled until age 18, then 3 years (ch. 260, § 7)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 7-year repose. Tolling for minors until age 18. Tribunal screening required for med mal claims.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Michigan ──
    {
      id: "mi-sol-pi",
      jurisdiction: "mi",
      title: "Michigan Statute of Limitations — Personal Injury",
      code: "Michigan Compiled Laws",
      section: "§ 600.5805",
      citation: "Mich. Comp. Laws § 600.5805(2)",
      url: "https://law.justia.com/codes/michigan/chapter-600/statute-act-236-of-1961/chapter-58/section-600-5805/",
      sourceUrl: "https://www.legislature.mi.gov/",
      effectiveDate: "1994-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 2 years from act or 6 months from discovery, not to exceed 6 years (§ 600.5838a)",
        "Product liability: 3 years (§ 600.5805(2))",
        "Wrongful death: 3 years from date of death (§ 600.5805(2))",
        "Minors: tolled until age 18, then 1 year (§ 600.5851); med mal minor under 8 has until age 10",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule for med mal: 6 months from discovery, 6-year repose. Special rules for minors under 8 in med mal. Notice of intent required 182 days before filing med mal suit.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Minnesota ──
    {
      id: "mn-sol-pi",
      jurisdiction: "mn",
      title: "Minnesota Statute of Limitations — Personal Injury",
      code: "Minnesota Statutes",
      section: "§ 541.07",
      citation: "Minn. Stat. § 541.07(1)",
      url: "https://law.justia.com/codes/minnesota/chapter-541/section-541-07/",
      sourceUrl: "https://www.revisor.mn.gov/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury (§ 541.07(1))",
        "Medical malpractice: 4 years from act (§ 541.076)",
        "Product liability: 2 years; 10-year useful-life limitation (§ 604.03)",
        "Wrongful death: 3 years from date of death (§ 573.02)",
        "Minors: tolled until age 18, then applicable period runs (§ 541.15)",
      ],
      penalties: undefined,
      exceptions:
        "Med mal has a longer 4-year period (not discovery-based) with no separate repose. Tolling for minors until age 18. Expert affidavit required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 4,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Mississippi ──
    {
      id: "ms-sol-pi",
      jurisdiction: "ms",
      title: "Mississippi Statute of Limitations — Personal Injury",
      code: "Mississippi Code",
      section: "§ 15-1-49",
      citation: "Miss. Code Ann. § 15-1-49",
      url: "https://law.justia.com/codes/mississippi/title-15/chapter-1/in-general/section-15-1-49/",
      sourceUrl: "https://www.legislature.ms.gov/",
      effectiveDate: "1989-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 7 years (§ 15-1-36(2))",
        "Product liability: 3 years; 6-year statute of repose (§ 15-1-49)",
        "Wrongful death: 3 years from date of death (§ 15-1-49)",
        "Minors: tolled until age 18, then applicable period runs (§ 15-1-59)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 7-year repose. Tolling for minors and persons of unsound mind. Certificate of consultation required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Missouri ──
    {
      id: "mo-sol-pi",
      jurisdiction: "mo",
      title: "Missouri Statute of Limitations — Personal Injury",
      code: "Missouri Revised Statutes",
      section: "§ 516.120",
      citation: "Mo. Rev. Stat. § 516.120",
      url: "https://law.justia.com/codes/missouri/title-xxxv/chapter-516/section-516-120/",
      sourceUrl: "https://www.senate.mo.gov/",
      effectiveDate: "1985-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 5 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 10 years (§ 516.105)",
        "Product liability: 5 years (§ 516.120)",
        "Wrongful death: 3 years from date of death (§ 537.100)",
        "Minors: tolled until age 18, then applicable period runs (§ 516.170)",
      ],
      penalties: undefined,
      exceptions:
        "Missouri has a 5-year general PI SOL, one of the longest. Med mal has separate 2-year limit with 10-year repose. Discovery rule applies to med mal. Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 5,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Montana ──
    {
      id: "mt-sol-pi",
      jurisdiction: "mt",
      title: "Montana Statute of Limitations — Personal Injury",
      code: "Montana Code Annotated",
      section: "§ 27-2-204",
      citation: "Mont. Code Ann. § 27-2-204",
      url: "https://law.justia.com/codes/montana/title-27/chapter-2/part-2/section-27-2-204/",
      sourceUrl: "https://leg.mt.gov/",
      effectiveDate: "1987-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or discovery, not to exceed 5 years (§ 27-2-205)",
        "Product liability: 3 years (§ 27-2-204)",
        "Wrongful death: 3 years from date of death (§ 27-2-204)",
        "Minors: tolled until age 18, then applicable period runs (§ 27-2-401)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 5-year repose. Tolling for minors until age 18. Tolling during defendant's absence from state.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Nebraska ──
    {
      id: "ne-sol-pi",
      jurisdiction: "ne",
      title: "Nebraska Statute of Limitations — Personal Injury",
      code: "Revised Statutes of Nebraska",
      section: "§ 25-207",
      citation: "Neb. Rev. Stat. § 25-207",
      url: "https://law.justia.com/codes/nebraska/chapter-25/statute-25-207/",
      sourceUrl: "https://nebraskalegislature.gov/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 4 years from date of injury",
        "Medical malpractice: 2 years from act or 1 year from discovery, not to exceed 10 years (§ 44-2828)",
        "Product liability: 4 years; 10-year statute of repose (§ 25-224)",
        "Wrongful death: 2 years from date of death (§ 30-810)",
        "Minors: tolled until age 18, then applicable period runs (§ 25-213)",
      ],
      penalties: undefined,
      exceptions:
        "General PI has 4-year SOL. Med mal has separate shorter limit under Nebraska Hospital-Medical Liability Act. Discovery rule applies to med mal with 10-year repose. Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 4,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Nevada ──
    {
      id: "nv-sol-pi",
      jurisdiction: "nv",
      title: "Nevada Statute of Limitations — Personal Injury",
      code: "Nevada Revised Statutes",
      section: "§ 11.190(4)(e)",
      citation: "Nev. Rev. Stat. § 11.190(4)(e)",
      url: "https://law.justia.com/codes/nevada/chapter-11/statute-11-190/",
      sourceUrl: "https://www.leg.state.nv.us/",
      effectiveDate: "1993-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 3 years from act or 1 year from discovery, whichever is earlier (§ 41A.097)",
        "Product liability: 2 years (§ 11.190(4)(e))",
        "Wrongful death: 2 years from date of death (§ 11.190(4)(e))",
        "Minors: tolled until age 18, then applicable period runs (§ 11.250)",
      ],
      penalties: undefined,
      exceptions:
        "Med mal has a unique structure: 3 years from act or 1 year from discovery. Affidavit of merit required for med mal. Tolling for minors until age 18.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── New Hampshire ──
    {
      id: "nh-sol-pi",
      jurisdiction: "nh",
      title: "New Hampshire Statute of Limitations — Personal Injury",
      code: "New Hampshire Revised Statutes Annotated",
      section: "§ 508:4",
      citation: "N.H. Rev. Stat. Ann. § 508:4",
      url: "https://law.justia.com/codes/new-hampshire/title-lii/chapter-508/section-508-4/",
      sourceUrl: "https://www.gencourt.state.nh.us/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of act or omission",
        "Medical malpractice: 2 years from discovery, not to exceed 3 years from act (§ 507-C:4)",
        "Product liability: 3 years (§ 508:4)",
        "Wrongful death: 3 years from date of death (§ 556:11)",
        "Minors: tolled until age 18, then applicable period runs (§ 508:8)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 3-year repose. Tolling for minors until age 18. Pre-litigation screening panel for med mal claims.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── New Jersey ──
    {
      id: "nj-sol-pi",
      jurisdiction: "nj",
      title: "New Jersey Statute of Limitations — Personal Injury",
      code: "New Jersey Statutes Annotated",
      section: "§ 2A:14-2",
      citation: "N.J. Stat. Ann. § 2A:14-2",
      url: "https://law.justia.com/codes/new-jersey/title-2a/chapter-14/section-2a-14-2/",
      sourceUrl: "https://www.njleg.state.nj.us/",
      effectiveDate: "2004-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery (§ 2A:14-2a); no specific repose",
        "Product liability: 2 years (§ 2A:14-2); product liability reform applies",
        "Wrongful death: 2 years from date of death (§ 2A:31-3)",
        "Minors: tolled until age 18, then 2 years (§ 2A:14-21)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule broadly applied in NJ. Tolling for minors until age 18. Affidavit of merit required for med mal claims (§ 2A:53A-27).",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── New Mexico ──
    {
      id: "nm-sol-pi",
      jurisdiction: "nm",
      title: "New Mexico Statute of Limitations — Personal Injury",
      code: "New Mexico Statutes Annotated",
      section: "§ 37-1-8",
      citation: "N.M. Stat. Ann. § 37-1-8",
      url: "https://law.justia.com/codes/new-mexico/chapter-37/article-1/section-37-1-8/",
      sourceUrl: "https://www.nmlegis.gov/",
      effectiveDate: "1976-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act (§ 41-5-13)",
        "Product liability: 3 years (§ 37-1-8)",
        "Wrongful death: 3 years from date of death (§ 41-2-2)",
        "Minors: tolled until age 18, then applicable period runs (§ 37-1-10)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies broadly. Tolling for minors until age 18. Medical malpractice claims must go through medical review commission.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── New York ──
    {
      id: "ny-sol-pi",
      jurisdiction: "ny",
      title: "New York Statute of Limitations — Personal Injury",
      code: "New York Civil Practice Law and Rules",
      section: "§ 214",
      citation: "N.Y. C.P.L.R. § 214(5)",
      url: "https://law.justia.com/codes/new-york/civil-practice-law-and-rules/article-2/214/",
      sourceUrl: "https://www.nysenate.gov/legislation",
      effectiveDate: "1963-09-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 2 years 6 months from act or last treatment (§ 214-a); discovery rule for foreign objects only",
        "Product liability: 3 years (§ 214(5))",
        "Wrongful death: 2 years from date of death (EPTL § 5-4.1)",
        "Minors: tolled until age 18, then applicable period runs; med mal minor has until age 10 (§ 208)",
      ],
      penalties: undefined,
      exceptions:
        "Med mal is 2 years 6 months (30 months). Discovery rule limited to foreign objects in med mal. Continuous treatment doctrine may toll med mal SOL. Tolling for minors until age 18.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2.5,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── North Carolina ──
    {
      id: "nc-sol-pi",
      jurisdiction: "nc",
      title: "North Carolina Statute of Limitations — Personal Injury",
      code: "North Carolina General Statutes",
      section: "§ 1-52",
      citation: "N.C. Gen. Stat. § 1-52(16)",
      url: "https://law.justia.com/codes/north-carolina/chapter-1/article-5/section-1-52/",
      sourceUrl: "https://www.ncleg.gov/",
      effectiveDate: "1979-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or 1 year from discovery, not to exceed 4 years (§ 1-15(c))",
        "Product liability: 3 years; 6-year statute of repose (§ 1-46.1)",
        "Wrongful death: 2 years from date of death (§ 1-53(4))",
        "Minors: tolled until age 18, then applicable period runs; minors under 10 in med mal have until age 12 (§ 1-17)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 4-year outer limit. Special rules for minors under 10 in med mal. 9A certification required for med mal claims.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── North Dakota ──
    {
      id: "nd-sol-pi",
      jurisdiction: "nd",
      title: "North Dakota Statute of Limitations — Personal Injury",
      code: "North Dakota Century Code",
      section: "§ 28-01-16",
      citation: "N.D. Cent. Code § 28-01-16",
      url: "https://law.justia.com/codes/north-dakota/title-28/chapter-28-01/section-28-01-16/",
      sourceUrl: "https://www.legis.nd.gov/",
      effectiveDate: "1987-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 6 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 6 years (§ 28-01-18(3))",
        "Product liability: 6 years; 10-year statute of repose (§ 28-01.3-01)",
        "Wrongful death: 2 years from date of death (§ 28-01-18(4))",
        "Minors: tolled until age 18, then applicable period runs (§ 28-01-25)",
      ],
      penalties: undefined,
      exceptions:
        "North Dakota has a 6-year general PI SOL. Med mal has a separate shorter 2-year limit with discovery rule and 6-year repose. Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 6,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Ohio ──
    {
      id: "oh-sol-pi",
      jurisdiction: "oh",
      title: "Ohio Statute of Limitations — Personal Injury",
      code: "Ohio Revised Code",
      section: "§ 2305.10",
      citation: "Ohio Rev. Code § 2305.10",
      url: "https://law.justia.com/codes/ohio/title-23/chapter-2305/section-2305-10/",
      sourceUrl: "https://www.legislature.ohio.gov/",
      effectiveDate: "2005-04-07",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 1 year from act or discovery, not to exceed 4 years (§ 2305.113)",
        "Product liability: 2 years (§ 2305.10(A))",
        "Wrongful death: 2 years from date of death (§ 2125.02)",
        "Minors: tolled until age 18, then applicable period runs (§ 2305.16)",
      ],
      penalties: undefined,
      exceptions:
        "Med mal has a short 1-year SOL with discovery rule and 4-year repose. Affidavit of merit required for med mal. Tolling for minors until age 18.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Oklahoma ──
    {
      id: "ok-sol-pi",
      jurisdiction: "ok",
      title: "Oklahoma Statute of Limitations — Personal Injury",
      code: "Oklahoma Statutes",
      section: "Title 12, § 95",
      citation: "Okla. Stat. tit. 12, § 95(A)(3)",
      url: "https://law.justia.com/codes/oklahoma/title-12/section-12-95/",
      sourceUrl: "https://www.okleg.gov/",
      effectiveDate: "2004-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 3 years (tit. 76, § 18)",
        "Product liability: 2 years (tit. 12, § 95)",
        "Wrongful death: 2 years from date of death (tit. 12, § 1053)",
        "Minors: tolled until age 18, then applicable period runs (tit. 12, § 96)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 3-year repose. Tolling for minors until age 18. Affidavit of merit required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Oregon ──
    {
      id: "or-sol-pi",
      jurisdiction: "or",
      title: "Oregon Statute of Limitations — Personal Injury",
      code: "Oregon Revised Statutes",
      section: "§ 12.110",
      citation: "Or. Rev. Stat. § 12.110",
      url: "https://law.justia.com/codes/oregon/title-1/chapter-12/section-12-110/",
      sourceUrl: "https://www.oregonlegislature.gov/",
      effectiveDate: "1988-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from discovery, not to exceed 5 years from act (§ 12.110(4))",
        "Product liability: 2 years; 8-year useful-life repose (§ 30.905)",
        "Wrongful death: 3 years from date of death (§ 30.020)",
        "Minors: tolled until age 18, then applicable period runs (§ 12.160)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 5-year repose. Tolling for minors until age 18. Wrongful death has its own 3-year period.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Pennsylvania ──
    {
      id: "pa-sol-pi",
      jurisdiction: "pa",
      title: "Pennsylvania Statute of Limitations — Personal Injury",
      code: "Pennsylvania Consolidated Statutes",
      section: "42 Pa.C.S. § 5524",
      citation: "42 Pa. Cons. Stat. § 5524",
      url: "https://law.justia.com/codes/pennsylvania/title-42/chapter-55/subchapter-b/section-5524/",
      sourceUrl: "https://www.legis.state.pa.us/",
      effectiveDate: "1978-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery (§ 5524(2)); 7-year repose (§ 5524(2))",
        "Product liability: 2 years (§ 5524); 12-year statute of repose (42 Pa.C.S. § 5536)",
        "Wrongful death: 2 years from date of death (42 Pa.C.S. § 5524(2))",
        "Minors: tolled until age 18, then 2 years (§ 5533)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies broadly. Tolling for minors until age 18. Certificate of merit required for med mal (Pa.R.C.P. 1042.3).",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Rhode Island ──
    {
      id: "ri-sol-pi",
      jurisdiction: "ri",
      title: "Rhode Island Statute of Limitations — Personal Injury",
      code: "General Laws of Rhode Island",
      section: "§ 9-1-14",
      citation: "R.I. Gen. Laws § 9-1-14",
      url: "https://law.justia.com/codes/rhode-island/title-9/chapter-9-1/section-9-1-14/",
      sourceUrl: "https://www.rilegislature.gov/",
      effectiveDate: "1956-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or discovery (§ 9-1-14.1)",
        "Product liability: 3 years; 10-year statute of repose (§ 9-1-13(b))",
        "Wrongful death: 3 years from date of death (§ 10-7-2)",
        "Minors: tolled until age 18, then applicable period runs (§ 9-1-19)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies. Tolling for minors until age 18. Continuous treatment doctrine may apply to med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── South Carolina ──
    {
      id: "sc-sol-pi",
      jurisdiction: "sc",
      title: "South Carolina Statute of Limitations — Personal Injury",
      code: "South Carolina Code of Laws",
      section: "§ 15-3-530",
      citation: "S.C. Code Ann. § 15-3-530(5)",
      url: "https://law.justia.com/codes/south-carolina/title-15/chapter-3/section-15-3-530/",
      sourceUrl: "https://www.scstatehouse.gov/",
      effectiveDate: "1988-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or discovery, not to exceed 6 years (§ 15-3-545)",
        "Product liability: 3 years; 6-year statute of repose for breach of warranty (§ 15-3-530)",
        "Wrongful death: 3 years from date of death (§ 15-3-530(6))",
        "Minors: tolled until age 18, but no more than 5 years additional (§ 15-3-40)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 6-year repose. Tolling for minors until age 18, capped at 5 additional years. Affidavit of expert required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── South Dakota ──
    {
      id: "sd-sol-pi",
      jurisdiction: "sd",
      title: "South Dakota Statute of Limitations — Personal Injury",
      code: "South Dakota Codified Laws",
      section: "§ 15-2-14",
      citation: "S.D. Codified Laws § 15-2-14",
      url: "https://law.justia.com/codes/south-dakota/title-15/chapter-02/section-15-2-14/",
      sourceUrl: "https://sdlegislature.gov/",
      effectiveDate: "1978-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed certain limits (§ 15-2-14.1)",
        "Product liability: 3 years; 6-year statute of repose (§ 15-2-12.1)",
        "Wrongful death: 3 years from date of death (§ 21-5-3)",
        "Minors: tolled until age 18, then applicable period runs (§ 15-2-22)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal. Tolling for minors until age 18. Certificate of merit required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Tennessee ──
    {
      id: "tn-sol-pi",
      jurisdiction: "tn",
      title: "Tennessee Statute of Limitations — Personal Injury",
      code: "Tennessee Code Annotated",
      section: "§ 28-3-104",
      citation: "Tenn. Code Ann. § 28-3-104(a)(1)",
      url: "https://law.justia.com/codes/tennessee/title-28/chapter-3/part-1/section-28-3-104/",
      sourceUrl: "https://www.capitol.tn.gov/",
      effectiveDate: "1975-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 1 year from date of injury",
        "Medical malpractice: 1 year from discovery, not to exceed 3 years from act (§ 29-26-116)",
        "Product liability: 1 year; 10-year statute of repose (§ 29-28-103)",
        "Wrongful death: 1 year from date of death (§ 28-3-104(a)(1))",
        "Minors: tolled until age 18, then 1 year (§ 28-1-106)",
      ],
      penalties: undefined,
      exceptions:
        "Tennessee has a 1-year PI SOL, one of the shortest in the country. Med mal has discovery rule with 3-year repose. Pre-suit notice required for med mal (60 days). Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 1,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Texas ──
    {
      id: "tx-sol-pi",
      jurisdiction: "tx",
      title: "Texas Statute of Limitations — Personal Injury",
      code: "Texas Civil Practice and Remedies Code",
      section: "§ 16.003",
      citation: "Tex. Civ. Prac. & Rem. Code § 16.003",
      url: "https://law.justia.com/codes/texas/civil-practice-and-remedies-code/title-2/chapter-16/subchapter-a/section-16-003/",
      sourceUrl: "https://capitol.texas.gov/",
      effectiveDate: "1985-09-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or last treatment, 10-year repose (§ 74.251)",
        "Product liability: 2 years; 15-year statute of repose (§ 16.012)",
        "Wrongful death: 2 years from date of death (§ 16.003(b))",
        "Minors: tolled until age 18, then applicable period runs (§ 16.001); med mal minor under 12 has until age 14",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal claims. 10-year repose for med mal, 15-year for product liability. Expert report required within 120 days of filing med mal (§ 74.351). Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Utah ──
    {
      id: "ut-sol-pi",
      jurisdiction: "ut",
      title: "Utah Statute of Limitations — Personal Injury",
      code: "Utah Code",
      section: "§ 78B-2-307",
      citation: "Utah Code § 78B-2-307",
      url: "https://law.justia.com/codes/utah/title-78b/chapter-2/part-3/section-78b-2-307/",
      sourceUrl: "https://le.utah.gov/",
      effectiveDate: "2008-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 4 years from date of injury",
        "Medical malpractice: 2 years from discovery, not to exceed 4 years from act (§ 78B-3-404)",
        "Product liability: 2 years from discovery; 6-year useful-life limitation (§ 78B-6-703)",
        "Wrongful death: 2 years from date of death (§ 78B-2-304)",
        "Minors: tolled until age 18, then applicable period runs (§ 78B-2-108)",
      ],
      penalties: undefined,
      exceptions:
        "General PI is 4 years but med mal is only 2 years with discovery rule and 4-year repose. Pre-litigation panel review required for med mal. Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 4,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Vermont ──
    {
      id: "vt-sol-pi",
      jurisdiction: "vt",
      title: "Vermont Statute of Limitations — Personal Injury",
      code: "Vermont Statutes Annotated",
      section: "Title 12, § 512",
      citation: "Vt. Stat. Ann. tit. 12, § 512",
      url: "https://law.justia.com/codes/vermont/title-12/chapter-23/section-512/",
      sourceUrl: "https://legislature.vermont.gov/",
      effectiveDate: "1968-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or 2 years from discovery, not to exceed 7 years (tit. 12, § 521)",
        "Product liability: 3 years (tit. 12, § 512)",
        "Wrongful death: 2 years from date of death (tit. 14, § 1492)",
        "Minors: tolled until age 18, then applicable period runs (tit. 12, § 551)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 7-year outer repose. Tolling for minors until age 18. Certificate of merit required for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Virginia ──
    {
      id: "va-sol-pi",
      jurisdiction: "va",
      title: "Virginia Statute of Limitations — Personal Injury",
      code: "Code of Virginia",
      section: "§ 8.01-243",
      citation: "Va. Code § 8.01-243(A)",
      url: "https://law.justia.com/codes/virginia/title-8-01/chapter-3/section-8-01-243/",
      sourceUrl: "https://lis.virginia.gov/",
      effectiveDate: "1977-10-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 10 years (§ 8.01-243(C))",
        "Product liability: 2 years (§ 8.01-243(A))",
        "Wrongful death: 2 years from date of death (§ 8.01-244)",
        "Minors: tolled until age 18, then applicable period runs; med mal minor under 8 has until age 10 (§ 8.01-243(C))",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 10-year repose. Special rule for minors under 8 in med mal. Expert certification required for med mal. Tolling for minors.",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Washington ──
    {
      id: "wa-sol-pi",
      jurisdiction: "wa",
      title: "Washington Statute of Limitations — Personal Injury",
      code: "Revised Code of Washington",
      section: "§ 4.16.080",
      citation: "Wash. Rev. Code § 4.16.080(2)",
      url: "https://law.justia.com/codes/washington/title-4/chapter-4-16/section-4-16-080/",
      sourceUrl: "https://leg.wa.gov/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or 1 year from discovery, not to exceed 8 years (§ 4.16.350)",
        "Product liability: 3 years (§ 4.16.080(2)); useful-life repose (§ 7.72.060)",
        "Wrongful death: 3 years from date of death (§ 4.20.010)",
        "Minors: tolled until age 18, then applicable period runs (§ 4.16.190)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 8-year repose. Tolling for minors until age 18. Certificate of merit required within 45 days for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── West Virginia ──
    {
      id: "wv-sol-pi",
      jurisdiction: "wv",
      title: "West Virginia Statute of Limitations — Personal Injury",
      code: "West Virginia Code",
      section: "§ 55-2-12",
      citation: "W. Va. Code § 55-2-12",
      url: "https://law.justia.com/codes/west-virginia/chapter-55/article-2/section-55-2-12/",
      sourceUrl: "https://www.wvlegislature.gov/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 2 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 10 years (§ 55-7B-4)",
        "Product liability: 2 years (§ 55-2-12)",
        "Wrongful death: 2 years from date of death (§ 55-7-6)",
        "Minors: tolled until age 18, then applicable period runs (§ 55-2-15)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 10-year repose. Tolling for minors until age 18. Pre-suit screening certificate of merit required for med mal (§ 55-7B-6).",
      monetaryValues: [
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Wisconsin ──
    {
      id: "wi-sol-pi",
      jurisdiction: "wi",
      title: "Wisconsin Statute of Limitations — Personal Injury",
      code: "Wisconsin Statutes",
      section: "§ 893.54",
      citation: "Wis. Stat. § 893.54",
      url: "https://law.justia.com/codes/wisconsin/chapter-893/section-893-54/",
      sourceUrl: "https://docs.legis.wisconsin.gov/",
      effectiveDate: "1980-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 3 years from date of injury",
        "Medical malpractice: 3 years from act or 1 year from discovery, not to exceed 5 years (§ 893.55)",
        "Product liability: 3 years (§ 893.54); 15-year statute of repose (§ 895.047(5))",
        "Wrongful death: 3 years from date of death (§ 893.54(2))",
        "Minors: tolled until age 18, then applicable period runs (§ 893.16)",
      ],
      penalties: undefined,
      exceptions:
        "Discovery rule applies to med mal with 5-year repose. Tolling for minors until age 18. Informed consent claims follow same timeline. Product liability has 15-year repose.",
      monetaryValues: [
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 3,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },

    // ── Wyoming ──
    {
      id: "wy-sol-pi",
      jurisdiction: "wy",
      title: "Wyoming Statute of Limitations — Personal Injury",
      code: "Wyoming Statutes",
      section: "§ 1-3-105",
      citation: "Wyo. Stat. § 1-3-105(a)(iv)(C)",
      url: "https://law.justia.com/codes/wyoming/title-1/chapter-3/article-1/section-1-3-105/",
      sourceUrl: "https://wyoleg.gov/",
      effectiveDate: "1986-01-01",
      lastVerified: "2026-11-15",
      topics: ["statute-of-limitations-pi", "personal-injury"],
      keyProvisions: [
        "General personal injury: 4 years from date of injury",
        "Medical malpractice: 2 years from act or discovery, not to exceed 2 years from discovery (§ 1-3-107)",
        "Product liability: 4 years; useful-life limitation (§ 1-3-103)",
        "Wrongful death: 2 years from date of death (§ 1-38-102)",
        "Minors: tolled until age 18, then applicable period runs (§ 1-3-114)",
      ],
      penalties: undefined,
      exceptions:
        "General PI is 4 years. Med mal is shorter at 2 years. Discovery rule applies. Tolling for minors until age 18. Pre-suit review panel for med mal.",
      monetaryValues: [
        {
          type: "duration",
          amount: 4,
          unit: "years",
          description: "General personal injury statute of limitations",
        },
        {
          type: "duration",
          amount: 2,
          unit: "years",
          description: "Medical malpractice statute of limitations",
        },
      ],
    },
  ],
};
