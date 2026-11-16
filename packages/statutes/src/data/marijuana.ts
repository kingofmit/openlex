import { TopicDataFile } from "../loader";

export const marijuana: TopicDataFile = {
  topic: "marijuana",
  description:
    "State marijuana legalization status including recreational, medical, possession limits, and retail licensing",
  federalBaseline:
    "21 U.S.C. \u00a7 812 \u2014 marijuana remains Schedule I under the Controlled Substances Act",
  entries: [
    // ─── ALABAMA ───
    {
      id: "al-marijuana",
      jurisdiction: "al",
      title: "Alabama Medical Cannabis Act",
      code: "Ala. Code",
      section: "\u00a7 20-2A-1 et seq.",
      citation: "Ala. Code \u00a7 20-2A-1 et seq.",
      url: "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/Coatoc.htm",
      sourceUrl:
        "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/20-2A-1.htm",
      effectiveDate: "2021-05-17",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (non-smokable forms only; SB 46 signed 2021)",
        "Possession limit: Medical patients may possess a 70-day supply",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Licensing underway; limited dispensaries opening",
      ],
      penalties:
        "Possession of marijuana for personal use: up to 1 year and $6,000 fine (misdemeanor); second offense is Class C felony up to 10 years",
      exceptions:
        "Registered medical cannabis patients with qualifying conditions exempt from criminal penalties for approved forms",
      monetaryValues: [
        {
          type: "fine",
          amount: 6000,
          unit: "usd",
          description: "Maximum fine for first-offense personal possession",
        },
        {
          type: "duration",
          amount: 70,
          unit: "days",
          description: "Maximum medical supply period",
        },
      ],
    },

    // ─── ALASKA ───
    {
      id: "ak-marijuana",
      jurisdiction: "ak",
      title: "Alaska Marijuana Control Act",
      code: "Alaska Stat.",
      section: "\u00a7 17.38.010 et seq.",
      citation: "Alaska Stat. \u00a7 17.38.010 et seq.",
      url: "https://www.akleg.gov/basis/statutes.asp#17.38",
      sourceUrl: "https://www.commerce.alaska.gov/web/amco/",
      effectiveDate: "2015-02-24",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Ballot Measure 2, effective 2015)",
        "Medical: Legal",
        "Possession limit: 1 oz usable; up to 6 plants (3 mature)",
        "Home cultivation: Allowed, up to 6 plants per person, 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "ounces",
          description: "1 oz personal possession limit",
        },
      ],
    },

    // ─── ARIZONA ───
    {
      id: "az-marijuana",
      jurisdiction: "az",
      title: "Smart and Safe Arizona Act (Proposition 207)",
      code: "Ariz. Rev. Stat.",
      section: "\u00a7 36-2850 et seq.",
      citation: "Ariz. Rev. Stat. \u00a7 36-2850 et seq.",
      url: "https://www.azleg.gov/arsDetail/?title=36",
      sourceUrl: "https://azdhs.gov/licensing/marijuana/index.php",
      effectiveDate: "2020-11-30",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Prop 207, effective 2020)",
        "Medical: Legal (since 2010, Prop 203)",
        "Possession limit: 1 oz total, max 5g concentrate (recreational); 2.5 oz per 14-day period (medical)",
        "Home cultivation: Allowed, 6 plants per person, 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 16,
          unit: "usd",
          description: "16% excise tax on recreational sales",
        },
      ],
    },

    // ─── ARKANSAS ───
    {
      id: "ar-marijuana",
      jurisdiction: "ar",
      title: "Arkansas Medical Marijuana Amendment",
      code: "Ark. Const.",
      section: "Amend. 98",
      citation: "Ark. Const. Amend. 98; Ark. Code Ann. \u00a7 20-56-401 et seq.",
      url: "https://www.arkleg.state.ar.us/Acts/FTPDocument?path=%2FAMENDMENTS%2FAmendment98.pdf",
      sourceUrl: "https://www.healthy.arkansas.gov/programs-services/topics/medical-marijuana",
      effectiveDate: "2016-11-08",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (Amendment 98, 2016)",
        "Possession limit: Medical patients may possess up to 2.5 oz per 14-day period",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession under 4 oz: misdemeanor, up to 1 year and $2,500 fine; over 4 oz: felony, 4\u201310 years",
      exceptions:
        "Registered qualifying patients with valid medical marijuana card exempt",
      monetaryValues: [
        {
          type: "limit",
          amount: 2.5,
          unit: "ounces",
          description: "2.5 oz per 14-day medical possession limit",
        },
        {
          type: "fine",
          amount: 2500,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession under 4 oz",
        },
      ],
    },

    // ─── CALIFORNIA ───
    {
      id: "ca-marijuana",
      jurisdiction: "ca",
      title: "Adult Use of Marijuana Act (Proposition 64)",
      code: "Cal. Health & Safety Code",
      section: "\u00a7 11357 et seq.; Cal. Bus. & Prof. Code \u00a7 26000 et seq.",
      citation:
        "Cal. Health & Safety Code \u00a7 11357; Cal. Bus. & Prof. Code \u00a7 26000 et seq.",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=11357&lawCode=HSC",
      sourceUrl: "https://cannabis.ca.gov/",
      effectiveDate: "2016-11-09",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Prop 64, effective 2016)",
        "Medical: Legal (since 1996, Prop 215 / Compassionate Use Act)",
        "Possession limit: 1 oz flower or 8g concentrate (recreational); medical patients may possess reasonable amounts",
        "Home cultivation: Allowed, up to 6 plants per residence",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 15,
          unit: "usd",
          description: "15% excise tax on retail cannabis sales",
        },
      ],
    },

    // ─── COLORADO ───
    {
      id: "co-marijuana",
      jurisdiction: "co",
      title: "Colorado Amendment 64",
      code: "Colo. Const.",
      section: "Art. XVIII, \u00a7 16; Colo. Rev. Stat. \u00a7 44-10-101 et seq.",
      citation:
        "Colo. Const. Art. XVIII, \u00a7 16; Colo. Rev. Stat. \u00a7 44-10-101 et seq.",
      url: "https://leg.colorado.gov/sites/default/files/images/olls/crs2023-title-44.pdf",
      sourceUrl: "https://sbg.colorado.gov/med",
      effectiveDate: "2012-12-10",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Amendment 64, effective 2012; retail sales Jan 2014)",
        "Medical: Legal (since 2000, Amendment 20)",
        "Possession limit: 2 oz (recreational, increased from 1 oz in 2022); medical up to 2 oz",
        "Home cultivation: Allowed, 6 plants per person (3 flowering), 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 56,
          unit: "ounces",
          description: "2 oz (56g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 15,
          unit: "usd",
          description: "15% excise tax plus 15% special sales tax on retail marijuana",
        },
      ],
    },

    // ─── CONNECTICUT ───
    {
      id: "ct-marijuana",
      jurisdiction: "ct",
      title: "Connecticut Responsible and Equitable Regulation of Adult-Use Cannabis Act",
      code: "Conn. Gen. Stat.",
      section: "\u00a7 21a-420 et seq.",
      citation: "Conn. Gen. Stat. \u00a7 21a-420 et seq.",
      url: "https://www.cga.ct.gov/current/pub/chap_420n.htm",
      sourceUrl: "https://portal.ct.gov/DCP/Medical-Marijuana-Program/Medical-Marijuana-Program",
      effectiveDate: "2021-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (SB 1201, signed June 2021; retail sales began Jan 2023)",
        "Medical: Legal (since 2012)",
        "Possession limit: 1.5 oz on person, up to 5 oz in locked container at home",
        "Home cultivation: Allowed starting 2024 (up to 3 mature, 3 immature per adult, max 12 per household)",
        "Retail dispensaries: Operating",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 42,
          unit: "ounces",
          description: "1.5 oz (42g) on-person possession limit",
        },
      ],
    },

    // ─── DELAWARE ───
    {
      id: "de-marijuana",
      jurisdiction: "de",
      title: "Delaware Marijuana Control Act",
      code: "Del. Code Ann.",
      section: "tit. 16, ch. 49A",
      citation: "Del. Code Ann. tit. 16, \u00a7 4901A et seq.",
      url: "https://delcode.delaware.gov/title16/c049a/index.html",
      sourceUrl: "https://legis.delaware.gov/",
      effectiveDate: "2023-04-23",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (HB 1, signed April 2023; possession legalized, commercial sales framework pending)",
        "Medical: Legal (since 2011)",
        "Possession limit: 1 oz recreational; medical patients up to 6 oz",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating; recreational retail framework under development",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational possession limit",
        },
      ],
    },

    // ─── FLORIDA ───
    {
      id: "fl-marijuana",
      jurisdiction: "fl",
      title: "Florida Medical Marijuana Legalization (Amendment 2)",
      code: "Fla. Stat.",
      section: "\u00a7 381.986",
      citation: "Fla. Const. Art. X, \u00a7 29; Fla. Stat. \u00a7 381.986",
      url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0381/0381.html",
      sourceUrl: "https://knowthefactsmmj.com/",
      effectiveDate: "2017-01-03",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (Amendment 3 failed to reach 60% threshold in Nov 2024)",
        "Medical: Legal (Amendment 2, 2016; implemented 2017)",
        "Possession limit: Medical patients may possess a 70-day supply as determined by physician",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating (vertically integrated system)",
      ],
      penalties:
        "Possession of 20g or less: misdemeanor, up to 1 year, $1,000 fine; over 20g: felony, up to 5 years, $5,000 fine",
      exceptions: "Registered qualifying medical marijuana patients exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession (20g or less)",
        },
        {
          type: "fine",
          amount: 5000,
          unit: "usd",
          description: "Maximum fine for felony possession (over 20g)",
        },
      ],
    },

    // ─── GEORGIA ───
    {
      id: "ga-marijuana",
      jurisdiction: "ga",
      title: "Georgia Low-THC Oil Law (Haleigh's Hope Act)",
      code: "Ga. Code Ann.",
      section: "\u00a7 16-12-190 et seq.; \u00a7 31-2A-18",
      citation: "Ga. Code Ann. \u00a7 16-12-190 et seq.",
      url: "https://www.legis.ga.gov/legislation/en-US/Display/20192020/HB/324",
      sourceUrl: "https://gaphc.com/",
      effectiveDate: "2019-04-17",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Limited (low-THC oil only, max 5% THC; HB 324 created access commission)",
        "Possession limit: 20 fl oz of low-THC oil for registered patients",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Limited low-THC oil dispensaries authorized under HB 324",
      ],
      penalties:
        "Possession of 1 oz or less: misdemeanor, up to 1 year, $1,000 fine; over 1 oz: felony, 1\u201310 years",
      exceptions:
        "Patients registered on the Low-THC Oil Registry may possess up to 20 fl oz of low-THC oil (max 5% THC)",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession (1 oz or less)",
        },
        {
          type: "threshold",
          amount: 5,
          unit: "percent",
          description: "5% maximum THC concentration for medical low-THC oil",
        },
      ],
    },

    // ─── HAWAII ───
    {
      id: "hi-marijuana",
      jurisdiction: "hi",
      title: "Hawaii Medical Cannabis Law",
      code: "Haw. Rev. Stat.",
      section: "\u00a7 329-121 et seq.",
      citation: "Haw. Rev. Stat. \u00a7 329-121 et seq.",
      url: "https://www.capitol.hawaii.gov/hrscurrent/Vol06_Ch0321-0344/HRS0329/",
      sourceUrl: "https://health.hawaii.gov/medicalcannabis/",
      effectiveDate: "2000-06-14",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized for small amounts; 3g or less is a $130 violation)",
        "Medical: Legal (since 2000; dispensaries authorized 2015)",
        "Possession limit: Medical patients may possess up to 4 oz",
        "Home cultivation: Medical patients may grow up to 10 plants",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession of 3g or less: violation, $130 fine (no arrest); over 3g up to 1 oz: misdemeanor, up to 30 days, $1,000 fine; over 1 oz: felony",
      exceptions: "Registered qualifying medical patients exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 130,
          unit: "usd",
          description: "Fine for possession of 3g or less (decriminalized)",
        },
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession (3g\u20131 oz)",
        },
      ],
    },

    // ─── IDAHO ───
    {
      id: "id-marijuana",
      jurisdiction: "id",
      title: "Idaho Controlled Substances Act",
      code: "Idaho Code",
      section: "\u00a7 37-2732",
      citation: "Idaho Code \u00a7 37-2732",
      url: "https://legislature.idaho.gov/statutesrules/idstat/Title37/T37CH27/",
      sourceUrl: "https://legislature.idaho.gov/statutesrules/idstat/Title37/T37CH27/SECT37-2732/",
      effectiveDate: "1971-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (no medical marijuana program)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "Possession of 3 oz or less: misdemeanor, up to 1 year, $1,000 fine; over 3 oz: felony, up to 5 years, $10,000 fine",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession (3 oz or less)",
        },
        {
          type: "fine",
          amount: 10000,
          unit: "usd",
          description: "Maximum fine for felony possession (over 3 oz)",
        },
      ],
    },

    // ─── ILLINOIS ───
    {
      id: "il-marijuana",
      jurisdiction: "il",
      title: "Cannabis Regulation and Tax Act",
      code: "410 ILCS",
      section: "705/",
      citation: "410 ILCS 705/ (Cannabis Regulation and Tax Act)",
      url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3992",
      sourceUrl: "https://idfpr.illinois.gov/profs/adultusecan.asp",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Cannabis Regulation and Tax Act, effective Jan 2020)",
        "Medical: Legal (since 2014, Compassionate Use of Medical Cannabis Program Act)",
        "Possession limit: 30g flower, 5g concentrate, 500mg THC in cannabis-infused products (residents); half for non-residents",
        "Home cultivation: Medical patients only (5 plants); recreational home grow not allowed",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 30,
          unit: "ounces",
          description: "30g recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 25,
          unit: "usd",
          description: "Up to 25% tax on products with over 35% THC; 10% on flower; 20% on infused",
        },
      ],
    },

    // ─── INDIANA ───
    {
      id: "in-marijuana",
      jurisdiction: "in",
      title: "Indiana Controlled Substances Act \u2014 Marijuana",
      code: "Ind. Code",
      section: "\u00a7 35-48-4-11",
      citation: "Ind. Code \u00a7 35-48-4-11",
      url: "https://iga.in.gov/laws/2024/ic/titles/35#35-48-4-11",
      sourceUrl: "https://iga.in.gov/laws/2024/ic/titles/35",
      effectiveDate: "1987-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (CBD oil with <0.3% THC allowed under SEA 52)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "Possession of 30g or less: Class B misdemeanor, up to 180 days, $1,000 fine; prior conviction elevates to Class A misdemeanor (1 year, $5,000)",
      exceptions:
        "CBD products with less than 0.3% THC are legal under state law (SEA 52, 2018)",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for Class B misdemeanor possession (30g or less)",
        },
        {
          type: "fine",
          amount: 5000,
          unit: "usd",
          description: "Maximum fine for Class A misdemeanor (prior conviction)",
        },
      ],
    },

    // ─── IOWA ───
    {
      id: "ia-marijuana",
      jurisdiction: "ia",
      title: "Iowa Medical Cannabidiol Act",
      code: "Iowa Code",
      section: "\u00a7 124E",
      citation: "Iowa Code \u00a7 124E",
      url: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=124E",
      sourceUrl: "https://idph.iowa.gov/omc",
      effectiveDate: "2017-12-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Limited (Medical Cannabidiol Act; 4.5g THC cap per 90-day period)",
        "Possession limit: Medical patients limited to 4.5g total THC per 90 days",
        "Home cultivation: Not allowed",
        "Retail dispensaries: 5 licensed medical cannabidiol dispensaries",
      ],
      penalties:
        "First offense possession (any amount): serious misdemeanor, up to 6 months, $1,000 fine; second offense: up to 1 year, $1,875 fine; third+ offense: Class D felony, up to 5 years",
      exceptions: "Patients with a medical cannabidiol registration card exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for first-offense possession",
        },
        {
          type: "threshold",
          amount: 4.5,
          unit: "grams",
          description: "4.5g total THC per 90-day medical limit",
        },
      ],
    },

    // ─── KANSAS ───
    {
      id: "ks-marijuana",
      jurisdiction: "ks",
      title: "Kansas Controlled Substances Act \u2014 Marijuana",
      code: "Kan. Stat. Ann.",
      section: "\u00a7 21-5706",
      citation: "Kan. Stat. Ann. \u00a7 21-5706",
      url: "https://www.ksrevisor.org/statutes/chapters/ch21/021_057_0006.html",
      sourceUrl: "https://www.ksrevisor.org/statutes/chapters/ch21/021_057_0006.html",
      effectiveDate: "2011-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (no medical marijuana program; only CBD oil with 0% THC permitted)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "First offense possession: Class B misdemeanor, up to 6 months, $1,000 fine; second offense: Class A misdemeanor, up to 1 year, $2,500 fine; third+ offense: felony drug severity level 5, 10\u201342 months",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for first-offense possession",
        },
        {
          type: "fine",
          amount: 2500,
          unit: "usd",
          description: "Maximum fine for second-offense possession",
        },
      ],
    },

    // ─── KENTUCKY ───
    {
      id: "ky-marijuana",
      jurisdiction: "ky",
      title: "Kentucky Medical Cannabis Program Act",
      code: "Ky. Rev. Stat. Ann.",
      section: "\u00a7 218B.010 et seq.",
      citation: "Ky. Rev. Stat. Ann. \u00a7 218B.010 et seq.",
      url: "https://apps.legislature.ky.gov/law/statutes/chapter.aspx?id=39826",
      sourceUrl: "https://www.medicalcannabis.ky.gov/",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (SB 47 signed 2023; dispensary sales begin Jan 2025)",
        "Possession limit: Medical patients may possess up to 10-day supply",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries authorized starting Jan 2025",
      ],
      penalties:
        "Possession under 8 oz: Class B misdemeanor, up to 45 days, $250 fine; 8 oz\u20135 lbs: Class D felony, 1\u20133 years",
      exceptions:
        "Registered cardholding patients may possess medical cannabis from licensed dispensaries",
      monetaryValues: [
        {
          type: "fine",
          amount: 250,
          unit: "usd",
          description: "Maximum fine for possession under 8 oz",
        },
      ],
    },

    // ─── LOUISIANA ───
    {
      id: "la-marijuana",
      jurisdiction: "la",
      title: "Louisiana Therapeutic Marijuana Act",
      code: "La. Rev. Stat. Ann.",
      section: "\u00a7 40:1046",
      citation: "La. Rev. Stat. Ann. \u00a7 40:1046",
      url: "https://www.legis.la.gov/legis/Law.aspx?d=98876",
      sourceUrl: "https://ldh.la.gov/page/medical-marijuana",
      effectiveDate: "2016-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (since 2016; expanded to smokable flower in 2022)",
        "Possession limit: Medical patients may possess a 30-day supply (physician-determined)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Licensed pharmacies dispense medical marijuana",
      ],
      penalties:
        "First offense possession (14g or less): misdemeanor, up to 15 days, $300 fine; second offense: up to 30 days, $1,000; subsequent: felony, up to 2 years, $2,500",
      exceptions:
        "Patients with a physician recommendation and valid ID from a licensed pharmacy exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 300,
          unit: "usd",
          description: "Maximum fine for first-offense possession (14g or less)",
        },
      ],
    },

    // ─── MAINE ───
    {
      id: "me-marijuana",
      jurisdiction: "me",
      title: "Maine Marijuana Legalization Act",
      code: "Me. Rev. Stat. Ann.",
      section: "tit. 28-B, \u00a7 101 et seq.",
      citation: "Me. Rev. Stat. Ann. tit. 28-B, \u00a7 101 et seq.",
      url: "https://legislature.maine.gov/statutes/28-B/title28-Bch1sec0.html",
      sourceUrl: "https://www.maine.gov/dafs/ocp/",
      effectiveDate: "2017-01-30",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Question 1, effective 2017; retail sales Oct 2020)",
        "Medical: Legal (since 1999)",
        "Possession limit: 2.5 oz on person; up to 5 lbs at home",
        "Home cultivation: Allowed, up to 3 mature, 12 immature plants",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 70,
          unit: "ounces",
          description: "2.5 oz (70g) personal possession limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% sales tax on adult-use cannabis",
        },
      ],
    },

    // ─── MARYLAND ───
    {
      id: "md-marijuana",
      jurisdiction: "md",
      title: "Maryland Cannabis Reform Act",
      code: "Md. Code Ann., Alco. & Tob.",
      section: "\u00a7 36-101 et seq.",
      citation: "Md. Code Ann., Alco. & Tob. Art. \u00a7 36-101 et seq.",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gat",
      sourceUrl: "https://mmcc.maryland.gov/",
      effectiveDate: "2023-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Question 4 ballot initiative 2022; effective July 2023)",
        "Medical: Legal (since 2014)",
        "Possession limit: 1.5 oz flower or 12g concentrate (recreational); medical patients up to 4 oz per 30 days",
        "Home cultivation: Allowed, 2 plants per person, 4 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 42,
          unit: "ounces",
          description: "1.5 oz (42g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 9,
          unit: "usd",
          description: "9% sales and use tax on adult-use cannabis",
        },
      ],
    },

    // ─── MASSACHUSETTS ───
    {
      id: "ma-marijuana",
      jurisdiction: "ma",
      title: "Regulation and Taxation of Marijuana Act (Question 4)",
      code: "Mass. Gen. Laws",
      section: "ch. 94G",
      citation: "Mass. Gen. Laws ch. 94G",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter94G",
      sourceUrl: "https://masscannabiscontrol.com/",
      effectiveDate: "2016-12-15",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Question 4, effective 2016; retail sales Nov 2018)",
        "Medical: Legal (since 2013, Question 3)",
        "Possession limit: 1 oz on person, 10 oz at home (recreational)",
        "Home cultivation: Allowed, up to 6 plants per adult, 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) on-person recreational limit",
        },
        {
          type: "fee",
          amount: 20,
          unit: "usd",
          description: "10.75% excise tax + 6.25% sales tax + up to 3% local = ~20% effective tax",
        },
      ],
    },

    // ─── MICHIGAN ───
    {
      id: "mi-marijuana",
      jurisdiction: "mi",
      title: "Michigan Regulation and Taxation of Marihuana Act (Proposal 1)",
      code: "Mich. Comp. Laws",
      section: "\u00a7 333.27951 et seq.",
      citation: "Mich. Comp. Laws \u00a7 333.27951 et seq.",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-333-27951",
      sourceUrl: "https://www.michigan.gov/cra",
      effectiveDate: "2018-12-06",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Proposal 1, effective Dec 2018; retail sales Dec 2019)",
        "Medical: Legal (since 2008, Proposal 1)",
        "Possession limit: 2.5 oz on person, 10 oz at home (recreational); medical up to 2.5 oz",
        "Home cultivation: Allowed, up to 12 plants per person",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 70,
          unit: "ounces",
          description: "2.5 oz (70g) on-person recreational limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% excise tax plus 6% sales tax on adult-use cannabis",
        },
      ],
    },

    // ─── MINNESOTA ───
    {
      id: "mn-marijuana",
      jurisdiction: "mn",
      title: "Minnesota Cannabis Act",
      code: "Minn. Stat.",
      section: "\u00a7 342.01 et seq.",
      citation: "Minn. Stat. \u00a7 342.01 et seq.",
      url: "https://www.revisor.mn.gov/statutes/cite/342",
      sourceUrl: "https://mn.gov/ocm/",
      effectiveDate: "2023-08-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (HF 100, signed May 2023; possession legal Aug 2023; retail sales expected 2025)",
        "Medical: Legal (since 2014)",
        "Possession limit: 2 oz flower in public, 2 lbs at home; 8g concentrate",
        "Home cultivation: Allowed, up to 8 plants (4 mature) per household",
        "Retail dispensaries: Licensing in progress; retail sales beginning 2025",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 56,
          unit: "ounces",
          description: "2 oz (56g) public possession limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% gross receipts tax on adult-use cannabis",
        },
      ],
    },

    // ─── MISSISSIPPI ───
    {
      id: "ms-marijuana",
      jurisdiction: "ms",
      title: "Mississippi Medical Cannabis Act",
      code: "Miss. Code Ann.",
      section: "\u00a7 41-137-1 et seq.",
      citation: "Miss. Code Ann. \u00a7 41-137-1 et seq.",
      url: "https://www.sos.ms.gov/content/documents/ed_pubs/Senate_Bill_2095.pdf",
      sourceUrl: "https://www.medicalcannabis.ms.gov/",
      effectiveDate: "2022-02-02",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized for 30g or less; civil fine only)",
        "Medical: Legal (SB 2095, signed Feb 2022)",
        "Possession limit: Medical patients up to 3.5g per day, max 3 oz per month",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession of 30g or less: civil summons, $250 fine (first offense), drug education; 30g\u2013250g: misdemeanor, up to 1 year, $1,000; over 250g: felony",
      exceptions: "Registered medical cannabis patients with a valid card exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 250,
          unit: "usd",
          description: "Fine for first-offense possession (30g or less, decriminalized)",
        },
        {
          type: "limit",
          amount: 84,
          unit: "ounces",
          description: "3 oz (84g) monthly medical possession limit",
        },
      ],
    },

    // ─── MISSOURI ───
    {
      id: "mo-marijuana",
      jurisdiction: "mo",
      title: "Missouri Amendment 3 \u2014 Adult-Use Marijuana",
      code: "Mo. Const.",
      section: "Art. XIV; Mo. Rev. Stat. \u00a7 195.805 et seq.",
      citation: "Mo. Const. Art. XIV; Mo. Rev. Stat. \u00a7 195.805 et seq.",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=195.805",
      sourceUrl: "https://health.mo.gov/safety/cannabis/",
      effectiveDate: "2022-12-08",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Amendment 3, effective Dec 2022; retail sales Feb 2023)",
        "Medical: Legal (since 2018, Amendment 2)",
        "Possession limit: 3 oz recreational; medical patients up to 6 oz per month",
        "Home cultivation: Allowed, up to 6 flowering, 6 non-flowering, and 6 clones per patient/cardholder",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 84,
          unit: "ounces",
          description: "3 oz (84g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 6,
          unit: "usd",
          description: "6% excise tax on adult-use cannabis",
        },
      ],
    },

    // ─── MONTANA ───
    {
      id: "mt-marijuana",
      jurisdiction: "mt",
      title: "Montana Marijuana Regulation and Taxation Act (I-190)",
      code: "Mont. Code Ann.",
      section: "\u00a7 16-12-101 et seq.",
      citation: "Mont. Code Ann. \u00a7 16-12-101 et seq.",
      url: "https://leg.mt.gov/bills/mca/title_0160/chapter_0120/parts_index.html",
      sourceUrl: "https://mtrevenue.gov/cannabis/",
      effectiveDate: "2021-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (I-190, effective Jan 2021; retail sales Jan 2022)",
        "Medical: Legal (since 2004)",
        "Possession limit: 1 oz recreational; medical patients up to 1 oz",
        "Home cultivation: Allowed, up to 4 mature and 4 seedlings per person",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 20,
          unit: "usd",
          description: "20% excise tax on adult-use cannabis",
        },
      ],
    },

    // ─── NEBRASKA ───
    {
      id: "ne-marijuana",
      jurisdiction: "ne",
      title: "Nebraska Controlled Substances Act \u2014 Marijuana",
      code: "Neb. Rev. Stat.",
      section: "\u00a7 28-416",
      citation: "Neb. Rev. Stat. \u00a7 28-416",
      url: "https://nebraskalegislature.gov/laws/statutes.php?statute=28-416",
      sourceUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=28-416",
      effectiveDate: "1978-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized for first offense, 1 oz or less)",
        "Medical: Voters approved medical cannabis initiative in Nov 2024; implementation pending",
        "Possession limit: Not applicable for recreational (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "First offense possession (1 oz or less): infraction, $300 fine, no jail; second offense: $400 and up to 5 days; third+: misdemeanor, up to 7 days, $500; over 1 oz: misdemeanor/felony with increasing penalties",
      exceptions:
        "Voters approved medical cannabis legalization in Nov 2024; regulatory framework under development",
      monetaryValues: [
        {
          type: "fine",
          amount: 300,
          unit: "usd",
          description: "Fine for first-offense possession of 1 oz or less",
        },
      ],
    },

    // ─── NEVADA ───
    {
      id: "nv-marijuana",
      jurisdiction: "nv",
      title: "Nevada Regulation and Taxation of Marijuana Act (Question 2)",
      code: "Nev. Rev. Stat.",
      section: "\u00a7 678A\u2013678D",
      citation: "Nev. Rev. Stat. \u00a7 678A.010 et seq.",
      url: "https://www.leg.state.nv.us/nrs/nrs-678a.html",
      sourceUrl: "https://ccb.nv.gov/",
      effectiveDate: "2017-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Question 2, effective Jan 2017; retail sales July 2017)",
        "Medical: Legal (since 2001)",
        "Possession limit: 1 oz flower or 3.5g concentrate (recreational); medical up to 2.5 oz per 14 days",
        "Home cultivation: Allowed if 25+ miles from dispensary; up to 6 plants per person, 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% excise tax on recreational cannabis sales",
        },
      ],
    },

    // ─── NEW HAMPSHIRE ───
    {
      id: "nh-marijuana",
      jurisdiction: "nh",
      title: "New Hampshire Therapeutic Cannabis Program",
      code: "N.H. Rev. Stat. Ann.",
      section: "\u00a7 126-X:1 et seq.",
      citation: "N.H. Rev. Stat. Ann. \u00a7 126-X:1 et seq.",
      url: "https://www.gencourt.state.nh.us/rsa/html/X/126-X/126-X-mrg.htm",
      sourceUrl: "https://www.dhhs.nh.gov/programs-services/medicinal-use-cannabis",
      effectiveDate: "2013-07-23",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized; possession of up to 3/4 oz is a violation)",
        "Medical: Legal (since 2013, therapeutic cannabis program)",
        "Possession limit: Medical patients up to 2 oz per 10 days",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical alternative treatment centers operating",
      ],
      penalties:
        "Possession of 3/4 oz or less: violation, $100 fine (first offense), $300 (subsequent); over 3/4 oz: misdemeanor, up to 1 year, $350 fine",
      exceptions: "Qualifying patients registered with the Therapeutic Cannabis Program exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 100,
          unit: "usd",
          description: "Fine for first-offense possession of 3/4 oz or less (decriminalized)",
        },
      ],
    },

    // ─── NEW JERSEY ───
    {
      id: "nj-marijuana",
      jurisdiction: "nj",
      title: "New Jersey Cannabis Regulatory, Enforcement Assistance, and Marketplace Modernization Act",
      code: "N.J. Stat. Ann.",
      section: "\u00a7 24:6I-31 et seq.",
      citation: "N.J. Stat. Ann. \u00a7 24:6I-31 et seq.",
      url: "https://www.njleg.state.nj.us/2020/Bills/AL21/21_.PDF",
      sourceUrl: "https://www.nj.gov/cannabis/",
      effectiveDate: "2021-02-22",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Public Question 1, 2020; enabling legislation signed Feb 2021; retail sales April 2022)",
        "Medical: Legal (since 2010, Compassionate Use Medical Marijuana Act)",
        "Possession limit: 6 oz flower (recreational); medical patients up to 3 oz per month",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 168,
          unit: "ounces",
          description: "6 oz (168g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 6.625,
          unit: "usd",
          description: "6.625% sales tax plus social equity excise fee on adult-use cannabis",
        },
      ],
    },

    // ─── NEW MEXICO ───
    {
      id: "nm-marijuana",
      jurisdiction: "nm",
      title: "New Mexico Cannabis Regulation Act",
      code: "N.M. Stat. Ann.",
      section: "\u00a7 26-2C-1 et seq.",
      citation: "N.M. Stat. Ann. \u00a7 26-2C-1 et seq.",
      url: "https://nmonesource.com/nmos/nmsa/en/item/4379/index.do",
      sourceUrl: "https://www.nmcrd.org/",
      effectiveDate: "2021-06-29",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (HB 2, signed June 2021; retail sales April 2022)",
        "Medical: Legal (since 2007, Lynn and Erin Compassionate Use Act)",
        "Possession limit: 2 oz flower, 16g extract, 800mg edibles (recreational)",
        "Home cultivation: Allowed, up to 6 mature, 6 immature plants per person; 12 per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 56,
          unit: "ounces",
          description: "2 oz (56g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 12,
          unit: "usd",
          description: "12% excise tax on recreational cannabis (increasing to 18% by 2030)",
        },
      ],
    },

    // ─── NEW YORK ───
    {
      id: "ny-marijuana",
      jurisdiction: "ny",
      title: "New York Marijuana Regulation and Taxation Act (MRTA)",
      code: "N.Y. Cannabis Law",
      section: "\u00a7 1 et seq.",
      citation: "N.Y. Cannabis Law \u00a7 1 et seq.",
      url: "https://www.nysenate.gov/legislation/laws/CAN",
      sourceUrl: "https://cannabis.ny.gov/",
      effectiveDate: "2021-03-31",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (MRTA, signed March 2021; retail sales Dec 2022)",
        "Medical: Legal (since 2014, Compassionate Care Act)",
        "Possession limit: 3 oz flower or 24g concentrate (recreational)",
        "Home cultivation: Allowed once regulations are finalized (up to 6 plants, 3 mature)",
        "Retail dispensaries: Operating with ongoing license rollout",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 84,
          unit: "ounces",
          description: "3 oz (84g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 13,
          unit: "usd",
          description: "13% state tax (9% excise + 4% local) plus THC-based potency tax",
        },
      ],
    },

    // ─── NORTH CAROLINA ───
    {
      id: "nc-marijuana",
      jurisdiction: "nc",
      title: "North Carolina Controlled Substances Act \u2014 Marijuana",
      code: "N.C. Gen. Stat.",
      section: "\u00a7 90-95",
      citation: "N.C. Gen. Stat. \u00a7 90-95",
      url: "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_90/Article_5.html",
      sourceUrl: "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_90/GS_90-95.html",
      effectiveDate: "1977-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized; 0.5 oz or less is a misdemeanor with no jail for first offense)",
        "Medical: Illegal (limited hemp-derived CBD allowed)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "Possession of 0.5 oz or less: Class 3 misdemeanor, $200 fine (no jail, first offense); 0.5\u20131.5 oz: Class 1 misdemeanor, 1\u201345 days; over 1.5 oz: felony",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "fine",
          amount: 200,
          unit: "usd",
          description: "Fine for possession of 0.5 oz or less (first offense)",
        },
      ],
    },

    // ─── NORTH DAKOTA ───
    {
      id: "nd-marijuana",
      jurisdiction: "nd",
      title: "North Dakota Medical Marijuana Program",
      code: "N.D. Cent. Code",
      section: "\u00a7 19-24.1-01 et seq.",
      citation: "N.D. Cent. Code \u00a7 19-24.1-01 et seq.",
      url: "https://www.ndlegis.gov/cencode/t19c24-1.pdf",
      sourceUrl: "https://www.health.nd.gov/mm",
      effectiveDate: "2016-11-08",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (decriminalized for small amounts; 0.5 oz or less is an infraction)",
        "Medical: Legal (Initiated Measure 5, 2016)",
        "Possession limit: Medical patients up to 3 oz per 30-day period",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession of 0.5 oz or less: infraction, $1,000 fine; 0.5 oz\u20131 lb: Class B misdemeanor, up to 30 days, $1,500 fine",
      exceptions: "Qualifying patients with valid medical marijuana card exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for possession of 0.5 oz or less (infraction)",
        },
      ],
    },

    // ─── OHIO ───
    {
      id: "oh-marijuana",
      jurisdiction: "oh",
      title: "Ohio Adult Use Cannabis (Issue 2)",
      code: "Ohio Rev. Code Ann.",
      section: "\u00a7 3780.01 et seq.",
      citation: "Ohio Rev. Code Ann. \u00a7 3780.01 et seq.",
      url: "https://codes.ohio.gov/ohio-revised-code/chapter-3780",
      sourceUrl: "https://www.commercecannabishio.com/",
      effectiveDate: "2023-12-07",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Issue 2, effective Dec 2023; retail sales began 2024)",
        "Medical: Legal (since 2016, HB 523)",
        "Possession limit: 2.5 oz flower or 15g extract (recreational)",
        "Home cultivation: Allowed, up to 6 plants per person, 12 per household",
        "Retail dispensaries: Operating (dual-license medical/adult-use)",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 70,
          unit: "ounces",
          description: "2.5 oz (70g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% excise tax on adult-use cannabis sales",
        },
      ],
    },

    // ─── OKLAHOMA ───
    {
      id: "ok-marijuana",
      jurisdiction: "ok",
      title: "Oklahoma Medical Marijuana Authority (SQ 788)",
      code: "Okla. Stat.",
      section: "tit. 63, \u00a7 420A et seq.",
      citation: "Okla. Stat. tit. 63, \u00a7 420A et seq.",
      url: "https://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKST63&level=1",
      sourceUrl: "https://oklahoma.gov/omma.html",
      effectiveDate: "2018-06-26",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (SQ 820 rejected by voters in March 2023)",
        "Medical: Legal (SQ 788, 2018; one of the most permissive medical programs in the US)",
        "Possession limit: Medical patients: 3 oz on person, 8 oz at home, 1 oz concentrate",
        "Home cultivation: Medical patients may grow up to 6 mature and 6 seedling plants",
        "Retail dispensaries: Thousands of licensed medical dispensaries operating",
      ],
      penalties:
        "Possession without medical card: misdemeanor for personal use amounts, up to 1 year, $1,000 fine; felony for larger amounts",
      exceptions:
        "Licensed medical marijuana patients and caregivers exempt; out-of-state patients may obtain temporary 30-day licenses",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for non-medical possession (misdemeanor)",
        },
        {
          type: "fee",
          amount: 7,
          unit: "usd",
          description: "7% excise tax on medical cannabis sales",
        },
      ],
    },

    // ─── OREGON ───
    {
      id: "or-marijuana",
      jurisdiction: "or",
      title: "Oregon Control, Regulation, and Taxation of Marijuana and Industrial Hemp Act (Measure 91)",
      code: "Or. Rev. Stat.",
      section: "\u00a7 475C.005 et seq.",
      citation: "Or. Rev. Stat. \u00a7 475C.005 et seq.",
      url: "https://www.oregonlegislature.gov/bills_laws/ors/ors475C.html",
      sourceUrl: "https://www.oregon.gov/olcc/marijuana/pages/default.aspx",
      effectiveDate: "2015-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Measure 91, effective July 2015; retail sales Oct 2015)",
        "Medical: Legal (since 1998, Oregon Medical Marijuana Act / Measure 67)",
        "Possession limit: 1 oz in public, 8 oz at home (recreational)",
        "Home cultivation: Allowed, up to 4 plants per household",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) public recreational possession limit",
        },
        {
          type: "fee",
          amount: 17,
          unit: "usd",
          description: "17% state retail tax on adult-use cannabis (plus up to 3% local)",
        },
      ],
    },

    // ─── PENNSYLVANIA ───
    {
      id: "pa-marijuana",
      jurisdiction: "pa",
      title: "Pennsylvania Medical Marijuana Act",
      code: "35 Pa. Stat.",
      section: "\u00a7 10231.101 et seq.",
      citation: "35 Pa. Stat. \u00a7 10231.101 et seq. (Act 16 of 2016)",
      url: "https://www.legis.state.pa.us/cfdocs/legis/li/uconsCheck.cfm?yr=2016&sessInd=0&act=16",
      sourceUrl: "https://www.health.pa.gov/topics/programs/Medical%20Marijuana/Pages/Medical%20Marijuana.aspx",
      effectiveDate: "2016-04-17",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (Act 16 of 2016; dispensaries opened 2018)",
        "Possession limit: Medical patients may possess a 30-day supply",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating statewide",
      ],
      penalties:
        "Possession of 30g or less: misdemeanor, up to 30 days, $500 fine; over 30g: misdemeanor, up to 1 year, $5,000 fine",
      exceptions: "Certified patients with valid medical marijuana ID card exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 500,
          unit: "usd",
          description: "Maximum fine for possession of 30g or less",
        },
        {
          type: "fine",
          amount: 5000,
          unit: "usd",
          description: "Maximum fine for possession over 30g (misdemeanor)",
        },
      ],
    },

    // ─── RHODE ISLAND ───
    {
      id: "ri-marijuana",
      jurisdiction: "ri",
      title: "Rhode Island Cannabis Act",
      code: "R.I. Gen. Laws",
      section: "\u00a7 21-28.11-1 et seq.",
      citation: "R.I. Gen. Laws \u00a7 21-28.11-1 et seq.",
      url: "https://webserver.rilin.state.ri.us/Statutes/title21/21-28.11/INDEX.htm",
      sourceUrl: "https://dbr.ri.gov/cannabis-office",
      effectiveDate: "2022-05-25",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Rhode Island Cannabis Act, signed May 2022; retail sales Dec 2022)",
        "Medical: Legal (since 2006, Edward O. Hawkins and Thomas C. Slater Medical Marijuana Act)",
        "Possession limit: 1 oz on person (recreational); medical patients up to 2.5 oz",
        "Home cultivation: Allowed, up to 6 plants per person (3 mature), 12 per household",
        "Retail dispensaries: Operating",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 10,
          unit: "usd",
          description: "10% cannabis excise tax plus 7% sales tax on adult-use",
        },
      ],
    },

    // ─── SOUTH CAROLINA ───
    {
      id: "sc-marijuana",
      jurisdiction: "sc",
      title: "South Carolina Controlled Substances Act \u2014 Marijuana",
      code: "S.C. Code Ann.",
      section: "\u00a7 44-53-370",
      citation: "S.C. Code Ann. \u00a7 44-53-370",
      url: "https://www.scstatehouse.gov/code/t44c053.php",
      sourceUrl: "https://www.scstatehouse.gov/code/t44c053.php",
      effectiveDate: "1962-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (no comprehensive medical marijuana program; limited CBD with <0.9% THC for certain conditions via S. 212)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "First offense possession (1 oz or less): misdemeanor, up to 30 days, $100\u2013$200 fine; subsequent offenses: up to 1 year, $1,000 fine; over 1 oz: felony, up to 5 years, $5,000 fine",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "fine",
          amount: 200,
          unit: "usd",
          description: "Maximum fine for first-offense possession of 1 oz or less",
        },
        {
          type: "fine",
          amount: 5000,
          unit: "usd",
          description: "Maximum fine for felony possession (over 1 oz)",
        },
      ],
    },

    // ─── SOUTH DAKOTA ───
    {
      id: "sd-marijuana",
      jurisdiction: "sd",
      title: "South Dakota Medical Cannabis Program",
      code: "S.D. Codified Laws",
      section: "\u00a7 34-20G-1 et seq.",
      citation: "S.D. Codified Laws \u00a7 34-20G-1 et seq.",
      url: "https://sdlegislature.gov/Statutes/Codified_Laws/2078844",
      sourceUrl: "https://doh.sd.gov/medical-cannabis/",
      effectiveDate: "2021-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal (Amendment A passed 2020 but struck down by state court; recreational remains illegal)",
        "Medical: Legal (Initiated Measure 26, 2020; effective July 2021)",
        "Possession limit: Medical patients up to 3 oz",
        "Home cultivation: Medical patients may grow up to 3 plants if 50+ miles from dispensary",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession of 2 oz or less: Class 1 misdemeanor, up to 1 year, $2,000 fine; 2 oz\u20130.5 lb: Class 6 felony, up to 2 years, $4,000 fine",
      exceptions: "Registered medical cannabis cardholders exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 2000,
          unit: "usd",
          description: "Maximum fine for possession of 2 oz or less (misdemeanor)",
        },
      ],
    },

    // ─── TENNESSEE ───
    {
      id: "tn-marijuana",
      jurisdiction: "tn",
      title: "Tennessee Drug Control Act \u2014 Marijuana",
      code: "Tenn. Code Ann.",
      section: "\u00a7 39-17-418",
      citation: "Tenn. Code Ann. \u00a7 39-17-418",
      url: "https://www.tn.gov/tbi/divisions/cjis-division/drug-schedules.html",
      sourceUrl: "https://advance.lexis.com/container?config=00JABhZjY0YTBjMi0xMGIwLTRlNjEtYjc4Yi0xMjNkNWE4NTVhMDIKAFBvZENhdGFsb2f8tfFxHw0mCFGzletbsFkb&crid=e7b0cb93-e87f-4f09-99e8-dd0c79e8c3e5",
      effectiveDate: "1989-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (limited affirmative defense for CBD oil with <0.9% THC)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "Possession of 0.5 oz or less: Class A misdemeanor, up to 1 year, $2,500 fine; over 0.5 oz: felony, 1\u20136 years, $5,000 fine",
      exceptions:
        "Affirmative defense available for possession of CBD oil with <0.9% THC for certain conditions (2015 law)",
      monetaryValues: [
        {
          type: "fine",
          amount: 2500,
          unit: "usd",
          description: "Maximum fine for misdemeanor possession (0.5 oz or less)",
        },
        {
          type: "fine",
          amount: 5000,
          unit: "usd",
          description: "Maximum fine for felony possession (over 0.5 oz)",
        },
      ],
    },

    // ─── TEXAS ───
    {
      id: "tx-marijuana",
      jurisdiction: "tx",
      title: "Texas Controlled Substances Act \u2014 Marijuana; Compassionate Use Act",
      code: "Tex. Health & Safety Code",
      section: "\u00a7 481.121; \u00a7 487.001 et seq.",
      citation: "Tex. Health & Safety Code \u00a7 481.121; \u00a7 487.001 et seq.",
      url: "https://statutes.capitol.texas.gov/Docs/HS/htm/HS.481.htm#481.121",
      sourceUrl: "https://www.dshs.texas.gov/texas-compassionate-use-program",
      effectiveDate: "2015-06-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Very limited (Compassionate Use Act; low-THC cannabis <1% THC for qualifying patients, expanded by HB 1535 in 2021)",
        "Possession limit: Medical patients limited to low-THC cannabis prescriptions; no recreational possession allowed",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Licensed compassionate-use dispensing organizations only (3 licensees)",
      ],
      penalties:
        "Possession of 2 oz or less: Class B misdemeanor, up to 180 days, $2,000 fine; 2\u20134 oz: Class A misdemeanor, up to 1 year, $4,000 fine; over 4 oz: felony",
      exceptions:
        "Patients registered in the Compassionate Use Registry for intractable epilepsy, cancer, PTSD, and other qualifying conditions",
      monetaryValues: [
        {
          type: "fine",
          amount: 2000,
          unit: "usd",
          description: "Maximum fine for possession of 2 oz or less",
        },
        {
          type: "fine",
          amount: 4000,
          unit: "usd",
          description: "Maximum fine for possession of 2\u20134 oz",
        },
      ],
    },

    // ─── UTAH ───
    {
      id: "ut-marijuana",
      jurisdiction: "ut",
      title: "Utah Medical Cannabis Act",
      code: "Utah Code Ann.",
      section: "\u00a7 26-61a-101 et seq.",
      citation: "Utah Code Ann. \u00a7 26-61a-101 et seq.",
      url: "https://le.utah.gov/xcode/Title26/Chapter61A/26-61a.html",
      sourceUrl: "https://medicalcannabis.utah.gov/",
      effectiveDate: "2018-12-03",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (Proposition 2 passed 2018; replaced by HB 3001, Utah Medical Cannabis Act)",
        "Possession limit: Medical patients may possess unprocessed cannabis flower (limited supply) or up to 20g of medical cannabis product",
        "Home cultivation: Not allowed",
        "Retail dispensaries: State-run medical cannabis pharmacies operating",
      ],
      penalties:
        "Possession under 1 oz (first offense): Class B misdemeanor, up to 6 months, $1,000 fine; 1\u201316 oz: Class A misdemeanor, up to 1 year, $2,500 fine; over 1 lb: felony",
      exceptions: "Patients with a valid medical cannabis card from the state program exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for first-offense possession under 1 oz",
        },
      ],
    },

    // ─── VERMONT ───
    {
      id: "vt-marijuana",
      jurisdiction: "vt",
      title: "Vermont Cannabis Control Act",
      code: "Vt. Stat. Ann.",
      section: "tit. 7, \u00a7 841 et seq.",
      citation: "Vt. Stat. Ann. tit. 7, \u00a7 841 et seq.",
      url: "https://legislature.vermont.gov/statutes/chapter/07/033",
      sourceUrl: "https://ccb.vermont.gov/",
      effectiveDate: "2018-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (H. 511 signed Jan 2018, possession legal July 2018; S. 54 authorized retail, sales began Oct 2022)",
        "Medical: Legal (since 2004)",
        "Possession limit: 1 oz flower or 5g concentrate (recreational)",
        "Home cultivation: Allowed, up to 2 mature and 4 immature plants per household",
        "Retail dispensaries: Operating",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 14,
          unit: "usd",
          description: "14% excise tax on adult-use cannabis",
        },
      ],
    },

    // ─── VIRGINIA ───
    {
      id: "va-marijuana",
      jurisdiction: "va",
      title: "Virginia Cannabis Control Act",
      code: "Va. Code Ann.",
      section: "\u00a7 4.1-1600 et seq.",
      citation: "Va. Code Ann. \u00a7 4.1-1600 et seq.",
      url: "https://law.lis.virginia.gov/vacodefull/title4.1/subtitleIII/",
      sourceUrl: "https://www.cca.virginia.gov/",
      effectiveDate: "2021-07-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (possession legalized July 2021; retail sales framework passed 2024, stores expected 2025)",
        "Medical: Legal (since 2020, pharmaceutical processor program expanded)",
        "Possession limit: 1 oz (recreational); medical patients follow physician recommendation",
        "Home cultivation: Allowed, up to 4 plants per household",
        "Retail dispensaries: Medical dispensaries operating; recreational retail stores opening 2025",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational possession limit",
        },
        {
          type: "fee",
          amount: 21,
          unit: "usd",
          description: "21% excise tax on adult-use cannabis (when retail launches)",
        },
      ],
    },

    // ─── WASHINGTON ───
    {
      id: "wa-marijuana",
      jurisdiction: "wa",
      title: "Washington Initiative 502",
      code: "Wash. Rev. Code",
      section: "\u00a7 69.50.4013 et seq.; \u00a7 314.55",
      citation: "Wash. Rev. Code \u00a7 69.50.4013; \u00a7 69.50.325 et seq.",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.50",
      sourceUrl: "https://lcb.wa.gov/mjlicense/cannabis-702",
      effectiveDate: "2012-12-06",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (I-502, effective Dec 2012; retail sales July 2014)",
        "Medical: Legal (since 1998, I-692)",
        "Possession limit: 1 oz flower, 7g concentrate, 16 oz solid edibles, 72 oz liquid edibles (recreational)",
        "Home cultivation: Medical patients only (up to 6 plants for registered patients, 15 with authorization)",
        "Retail dispensaries: Operating statewide",
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 28,
          unit: "ounces",
          description: "1 oz (28g) recreational flower possession limit",
        },
        {
          type: "fee",
          amount: 37,
          unit: "usd",
          description: "37% excise tax on adult-use cannabis",
        },
      ],
    },

    // ─── WEST VIRGINIA ───
    {
      id: "wv-marijuana",
      jurisdiction: "wv",
      title: "West Virginia Medical Cannabis Act",
      code: "W. Va. Code",
      section: "\u00a7 16A-2-1 et seq.",
      citation: "W. Va. Code \u00a7 16A-2-1 et seq.",
      url: "https://www.wvlegislature.gov/wvcode/code.cfm?chap=16a&art=2",
      sourceUrl: "https://dhhr.wv.gov/bph/Pages/Medical-Cannabis.aspx",
      effectiveDate: "2017-04-19",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Legal (SB 386, signed 2017; dispensaries opened 2022)",
        "Possession limit: Medical patients may possess a 30-day supply",
        "Home cultivation: Not allowed",
        "Retail dispensaries: Medical dispensaries operating",
      ],
      penalties:
        "Possession of any amount: misdemeanor, 90 days\u20136 months, $1,000 fine; subsequent offenses or larger amounts: felony, 1\u20135 years",
      exceptions:
        "Patients with valid medical cannabis registration and ID card from the Bureau for Public Health exempt",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for first-offense possession (misdemeanor)",
        },
      ],
    },

    // ─── WISCONSIN ───
    {
      id: "wi-marijuana",
      jurisdiction: "wi",
      title: "Wisconsin Controlled Substances Act \u2014 Marijuana",
      code: "Wis. Stat.",
      section: "\u00a7 961.41",
      citation: "Wis. Stat. \u00a7 961.41",
      url: "https://docs.legis.wisconsin.gov/statutes/statutes/961/iv/41",
      sourceUrl: "https://docs.legis.wisconsin.gov/statutes/statutes/961/iv/41",
      effectiveDate: "1971-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (limited CBD oil allowed under 2014 Act 267; no comprehensive medical program)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "First offense possession (any amount): misdemeanor, up to 6 months, $1,000 fine; second+ offense: Class I felony, up to 3.5 years, $10,000 fine",
      exceptions:
        "CBD oil derived from hemp with <0.3% THC is legal under federal/state hemp law",
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for first-offense possession",
        },
        {
          type: "fine",
          amount: 10000,
          unit: "usd",
          description: "Maximum fine for subsequent offense (felony)",
        },
      ],
    },

    // ─── WYOMING ───
    {
      id: "wy-marijuana",
      jurisdiction: "wy",
      title: "Wyoming Controlled Substances Act \u2014 Marijuana",
      code: "Wyo. Stat. Ann.",
      section: "\u00a7 35-7-1031",
      citation: "Wyo. Stat. Ann. \u00a7 35-7-1031",
      url: "https://wyoleg.gov/statutes/compress/title35.pdf",
      sourceUrl: "https://wyoleg.gov/statutes/compress/title35.pdf",
      effectiveDate: "1971-01-01",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Illegal",
        "Medical: Illegal (no medical marijuana program)",
        "Possession limit: Not applicable (all possession illegal)",
        "Home cultivation: Not allowed",
        "Retail dispensaries: None",
      ],
      penalties:
        "Possession of 3 oz or less: misdemeanor, up to 1 year, $1,000 fine; 3 oz\u20133.5 lb: felony, up to 5 years, $10,000 fine",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "fine",
          amount: 1000,
          unit: "usd",
          description: "Maximum fine for possession of 3 oz or less",
        },
        {
          type: "fine",
          amount: 10000,
          unit: "usd",
          description: "Maximum fine for felony possession (3 oz\u20133.5 lb)",
        },
      ],
    },

    // ─── DISTRICT OF COLUMBIA ───
    {
      id: "dc-marijuana",
      jurisdiction: "dc",
      title: "Legalization of Possession of Minimal Amounts of Marijuana for Personal Use Initiative (Initiative 71)",
      code: "D.C. Code",
      section: "\u00a7 48-904.01",
      citation: "D.C. Code \u00a7 48-904.01; Initiative 71 (2014)",
      url: "https://code.dccouncil.us/us/dc/council/code/sections/48-904.01.html",
      sourceUrl: "https://abca.dc.gov/page/marijuana",
      effectiveDate: "2015-02-26",
      lastVerified: "2026-11-15",
      topics: ["marijuana", "criminal"],
      keyProvisions: [
        "Recreational: Legal (Initiative 71, effective Feb 2015; possession and home grow only \u2014 no commercial sales due to congressional budget rider)",
        "Medical: Legal (since 2010)",
        "Possession limit: 2 oz (recreational); medical patients may possess up to 4 oz per month",
        "Home cultivation: Allowed, up to 6 plants (3 mature) per person",
        "Retail dispensaries: Medical dispensaries operating; recreational commercial sales blocked by congressional appropriations rider (Harris rider)",
      ],
      penalties: undefined,
      exceptions:
        "No commercial recreational sales permitted due to federal congressional appropriations rider blocking DC from using funds to regulate commercial cannabis",
      monetaryValues: [
        {
          type: "limit",
          amount: 56,
          unit: "ounces",
          description: "2 oz (56g) recreational possession limit",
        },
      ],
    },
  ],
};
