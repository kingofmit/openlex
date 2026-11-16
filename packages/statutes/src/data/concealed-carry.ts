import { TopicDataFile } from "../loader";

export const concealedCarry: TopicDataFile = {
  topic: "concealed-carry",
  description:
    "State concealed carry permit requirements, shall-issue vs may-issue status, reciprocity, and prohibited locations",
  federalBaseline:
    "Second Amendment; 18 U.S.C. § 922 — federal firearms regulations; NYSRPA v. Bruen (2022) — right to carry outside the home",
  entries: [
    // ── Alabama ──────────────────────────────────────────────────────────
    {
      id: "al-concealed-carry",
      jurisdiction: "AL",
      title: "Concealed Carry — Permitless Carry",
      code: "Code of Alabama",
      section: "§ 13A-11-73",
      citation: "Ala. Code § 13A-11-73",
      url: "https://law.justia.com/codes/alabama/title-13a/chapter-11/article-3/section-13a-11-73/",
      sourceUrl: "https://legislature.state.al.us/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (effective January 1, 2023)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, police stations, inside prison or jail facilities, psychiatric facilities",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (19 for military)",
      ],
      penalties:
        "Carrying in a prohibited location: Class A misdemeanor, up to 1 year in jail and $6,000 fine",
      exceptions: "Optional permit available for reciprocity purposes; fee $20 for 5-year permit",
      monetaryValues: [
        { type: "fee", amount: 20, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Alaska ────────────────────────────────────────────────────────────
    {
      id: "ak-concealed-carry",
      jurisdiction: "AK",
      title: "Concealed Carry — Permitless Carry",
      code: "Alaska Statutes",
      section: "§ 11.61.220",
      citation: "Alaska Stat. § 11.61.220",
      url: "https://law.justia.com/codes/alaska/title-11/chapter-61/article-4/section-11-61-220/",
      sourceUrl: "https://www.akleg.gov/",
      effectiveDate: "2003-09-09",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since 2003)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, bars (posted), domestic violence shelters",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited area: Class B misdemeanor, up to 90 days in jail and $2,000 fine",
      exceptions: "Optional permit available for reciprocity; valid in more states",
      monetaryValues: [
        { type: "fee", amount: 25, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Arizona ───────────────────────────────────────────────────────────
    {
      id: "az-concealed-carry",
      jurisdiction: "AZ",
      title: "Concealed Carry — Permitless Carry",
      code: "Arizona Revised Statutes",
      section: "§ 13-3102",
      citation: "Ariz. Rev. Stat. § 13-3102",
      url: "https://law.justia.com/codes/arizona/title-13/section-13-3102/",
      sourceUrl: "https://www.azleg.gov/",
      effectiveDate: "2010-07-29",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since 2010)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Polling places on election day, schools (K-12), nuclear/hydroelectric generating stations, military installations, establishments that serve alcohol (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 with permit for military)",
      ],
      penalties:
        "Carrying in a prohibited location: Class 1 misdemeanor, up to 6 months in jail and $2,500 fine",
      exceptions: "Optional CCW permit recognized in more states for reciprocity",
      monetaryValues: [
        { type: "fee", amount: 60, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Arkansas ──────────────────────────────────────────────────────────
    {
      id: "ar-concealed-carry",
      jurisdiction: "AR",
      title: "Concealed Carry — Permitless Carry",
      code: "Arkansas Code",
      section: "§ 5-73-120",
      citation: "Ark. Code Ann. § 5-73-120",
      url: "https://law.justia.com/codes/arkansas/title-5/subtitle-6/chapter-73/subchapter-1/section-5-73-120/",
      sourceUrl: "https://www.arkleg.state.ar.us/",
      effectiveDate: "2023-09-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since 2023)",
        "Permit type: Constitutional carry; optional shall-issue CHCL available",
        "Training required: None for permitless carry; optional enhanced permit requires training",
        "Prohibited locations: Schools, government buildings, churches, bars, courtrooms, polling places",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited place: Class A misdemeanor, up to 1 year in jail and $2,500 fine",
      exceptions: "Enhanced concealed handgun carry license (ECHCL) allows carry in more locations including churches and some public buildings",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee (CHCL)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── California ────────────────────────────────────────────────────────
    {
      id: "ca-concealed-carry",
      jurisdiction: "CA",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "California Penal Code",
      section: "§ 26150",
      citation: "Cal. Penal Code § 26150",
      url: "https://law.justia.com/codes/california/code-pen/part-6/title-4/division-5/chapter-1/section-26150/",
      sourceUrl: "https://leginfo.legislature.ca.gov/",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was may-issue prior to 2022)",
        "Training required: 16 hours (8 hours classroom, 8 hours range)",
        "Prohibited locations: Schools, government buildings, bars, places of worship, public transit, parks, playgrounds, banks, stadiums, hospitals, airports (SB 2 expanded list, partially enjoined by courts)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated good cause requirement; SB 2 (2023) added extensive prohibited locations (challenged in courts)",
      ],
      penalties:
        "Carrying without permit: wobbler offense — misdemeanor up to 1 year in jail or felony up to 3 years in state prison",
      exceptions: "Active law enforcement, retired law enforcement (LEOSA), licensed hunters in certain areas",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "Permit application fee (county-dependent, typical)" },
        { type: "duration", amount: 2, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Colorado ──────────────────────────────────────────────────────────
    {
      id: "co-concealed-carry",
      jurisdiction: "CO",
      title: "Concealed Carry — Shall-Issue",
      code: "Colorado Revised Statutes",
      section: "§ 18-12-203",
      citation: "Colo. Rev. Stat. § 18-12-203",
      url: "https://law.justia.com/codes/colorado/title-18/article-12/part-2/section-18-12-203/",
      sourceUrl: "https://leg.colorado.gov/",
      effectiveDate: "2003-05-17",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue",
        "Training required: Handgun training or safety course (minimum hours set by instructor, typically 4–8 hours)",
        "Prohibited locations: Schools (K-12), public buildings with security, federal buildings",
        "Reciprocity: Honors permits from states that honor Colorado permits (limited reciprocity)",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without permit: Class 2 misdemeanor, up to 120 days in jail and $750 fine",
      exceptions: "Active military, law enforcement; local ordinances may impose additional restrictions",
      monetaryValues: [
        { type: "fee", amount: 52, unit: "usd", description: "Permit application fee (sheriff)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Connecticut ───────────────────────────────────────────────────────
    {
      id: "ct-concealed-carry",
      jurisdiction: "CT",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Connecticut General Statutes",
      section: "§ 29-28",
      citation: "Conn. Gen. Stat. § 29-28",
      url: "https://law.justia.com/codes/connecticut/title-29/chapter-529/section-29-28/",
      sourceUrl: "https://www.cga.ct.gov/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; previously operated as may-issue in practice)",
        "Training required: NRA or state-approved handgun safety course",
        "Prohibited locations: Schools, state capitol, courthouses",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated subjective suitability requirement",
      ],
      penalties:
        "Carrying without permit: Class D felony, up to 5 years in prison and $5,000 fine",
      exceptions: "Active law enforcement, licensed security guards",
      monetaryValues: [
        { type: "fee", amount: 70, unit: "usd", description: "Permit application fee (state)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Delaware ──────────────────────────────────────────────────────────
    {
      id: "de-concealed-carry",
      jurisdiction: "DE",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Delaware Code",
      section: "Title 11, § 1441",
      citation: "Del. Code tit. 11, § 1441",
      url: "https://law.justia.com/codes/delaware/title-11/chapter-5/subchapter-vii/section-1441/",
      sourceUrl: "https://legis.delaware.gov/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was may-issue)",
        "Training required: Completion of approved firearms training course",
        "Prohibited locations: Schools, courthouses, police stations, state buildings, places of worship (if posted)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated subjective good character and necessity requirements",
      ],
      penalties:
        "Carrying without license: Class D felony for first offense, Class C felony if prior conviction",
      exceptions: "Active law enforcement, persons in their own home or place of business",
      monetaryValues: [
        { type: "fee", amount: 65, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 3, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Florida ───────────────────────────────────────────────────────────
    {
      id: "fl-concealed-carry",
      jurisdiction: "FL",
      title: "Concealed Carry — Permitless Carry",
      code: "Florida Statutes",
      section: "§ 790.01",
      citation: "Fla. Stat. § 790.01",
      url: "https://law.justia.com/codes/florida/title-xlvi/chapter-790/section-790-01/",
      sourceUrl: "https://www.flsenate.gov/Laws/Statutes/",
      effectiveDate: "2023-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (effective July 1, 2023)",
        "Permit type: Constitutional carry; optional shall-issue CWL available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, police stations, bars (area primarily devoted to alcohol service), airports (sterile area), government meetings",
        "Reciprocity: Honors permits from states that honor Florida permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in a prohibited location: first degree misdemeanor, up to 1 year in jail and $1,000 fine",
      exceptions: "Optional CWL available for reciprocity with other states; required for concealed carry for ages 18-20 (military members)",
      monetaryValues: [
        { type: "fee", amount: 97, unit: "usd", description: "Permit application fee (initial CWL)" },
        { type: "duration", amount: 7, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Georgia ───────────────────────────────────────────────────────────
    {
      id: "ga-concealed-carry",
      jurisdiction: "GA",
      title: "Concealed Carry — Permitless Carry",
      code: "Official Code of Georgia Annotated",
      section: "§ 16-11-126",
      citation: "O.C.G.A. § 16-11-126",
      url: "https://law.justia.com/codes/georgia/title-16/chapter-11/article-4/part-3/section-16-11-126/",
      sourceUrl: "https://www.legis.ga.gov/",
      effectiveDate: "2022-04-12",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (SB 319, effective April 12, 2022)",
        "Permit type: Constitutional carry; optional weapons carry license (WCL) available",
        "Training required: None for permitless carry",
        "Prohibited locations: Government buildings, courthouses, jails, churches (without permission), schools, nuclear power facilities, bars",
        "Reciprocity: Honors all valid out-of-state permits",
        "Minimum age: 21 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 12 months in jail and $1,000 fine",
      exceptions: "Optional WCL available for reciprocity",
      monetaryValues: [
        { type: "fee", amount: 75, unit: "usd", description: "Weapons carry license fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Hawaii ────────────────────────────────────────────────────────────
    {
      id: "hi-concealed-carry",
      jurisdiction: "HI",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Hawaii Revised Statutes",
      section: "§ 134-9",
      citation: "Haw. Rev. Stat. § 134-9",
      url: "https://law.justia.com/codes/hawaii/division-1/title-10/chapter-134/section-134-9/",
      sourceUrl: "https://www.capitol.hawaii.gov/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was effectively no-issue prior to 2022)",
        "Training required: Firearms safety/training course and demonstrated competence at the range",
        "Prohibited locations: Schools, hospitals, bars, banks, government buildings, public parks, beaches, places of worship, airports, public transit",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Forced issuance of permits; previously virtually no permits were issued; HB 984 (2024) added extensive prohibited locations",
      ],
      penalties:
        "Carrying without permit: Class B felony, up to 10 years in prison",
      exceptions: "Active law enforcement, security professionals with valid permits",
      monetaryValues: [
        { type: "fee", amount: 42, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Idaho ─────────────────────────────────────────────────────────────
    {
      id: "id-concealed-carry",
      jurisdiction: "ID",
      title: "Concealed Carry — Permitless Carry",
      code: "Idaho Code",
      section: "§ 18-3302",
      citation: "Idaho Code § 18-3302",
      url: "https://law.justia.com/codes/idaho/title-18/chapter-33/section-18-3302/",
      sourceUrl: "https://legislature.idaho.gov/",
      effectiveDate: "2020-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since 2016 for residents; expanded to non-residents 2020)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, juvenile detention facilities, jails/prisons, schools (with exceptions)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 6 months in jail and $1,000 fine",
      exceptions: "Enhanced permit available with additional training for broader reciprocity",
      monetaryValues: [
        { type: "fee", amount: 20, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Illinois ──────────────────────────────────────────────────────────
    {
      id: "il-concealed-carry",
      jurisdiction: "IL",
      title: "Concealed Carry — Shall-Issue",
      code: "Illinois Compiled Statutes",
      section: "430 ILCS 66",
      citation: "430 ILCS 66/1 et seq.",
      url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3497",
      sourceUrl: "https://www.ilga.gov/",
      effectiveDate: "2013-07-09",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (Concealed Carry License — CCL)",
        "Training required: 16 hours (classroom and range instruction)",
        "Prohibited locations: Schools, government buildings, public transit, parks, playgrounds, Cook County Forest Preserves, bars (over 50% alcohol revenue), hospitals, libraries, airports, stadiums, amusement parks, zoos",
        "Reciprocity: Does not honor any out-of-state permits; non-resident permits available",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without CCL: Class A misdemeanor (first offense) up to 1 year in jail; Class 3 felony (subsequent offenses)",
      exceptions: "Active law enforcement, military personnel on duty; FOID card required in addition to CCL",
      monetaryValues: [
        { type: "fee", amount: 150, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Indiana ───────────────────────────────────────────────────────────
    {
      id: "in-concealed-carry",
      jurisdiction: "IN",
      title: "Concealed Carry — Permitless Carry",
      code: "Indiana Code",
      section: "§ 35-47-2-1",
      citation: "Ind. Code § 35-47-2-1",
      url: "https://law.justia.com/codes/indiana/title-35/article-47/chapter-2/section-35-47-2-1/",
      sourceUrl: "https://iga.in.gov/",
      effectiveDate: "2022-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 1296, effective July 1, 2022)",
        "Permit type: Constitutional carry; optional shall-issue license available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, airport secure areas, riverboat casinos (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited area: Class A misdemeanor, up to 1 year in jail and $5,000 fine",
      exceptions: "Optional license to carry handgun available at no cost for reciprocity",
      monetaryValues: [
        { type: "fee", amount: 0, unit: "usd", description: "Permit application fee (free)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period (lifetime option available)" },
      ],
    },

    // ── Iowa ──────────────────────────────────────────────────────────────
    {
      id: "ia-concealed-carry",
      jurisdiction: "IA",
      title: "Concealed Carry — Permitless Carry",
      code: "Iowa Code",
      section: "§ 724.4",
      citation: "Iowa Code § 724.4",
      url: "https://law.justia.com/codes/iowa/chapter-724/section-724-4/",
      sourceUrl: "https://www.legis.iowa.gov/",
      effectiveDate: "2021-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HF 756, effective July 1, 2021)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools (on person, not in vehicle), courthouses, capitol building, casinos (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited area: aggravated misdemeanor, up to 2 years in prison and $6,250 fine",
      exceptions: "Optional permit available for reciprocity with other states",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Kansas ────────────────────────────────────────────────────────────
    {
      id: "ks-concealed-carry",
      jurisdiction: "KS",
      title: "Concealed Carry — Permitless Carry",
      code: "Kansas Statutes",
      section: "§ 21-6302",
      citation: "Kan. Stat. Ann. § 21-6302",
      url: "https://law.justia.com/codes/kansas/chapter-21/article-63/section-21-6302/",
      sourceUrl: "https://www.kslegislature.org/",
      effectiveDate: "2015-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since July 1, 2015)",
        "Permit type: Constitutional carry; optional shall-issue CCHL available",
        "Training required: None for permitless carry; 8 hours for optional CCHL",
        "Prohibited locations: Courthouses, police stations, jails, schools (K-12), state/municipal buildings without adequate security",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited area: Class A misdemeanor, up to 1 year in jail and $2,500 fine",
      exceptions: "State/local government buildings may allow carry if they do not provide adequate security (metal detectors and armed guards)",
      monetaryValues: [
        { type: "fee", amount: 132, unit: "usd", description: "Permit application fee (CCHL)" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Kentucky ──────────────────────────────────────────────────────────
    {
      id: "ky-concealed-carry",
      jurisdiction: "KY",
      title: "Concealed Carry — Permitless Carry",
      code: "Kentucky Revised Statutes",
      section: "§ 237.110",
      citation: "Ky. Rev. Stat. § 237.110",
      url: "https://law.justia.com/codes/kentucky/chapter-237/section-237-110/",
      sourceUrl: "https://legislature.ky.gov/",
      effectiveDate: "2019-06-27",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since June 27, 2019)",
        "Permit type: Constitutional carry; optional shall-issue CCDW license available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, jails, police stations, bars, government buildings (if posted), places of worship (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited location: Class A misdemeanor, up to 12 months in jail and $500 fine",
      exceptions: "Optional CCDW license provides reciprocity with additional states",
      monetaryValues: [
        { type: "fee", amount: 60, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Louisiana ─────────────────────────────────────────────────────────
    {
      id: "la-concealed-carry",
      jurisdiction: "LA",
      title: "Concealed Carry — Permitless Carry",
      code: "Louisiana Revised Statutes",
      section: "§ 40:1379.3",
      citation: "La. Rev. Stat. § 40:1379.3",
      url: "https://law.justia.com/codes/louisiana/revised-statutes/title-40/section-1379-3/",
      sourceUrl: "https://www.legis.la.gov/",
      effectiveDate: "2024-07-04",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (effective July 4, 2024)",
        "Permit type: Constitutional carry; optional shall-issue CHP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, government buildings, churches, bars, parades, airports, polling places",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited location: up to 6 months in jail and $500 fine",
      exceptions: "Optional CHP available for reciprocity; 5-year CHP or lifetime CHP available",
      monetaryValues: [
        { type: "fee", amount: 125, unit: "usd", description: "Permit application fee (5-year)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Maine ─────────────────────────────────────────────────────────────
    {
      id: "me-concealed-carry",
      jurisdiction: "ME",
      title: "Concealed Carry — Permitless Carry",
      code: "Maine Revised Statutes",
      section: "Title 25, § 2001-A",
      citation: "Me. Rev. Stat. tit. 25, § 2001-A",
      url: "https://law.justia.com/codes/maine/title-25/chapter-252/section-2001-a/",
      sourceUrl: "https://legislature.maine.gov/",
      effectiveDate: "2015-10-15",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since October 15, 2015)",
        "Permit type: Constitutional carry; optional shall-issue permit available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, schools, federal buildings, state capitol area (restricted)",
        "Reciprocity: Honors permits from states that honor Maine permits",
        "Minimum age: 21 (18 for active duty military)",
      ],
      penalties:
        "Carrying in prohibited location: Class D crime, up to 364 days in jail and $2,000 fine",
      exceptions: "Optional permit for reciprocity; residents of other permitless carry states may carry in Maine",
      monetaryValues: [
        { type: "fee", amount: 35, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Maryland ──────────────────────────────────────────────────────────
    {
      id: "md-concealed-carry",
      jurisdiction: "MD",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Maryland Code, Public Safety",
      section: "§ 5-306",
      citation: "Md. Code, Pub. Safety § 5-306",
      url: "https://law.justia.com/codes/maryland/public-safety/section-5-306/",
      sourceUrl: "https://mgaleg.maryland.gov/",
      effectiveDate: "2023-10-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was may-issue with good-and-substantial-reason requirement)",
        "Training required: 16 hours initial training (classroom and live-fire)",
        "Prohibited locations: Schools, government buildings, public demonstrations, legislative buildings, hospitals, places of worship, establishments that sell alcohol, stadiums, museums, state parks (SB 1 expanded list)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated good-and-substantial-reason requirement; SB 1 (2023) added extensive prohibited locations",
      ],
      penalties:
        "Carrying without permit: misdemeanor, up to 3 years in prison and $2,500 fine",
      exceptions: "Active law enforcement, retired officers under LEOSA",
      monetaryValues: [
        { type: "fee", amount: 75, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 3, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Massachusetts ─────────────────────────────────────────────────────
    {
      id: "ma-concealed-carry",
      jurisdiction: "MA",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Massachusetts General Laws",
      section: "Ch. 140, § 131",
      citation: "Mass. Gen. Laws ch. 140, § 131",
      url: "https://law.justia.com/codes/massachusetts/part-i/title-xx/chapter-140/section-131/",
      sourceUrl: "https://malegislature.gov/",
      effectiveDate: "2023-10-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was effectively may-issue via suitability standard)",
        "Training required: State-approved basic firearms safety course",
        "Prohibited locations: Schools, courthouses, airports, government buildings; HD 4885 (2024) added additional restrictions on carry in sensitive places",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated subjective suitability determination; legislature passed HD 4885 adding restrictions",
      ],
      penalties:
        "Carrying without LTC: mandatory minimum 18 months in jail (felony)",
      exceptions: "Active law enforcement, certain retired officers under LEOSA",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "License to Carry (LTC) application fee" },
        { type: "duration", amount: 6, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Michigan ──────────────────────────────────────────────────────────
    {
      id: "mi-concealed-carry",
      jurisdiction: "MI",
      title: "Concealed Carry — Shall-Issue",
      code: "Michigan Compiled Laws",
      section: "§ 28.425b",
      citation: "Mich. Comp. Laws § 28.425b",
      url: "https://law.justia.com/codes/michigan/chapter-28/statute-act-372-of-1927/section-28-425b/",
      sourceUrl: "https://www.legislature.mi.gov/",
      effectiveDate: "2001-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CPL — Concealed Pistol License)",
        "Training required: 8 hours (including 3 hours range time)",
        "Prohibited locations: Schools, day care centers, hospitals, bars, churches, entertainment venues with 2,500+ capacity, courthouses, casinos",
        "Reciprocity: Honors permits from all states",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without CPL: felony, up to 5 years in prison and $2,500 fine",
      exceptions: "Active law enforcement, CPL holders may carry in some prohibited zones with additional training (CPL exemption areas)",
      monetaryValues: [
        { type: "fee", amount: 115, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Minnesota ─────────────────────────────────────────────────────────
    {
      id: "mn-concealed-carry",
      jurisdiction: "MN",
      title: "Concealed Carry — Shall-Issue",
      code: "Minnesota Statutes",
      section: "§ 624.714",
      citation: "Minn. Stat. § 624.714",
      url: "https://law.justia.com/codes/minnesota/chapter-624/section-624-714/",
      sourceUrl: "https://www.revisor.mn.gov/",
      effectiveDate: "2003-05-28",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (Permit to Carry)",
        "Training required: Approved firearms training course (typically 4–6 hours)",
        "Prohibited locations: Schools, courthouses, state buildings (if posted), private establishments (if posted)",
        "Reciprocity: Honors permits from states with similar or stricter standards",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without permit: gross misdemeanor, up to 1 year in jail and $3,000 fine",
      exceptions: "Active law enforcement; private property owners may prohibit carry with signage",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "Permit application fee (maximum)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Mississippi ───────────────────────────────────────────────────────
    {
      id: "ms-concealed-carry",
      jurisdiction: "MS",
      title: "Concealed Carry — Permitless Carry",
      code: "Mississippi Code",
      section: "§ 45-9-101",
      citation: "Miss. Code Ann. § 45-9-101",
      url: "https://law.justia.com/codes/mississippi/title-45/chapter-9/section-45-9-101/",
      sourceUrl: "https://www.legislature.ms.gov/",
      effectiveDate: "2016-04-15",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since April 15, 2016)",
        "Permit type: Constitutional carry; optional shall-issue permit and enhanced permit available",
        "Training required: None for permitless carry; 8 hours for enhanced permit",
        "Prohibited locations: Schools, courthouses, police stations, polling places, government meetings, bars, churches (unless authorized), professional sporting events",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18 (21 for optional permit)",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 6 months in jail and $500 fine",
      exceptions: "Enhanced carry permit allows carry in additional locations (churches, bars, courthouses without active proceedings)",
      monetaryValues: [
        { type: "fee", amount: 80, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Missouri ──────────────────────────────────────────────────────────
    {
      id: "mo-concealed-carry",
      jurisdiction: "MO",
      title: "Concealed Carry — Permitless Carry",
      code: "Missouri Revised Statutes",
      section: "§ 571.030",
      citation: "Mo. Rev. Stat. § 571.030",
      url: "https://law.justia.com/codes/missouri/title-xxxviii/chapter-571/section-571-030/",
      sourceUrl: "https://www.senate.mo.gov/",
      effectiveDate: "2017-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since January 1, 2017)",
        "Permit type: Constitutional carry; optional shall-issue CCP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, government buildings, churches (without permission), bars (if posted), airports, amusement parks, sports arenas, hospitals, polling places",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 19 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited location: Class A misdemeanor, up to 1 year in jail and $2,000 fine",
      exceptions: "Optional CCP for reciprocity; provisional permit available for ages 18–20 military members",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "Permit application fee (county-dependent)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Montana ───────────────────────────────────────────────────────────
    {
      id: "mt-concealed-carry",
      jurisdiction: "MT",
      title: "Concealed Carry — Permitless Carry",
      code: "Montana Code Annotated",
      section: "§ 45-8-321",
      citation: "Mont. Code Ann. § 45-8-321",
      url: "https://law.justia.com/codes/montana/title-45/chapter-8/part-3/section-45-8-321/",
      sourceUrl: "https://leg.mt.gov/",
      effectiveDate: "2021-02-18",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 102, effective February 18, 2021)",
        "Permit type: Constitutional carry; optional shall-issue CWP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Federal buildings, schools (K-12 buildings during school activities, though HB 102 expanded rights), banks, bars",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 6 months in jail and $500 fine",
      exceptions: "Optional CWP for reciprocity with states requiring permits; universities allow concealed carry (HB 102)",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Nebraska ──────────────────────────────────────────────────────────
    {
      id: "ne-concealed-carry",
      jurisdiction: "NE",
      title: "Concealed Carry — Permitless Carry",
      code: "Nebraska Revised Statutes",
      section: "§ 69-2441",
      citation: "Neb. Rev. Stat. § 69-2441",
      url: "https://law.justia.com/codes/nebraska/chapter-69/statute-69-2441/",
      sourceUrl: "https://nebraskalegislature.gov/",
      effectiveDate: "2023-09-10",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (LB 77, effective September 10, 2023)",
        "Permit type: Constitutional carry; optional shall-issue CHP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, police stations, places of worship (if posted), bars",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited area: Class I misdemeanor, up to 1 year in jail and $1,000 fine",
      exceptions: "Optional CHP available for reciprocity purposes",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Nevada ────────────────────────────────────────────────────────────
    {
      id: "nv-concealed-carry",
      jurisdiction: "NV",
      title: "Concealed Carry — Shall-Issue",
      code: "Nevada Revised Statutes",
      section: "§ 202.3653",
      citation: "Nev. Rev. Stat. § 202.3653",
      url: "https://law.justia.com/codes/nevada/chapter-202/section-202-3653/",
      sourceUrl: "https://www.leg.state.nv.us/",
      effectiveDate: "2007-10-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CCW)",
        "Training required: 8-hour course (classroom and live-fire qualification)",
        "Prohibited locations: Schools, government buildings, airports, public buildings with metal detectors",
        "Reciprocity: Honors permits from states with similar or stricter standards",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without permit: Category C felony, 1–5 years in prison and up to $10,000 fine",
      exceptions: "Active law enforcement, licensed security guards, persons at their residence or place of business",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── New Hampshire ─────────────────────────────────────────────────────
    {
      id: "nh-concealed-carry",
      jurisdiction: "NH",
      title: "Concealed Carry — Permitless Carry",
      code: "New Hampshire Revised Statutes",
      section: "§ 159:6",
      citation: "N.H. Rev. Stat. § 159:6",
      url: "https://law.justia.com/codes/new-hampshire/title-xii/chapter-159/section-159-6/",
      sourceUrl: "https://www.gencourt.state.nh.us/",
      effectiveDate: "2017-02-22",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (SB 12, effective February 22, 2017)",
        "Permit type: Constitutional carry; optional shall-issue license available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses (restricted area only)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in courthouse restricted area: misdemeanor, up to 1 year in jail",
      exceptions: "One of the least restrictive states; very few prohibited locations; optional license for reciprocity",
      monetaryValues: [
        { type: "fee", amount: 10, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── New Jersey ────────────────────────────────────────────────────────
    {
      id: "nj-concealed-carry",
      jurisdiction: "NJ",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "New Jersey Statutes",
      section: "§ 2C:58-4",
      citation: "N.J. Stat. § 2C:58-4",
      url: "https://law.justia.com/codes/new-jersey/title-2c/section-2c-58-4/",
      sourceUrl: "https://www.njleg.state.nj.us/",
      effectiveDate: "2023-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was effectively no-issue prior to 2022)",
        "Training required: Approved firearms training course including use-of-force instruction and qualification",
        "Prohibited locations: Schools, government buildings, bars, restaurants that serve alcohol, entertainment venues, parks, beaches, airports, public transit, health care facilities, casinos, libraries, museums, places of worship, private property (default no carry unless permitted)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated justifiable need requirement; A4769 (2022) added extensive sensitive places restrictions (partially enjoined)",
      ],
      penalties:
        "Carrying without permit: second-degree crime, 5–10 years in prison",
      exceptions: "Active law enforcement, retired officers under LEOSA, security personnel",
      monetaryValues: [
        { type: "fee", amount: 200, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 2, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── New Mexico ────────────────────────────────────────────────────────
    {
      id: "nm-concealed-carry",
      jurisdiction: "NM",
      title: "Concealed Carry — Shall-Issue",
      code: "New Mexico Statutes",
      section: "§ 29-19-4",
      citation: "N.M. Stat. Ann. § 29-19-4",
      url: "https://law.justia.com/codes/new-mexico/chapter-29/article-19/section-29-19-4/",
      sourceUrl: "https://www.nmlegis.gov/",
      effectiveDate: "2003-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue",
        "Training required: 15-hour approved firearms training course",
        "Prohibited locations: Schools, courthouses, bars, Indian reservations (tribal law applies)",
        "Reciprocity: Honors permits from states with reciprocal agreements",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without license: petty misdemeanor, up to 6 months in jail and $500 fine",
      exceptions: "Active law enforcement; open carry without permit is legal for those 19+",
      monetaryValues: [
        { type: "fee", amount: 75, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── New York ──────────────────────────────────────────────────────────
    {
      id: "ny-concealed-carry",
      jurisdiction: "NY",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "New York Penal Law",
      section: "§ 400.00",
      citation: "N.Y. Penal Law § 400.00",
      url: "https://law.justia.com/codes/new-york/penal/part-4/title-w/article-400/section-400-00/",
      sourceUrl: "https://www.nysenate.gov/legislation",
      effectiveDate: "2022-09-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was may-issue with proper cause requirement)",
        "Training required: 16 hours classroom, 2 hours live-fire",
        "Prohibited locations: Schools, government buildings, subways, buses, Times Square, bars, theaters, museums, parks, playgrounds, libraries, hospitals, places of worship, airports, stadiums (CCIA added extensive list)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: NYSRPA v. Bruen (2022) struck down proper cause requirement; NY enacted CCIA (Concealed Carry Improvement Act) adding sensitive places and private property default-no-carry (portions enjoined by courts)",
      ],
      penalties:
        "Carrying without license: Class E felony, up to 4 years in prison; carrying in sensitive location: Class E felony",
      exceptions: "Active law enforcement, retired officers under LEOSA; CCIA requires character references and social media review",
      monetaryValues: [
        { type: "fee", amount: 200, unit: "usd", description: "Permit application fee (varies by county)" },
        { type: "duration", amount: 3, unit: "years", description: "Permit validity period (NYC); 5 years elsewhere" },
      ],
    },

    // ── North Carolina ────────────────────────────────────────────────────
    {
      id: "nc-concealed-carry",
      jurisdiction: "NC",
      title: "Concealed Carry — Permitless Carry",
      code: "North Carolina General Statutes",
      section: "§ 14-415.11",
      citation: "N.C. Gen. Stat. § 14-415.11",
      url: "https://law.justia.com/codes/north-carolina/chapter-14/article-54b/section-14-415-11/",
      sourceUrl: "https://www.ncleg.gov/",
      effectiveDate: "2023-03-29",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (SB 41, veto overridden, effective March 29, 2023; pistol purchase permit requirement repealed)",
        "Permit type: Constitutional carry; optional shall-issue CHP available",
        "Training required: None for permitless carry; 8 hours for optional CHP",
        "Prohibited locations: Schools, state and federal buildings, courthouses, assemblies where admission is charged, bars, parades, funeral processions, picket lines",
        "Reciprocity: Honors permits from all states",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited area: Class 2 misdemeanor (first offense); Class H felony (subsequent offenses in certain locations)",
      exceptions: "Optional CHP for reciprocity; some locations require CHP (e.g., restaurants that serve alcohol)",
      monetaryValues: [
        { type: "fee", amount: 90, unit: "usd", description: "Permit application fee (CHP)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── North Dakota ──────────────────────────────────────────────────────
    {
      id: "nd-concealed-carry",
      jurisdiction: "ND",
      title: "Concealed Carry — Permitless Carry",
      code: "North Dakota Century Code",
      section: "§ 62.1-04-02",
      citation: "N.D. Cent. Code § 62.1-04-02",
      url: "https://law.justia.com/codes/north-dakota/title-62-1/chapter-62-1-04/section-62-1-04-02/",
      sourceUrl: "https://www.ndlegis.gov/",
      effectiveDate: "2017-08-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 1169, effective August 1, 2017; residents only initially, expanded)",
        "Permit type: Constitutional carry; optional shall-issue CWL available",
        "Training required: None for permitless carry; training required for optional Class 1 CWL",
        "Prohibited locations: Schools, churches (if posted), public gatherings, courthouses, liquor establishments",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited area: Class A misdemeanor, up to 360 days in jail and $3,000 fine",
      exceptions: "Class 1 license allows carry in more locations and states; Class 2 license has fewer privileges",
      monetaryValues: [
        { type: "fee", amount: 25, unit: "usd", description: "Permit application fee (Class 1)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Ohio ──────────────────────────────────────────────────────────────
    {
      id: "oh-concealed-carry",
      jurisdiction: "OH",
      title: "Concealed Carry — Permitless Carry",
      code: "Ohio Revised Code",
      section: "§ 2923.111",
      citation: "Ohio Rev. Code § 2923.111",
      url: "https://law.justia.com/codes/ohio/title-29/chapter-2923/section-2923-111/",
      sourceUrl: "https://www.legislature.ohio.gov/",
      effectiveDate: "2022-06-13",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (SB 215, effective June 13, 2022)",
        "Permit type: Constitutional carry; optional shall-issue CHL available",
        "Training required: None for permitless carry; 8 hours for optional CHL",
        "Prohibited locations: Schools, courthouses, police stations, airport secure areas, government buildings with posted signage, churches (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
        "Duty to inform law enforcement of carry status eliminated under SB 215",
      ],
      penalties:
        "Carrying in prohibited area: fifth-degree felony, 6–12 months in prison and $2,500 fine",
      exceptions: "Optional CHL for reciprocity; CHL holders have advantages in traffic stop interactions",
      monetaryValues: [
        { type: "fee", amount: 67, unit: "usd", description: "Permit application fee (CHL)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Oklahoma ──────────────────────────────────────────────────────────
    {
      id: "ok-concealed-carry",
      jurisdiction: "OK",
      title: "Concealed Carry — Permitless Carry",
      code: "Oklahoma Statutes",
      section: "Title 21, § 1290.2",
      citation: "Okla. Stat. tit. 21, § 1290.2",
      url: "https://law.justia.com/codes/oklahoma/title-21/section-1290-2/",
      sourceUrl: "https://www.oklegislature.gov/",
      effectiveDate: "2019-11-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 2597, effective November 1, 2019)",
        "Permit type: Constitutional carry; optional shall-issue SDA (Self-Defense Act) license available",
        "Training required: None for permitless carry",
        "Prohibited locations: Government buildings, courthouses, schools, bars, casinos, sporting events, colleges (restricted areas)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 1 year in jail and $250 fine",
      exceptions: "Optional SDA license for reciprocity; includes additional training option",
      monetaryValues: [
        { type: "fee", amount: 100, unit: "usd", description: "SDA license application fee" },
        { type: "duration", amount: 10, unit: "years", description: "License validity period" },
      ],
    },

    // ── Oregon ────────────────────────────────────────────────────────────
    {
      id: "or-concealed-carry",
      jurisdiction: "OR",
      title: "Concealed Carry — Shall-Issue",
      code: "Oregon Revised Statutes",
      section: "§ 166.291",
      citation: "Or. Rev. Stat. § 166.291",
      url: "https://law.justia.com/codes/oregon/title-16/chapter-166/section-166-291/",
      sourceUrl: "https://www.oregonlegislature.gov/",
      effectiveDate: "1990-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CHL — Concealed Handgun License)",
        "Training required: Demonstrated competence with a handgun (course completion, military service, or other qualifying experience)",
        "Prohibited locations: Federal buildings, schools (unless CHL holder), court facilities; Measure 114 (2022) imposed additional requirements (litigation ongoing)",
        "Reciprocity: Does not honor out-of-state permits (no reciprocity)",
        "Minimum age: 21",
        "Note: Measure 114 (2022) requires permit-to-purchase and magazine capacity limits; implementation delayed by litigation",
      ],
      penalties:
        "Carrying without CHL: Class A misdemeanor, up to 1 year in jail and $6,250 fine",
      exceptions: "CHL holders may carry on school grounds; active law enforcement exempt",
      monetaryValues: [
        { type: "fee", amount: 65, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Pennsylvania ──────────────────────────────────────────────────────
    {
      id: "pa-concealed-carry",
      jurisdiction: "PA",
      title: "Concealed Carry — Shall-Issue",
      code: "Pennsylvania Consolidated Statutes",
      section: "18 Pa.C.S. § 6109",
      citation: "18 Pa. Cons. Stat. § 6109",
      url: "https://law.justia.com/codes/pennsylvania/title-18/chapter-61/section-6109/",
      sourceUrl: "https://www.legis.state.pa.us/",
      effectiveDate: "1989-06-13",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (License to Carry Firearms — LTCF)",
        "Training required: None (no training requirement for LTCF)",
        "Prohibited locations: Courthouses, schools (unless licensed and on school property for lawful purpose)",
        "Reciprocity: Honors permits from states with reciprocal agreements",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without LTCF: first-degree misdemeanor, up to 5 years in prison; in Philadelphia without LTCF: third-degree felony",
      exceptions: "Carry without license in home, fixed place of business, or on own property; Philadelphia requires LTCF for open carry",
      monetaryValues: [
        { type: "fee", amount: 20, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Rhode Island ──────────────────────────────────────────────────────
    {
      id: "ri-concealed-carry",
      jurisdiction: "RI",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "Rhode Island General Laws",
      section: "§ 11-47-11",
      citation: "R.I. Gen. Laws § 11-47-11",
      url: "https://law.justia.com/codes/rhode-island/title-11/chapter-11-47/section-11-47-11/",
      sourceUrl: "https://www.rilegislature.gov/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was may-issue through AG and local licensing)",
        "Training required: Demonstrated ability to safely use firearms (qualification with pistol)",
        "Prohibited locations: Schools, courthouses, state house, federal buildings",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Eliminated subjective good reason / proper showing of need requirements",
      ],
      penalties:
        "Carrying without license: felony, up to 10 years in prison and $10,000 fine",
      exceptions: "Active law enforcement; dual licensing system (AG license and local licensing authority)",
      monetaryValues: [
        { type: "fee", amount: 40, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 4, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── South Carolina ────────────────────────────────────────────────────
    {
      id: "sc-concealed-carry",
      jurisdiction: "SC",
      title: "Concealed Carry — Permitless Carry",
      code: "South Carolina Code of Laws",
      section: "§ 23-31-210",
      citation: "S.C. Code Ann. § 23-31-210",
      url: "https://law.justia.com/codes/south-carolina/title-23/chapter-31/article-4/section-23-31-210/",
      sourceUrl: "https://www.scstatehouse.gov/",
      effectiveDate: "2024-03-07",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (S. 31, effective March 7, 2024)",
        "Permit type: Constitutional carry; optional shall-issue CWP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Schools, courthouses, state house, government buildings, hospitals, churches (without express permission), polling places, daycare facilities",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 1 year in jail and $1,000 fine",
      exceptions: "Optional CWP available for reciprocity with other states",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee (CWP)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── South Dakota ──────────────────────────────────────────────────────
    {
      id: "sd-concealed-carry",
      jurisdiction: "SD",
      title: "Concealed Carry — Permitless Carry",
      code: "South Dakota Codified Laws",
      section: "§ 22-14-9",
      citation: "S.D. Codified Laws § 22-14-9",
      url: "https://law.justia.com/codes/south-dakota/title-22/chapter-14/section-22-14-9/",
      sourceUrl: "https://sdlegislature.gov/",
      effectiveDate: "2019-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (SB 47, effective July 1, 2019)",
        "Permit type: Constitutional carry; optional shall-issue permit available (regular and enhanced gold card)",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, capitol building, schools (K-12)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 18",
      ],
      penalties:
        "Carrying in prohibited area: Class 1 misdemeanor, up to 1 year in jail and $2,000 fine",
      exceptions: "Enhanced (gold card) permit for broader reciprocity; requires additional training",
      monetaryValues: [
        { type: "fee", amount: 10, unit: "usd", description: "Permit application fee (regular)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Tennessee ─────────────────────────────────────────────────────────
    {
      id: "tn-concealed-carry",
      jurisdiction: "TN",
      title: "Concealed Carry — Permitless Carry",
      code: "Tennessee Code",
      section: "§ 39-17-1307",
      citation: "Tenn. Code Ann. § 39-17-1307",
      url: "https://law.justia.com/codes/tennessee/title-39/chapter-17/part-13/section-39-17-1307/",
      sourceUrl: "https://www.tn.gov/",
      effectiveDate: "2021-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (effective July 1, 2021)",
        "Permit type: Constitutional carry; optional shall-issue Enhanced Handgun Carry Permit (EHCP) and Concealed Handgun Carry Permit (CHCP)",
        "Training required: None for permitless carry; 8 hours for EHCP",
        "Prohibited locations: Schools, courthouses, government buildings, bars, parks (local option), hospitals, airports",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited area: Class A misdemeanor, up to 11 months 29 days in jail and $2,500 fine",
      exceptions: "EHCP allows carry in some restricted areas; CHCP is concealed-only option",
      monetaryValues: [
        { type: "fee", amount: 65, unit: "usd", description: "Enhanced Handgun Carry Permit fee" },
        { type: "duration", amount: 8, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Texas ─────────────────────────────────────────────────────────────
    {
      id: "tx-concealed-carry",
      jurisdiction: "TX",
      title: "Concealed Carry — Permitless Carry",
      code: "Texas Penal Code",
      section: "§ 46.02",
      citation: "Tex. Penal Code § 46.02",
      url: "https://law.justia.com/codes/texas/penal-code/title-10/chapter-46/section-46-02/",
      sourceUrl: "https://capitol.texas.gov/",
      effectiveDate: "2021-09-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 1927, effective September 1, 2021)",
        "Permit type: Constitutional carry; optional shall-issue LTC (License to Carry) available",
        "Training required: None for permitless carry; 4–6 hours for optional LTC",
        "Prohibited locations: Schools (K-12), polling places, courts, racetracks, secured airport areas, bars (51% establishments), correctional facilities, hospitals, amusement parks, government meetings, sporting events",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 for military)",
      ],
      penalties:
        "Carrying in prohibited location: Class A misdemeanor (first offense), up to 1 year in jail and $4,000 fine; third-degree felony in certain locations",
      exceptions: "Optional LTC provides reciprocity; LTC holders exempt from some purchase restrictions",
      monetaryValues: [
        { type: "fee", amount: 40, unit: "usd", description: "LTC application fee" },
        { type: "duration", amount: 5, unit: "years", description: "License validity period" },
      ],
    },

    // ── Utah ──────────────────────────────────────────────────────────────
    {
      id: "ut-concealed-carry",
      jurisdiction: "UT",
      title: "Concealed Carry — Permitless Carry",
      code: "Utah Code",
      section: "§ 76-10-523",
      citation: "Utah Code § 76-10-523",
      url: "https://law.justia.com/codes/utah/title-76/chapter-10/part-5/section-76-10-523/",
      sourceUrl: "https://le.utah.gov/",
      effectiveDate: "2021-05-05",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (HB 60, effective May 5, 2021)",
        "Permit type: Constitutional carry; optional shall-issue CFP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, secure areas of correctional facilities, mental health facilities, airports (secure areas), houses of worship (if posted), schools (with exceptions for permit holders)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 with permit)",
      ],
      penalties:
        "Carrying in prohibited area: Class B misdemeanor, up to 6 months in jail and $1,000 fine",
      exceptions: "Utah CFP is one of the most widely recognized permits in the US; popular for non-residents",
      monetaryValues: [
        { type: "fee", amount: 53, unit: "usd", description: "Permit application fee (resident)" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Vermont ───────────────────────────────────────────────────────────
    {
      id: "vt-concealed-carry",
      jurisdiction: "VT",
      title: "Concealed Carry — Permitless Carry (Vermont Carry)",
      code: "Vermont Statutes",
      section: "Title 13, § 4003",
      citation: "Vt. Stat. Ann. tit. 13, § 4003",
      url: "https://law.justia.com/codes/vermont/title-13/chapter-85/section-4003/",
      sourceUrl: "https://legislature.vermont.gov/",
      effectiveDate: "1903-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (Vermont has never required a permit — the original constitutional carry state)",
        "Permit type: Constitutional carry; no permit system exists (Vermont does not issue concealed carry permits)",
        "Training required: None",
        "Prohibited locations: Schools, courthouses, state buildings",
        "Reciprocity: No permit system; Vermont residents cannot obtain a Vermont permit for reciprocity (some states honor Vermont ID)",
        "Minimum age: 16 (long guns); 21 (handgun purchase from FFL)",
        "Note: Magazine capacity limit (15 rounds handgun, 10 rounds long gun) enacted 2018; 72-hour waiting period enacted 2023",
      ],
      penalties:
        "Carrying in schools: subject to federal Gun-Free School Zones Act; state law violations vary by location",
      exceptions: "No state permit issued; Vermont residents wishing to carry in other states must obtain a non-resident permit from another state",
      monetaryValues: [
        { type: "fee", amount: 0, unit: "usd", description: "No permit system — no fee" },
        { type: "duration", amount: 0, unit: "years", description: "No permit system — not applicable" },
      ],
    },

    // ── Virginia ──────────────────────────────────────────────────────────
    {
      id: "va-concealed-carry",
      jurisdiction: "VA",
      title: "Concealed Carry — Shall-Issue",
      code: "Code of Virginia",
      section: "§ 18.2-308",
      citation: "Va. Code § 18.2-308",
      url: "https://law.justia.com/codes/virginia/title-18-2/chapter-7/section-18-2-308/",
      sourceUrl: "https://virginiageneralassembly.gov/",
      effectiveDate: "1995-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CHP — Concealed Handgun Permit)",
        "Training required: Demonstrated competence with a handgun (approved course, military experience, law enforcement training, or other qualifying experience)",
        "Prohibited locations: Courthouses, places of worship during services (without good and sufficient reason), schools (grounds, not parking lot), government buildings with posted signs",
        "Reciprocity: Honors permits from states with reciprocal agreements",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without CHP: Class 1 misdemeanor, up to 12 months in jail and $2,500 fine",
      exceptions: "Carry in restaurants serving alcohol permitted (cannot consume); open carry generally legal without permit",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Washington ────────────────────────────────────────────────────────
    {
      id: "wa-concealed-carry",
      jurisdiction: "WA",
      title: "Concealed Carry — Shall-Issue",
      code: "Revised Code of Washington",
      section: "§ 9.41.070",
      citation: "Wash. Rev. Code § 9.41.070",
      url: "https://law.justia.com/codes/washington/title-9/chapter-9-41/section-9-41-070/",
      sourceUrl: "https://leg.wa.gov/",
      effectiveDate: "1961-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CPL — Concealed Pistol License)",
        "Training required: None (no training requirement for CPL)",
        "Prohibited locations: Schools, courthouses, bars (restricted area), mental health facilities, jails, airports (restricted areas)",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Note: Assault weapon ban (HB 1240, 2023) and magazine capacity limit (10 rounds, 2022)",
      ],
      penalties:
        "Carrying without CPL: gross misdemeanor, up to 364 days in jail and $5,000 fine",
      exceptions: "In own home, fixed place of business, or on own property; LEOSA-qualified law enforcement",
      monetaryValues: [
        { type: "fee", amount: 36, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── West Virginia ─────────────────────────────────────────────────────
    {
      id: "wv-concealed-carry",
      jurisdiction: "WV",
      title: "Concealed Carry — Permitless Carry",
      code: "West Virginia Code",
      section: "§ 61-7-7",
      citation: "W. Va. Code § 61-7-7",
      url: "https://law.justia.com/codes/west-virginia/chapter-61/article-7/section-61-7-7/",
      sourceUrl: "https://www.wvlegislature.gov/",
      effectiveDate: "2016-05-24",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since May 24, 2016)",
        "Permit type: Constitutional carry; optional shall-issue CWP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Courthouses, schools, government buildings, state capitol complex, churches",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21 (18 for residents)",
      ],
      penalties:
        "Carrying in prohibited location: misdemeanor, up to 1 year in jail and $1,000 fine",
      exceptions: "Optional CWP for reciprocity; provisional license for ages 18–20",
      monetaryValues: [
        { type: "fee", amount: 25, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Wisconsin ─────────────────────────────────────────────────────────
    {
      id: "wi-concealed-carry",
      jurisdiction: "WI",
      title: "Concealed Carry — Shall-Issue",
      code: "Wisconsin Statutes",
      section: "§ 175.60",
      citation: "Wis. Stat. § 175.60",
      url: "https://law.justia.com/codes/wisconsin/chapter-175/section-175-60/",
      sourceUrl: "https://docs.legis.wisconsin.gov/",
      effectiveDate: "2011-11-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (CCW License)",
        "Training required: Approved firearms training course (Hunter Safety also qualifies)",
        "Prohibited locations: Schools, police stations, courthouses, secure areas of jails, mental health facilities, government buildings beyond security checkpoints",
        "Reciprocity: Honors permits from states with similar or stricter standards (25+ states)",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying without CCW license: Class A misdemeanor, up to 9 months in jail and $10,000 fine",
      exceptions: "In own home, place of business, or on own land; signs posted as trespass (not criminal violation)",
      monetaryValues: [
        { type: "fee", amount: 40, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── Wyoming ───────────────────────────────────────────────────────────
    {
      id: "wy-concealed-carry",
      jurisdiction: "WY",
      title: "Concealed Carry — Permitless Carry",
      code: "Wyoming Statutes",
      section: "§ 6-8-104",
      citation: "Wyo. Stat. § 6-8-104",
      url: "https://law.justia.com/codes/wyoming/title-6/chapter-8/article-1/section-6-8-104/",
      sourceUrl: "https://www.wyoleg.gov/",
      effectiveDate: "2011-07-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: Yes (since July 1, 2011; residents initially; expanded to all legal possessors)",
        "Permit type: Constitutional carry; optional shall-issue CFP available",
        "Training required: None for permitless carry",
        "Prohibited locations: Government meetings, courthouses, schools, jails, law enforcement facilities, churches (if posted)",
        "Reciprocity: Honors all valid out-of-state concealed carry permits",
        "Minimum age: 21",
      ],
      penalties:
        "Carrying in prohibited area: misdemeanor, up to 6 months in jail and $750 fine",
      exceptions: "Optional CFP for reciprocity with other states",
      monetaryValues: [
        { type: "fee", amount: 50, unit: "usd", description: "Permit application fee" },
        { type: "duration", amount: 5, unit: "years", description: "Permit validity period" },
      ],
    },

    // ── District of Columbia ──────────────────────────────────────────────
    {
      id: "dc-concealed-carry",
      jurisdiction: "DC",
      title: "Concealed Carry — Shall-Issue (Post-Bruen)",
      code: "District of Columbia Official Code",
      section: "§ 7-2509.02",
      citation: "D.C. Code § 7-2509.02",
      url: "https://law.justia.com/codes/district-of-columbia/title-7/subtitle-j/chapter-25/unit-a/subchapter-ix/section-7-2509-02/",
      sourceUrl: "https://lims.dccouncil.gov/",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["concealed-carry", "criminal"],
      keyProvisions: [
        "Permitless carry: No",
        "Permit type: Shall-issue (post-Bruen; was effectively may-issue with good reason requirement struck down in Wrenn v. D.C. (2017) and reinforced by Bruen (2022))",
        "Training required: 18 hours total (16 hours classroom instruction, 2 hours range qualification)",
        "Prohibited locations: Schools, government buildings, libraries, hospitals, public transit, stadiums, arenas, memorials, museums, White House vicinity, Capitol grounds, National Mall",
        "Reciprocity: Does not honor any out-of-state permits",
        "Minimum age: 21",
        "Impact of Bruen: Reinforced elimination of good reason requirement already struck by D.C. Circuit in Wrenn v. D.C. (2017)",
      ],
      penalties:
        "Carrying without license: felony, up to 5 years in prison and $12,500 fine",
      exceptions: "Active law enforcement, LEOSA-qualified retired officers; assault weapons and magazines over 10 rounds banned",
      monetaryValues: [
        { type: "fee", amount: 75, unit: "usd", description: "Concealed carry license application fee" },
        { type: "duration", amount: 2, unit: "years", description: "License validity period" },
      ],
    },
  ],
};
