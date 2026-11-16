import { TopicDataFile } from "../loader";

export const minimumWage: TopicDataFile = {
  topic: "minimum-wage",
  description:
    "State and federal minimum wage rates, tipped employee rates, and scheduled increases",
  federalBaseline: "FLSA — 29 U.S.C. § 206(a)(1) — $7.25/hr federal minimum",
  entries: [
    // ── Alabama ──────────────────────────────────────────────────────────
    {
      id: "al-minimum-wage",
      jurisdiction: "al",
      title: "Alabama Minimum Wage (Federal FLSA Applies)",
      code: "Ala. Code",
      section: "§ 25-1-1 et seq.",
      citation: "No state minimum wage law; federal FLSA 29 U.S.C. § 206(a)(1) applies",
      url: "https://www.labor.alabama.gov/",
      sourceUrl: "https://www.dol.gov/agencies/whd/minimum-wage/state",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Alabama has no state minimum wage law",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $2.13/hr (federal)",
        "State law prohibits local governments from enacting minimum wage ordinances (Act 2016-18)"
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── Alaska ────────────────────────────────────────────────────────────
    {
      id: "ak-minimum-wage",
      jurisdiction: "ak",
      title: "Alaska Minimum Wage",
      code: "Alaska Stat.",
      section: "§ 23.10.065",
      citation: "Alaska Stat. § 23.10.065",
      url: "https://www.akleg.gov/basis/statutes.asp#23.10.065",
      sourceUrl: "https://labor.alaska.gov/lss/whact.htm",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $11.73/hr (adjusted annually for inflation)",
        "No tip credit allowed — tipped employees must receive full minimum wage",
        "Annual CPI adjustment per Ballot Measure 3 (2014)"
      ],
      penalties: "Employer liable for unpaid wages plus liquidated damages equal to the unpaid amount",
      exceptions: "Exemptions for individuals employed in hand-harvesting of certain crops, individuals under 18 in certain circumstances",
      monetaryValues: [
        { type: "wage", amount: 11.73, unit: "usd-per-hour", description: "Standard minimum wage" }
      ]
    },
    // ── Arizona ───────────────────────────────────────────────────────────
    {
      id: "az-minimum-wage",
      jurisdiction: "az",
      title: "Arizona Minimum Wage",
      code: "Ariz. Rev. Stat.",
      section: "§ 23-363",
      citation: "Ariz. Rev. Stat. § 23-363",
      url: "https://www.azleg.gov/ars/23/00363.htm",
      sourceUrl: "https://www.azica.gov/labor-minimum-wage-main-page",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.70/hr (adjusted annually for CPI)",
        "Tipped employee minimum cash wage: $11.70/hr (tip credit of $3.00)",
        "Annual CPI adjustment under Proposition 206 (Fair Wages and Healthy Families Act, 2016)"
      ],
      penalties: "Employer liable for unpaid wages, damages, and reinstatement; willful violations subject to additional penalties",
      exceptions: "Exemptions for small businesses with fewer than $500,000 annual revenue not covered by FLSA, casual babysitters, state/federal government employees",
      monetaryValues: [
        { type: "wage", amount: 14.70, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 11.70, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Arkansas ──────────────────────────────────────────────────────────
    {
      id: "ar-minimum-wage",
      jurisdiction: "ar",
      title: "Arkansas Minimum Wage",
      code: "Ark. Code Ann.",
      section: "§ 11-4-210",
      citation: "Ark. Code Ann. § 11-4-210",
      url: "https://www.arkleg.state.ar.us/Acts/FTPDocument?path=%2FACTS%2F2019R%2FPublic%2F&file=579&ddBiennession=2019%2F2019R",
      sourceUrl: "https://www.labor.arkansas.gov/labor/labor-standards/minimum-wage-information/",
      effectiveDate: "2021-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $11.00/hr (per Issue 5 of 2018)",
        "Tipped employee minimum cash wage: $2.63/hr",
        "Applies to employers with 4 or more employees"
      ],
      penalties: "Violation is a misdemeanor; employer liable for unpaid wages plus equal amount as liquidated damages",
      exceptions: "Employers with fewer than 4 employees; federal/state government; certain agricultural and seasonal workers",
      monetaryValues: [
        { type: "wage", amount: 11.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── California ────────────────────────────────────────────────────────
    {
      id: "ca-minimum-wage",
      jurisdiction: "ca",
      title: "California Minimum Wage",
      code: "Cal. Lab. Code",
      section: "§ 1182.12",
      citation: "Cal. Lab. Code § 1182.12",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1182.12&lawCode=LAB",
      sourceUrl: "https://www.dir.ca.gov/dlse/faq_minimumwage.htm",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $16.00/hr for all employers (regardless of size)",
        "No tip credit — tipped employees must receive full minimum wage",
        "Fast food workers: $20.00/hr (AB 1228, effective 2024-04-01)",
        "Healthcare workers: $18.00–$23.00/hr depending on facility type (SB 525, phased increases)",
        "Annual CPI adjustment beginning 2025, capped at 3.5%"
      ],
      penalties: "Employer liable for unpaid wages plus liquidated damages; willful failure to pay: additional waiting time penalties up to 30 days wages (Lab. Code § 203)",
      exceptions: "Learners, certain disabled workers under special license, outside salespersons, close family members of employer",
      monetaryValues: [
        { type: "wage", amount: 16.00, unit: "usd-per-hour", description: "Standard minimum wage" }
      ]
    },
    // ── Colorado ──────────────────────────────────────────────────────────
    {
      id: "co-minimum-wage",
      jurisdiction: "co",
      title: "Colorado Minimum Wage",
      code: "Colo. Rev. Stat.",
      section: "§ 8-6-109",
      citation: "Colo. Rev. Stat. § 8-6-109; COMPS Order #40",
      url: "https://leg.colorado.gov/sites/default/files/images/olls/crs2023-title-08.pdf",
      sourceUrl: "https://cdle.colorado.gov/wage-and-hour-law/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.81/hr (adjusted annually for CPI per Amendment 70)",
        "Tipped employee minimum cash wage: $11.79/hr (tip credit of $3.02)",
        "Annual CPI adjustment"
      ],
      penalties: "Employer liable for unpaid wages, penalties, and attorney fees; willful violations subject to fines up to $500 per violation",
      exceptions: "Certain administrative, executive, professional employees; outside salespersons; certain agricultural workers",
      monetaryValues: [
        { type: "wage", amount: 14.81, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 11.79, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Connecticut ───────────────────────────────────────────────────────
    {
      id: "ct-minimum-wage",
      jurisdiction: "ct",
      title: "Connecticut Minimum Wage",
      code: "Conn. Gen. Stat.",
      section: "§ 31-58",
      citation: "Conn. Gen. Stat. § 31-58 et seq.",
      url: "https://www.cga.ct.gov/current/pub/chap_558.htm",
      sourceUrl: "https://www.ctdol.state.ct.us/wgwkstnd/wage-hour/informationforemployees.htm",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $16.35/hr (indexed to ECI starting 2024)",
        "Tipped employee minimum cash wage: $6.38/hr (per Conn. Gen. Stat. § 31-60(b))",
        "Annual adjustment tied to Employment Cost Index (ECI) beginning January 2024",
        "Hotel/restaurant industry: service charge of 11% or more counts as gratuity"
      ],
      penalties: "Fine up to $5,000 and/or imprisonment up to 5 years for willful violations; liable for unpaid wages plus double damages",
      exceptions: "Certain agricultural workers, household domestic workers in certain circumstances",
      monetaryValues: [
        { type: "wage", amount: 16.35, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 6.38, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Delaware ──────────────────────────────────────────────────────────
    {
      id: "de-minimum-wage",
      jurisdiction: "de",
      title: "Delaware Minimum Wage",
      code: "Del. Code Ann. tit. 19",
      section: "§ 902",
      citation: "Del. Code Ann. tit. 19, § 902",
      url: "https://delcode.delaware.gov/title19/c009/index.html",
      sourceUrl: "https://dia.delawareworks.com/labor-law/",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.00/hr (per SB 15, 151st General Assembly)",
        "Tipped employee minimum cash wage: $2.23/hr",
        "Phased increases reached $15.00 on January 1, 2025"
      ],
      penalties: "Fine of $1,000–$5,000 per violation and/or up to 30 days imprisonment; liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, volunteers for nonprofit organizations, certain youth workers",
      monetaryValues: [
        { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.23, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── District of Columbia ──────────────────────────────────────────────
    {
      id: "dc-minimum-wage",
      jurisdiction: "dc",
      title: "District of Columbia Minimum Wage",
      code: "D.C. Code",
      section: "§ 32-1003",
      citation: "D.C. Code § 32-1003",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/32-1003",
      sourceUrl: "https://does.dc.gov/service/office-wage-hour-compliance",
      effectiveDate: "2025-07-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $17.50/hr (adjusted annually for CPI per Initiative 77 as amended)",
        "Tipped employee minimum cash wage: $10.00/hr (per Amendment Act of 2018)",
        "Annual CPI adjustment each July 1",
        "Tipped minimum wage increases annually toward parity under Initiative 82 (2022)"
      ],
      penalties: "Employer liable for unpaid wages, liquidated damages, attorney fees, and costs; administrative penalties up to $10,000 per violation",
      exceptions: "Certain casual babysitters, companions for elderly/disabled",
      monetaryValues: [
        { type: "wage", amount: 17.50, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Florida ───────────────────────────────────────────────────────────
    {
      id: "fl-minimum-wage",
      jurisdiction: "fl",
      title: "Florida Minimum Wage",
      code: "Fla. Const.",
      section: "Art. X, § 24",
      citation: "Fla. Const. Art. X, § 24; Fla. Stat. § 448.110",
      url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0448/0448.html",
      sourceUrl: "https://floridajobs.org/business-growth-and-partnerships/for-employers/display-702702",
      effectiveDate: "2024-09-30",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.00/hr (per Amendment 2, 2020 — phased increases to $15.00 by Sept 2026)",
        "Tipped employee minimum cash wage: $10.00/hr (tip credit of $4.00 from Sept 2024)",
        "Scheduled increase to $15.00/hr on September 30, 2026",
        "Annual CPI adjustment after reaching $15.00"
      ],
      penalties: "Employer liable for back wages plus liquidated damages equal to lost compensation; attorney fees recoverable",
      exceptions: "Tipped employees, certain student workers, full-time students",
      monetaryValues: [
        { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Georgia ───────────────────────────────────────────────────────────
    {
      id: "ga-minimum-wage",
      jurisdiction: "ga",
      title: "Georgia Minimum Wage",
      code: "Ga. Code Ann.",
      section: "§ 34-4-3",
      citation: "Ga. Code Ann. § 34-4-3",
      url: "https://www.legis.ga.gov/api/legislation/document/20212022/201483",
      sourceUrl: "https://dol.georgia.gov/minimum-wage",
      effectiveDate: "2001-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "State minimum wage: $5.15/hr (below federal rate)",
        "Federal FLSA rate of $7.25/hr applies to most workers covered by FLSA",
        "State rate applies only to employers not covered by FLSA",
        "Tipped employee minimum cash wage: $2.13/hr (federal)"
      ],
      penalties: "Misdemeanor; fine up to $100 per offense and/or up to 3 months imprisonment",
      exceptions: "Employers with 5 or fewer employees at any one location; agricultural employers; certain domestic workers",
      monetaryValues: [
        { type: "wage", amount: 5.15, unit: "usd-per-hour", description: "State minimum wage (federal $7.25 applies if covered by FLSA)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── Hawaii ────────────────────────────────────────────────────────────
    {
      id: "hi-minimum-wage",
      jurisdiction: "hi",
      title: "Hawaii Minimum Wage",
      code: "Haw. Rev. Stat.",
      section: "§ 387-2",
      citation: "Haw. Rev. Stat. § 387-2",
      url: "https://www.capitol.hawaii.gov/hrscurrent/Vol07_Ch0346-0398/HRS0387/HRS_0387-0002.htm",
      sourceUrl: "https://labor.hawaii.gov/wsd/minimum-wage/",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.00/hr (HB 2510, Act 114, 2022)",
        "Scheduled increase to $16.00/hr on January 1, 2026; $18.00/hr on January 1, 2028",
        "Tip credit: $1.00/hr (tipped minimum cash wage: $13.00/hr)",
        "If employee's wages plus tips equal $17.00/hr or more, tip credit of $1.25 applies"
      ],
      penalties: "Fine up to $10,000 per violation; imprisonment up to 1 year; liable for unpaid wages plus equal amount as liquidated damages",
      exceptions: "Certain agricultural workers, domestic service employees in certain circumstances",
      monetaryValues: [
        { type: "wage", amount: 14.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 13.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Idaho ─────────────────────────────────────────────────────────────
    {
      id: "id-minimum-wage",
      jurisdiction: "id",
      title: "Idaho Minimum Wage",
      code: "Idaho Code",
      section: "§ 44-1502",
      citation: "Idaho Code § 44-1502",
      url: "https://legislature.idaho.gov/statutesrules/idstat/Title44/T44CH15/SECT44-1502/",
      sourceUrl: "https://www.labor.idaho.gov/businesses/wp-content/uploads/sites/3/2022/12/Idaho-Minimum-Wage.pdf",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $3.35/hr (tip credit of $3.90)",
        "No scheduled increases"
      ],
      penalties: "Misdemeanor; employer liable for unpaid wages plus costs and attorney fees",
      exceptions: "Certain agricultural workers, outside salespersons, certain camp counselors",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 3.35, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Illinois ──────────────────────────────────────────────────────────
    {
      id: "il-minimum-wage",
      jurisdiction: "il",
      title: "Illinois Minimum Wage",
      code: "820 ILCS",
      section: "105/4a",
      citation: "820 ILCS 105/4a (Minimum Wage Law)",
      url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2402",
      sourceUrl: "https://labor.illinois.gov/laws-rules/conmed/minimum-wage-rates-702.html",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.00/hr (per SB 1 / Public Act 101-0001, fully phased in 2025)",
        "Tipped employee minimum cash wage: $9.00/hr (60% of minimum wage)",
        "Youth wage (under 18, ≤ 650 hours/year): $13.00/hr"
      ],
      penalties: "Fine up to $1,500 per offense; each day of violation is a separate offense; employer liable for underpayment plus 2% per month damages plus costs and fees",
      exceptions: "Certain agricultural workers, domestic workers in limited circumstances, members of religious orders",
      monetaryValues: [
        { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 9.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Indiana ───────────────────────────────────────────────────────────
    {
      id: "in-minimum-wage",
      jurisdiction: "in",
      title: "Indiana Minimum Wage",
      code: "Ind. Code",
      section: "§ 22-2-2-4",
      citation: "Ind. Code § 22-2-2-4",
      url: "https://iga.in.gov/legislative/laws/2023/ic/titles/022/#22-2-2",
      sourceUrl: "https://www.in.gov/dol/wage-and-hour/minimum-wage/",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "Applies to employers with 2 or more employees"
      ],
      penalties: "Employer liable for unpaid wages plus reasonable attorney fees and court costs",
      exceptions: "Employers with fewer than 2 employees; certain agricultural workers; domestic service workers",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Iowa ──────────────────────────────────────────────────────────────
    {
      id: "ia-minimum-wage",
      jurisdiction: "ia",
      title: "Iowa Minimum Wage",
      code: "Iowa Code",
      section: "§ 91D.1",
      citation: "Iowa Code § 91D.1",
      url: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=91D",
      sourceUrl: "https://www.iowadivisionoflabor.gov/minimum-wage",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $4.35/hr (tip credit of $2.90)",
        "State law preempts local minimum wage ordinances (SF 295, 2017)"
      ],
      penalties: "Simple misdemeanor; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, youth workers under age 18 in limited circumstances",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 4.35, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Kansas ────────────────────────────────────────────────────────────
    {
      id: "ks-minimum-wage",
      jurisdiction: "ks",
      title: "Kansas Minimum Wage",
      code: "Kan. Stat. Ann.",
      section: "§ 44-1203",
      citation: "Kan. Stat. Ann. § 44-1203",
      url: "https://www.ksrevisor.org/statutes/chapters/ch44/044_012_0003.html",
      sourceUrl: "https://www.dol.ks.gov/laws-faqs/minimum-wage",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "Applies to employers not covered by FLSA"
      ],
      penalties: "Employer liable for unpaid wages, damages, and attorney fees",
      exceptions: "Agricultural workers, certain seasonal amusement/recreational establishments",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Kentucky ──────────────────────────────────────────────────────────
    {
      id: "ky-minimum-wage",
      jurisdiction: "ky",
      title: "Kentucky Minimum Wage",
      code: "Ky. Rev. Stat. Ann.",
      section: "§ 337.275",
      citation: "Ky. Rev. Stat. Ann. § 337.275",
      url: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=32568",
      sourceUrl: "https://labor.ky.gov/standards/Pages/Minimum-Wage.aspx",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "State law preempts local minimum wage ordinances (KRS 337.010)"
      ],
      penalties: "Fine of $100–$500 per violation; employer liable for unpaid wages plus additional equal amount as liquidated damages",
      exceptions: "Agricultural employees, certain retail/service employers with annual gross sales under $95,000, babysitters",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Louisiana ─────────────────────────────────────────────────────────
    {
      id: "la-minimum-wage",
      jurisdiction: "la",
      title: "Louisiana Minimum Wage (Federal FLSA Applies)",
      code: "La. Rev. Stat. Ann.",
      section: "§ 23:642",
      citation: "La. Rev. Stat. Ann. § 23:642 (preemption); federal FLSA 29 U.S.C. § 206(a)(1) applies",
      url: "https://www.legis.la.gov/legis/Law.aspx?d=83825",
      sourceUrl: "https://www.dol.gov/agencies/whd/minimum-wage/state#la",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Louisiana has no state minimum wage law",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $2.13/hr (federal)",
        "State law preempts local governments from setting minimum wage (La. Rev. Stat. § 23:642)"
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── Maine ─────────────────────────────────────────────────────────────
    {
      id: "me-minimum-wage",
      jurisdiction: "me",
      title: "Maine Minimum Wage",
      code: "Me. Rev. Stat. Ann. tit. 26",
      section: "§ 664",
      citation: "Me. Rev. Stat. Ann. tit. 26, § 664",
      url: "https://legislature.maine.gov/statutes/26/title26sec664.html",
      sourceUrl: "https://www.maine.gov/labor/labor_laws/minimum_wage.html",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.65/hr (adjusted annually for CPI per citizen initiative 2016)",
        "Tipped employee minimum cash wage: 50% of minimum wage ($7.33/hr)",
        "Annual CPI adjustment"
      ],
      penalties: "Fine of $100–$500 per violation; employer liable for unpaid wages plus equal liquidated damages",
      exceptions: "Agricultural workers, certain seasonal employees, certain student workers",
      monetaryValues: [
        { type: "wage", amount: 14.65, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 7.33, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Maryland ──────────────────────────────────────────────────────────
    {
      id: "md-minimum-wage",
      jurisdiction: "md",
      title: "Maryland Minimum Wage",
      code: "Md. Code Ann., Lab. & Empl.",
      section: "§ 3-413",
      citation: "Md. Code Ann., Lab. & Empl. § 3-413",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gle&section=3-413",
      sourceUrl: "https://www.dllr.state.md.us/labor/wages/minimumwagelawinfo.shtml",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.00/hr (all employers, per HB 166 / SB 280, 2019)",
        "Tipped employee minimum cash wage: $3.63/hr",
        "Annual CPI adjustment beginning 2024 (for employers with 15+ employees)"
      ],
      penalties: "Fine up to $1,000 per violation; employer liable for unpaid wages plus up to 3x liquidated damages plus attorney fees",
      exceptions: "Agricultural workers, certain amusement/recreational establishment employees, employees under 18",
      monetaryValues: [
        { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 3.63, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Massachusetts ─────────────────────────────────────────────────────
    {
      id: "ma-minimum-wage",
      jurisdiction: "ma",
      title: "Massachusetts Minimum Wage",
      code: "Mass. Gen. Laws",
      section: "ch. 151, § 1",
      citation: "Mass. Gen. Laws ch. 151, § 1",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXI/Chapter151/Section1",
      sourceUrl: "https://www.mass.gov/info-details/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.00/hr (per Grand Bargain Act of 2018, ch. 121 of Acts of 2018)",
        "Tipped employee minimum cash wage: $6.75/hr",
        "Sunday/holiday premium pay being phased out (eliminated by 2023)"
      ],
      penalties: "Fine up to $25,000 and/or imprisonment up to 1 year; employer liable for treble damages for willful violations",
      exceptions: "Agricultural workers, certain domestic workers, members of religious orders, outside salespersons",
      monetaryValues: [
        { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 6.75, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Michigan ──────────────────────────────────────────────────────────
    {
      id: "mi-minimum-wage",
      jurisdiction: "mi",
      title: "Michigan Minimum Wage",
      code: "Mich. Comp. Laws",
      section: "§ 408.934",
      citation: "Mich. Comp. Laws § 408.934 (Improved Workforce Opportunity Wage Act)",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-408-934",
      sourceUrl: "https://www.michigan.gov/leo/bureaus-agencies/ber/wage-hour/michigan-minimum-wage",
      effectiveDate: "2025-02-21",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $12.48/hr (per Mothering Justice v. Nessel, restoring original 2018 initiative)",
        "Tipped employee minimum cash wage: being phased to full minimum wage by 2029",
        "Tipped minimum 2025: $10.00/hr",
        "Annual CPI adjustment after full phase-in"
      ],
      penalties: "Misdemeanor; fine up to $1,000 and/or imprisonment up to 90 days; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, employees under 18 in certain circumstances",
      monetaryValues: [
        { type: "wage", amount: 12.48, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 10.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Minnesota ─────────────────────────────────────────────────────────
    {
      id: "mn-minimum-wage",
      jurisdiction: "mn",
      title: "Minnesota Minimum Wage",
      code: "Minn. Stat.",
      section: "§ 177.24",
      citation: "Minn. Stat. § 177.24",
      url: "https://www.revisor.mn.gov/statutes/cite/177.24",
      sourceUrl: "https://www.dli.mn.gov/business/employment-practices/minimum-wage-minnesota",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Large employer minimum wage (annual revenue ≥ $500,000): $11.13/hr (CPI-adjusted)",
        "Small employer minimum wage (annual revenue < $500,000): $9.08/hr",
        "No tip credit — tipped employees must receive full minimum wage",
        "Annual CPI adjustment per Minn. Stat. § 177.24 subd. 2",
        "Youth wage (under 18): $9.08/hr"
      ],
      penalties: "Misdemeanor; fine up to $1,000 and/or imprisonment up to 90 days; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, babysitters in employer's home",
      monetaryValues: [
        { type: "wage", amount: 11.13, unit: "usd-per-hour", description: "Standard minimum wage (large employer)" },
        { type: "wage", amount: 9.08, unit: "usd-per-hour", description: "Small employer minimum wage" }
      ]
    },
    // ── Mississippi ───────────────────────────────────────────────────────
    {
      id: "ms-minimum-wage",
      jurisdiction: "ms",
      title: "Mississippi Minimum Wage (Federal FLSA Applies)",
      code: "Miss. Code Ann.",
      section: "N/A",
      citation: "No state minimum wage law; federal FLSA 29 U.S.C. § 206(a)(1) applies",
      url: "https://mdes.ms.gov/",
      sourceUrl: "https://www.dol.gov/agencies/whd/minimum-wage/state#ms",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Mississippi has no state minimum wage law",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $2.13/hr (federal)"
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── Missouri ──────────────────────────────────────────────────────────
    {
      id: "mo-minimum-wage",
      jurisdiction: "mo",
      title: "Missouri Minimum Wage",
      code: "Mo. Rev. Stat.",
      section: "§ 290.502",
      citation: "Mo. Rev. Stat. § 290.502; Mo. Const. Art. III, § 24(a)",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=290.502",
      sourceUrl: "https://labor.mo.gov/dls/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $13.75/hr (per Proposition B 2018, phased to $12.00 by 2023 then CPI-adjusted)",
        "Tipped employee minimum cash wage: 50% of minimum wage ($6.88/hr)",
        "Annual CPI adjustment per Mo. Const. Art. III, § 24(a)"
      ],
      penalties: "Employer liable for unpaid wages plus liquidated damages; willful violations subject to additional penalties",
      exceptions: "Certain retail/service employers with annual gross sales under $500,000; agricultural workers",
      monetaryValues: [
        { type: "wage", amount: 13.75, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 6.88, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Montana ───────────────────────────────────────────────────────────
    {
      id: "mt-minimum-wage",
      jurisdiction: "mt",
      title: "Montana Minimum Wage",
      code: "Mont. Code Ann.",
      section: "§ 39-3-409",
      citation: "Mont. Code Ann. § 39-3-409",
      url: "https://leg.mt.gov/bills/mca/title_0390/chapter_0030/part_0040/section_0090/0390-0030-0040-0090.html",
      sourceUrl: "https://erd.dli.mt.gov/labor-standards/wage-and-hour-payment-act/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $10.55/hr (adjusted annually for CPI per I-151, 2006)",
        "No tip credit — tipped employees must receive full minimum wage",
        "Businesses with annual gross sales under $110,000 and not covered by FLSA: $4.00/hr",
        "Annual CPI adjustment"
      ],
      penalties: "Employer liable for unpaid wages plus 110% penalty; misdemeanor for willful violations",
      exceptions: "Small businesses not covered by FLSA with annual gross sales under $110,000",
      monetaryValues: [
        { type: "wage", amount: 10.55, unit: "usd-per-hour", description: "Standard minimum wage" }
      ]
    },
    // ── Nebraska ──────────────────────────────────────────────────────────
    {
      id: "ne-minimum-wage",
      jurisdiction: "ne",
      title: "Nebraska Minimum Wage",
      code: "Neb. Rev. Stat.",
      section: "§ 48-1203",
      citation: "Neb. Rev. Stat. § 48-1203",
      url: "https://nebraskalegislature.gov/laws/statutes.php?statute=48-1203",
      sourceUrl: "https://dol.nebraska.gov/LaborStandards/MinimumWage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $13.50/hr (per Initiative 433, 2022 — phased to $15.00 by 2026)",
        "Scheduled increase to $15.00/hr on January 1, 2026",
        "Tipped employee minimum cash wage: $2.13/hr",
        "Applies to employers with 4 or more employees"
      ],
      penalties: "Class III misdemeanor; employer liable for unpaid wages",
      exceptions: "Employers with fewer than 4 employees; certain agricultural workers; federal/state government",
      monetaryValues: [
        { type: "wage", amount: 13.50, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Nevada ────────────────────────────────────────────────────────────
    {
      id: "nv-minimum-wage",
      jurisdiction: "nv",
      title: "Nevada Minimum Wage",
      code: "Nev. Rev. Stat.",
      section: "§ 608.250",
      citation: "Nev. Rev. Stat. § 608.250; Nev. Const. Art. 15, § 16",
      url: "https://www.leg.state.nv.us/nrs/nrs-608.html#NRS608Sec250",
      sourceUrl: "https://labor.nv.gov/Employers/Minimum-Wage/",
      effectiveDate: "2024-07-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $12.00/hr (unified rate, per AB 456 of 2019 and subsequent adjustments)",
        "Two-tier system eliminated as of July 1, 2024 — single rate regardless of benefits",
        "No tip credit",
        "Annual CPI adjustment beginning July 1, 2025 per Nev. Const. Art. 15, § 16"
      ],
      penalties: "Administrative penalties; employer liable for unpaid wages plus damages",
      exceptions: "Certain domestic workers, certain agricultural workers",
      monetaryValues: [
        { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" }
      ]
    },
    // ── New Hampshire ─────────────────────────────────────────────────────
    {
      id: "nh-minimum-wage",
      jurisdiction: "nh",
      title: "New Hampshire Minimum Wage",
      code: "N.H. Rev. Stat. Ann.",
      section: "§ 279:21",
      citation: "N.H. Rev. Stat. Ann. § 279:21",
      url: "https://www.gencourt.state.nh.us/rsa/html/XXIII/279/279-21.htm",
      sourceUrl: "https://www.nh.gov/labor/inspection/wage-hour/minimum-wage.htm",
      effectiveDate: "2011-09-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "New Hampshire repealed its state minimum wage in 2011 (HB 133)",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $3.27/hr (45% of federal minimum, per N.H. RSA 279:21)"
      ],
      penalties: "Violation is a misdemeanor; employer liable for unpaid wages",
      exceptions: "Certain agricultural workers, casual babysitters, outside salespersons",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 3.27, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── New Jersey ────────────────────────────────────────────────────────
    {
      id: "nj-minimum-wage",
      jurisdiction: "nj",
      title: "New Jersey Minimum Wage",
      code: "N.J. Stat. Ann.",
      section: "§ 34:11-56a4",
      citation: "N.J. Stat. Ann. § 34:11-56a4",
      url: "https://lis.njleg.state.nj.us/nxt/gateway.dll?f=templates&fn=default.htm&vid=Publish:10.1048/Enu",
      sourceUrl: "https://www.nj.gov/labor/wageandhour/tools-resources/minimumwage/",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.49/hr (CPI-adjusted; base $15.00 reached Jan 2024 per A-15/S-2019 of 2019)",
        "Tipped employee minimum cash wage: $5.62/hr",
        "Seasonal/small employer (< 6 employees): $13.73/hr (phased increase)",
        "Agricultural workers: $12.81/hr (phased increase)",
        "Annual CPI adjustment beginning 2025"
      ],
      penalties: "Fine of $250–$1,000 per first offense; $500–$2,500 per subsequent offense; up to 10 days imprisonment; employer liable for full wages plus liquidated damages",
      exceptions: "Certain agricultural workers (lower rate), seasonal workers (lower rate for small employers)",
      monetaryValues: [
        { type: "wage", amount: 15.49, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 5.62, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── New Mexico ────────────────────────────────────────────────────────
    {
      id: "nm-minimum-wage",
      jurisdiction: "nm",
      title: "New Mexico Minimum Wage",
      code: "N.M. Stat. Ann.",
      section: "§ 50-4-22",
      citation: "N.M. Stat. Ann. § 50-4-22",
      url: "https://nmonesource.com/nmos/nmsa/en/item/4395/index.do",
      sourceUrl: "https://www.dws.state.nm.us/Minimum-Wage-Information",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $12.00/hr (per HB 31 of 2019, fully phased in 2023)",
        "Tipped employee minimum cash wage: $3.00/hr",
        "Annual CPI adjustment beginning 2024 per § 50-4-22(D)"
      ],
      penalties: "Petty misdemeanor; fine up to $500 per violation; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, domestic service workers, certain student workers",
      monetaryValues: [
        { type: "wage", amount: 12.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 3.00, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── New York ──────────────────────────────────────────────────────────
    {
      id: "ny-minimum-wage",
      jurisdiction: "ny",
      title: "New York Minimum Wage",
      code: "N.Y. Lab. Law",
      section: "§ 652",
      citation: "N.Y. Lab. Law § 652",
      url: "https://www.nysenate.gov/legislation/laws/LAB/652",
      sourceUrl: "https://dol.ny.gov/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "NYC, Long Island, Westchester: $16.50/hr (per Part SS of Chapter 58, Laws of 2023)",
        "Remainder of state: $15.50/hr (per Chapter 58, Laws of 2023)",
        "Tipped (food service) minimum cash wage: $11.00/hr (NYC/LI/Westchester), $10.35/hr (rest of state)",
        "Tipped (service employees) minimum cash wage: $13.50/hr (NYC/LI/Westchester), $12.75/hr (rest of state)",
        "Annual indexed increases beginning 2027"
      ],
      penalties: "Fine up to $20,000 per first offense; $30,000 per subsequent offense; liable for unpaid wages plus 100% liquidated damages plus interest",
      exceptions: "Certain not-for-profit camp counselors; certain student workers; outside salespersons",
      monetaryValues: [
        { type: "wage", amount: 16.50, unit: "usd-per-hour", description: "Standard minimum wage (NYC, Long Island, Westchester)" },
        { type: "wage", amount: 15.50, unit: "usd-per-hour", description: "Standard minimum wage (remainder of state)" }
      ]
    },
    // ── North Carolina ────────────────────────────────────────────────────
    {
      id: "nc-minimum-wage",
      jurisdiction: "nc",
      title: "North Carolina Minimum Wage",
      code: "N.C. Gen. Stat.",
      section: "§ 95-25.3",
      citation: "N.C. Gen. Stat. § 95-25.3",
      url: "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_95/GS_95-25.3.html",
      sourceUrl: "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-time-worked-and-wages-earned/minimum-wage-nc",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "Youth wage (under 20, first 90 days): $4.25/hr"
      ],
      penalties: "Employer liable for unpaid wages plus liquidated damages; willful violations: misdemeanor with fine up to $500",
      exceptions: "Certain agricultural workers, domestic workers, certain seasonal employees",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── North Dakota ──────────────────────────────────────────────────────
    {
      id: "nd-minimum-wage",
      jurisdiction: "nd",
      title: "North Dakota Minimum Wage",
      code: "N.D. Cent. Code",
      section: "§ 34-06-22",
      citation: "N.D. Cent. Code § 34-06-22",
      url: "https://www.ndlegis.gov/cencode/t34c06.pdf",
      sourceUrl: "https://www.nd.gov/labor/minimum-wage",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $4.86/hr (33% tip credit)"
      ],
      penalties: "Class B misdemeanor; employer liable for unpaid wages and damages",
      exceptions: "Certain agricultural workers, domestic workers, seasonal workers at amusement/recreational establishments",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 4.86, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Ohio ──────────────────────────────────────────────────────────────
    {
      id: "oh-minimum-wage",
      jurisdiction: "oh",
      title: "Ohio Minimum Wage",
      code: "Ohio Const.",
      section: "Art. II, § 34a",
      citation: "Ohio Const. Art. II, § 34a; Ohio Rev. Code § 4111.02",
      url: "https://codes.ohio.gov/ohio-revised-code/section-4111.02",
      sourceUrl: "https://com.ohio.gov/divisions-and-programs/industrial-compliance/wage-and-hour/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $10.70/hr (per constitutional amendment, Issue 2, 2006; CPI-adjusted)",
        "Tipped employee minimum cash wage: 50% of minimum wage ($5.35/hr)",
        "Small employers (annual gross receipts ≤ $394,000): federal $7.25/hr rate applies",
        "Annual CPI adjustment"
      ],
      penalties: "Employer liable for unpaid wages plus equal amount as liquidated damages plus attorney fees",
      exceptions: "Employers with annual gross receipts under $394,000 (federal rate applies); certain agricultural workers",
      monetaryValues: [
        { type: "wage", amount: 10.70, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 5.35, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Oklahoma ──────────────────────────────────────────────────────────
    {
      id: "ok-minimum-wage",
      jurisdiction: "ok",
      title: "Oklahoma Minimum Wage",
      code: "Okla. Stat. tit. 40",
      section: "§ 197.5",
      citation: "Okla. Stat. tit. 40, § 197.5",
      url: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=95022",
      sourceUrl: "https://oklahoma.gov/omes/services/purchasing/dol/minimum-wage.html",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "State minimum wage follows federal FLSA rate: $7.25/hr",
        "Tipped employee minimum cash wage: $2.13/hr",
        "Applies to employers with 10+ employees or $100,000+ annual gross sales",
        "State law preempts local minimum wage ordinances"
      ],
      penalties: "Misdemeanor; fine up to $500; employer liable for unpaid wages",
      exceptions: "Employers with fewer than 10 full-time employees at any one location and less than $100,000 annual gross sales",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Oregon ────────────────────────────────────────────────────────────
    {
      id: "or-minimum-wage",
      jurisdiction: "or",
      title: "Oregon Minimum Wage",
      code: "Or. Rev. Stat.",
      section: "§ 653.025",
      citation: "Or. Rev. Stat. § 653.025",
      url: "https://www.oregonlegislature.gov/bills_laws/ors/ors653.html",
      sourceUrl: "https://www.oregon.gov/boli/workers/pages/minimum-wage.aspx",
      effectiveDate: "2025-07-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Standard minimum wage: $14.70/hr (CPI-adjusted per SB 1532, 2016)",
        "Portland metro: $15.95/hr",
        "Nonurban counties: $13.70/hr",
        "No tip credit — tipped employees receive full minimum wage",
        "Annual CPI adjustment (up to 3.75% cap per ORS 653.025(4))"
      ],
      penalties: "Employer liable for unpaid wages plus penalty of 30 days wages; willful violations subject to additional fines",
      exceptions: "Certain agricultural workers in limited circumstances, certain student workers",
      monetaryValues: [
        { type: "wage", amount: 14.70, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 15.95, unit: "usd-per-hour", description: "Portland metro minimum wage" }
      ]
    },
    // ── Pennsylvania ──────────────────────────────────────────────────────
    {
      id: "pa-minimum-wage",
      jurisdiction: "pa",
      title: "Pennsylvania Minimum Wage",
      code: "43 Pa. Stat.",
      section: "§ 333.104",
      citation: "43 Pa. Stat. § 333.104 (Minimum Wage Act of 1968)",
      url: "https://www.legis.state.pa.us/cfdocs/legis/li/uconsCheck.cfm?yr=1968&sessInd=0&smthLwInd=0&act=5",
      sourceUrl: "https://www.dli.pa.gov/Individuals/Labor-Management-Relations/llc/minimum-wage/Pages/default.aspx",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.83/hr",
        "Tip credit: $4.42/hr"
      ],
      penalties: "Fine up to $300 and/or imprisonment up to 60 days per first offense; up to $500 and/or 90 days per subsequent offense; employer liable for unpaid wages",
      exceptions: "Certain agricultural workers, domestic service workers, golf caddies, newspaper deliverers",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.83, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Rhode Island ──────────────────────────────────────────────────────
    {
      id: "ri-minimum-wage",
      jurisdiction: "ri",
      title: "Rhode Island Minimum Wage",
      code: "R.I. Gen. Laws",
      section: "§ 28-12-3",
      citation: "R.I. Gen. Laws § 28-12-3",
      url: "https://webserver.rilegislature.gov//Statutes/TITLE28/28-12/28-12-3.htm",
      sourceUrl: "https://dlt.ri.gov/individuals/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $15.00/hr (per H 5889/S 599 of 2023, fully phased in 2025)",
        "Tipped employee minimum cash wage: $3.89/hr",
        "Phased increases from $13.00 to $15.00 between 2023 and 2025"
      ],
      penalties: "Fine of $100–$500 per offense; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, certain individuals with disabilities under special certificate",
      monetaryValues: [
        { type: "wage", amount: 15.00, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 3.89, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── South Carolina ────────────────────────────────────────────────────
    {
      id: "sc-minimum-wage",
      jurisdiction: "sc",
      title: "South Carolina Minimum Wage (Federal FLSA Applies)",
      code: "S.C. Code Ann.",
      section: "N/A",
      citation: "No state minimum wage law; federal FLSA 29 U.S.C. § 206(a)(1) applies",
      url: "https://llr.sc.gov/wage/",
      sourceUrl: "https://www.dol.gov/agencies/whd/minimum-wage/state#sc",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "South Carolina has no state minimum wage law",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $2.13/hr (federal)"
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── South Dakota ──────────────────────────────────────────────────────
    {
      id: "sd-minimum-wage",
      jurisdiction: "sd",
      title: "South Dakota Minimum Wage",
      code: "S.D. Codified Laws",
      section: "§ 60-11-3",
      citation: "S.D. Codified Laws § 60-11-3",
      url: "https://sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute=60-11-3",
      sourceUrl: "https://dlr.sd.gov/employment_laws/minimum_wage.aspx",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $11.20/hr (adjusted annually for CPI per Initiated Measure 18, 2014)",
        "Tipped employee minimum cash wage: 50% of minimum wage ($5.60/hr)",
        "Annual CPI adjustment"
      ],
      penalties: "Class 2 misdemeanor; employer liable for unpaid wages plus damages",
      exceptions: "Certain agricultural workers, babysitters",
      monetaryValues: [
        { type: "wage", amount: 11.20, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 5.60, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Tennessee ─────────────────────────────────────────────────────────
    {
      id: "tn-minimum-wage",
      jurisdiction: "tn",
      title: "Tennessee Minimum Wage (Federal FLSA Applies)",
      code: "Tenn. Code Ann.",
      section: "N/A",
      citation: "No state minimum wage law; federal FLSA 29 U.S.C. § 206(a)(1) applies",
      url: "https://www.tn.gov/workforce/employees/labor-laws.html",
      sourceUrl: "https://www.dol.gov/agencies/whd/minimum-wage/state#tn",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Tennessee has no state minimum wage law",
        "Federal FLSA rate of $7.25/hr applies to covered employees",
        "Tipped employee minimum cash wage: $2.13/hr (federal)"
      ],
      penalties: undefined,
      exceptions: undefined,
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage (federal)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    },
    // ── Texas ─────────────────────────────────────────────────────────────
    {
      id: "tx-minimum-wage",
      jurisdiction: "tx",
      title: "Texas Minimum Wage",
      code: "Tex. Lab. Code Ann.",
      section: "§ 62.051",
      citation: "Tex. Lab. Code Ann. § 62.051",
      url: "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.62.htm",
      sourceUrl: "https://www.twc.texas.gov/businesses/texas-minimum-wage-law",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "State law preempts local minimum wage ordinances (Tex. Lab. Code § 62.0515)"
      ],
      penalties: "Administrative penalty up to $1,000 per violation; employer liable for unpaid wages",
      exceptions: "Certain agricultural workers, domestic workers, certain student workers",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Utah ──────────────────────────────────────────────────────────────
    {
      id: "ut-minimum-wage",
      jurisdiction: "ut",
      title: "Utah Minimum Wage",
      code: "Utah Code Ann.",
      section: "§ 34-40-104",
      citation: "Utah Code Ann. § 34-40-104",
      url: "https://le.utah.gov/xcode/Title34/Chapter40/34-40-S104.html",
      sourceUrl: "https://laborcommission.utah.gov/divisions/antidiscrimination-and-labor/minimum-wage/",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.13/hr",
        "State rate set to not be less than federal rate"
      ],
      penalties: "Class B misdemeanor; employer liable for unpaid wages and damages",
      exceptions: "Certain agricultural workers, domestic service workers, outside salespersons",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Vermont ───────────────────────────────────────────────────────────
    {
      id: "vt-minimum-wage",
      jurisdiction: "vt",
      title: "Vermont Minimum Wage",
      code: "Vt. Stat. Ann. tit. 21",
      section: "§ 384",
      citation: "Vt. Stat. Ann. tit. 21, § 384",
      url: "https://legislature.vermont.gov/statutes/section/21/005/00384",
      sourceUrl: "https://labor.vermont.gov/minimum-wage",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $14.01/hr (adjusted annually for CPI per Act 148 of 2014)",
        "Tipped employee minimum cash wage: $7.01/hr (50% of minimum wage per § 384(b))",
        "Basic tip credit: $7.00/hr",
        "Annual CPI adjustment, increases by 5% over CPI",
        "Guaranteed to be at least $0.01 above federal rate"
      ],
      penalties: "Fine up to $10,000 per violation; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Certain agricultural workers, outside salespersons, certain student workers",
      monetaryValues: [
        { type: "wage", amount: 14.01, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 7.01, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Virginia ──────────────────────────────────────────────────────────
    {
      id: "va-minimum-wage",
      jurisdiction: "va",
      title: "Virginia Minimum Wage",
      code: "Va. Code Ann.",
      section: "§ 40.1-28.10",
      citation: "Va. Code Ann. § 40.1-28.10",
      url: "https://law.lis.virginia.gov/vacode/title40.1/chapter3/section40.1-28.10/",
      sourceUrl: "https://www.doli.virginia.gov/minimum-wage/",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $12.41/hr (per HB 395 / SB 7 of 2020; CPI-adjusted beginning 2025)",
        "Tipped employee minimum cash wage: $2.13/hr (per Va. Code § 40.1-28.9:1)",
        "Further increases to be determined by General Assembly or CPI adjustment"
      ],
      penalties: "Misdemeanor; fine up to $1,000 per first offense; employer liable for unpaid wages plus additional equal amount as liquidated damages",
      exceptions: "Certain agricultural workers, domestic service workers, certain seasonal employees",
      monetaryValues: [
        { type: "wage", amount: 12.41, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Washington ────────────────────────────────────────────────────────
    {
      id: "wa-minimum-wage",
      jurisdiction: "wa",
      title: "Washington Minimum Wage",
      code: "Wash. Rev. Code",
      section: "§ 49.46.020",
      citation: "Wash. Rev. Code § 49.46.020",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=49.46.020",
      sourceUrl: "https://lni.wa.gov/workers-rights/wages/minimum-wage/",
      effectiveDate: "2025-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $16.66/hr (adjusted annually for CPI per Initiative 1433, 2016)",
        "No tip credit — tipped employees must receive full minimum wage",
        "Annual CPI adjustment"
      ],
      penalties: "Employer liable for unpaid wages plus interest plus additional equal amount as liquidated damages; willful violations: misdemeanor",
      exceptions: "Certain agricultural workers, casual labor, bona fide volunteers",
      monetaryValues: [
        { type: "wage", amount: 16.66, unit: "usd-per-hour", description: "Standard minimum wage" }
      ]
    },
    // ── West Virginia ─────────────────────────────────────────────────────
    {
      id: "wv-minimum-wage",
      jurisdiction: "wv",
      title: "West Virginia Minimum Wage",
      code: "W. Va. Code",
      section: "§ 21-5C-2",
      citation: "W. Va. Code § 21-5C-2",
      url: "https://code.wvlegislature.gov/21-5C-2/",
      sourceUrl: "https://labor.wv.gov/newwebsite/Pages/minimum_wage.html",
      effectiveDate: "2015-01-01",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $8.75/hr (per HB 4283 of 2014)",
        "Tipped employee minimum cash wage: $2.62/hr (70% tip credit)",
        "Applies to employers with 6 or more employees at one location"
      ],
      penalties: "Misdemeanor; fine of $25–$100 per offense; employer liable for unpaid wages plus liquidated damages",
      exceptions: "Employers with fewer than 6 employees; certain agricultural workers; certain seasonal/recreational establishment workers",
      monetaryValues: [
        { type: "wage", amount: 8.75, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.62, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Wisconsin ─────────────────────────────────────────────────────────
    {
      id: "wi-minimum-wage",
      jurisdiction: "wi",
      title: "Wisconsin Minimum Wage",
      code: "Wis. Stat.",
      section: "§ 104.01",
      citation: "Wis. Stat. § 104.01 et seq.",
      url: "https://docs.legis.wisconsin.gov/statutes/statutes/104",
      sourceUrl: "https://dwd.wisconsin.gov/er/laborstandards/minimumwage.htm",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "Minimum wage: $7.25/hr (matches federal FLSA rate)",
        "Tipped employee minimum cash wage: $2.33/hr",
        "Opportunity wage (under 20, first 90 days): $5.90/hr"
      ],
      penalties: "Fine of $25–$100 per first offense; employer liable for unpaid wages plus penalty; subsequent offenses subject to higher fines",
      exceptions: "Certain agricultural workers, camp counselors, caddy workers",
      monetaryValues: [
        { type: "wage", amount: 7.25, unit: "usd-per-hour", description: "Standard minimum wage" },
        { type: "wage", amount: 2.33, unit: "usd-per-hour", description: "Tipped employee minimum wage" }
      ]
    },
    // ── Wyoming ───────────────────────────────────────────────────────────
    {
      id: "wy-minimum-wage",
      jurisdiction: "wy",
      title: "Wyoming Minimum Wage",
      code: "Wyo. Stat. Ann.",
      section: "§ 27-4-202",
      citation: "Wyo. Stat. Ann. § 27-4-202",
      url: "https://wyoleg.gov/NXT/gateway.dll?f=templates&fn=default.htm",
      sourceUrl: "https://dws.wyo.gov/dws-division/labor-standards/",
      effectiveDate: "2009-07-24",
      lastVerified: "2026-11-15",
      topics: ["minimum-wage", "employment"],
      keyProvisions: [
        "State minimum wage: $5.15/hr (below federal rate)",
        "Federal FLSA rate of $7.25/hr applies to most workers covered by FLSA",
        "Tipped employee minimum cash wage: $2.13/hr (federal)"
      ],
      penalties: "Misdemeanor; fine up to $750; employer liable for unpaid wages",
      exceptions: "Certain agricultural workers; outside salespersons; employees of the state or political subdivisions",
      monetaryValues: [
        { type: "wage", amount: 5.15, unit: "usd-per-hour", description: "State minimum wage (federal $7.25 applies if covered by FLSA)" },
        { type: "wage", amount: 2.13, unit: "usd-per-hour", description: "Tipped employee minimum wage (federal)" }
      ]
    }
  ]
};
