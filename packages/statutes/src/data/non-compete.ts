import { TopicDataFile } from "../loader";

export const nonCompete: TopicDataFile = {
  topic: "non-compete",
  description:
    "State laws governing enforceability of non-compete agreements, including bans, restrictions, and requirements",
  federalBaseline:
    "FTC proposed rule to ban non-competes (2024) — stayed by federal court; no current federal prohibition",
  entries: [
    // ─── STATES THAT BAN NON-COMPETES ───────────────────────────────

    {
      id: "ca-non-compete",
      jurisdiction: "ca",
      title: "Prohibition on Non-Compete Agreements",
      code: "Cal. Bus. & Prof. Code",
      section: "§ 16600",
      citation: "Cal. Bus. & Prof. Code § 16600",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=16600.&lawCode=BPC",
      sourceUrl: "https://leginfo.legislature.ca.gov/",
      effectiveDate: "1872-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete agreements are void and unenforceable",
        "Applies regardless of where the contract was signed",
        "AB 1076 (2020) codified existing case law voiding non-competes",
        "SB 699 (2024) makes it unlawful to enter into or enforce a non-compete regardless of where/when signed",
        "AB 1076 (2024) prohibits employers from requiring employees to sign non-competes, even if void"
      ],
      penalties:
        "Employer may be liable for tortious interference; employee may recover attorney fees under SB 699",
      exceptions:
        "Sale of a business (goodwill); dissolution of a partnership or LLC"
    },
    {
      id: "mn-non-compete",
      jurisdiction: "mn",
      title: "Prohibition on Non-Compete Agreements",
      code: "Minn. Stat.",
      section: "§ 181.988",
      citation: "Minn. Stat. § 181.988",
      url: "https://www.revisor.mn.gov/statutes/cite/181.988",
      sourceUrl: "https://www.revisor.mn.gov/statutes/",
      effectiveDate: "2023-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete agreements void and unenforceable for all employees",
        "Applies to agreements entered into on or after July 1, 2023",
        "Does not apply to non-disclosure or non-solicitation agreements",
        "Does not retroactively void pre-existing non-competes"
      ],
      penalties: undefined,
      exceptions:
        "Sale of a business; non-disclosure agreements; non-solicitation agreements; agreements during or after dissolution of a business"
    },
    {
      id: "nd-non-compete",
      jurisdiction: "nd",
      title: "Prohibition on Non-Compete Agreements",
      code: "N.D. Cent. Code",
      section: "§ 9-08-06",
      citation: "N.D. Cent. Code § 9-08-06",
      url: "https://www.ndlegis.gov/cencode/t09c08.pdf",
      sourceUrl: "https://www.ndlegis.gov/cencode/",
      effectiveDate: "1965-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Every contract restraining exercise of a lawful profession, trade, or business is void",
        "One of the earliest state bans on non-competes",
        "Broadly interpreted by courts to invalidate nearly all non-compete provisions"
      ],
      penalties: undefined,
      exceptions:
        "Sale of goodwill of a business; dissolution or dissociation from a partnership"
    },
    {
      id: "ok-non-compete",
      jurisdiction: "ok",
      title: "Prohibition on Non-Compete Agreements",
      code: "Okla. Stat. tit. 15",
      section: "§ 219A",
      citation: "Okla. Stat. tit. 15, § 219A",
      url: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=82954",
      sourceUrl: "https://www.oscn.net/",
      effectiveDate: "2001-11-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete agreements restraining right to engage in business or profession are void",
        "Employer may require non-disclosure of trade secrets and confidential information",
        "Employer may require non-solicitation of established customers"
      ],
      penalties: undefined,
      exceptions:
        "Sale of goodwill of a business; dissolution of a partnership; non-solicitation of established customers; non-disclosure of trade secrets"
    },

    // ─── STATES WITH SIGNIFICANT RESTRICTIONS ────────────────────────

    {
      id: "co-non-compete",
      jurisdiction: "co",
      title: "Non-Compete Agreement Restrictions",
      code: "Colo. Rev. Stat.",
      section: "§ 8-2-113",
      citation: "Colo. Rev. Stat. § 8-2-113",
      url: "https://leg.colorado.gov/sites/default/files/images/olls/crs2023-title-08.pdf",
      sourceUrl: "https://leg.colorado.gov/",
      effectiveDate: "2022-08-10",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-competes void unless for workers earning above annual threshold (adjusted annually for inflation)",
        "Non-solicitation restricted to workers earning above 60% of the threshold",
        "Must be provided to prospective employee before acceptance of offer, or 14 days before effective date for current employee",
        "Must include specific notice language that the agreement is a non-compete",
        "Employer must notify employee of the covenant in a separate document"
      ],
      penalties:
        "Employer liable for actual damages, injunctive relief, and reasonable attorney fees; criminal penalty of a class 2 misdemeanor for knowingly violating the statute",
      exceptions:
        "Sale of a business; recovery of scholarship or training costs for employees who leave within 2 years; trade secrets; non-solicitation for high earners",
      monetaryValues: [
        {
          type: "threshold",
          amount: 123750,
          unit: "usd-per-year",
          description:
            "Approximate 2024 threshold for non-compete enforceability (adjusted annually; HCE threshold)"
        },
        {
          type: "threshold",
          amount: 74250,
          unit: "usd-per-year",
          description:
            "Approximate 2024 threshold for non-solicitation enforceability (60% of HCE threshold)"
        }
      ]
    },
    {
      id: "wa-non-compete",
      jurisdiction: "wa",
      title: "Non-Compete Covenant Restrictions",
      code: "Wash. Rev. Code",
      section: "§ 49.62",
      citation: "Wash. Rev. Code § 49.62.005–.900",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=49.62",
      sourceUrl: "https://app.leg.wa.gov/rcw/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete void for employees earning less than annual threshold (adjusted annually for inflation)",
        "Non-compete void for independent contractors earning less than a separate threshold",
        "Maximum duration of 18 months presumed unreasonable unless employer shows need",
        "Must disclose terms by the earlier of acceptance of offer or start of work",
        "Employer must pay garden leave compensation if enforced post-layoff"
      ],
      penalties:
        "Employer liable for actual damages or statutory penalty of $5,000, whichever is greater, plus attorney fees and costs",
      exceptions:
        "Sale of a business; non-disclosure and non-solicitation agreements that do not constitute non-competes",
      monetaryValues: [
        {
          type: "threshold",
          amount: 120559,
          unit: "usd-per-year",
          description:
            "Approximate 2024 employee earnings threshold for enforceability (adjusted annually)"
        },
        {
          type: "threshold",
          amount: 301399,
          unit: "usd-per-year",
          description:
            "Approximate 2024 independent contractor earnings threshold (adjusted annually)"
        }
      ]
    },
    {
      id: "or-non-compete",
      jurisdiction: "or",
      title: "Non-Compete Agreement Restrictions",
      code: "Or. Rev. Stat.",
      section: "§ 653.295",
      citation: "Or. Rev. Stat. § 653.295",
      url: "https://www.oregonlegislature.gov/bills_laws/ors/ors653.html",
      sourceUrl: "https://www.oregonlegislature.gov/bills_laws/",
      effectiveDate: "2022-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete void unless employee earns above the median family income for a four-person family",
        "Maximum enforceable duration of 12 months (reduced from 18 months in 2022)",
        "Employer must provide written notice of non-compete at least 2 weeks before start of employment, or upon a bona fide advancement",
        "Must be part of a written employment agreement"
      ],
      penalties:
        "Void if requirements not met; employee may recover attorney fees",
      exceptions: "Sale of a business; bonus restriction agreements",
      monetaryValues: [
        {
          type: "threshold",
          amount: 100533,
          unit: "usd-per-year",
          description:
            "Approximate 2024 threshold (median family income for a four-person family, adjusted annually)"
        }
      ]
    },
    {
      id: "il-non-compete",
      jurisdiction: "il",
      title: "Illinois Freedom to Work Act",
      code: "820 ILCS",
      section: "90/1–90/99",
      citation: "820 ILCS 90/1 et seq.",
      url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4154",
      sourceUrl: "https://www.ilga.gov/legislation/ilcs/",
      effectiveDate: "2022-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete void for employees earning $75,000/year or less (threshold increases $5,000 every 5 years)",
        "Non-solicitation void for employees earning $45,000/year or less (threshold increases $2,500 every 5 years)",
        "Employer must advise employee to consult an attorney and provide 14 calendar days to review",
        "Adequate consideration required: at least 2 years of continued employment, or other adequate consideration",
        "Cannot be imposed on employees who were laid off or furloughed due to COVID-19 or similar circumstances"
      ],
      penalties:
        "Court may award employee actual damages, attorney fees, and costs; agreement rendered void",
      exceptions:
        "Sale of a business; non-disclosure agreements; garden leave clauses that provide compensation",
      monetaryValues: [
        {
          type: "threshold",
          amount: 75000,
          unit: "usd-per-year",
          description:
            "Minimum employee earnings for non-compete enforceability (increases $5,000 every 5 years starting 2027)"
        },
        {
          type: "threshold",
          amount: 45000,
          unit: "usd-per-year",
          description:
            "Minimum employee earnings for non-solicitation enforceability (increases $2,500 every 5 years starting 2027)"
        }
      ]
    },
    {
      id: "me-non-compete",
      jurisdiction: "me",
      title: "Restrictions on Non-Compete Agreements",
      code: "Me. Rev. Stat. tit. 26",
      section: "§ 599-A",
      citation: "Me. Rev. Stat. tit. 26, § 599-A",
      url: "https://legislature.maine.gov/statutes/26/title26sec599-A.html",
      sourceUrl: "https://legislature.maine.gov/statutes/",
      effectiveDate: "2019-09-19",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete prohibited for employees earning at or below 400% of the federal poverty level",
        "Cannot impose non-compete on workers under 18 or nonexempt employees under FLSA",
        "Employer must provide notice of non-compete before or at the time an offer is made, or 3 business days before effective date for existing employees",
        "Agreement limited to 1 year unless employer demonstrates need for longer"
      ],
      penalties: undefined,
      exceptions: "Sale of a business; non-disclosure agreements",
      monetaryValues: [
        {
          type: "threshold",
          amount: 62400,
          unit: "usd-per-year",
          description:
            "Approximate 2024 threshold (400% of federal poverty level for individual)"
        }
      ]
    },
    {
      id: "nh-non-compete",
      jurisdiction: "nh",
      title: "Restrictions on Non-Compete Agreements",
      code: "N.H. Rev. Stat. Ann.",
      section: "§ 275:70 to 275:70-a",
      citation: "N.H. Rev. Stat. Ann. §§ 275:70, 275:70-a",
      url: "https://www.gencourt.state.nh.us/rsa/html/xxiii/275/275-70-a.htm",
      sourceUrl: "https://www.gencourt.state.nh.us/rsa/html/",
      effectiveDate: "2019-09-08",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete prohibited for low-wage employees (earning hourly rate equal to or less than 200% of federal minimum wage)",
        "Non-compete void for employees under 18",
        "Employer must provide copy of non-compete agreement prior to or at the time of making an offer of employment",
        "For existing employees, must provide 2 weeks advance notice before non-compete takes effect",
        "Non-compete agreements generally enforceable for non-low-wage employees if reasonable in scope and duration"
      ],
      penalties: undefined,
      exceptions: "Sale of a business; non-solicitation and non-disclosure agreements"
    },
    {
      id: "ma-non-compete",
      jurisdiction: "ma",
      title: "Massachusetts Non-Competition Agreement Act",
      code: "Mass. Gen. Laws",
      section: "ch. 149, § 24L",
      citation: "Mass. Gen. Laws ch. 149, § 24L",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXI/Chapter149/Section24L",
      sourceUrl: "https://malegislature.gov/Laws/GeneralLaws/",
      effectiveDate: "2018-10-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Maximum duration of 12 months (24 months if employee breaches fiduciary duty or unlawfully takes property)",
        "Must include garden leave clause OR other mutually-agreed upon consideration",
        "Garden leave must be at least 50% of highest base salary within last 2 years",
        "Cannot be imposed on nonexempt employees, undergrads, grad students, employees under 18, or terminated-without-cause employees",
        "Must be in writing, signed by both parties, and state employee has right to consult attorney",
        "Must be provided at earlier of formal offer or 10 business days before start date; for existing employees, must be supported by fair and reasonable consideration and 10 business days notice"
      ],
      penalties:
        "Agreement unenforceable if statutory requirements not met",
      exceptions:
        "Sale of a business; forfeiture-for-competition agreements; non-solicitation; non-disclosure; invention assignment; non-competes at separation if supported by garden leave"
    },
    {
      id: "nv-non-compete",
      jurisdiction: "nv",
      title: "Non-Compete Agreement Requirements",
      code: "Nev. Rev. Stat.",
      section: "§ 613.195",
      citation: "Nev. Rev. Stat. § 613.195",
      url: "https://www.leg.state.nv.us/nrs/nrs-613.html#NRS613Sec195",
      sourceUrl: "https://www.leg.state.nv.us/nrs/",
      effectiveDate: "2021-10-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete void for hourly employees",
        "Non-compete unenforceable if employee is terminated or laid off (courts may blue-pencil)",
        "Courts must revise overbroad agreements to make them reasonable rather than void them entirely",
        "Must be supported by valuable consideration"
      ],
      penalties: undefined,
      exceptions: "Sale of a business; non-disclosure agreements"
    },
    {
      id: "ri-non-compete",
      jurisdiction: "ri",
      title: "Noncompete Agreement Act",
      code: "R.I. Gen. Laws",
      section: "§ 28-59-1 to 28-59-3",
      citation: "R.I. Gen. Laws § 28-59-1 et seq.",
      url: "https://webserver.rilegislature.gov/Statutes/TITLE28/28-59/INDEX.htm",
      sourceUrl: "https://webserver.rilegislature.gov/Statutes/",
      effectiveDate: "2020-01-15",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete prohibited for nonexempt employees under FLSA",
        "Prohibited for undergraduate or graduate students in internships",
        "Prohibited for employees under 18 years of age",
        "Prohibited for low-wage workers earning less than 250% of federal poverty level"
      ],
      penalties: undefined,
      exceptions: "Sale of a business; non-solicitation; non-disclosure; invention assignment"
    },
    {
      id: "va-non-compete",
      jurisdiction: "va",
      title: "Restrictions on Non-Compete Agreements for Low-Wage Employees",
      code: "Va. Code Ann.",
      section: "§ 40.1-28.7:8",
      citation: "Va. Code Ann. § 40.1-28.7:8",
      url: "https://law.lis.virginia.gov/vacode/title40.1/chapter3/section40.1-28.7:8/",
      sourceUrl: "https://law.lis.virginia.gov/vacode/",
      effectiveDate: "2020-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete covenants prohibited for low-wage employees (earning less than the average weekly wage of the Commonwealth)",
        "Applies to non-compete agreements, not non-solicitation or non-disclosure",
        "Low-wage employee defined as earning less than the Virginia average weekly wage",
        "Higher-earning employees subject to common law reasonableness test"
      ],
      penalties:
        "Civil penalty of $10,000 per violation, payable to the Literary Fund; employee may bring a private cause of action for damages and attorney fees",
      exceptions:
        "Sale of a business; non-disclosure; non-solicitation; employees above the wage threshold"
    },
    {
      id: "md-non-compete",
      jurisdiction: "md",
      title: "Maryland Noncompete and Conflict of Interest Clauses",
      code: "Md. Code Ann., Lab. & Empl.",
      section: "§ 3-716",
      citation: "Md. Code Ann., Lab. & Empl. § 3-716",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gle&section=3-716",
      sourceUrl: "https://mgaleg.maryland.gov/mgawebsite/Laws/",
      effectiveDate: "2019-10-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete prohibited for employees earning equal to or less than $15/hour or $31,200/year",
        "Does not restrict non-competes for higher-earning employees (subject to common law reasonableness)",
        "Applies to both non-compete and conflict-of-interest clauses"
      ],
      penalties: undefined,
      exceptions: "Sale of a business; employees above the wage/salary threshold",
      monetaryValues: [
        {
          type: "threshold",
          amount: 31200,
          unit: "usd-per-year",
          description:
            "Minimum annual salary for non-compete enforceability (or $15/hour)"
        }
      ]
    },
    {
      id: "dc-non-compete",
      jurisdiction: "dc",
      title: "Ban on Non-Compete Agreements Amendment Act",
      code: "D.C. Code",
      section: "§ 32-581.01 to 32-581.06",
      citation: "D.C. Code § 32-581.01 et seq.",
      url: "https://code.dccouncil.gov/us/dc/council/code/titles/32/chapters/5B",
      sourceUrl: "https://code.dccouncil.gov/",
      effectiveDate: "2022-10-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete agreements banned for nearly all employees",
        "Non-compete prohibited for employees earning less than $150,000/year (medical specialists: $250,000)",
        "Anti-moonlighting provisions also prohibited for covered employees",
        "Employer must provide written notice to employees of their rights under the act"
      ],
      penalties:
        "Civil penalties of $350-$1,000 per violation; employee entitled to relief including attorney fees",
      exceptions:
        "Medical specialists earning over $250,000; sale of a business; non-disclosure and non-solicitation agreements; volunteers; casual babysitters; lay members of religious organizations",
      monetaryValues: [
        {
          type: "threshold",
          amount: 150000,
          unit: "usd-per-year",
          description:
            "General employee threshold; non-competes banned for those earning less"
        },
        {
          type: "threshold",
          amount: 250000,
          unit: "usd-per-year",
          description:
            "Medical specialist threshold; non-competes banned for those earning less"
        }
      ]
    },

    // ─── STATES WITH MODERATE RESTRICTIONS ───────────────────────────

    {
      id: "al-non-compete",
      jurisdiction: "al",
      title: "Non-Compete Agreement Enforceability",
      code: "Ala. Code",
      section: "§ 8-1-190 to 8-1-197",
      citation: "Ala. Code § 8-1-190 et seq.",
      url: "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/Conus.htm",
      sourceUrl: "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/",
      effectiveDate: "2016-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-competes enforceable if protects a legitimate business interest",
        "Maximum duration of 2 years presumed reasonable",
        "Must be supported by adequate consideration",
        "Geographic and temporal limits must be reasonable",
        "Courts may blue-pencil (reform) overbroad agreements",
        "Expressly defines protectable interests: trade secrets, confidential information, relationships with customers and suppliers"
      ],
      penalties: undefined,
      exceptions:
        "Professionals employed by staffing agencies after termination of assignment"
    },
    {
      id: "ak-non-compete",
      jurisdiction: "ak",
      title: "Non-Compete Agreement Enforceability (Common Law)",
      code: "Alaska Stat.",
      section: "N/A (common law)",
      citation: "Data Informatics, Inc. v. Ameritox, Ltd. (Alaska 2014)",
      url: "https://www.akleg.gov/basis/statutes.asp",
      sourceUrl: "https://www.akleg.gov/",
      effectiveDate: "1959-01-03",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must protect a legitimate business interest",
        "Must not be unduly burdensome to the employee or harmful to the public",
        "Courts apply blue-pencil doctrine to narrow overbroad agreements"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "az-non-compete",
      jurisdiction: "az",
      title: "Non-Compete Agreement Enforceability",
      code: "Ariz. Rev. Stat.",
      section: "N/A (common law)",
      citation: "Orca Communications Unlimited, LLC v. Noder, 337 P.3d 545 (Ariz. 2014)",
      url: "https://www.azleg.gov/arstitle/",
      sourceUrl: "https://www.azleg.gov/",
      effectiveDate: "1912-02-14",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must protect legitimate business interest (trade secrets, customer relationships, specialized training)",
        "Must be reasonable in time, geography, and scope of activity",
        "Courts use reasonableness balancing test rather than strict blue-pencil"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ar-non-compete",
      jurisdiction: "ar",
      title: "Non-Compete Agreement Enforceability",
      code: "Ark. Code Ann.",
      section: "§ 4-75-101",
      citation: "Ark. Code Ann. § 4-75-101",
      url: "https://advance.lexis.com/container?config=00JAA3ZTU0NTAzYy0zZDEyLTRhYmQtYmRmMS1iMWIxNDgxYWMxZTQKAFBvZENhdGFsb2cubxSIiOfGL0l3Eld4RDVrbw&crid=b6f60b3a-bc0f-4b2d-a69c-6e12c4fb0bdf",
      sourceUrl: "https://www.arkleg.state.ar.us/",
      effectiveDate: "1868-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable in scope, duration, and geographic area",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil overbroad restrictions",
        "Consideration of continued employment may be sufficient"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ct-non-compete",
      jurisdiction: "ct",
      title: "Non-Compete Agreement Enforceability",
      code: "Conn. Gen. Stat.",
      section: "N/A (common law)",
      citation: "Robert S. Weiss & Assocs. v. Wiederlight, 546 A.2d 216 (Conn. 1988)",
      url: "https://www.cga.ct.gov/current/pub/titles.htm",
      sourceUrl: "https://www.cga.ct.gov/",
      effectiveDate: "1788-01-09",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law five-factor reasonableness test",
        "Must be reasonable in time and territory",
        "Must protect a legitimate business interest",
        "Must not be unduly burdensome to the employee",
        "Must not violate public policy",
        "Courts may blue-pencil to make reasonable"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "de-non-compete",
      jurisdiction: "de",
      title: "Non-Compete Agreement Enforceability",
      code: "Del. Code Ann.",
      section: "N/A (common law)",
      citation: "Research & Trading Corp. v. Pfuhl, No. 12527 (Del. Ch. 1992)",
      url: "https://delcode.delaware.gov/",
      sourceUrl: "https://delcode.delaware.gov/",
      effectiveDate: "1787-12-07",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must be supported by consideration (including continued employment)",
        "Must advance a legitimate economic interest of the employer",
        "Courts apply balancing test weighing employer interest against employee hardship"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "fl-non-compete",
      jurisdiction: "fl",
      title: "Restrictive Covenants in Employment",
      code: "Fla. Stat.",
      section: "§ 542.335",
      citation: "Fla. Stat. § 542.335",
      url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0542/Sections/0542.335.html",
      sourceUrl: "https://www.leg.state.fl.us/statutes/",
      effectiveDate: "1996-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable in time, area, and line of business",
        "Rebuttable presumption: 6 months or less is reasonable; more than 2 years is unreasonable (for employment)",
        "Legitimate business interests defined by statute: trade secrets, confidential information, substantial relationships with customers/patients/clients",
        "Courts must not use any defense based on undue hardship to the employee unless there is no legitimate business interest",
        "Courts may modify overbroad agreements (blue-pencil doctrine)"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ga-non-compete",
      jurisdiction: "ga",
      title: "Restrictive Covenants in Employment",
      code: "Ga. Code Ann.",
      section: "§ 13-8-50 to 13-8-59",
      citation: "Ga. Code Ann. § 13-8-50 et seq.",
      url: "https://www.legis.ga.gov/api/legislation/document/20092010/code-section/13-8-53",
      sourceUrl: "https://www.legis.ga.gov/",
      effectiveDate: "2011-11-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under 2011 Restrictive Covenants Act (authorized by constitutional amendment)",
        "Must be reasonable in time, geographic area, and scope of activity",
        "Maximum 2-year duration for employees; 3 years for sale of business; 5 years for franchise relationships",
        "Cannot restrict employees from soliciting customers they did not serve",
        "Courts may blue-pencil overbroad restrictions",
        "No geographic restriction needed if protecting trade secrets"
      ],
      penalties: undefined,
      exceptions:
        "Employees with no customer contact and no access to confidential information; independent contractors (not sales reps)"
    },
    {
      id: "hi-non-compete",
      jurisdiction: "hi",
      title: "Non-Compete Agreement Restrictions",
      code: "Haw. Rev. Stat.",
      section: "§ 480-4(d)",
      citation: "Haw. Rev. Stat. § 480-4(d)",
      url: "https://www.capitol.hawaii.gov/hrscurrent/Vol11_Ch0476-0490/HRS0480/HRS_0480-0004.htm",
      sourceUrl: "https://www.capitol.hawaii.gov/hrscurrent/",
      effectiveDate: "2015-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete agreements prohibited in the technology sector",
        "Non-competes for employees in technology businesses are void and unenforceable",
        "Other industries subject to common law reasonableness test"
      ],
      penalties: undefined,
      exceptions:
        "Non-technology-sector employees (subject to common law); sale of a business"
    },
    {
      id: "id-non-compete",
      jurisdiction: "id",
      title: "Non-Compete Agreement Enforceability",
      code: "Idaho Code",
      section: "§ 44-2701 to 44-2704",
      citation: "Idaho Code § 44-2701 et seq.",
      url: "https://legislature.idaho.gov/statutesrules/idstat/Title44/T44CH27/",
      sourceUrl: "https://legislature.idaho.gov/statutesrules/",
      effectiveDate: "2016-07-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable and protects a legitimate business interest",
        "Key employees may be subject to non-competes (defined by statute)",
        "Maximum duration of 18 months unless employee is an agent or key employee",
        "Must be supported by consideration"
      ],
      penalties: undefined,
      exceptions:
        "Employees who are not 'key employees' as defined by statute (limited protections)"
    },
    {
      id: "in-non-compete",
      jurisdiction: "in",
      title: "Non-Compete Agreement Enforceability",
      code: "Ind. Code",
      section: "N/A (common law)",
      citation: "Heraeus Med., LLC v. Zimmer, Inc., 942 N.E.2d 164 (Ind. Ct. App. 2011)",
      url: "https://iga.in.gov/laws/current/ic/",
      sourceUrl: "https://iga.in.gov/laws/current/ic/",
      effectiveDate: "1816-12-11",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must protect a legitimate business interest",
        "Consideration of continued employment is generally sufficient for existing employees",
        "Courts apply blue-pencil doctrine to reform overbroad agreements",
        "Non-competes prohibited for broadcast employees (Ind. Code § 32-36-1-1)"
      ],
      penalties: undefined,
      exceptions: "Broadcast industry employees (prohibited by statute)"
    },
    {
      id: "ia-non-compete",
      jurisdiction: "ia",
      title: "Non-Compete Agreement Enforceability",
      code: "Iowa Code",
      section: "N/A (common law)",
      citation: "Iowa Glass Depot, Inc. v. Jindrich, 338 N.W.2d 376 (Iowa 1983)",
      url: "https://www.legis.iowa.gov/law/iowaCode",
      sourceUrl: "https://www.legis.iowa.gov/law/",
      effectiveDate: "1846-12-28",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in time and territory",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil to narrow overbroad restrictions",
        "Consideration of continued employment is sufficient"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ks-non-compete",
      jurisdiction: "ks",
      title: "Non-Compete Agreement Enforceability",
      code: "Kan. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Eastern Distributing Co. v. Flynn, 567 P.2d 1371 (Kan. 1977)",
      url: "https://www.ksrevisor.org/statutes.html",
      sourceUrl: "https://www.ksrevisor.org/",
      effectiveDate: "1861-01-29",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable and necessary to protect employer's legitimate interests",
        "Must be reasonable in time and territory",
        "Must not impose undue hardship on the employee",
        "Courts generally do not blue-pencil; agreement void if overbroad"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ky-non-compete",
      jurisdiction: "ky",
      title: "Non-Compete Agreement Enforceability",
      code: "Ky. Rev. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Charles T. Creech, Inc. v. Brown, 433 S.W.3d 345 (Ky. 2014)",
      url: "https://legislature.ky.gov/law/statutes/Pages/default.aspx",
      sourceUrl: "https://legislature.ky.gov/law/statutes/",
      effectiveDate: "1792-06-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, area, and duration",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil to narrow overbroad restrictions",
        "Continued employment is sufficient consideration"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "la-non-compete",
      jurisdiction: "la",
      title: "Non-Compete Agreement Requirements",
      code: "La. Rev. Stat.",
      section: "§ 23:921",
      citation: "La. Rev. Stat. § 23:921",
      url: "https://www.legis.la.gov/legis/Law.aspx?d=83912",
      sourceUrl: "https://www.legis.la.gov/legis/",
      effectiveDate: "1934-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-competes are generally null and void unless they meet strict statutory requirements",
        "Must specify parish(es) or municipalities where enforced",
        "Maximum duration of 2 years",
        "Must be in writing",
        "Strictly construed; must precisely identify geographic scope",
        "Courts will not reform overbroad agreements"
      ],
      penalties: undefined,
      exceptions:
        "Sale of a business; agreements meeting all statutory requirements; franchise relationships"
    },
    {
      id: "mi-non-compete",
      jurisdiction: "mi",
      title: "Non-Compete Agreement Enforceability",
      code: "Mich. Comp. Laws",
      section: "§ 445.774a",
      citation: "Mich. Comp. Laws § 445.774a",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-774a",
      sourceUrl: "https://www.legislature.mi.gov/Laws/",
      effectiveDate: "1987-03-29",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-competes enforceable if reasonable",
        "Must protect a reasonable competitive business interest",
        "Must be reasonable in duration, geographic area, and type of activity",
        "Courts may reform unreasonable agreements to make them reasonable (blue-pencil)"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "ms-non-compete",
      jurisdiction: "ms",
      title: "Non-Compete Agreement Enforceability",
      code: "Miss. Code Ann.",
      section: "N/A (common law)",
      citation: "Redd Pest Control Co. v. Heatherly, 248 So. 2d 812 (Miss. 1971)",
      url: "https://law.justia.com/codes/mississippi/",
      sourceUrl: "https://www.sos.ms.gov/",
      effectiveDate: "1817-12-10",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, time, and territory",
        "Must protect a legitimate business interest",
        "Courts apply blue-pencil doctrine",
        "Consideration of continued employment is generally sufficient"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "mo-non-compete",
      jurisdiction: "mo",
      title: "Non-Compete Agreement Enforceability",
      code: "Mo. Rev. Stat.",
      section: "§ 431.202",
      citation: "Mo. Rev. Stat. § 431.202",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=431.202",
      sourceUrl: "https://revisor.mo.gov/main/",
      effectiveDate: "2020-08-28",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable in scope, geography, and duration",
        "Statute limits enforceability of non-competes against secretaries of state",
        "Common law reasonableness test governs most employment non-competes",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil overbroad terms"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "mt-non-compete",
      jurisdiction: "mt",
      title: "Non-Compete Agreement Enforceability",
      code: "Mont. Code Ann.",
      section: "§ 28-2-703 to 28-2-705",
      citation: "Mont. Code Ann. § 28-2-703",
      url: "https://leg.mt.gov/bills/mca/title_0280/chapter_0020/part_0070/section_0030/0280-0020-0070-0030.html",
      sourceUrl: "https://leg.mt.gov/bills/mca/",
      effectiveDate: "1895-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Restraint of trade contracts generally void unless falling within statutory exceptions",
        "Enforceable only if ancillary to a lawful contract and narrowly limited",
        "Must protect trade secrets or other protectable interest",
        "Courts construe restrictions narrowly"
      ],
      penalties: undefined,
      exceptions:
        "Sale of a business; partnership dissolution; limited non-solicitation of existing clients"
    },
    {
      id: "ne-non-compete",
      jurisdiction: "ne",
      title: "Non-Compete Agreement Enforceability",
      code: "Neb. Rev. Stat.",
      section: "N/A (common law)",
      citation: "Assurity Life Ins. Co. v. Sidhu, 905 N.W.2d 691 (Neb. 2018)",
      url: "https://nebraskalegislature.gov/laws/browse-statutes.php",
      sourceUrl: "https://nebraskalegislature.gov/laws/",
      effectiveDate: "1867-03-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in time and territory",
        "Must protect a legitimate business interest",
        "Nebraska does NOT blue-pencil; if any part is overbroad, the entire agreement fails",
        "Strict construction against the employer"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "nj-non-compete",
      jurisdiction: "nj",
      title: "Non-Compete Agreement Enforceability",
      code: "N.J. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Solari Industries, Inc. v. Malady, 264 A.2d 53 (N.J. 1970)",
      url: "https://www.njleg.state.nj.us/",
      sourceUrl: "https://www.njleg.state.nj.us/",
      effectiveDate: "1787-12-18",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must protect a legitimate business interest",
        "Must not impose undue hardship on employee",
        "Must not be injurious to the public",
        "Geographic and temporal restrictions must be reasonable",
        "Courts may blue-pencil to narrow overbroad agreements"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "nm-non-compete",
      jurisdiction: "nm",
      title: "Non-Compete Agreement Enforceability",
      code: "N.M. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Bowen v. Carlsbad Ins. & Real Estate, Inc., 724 P.2d 223 (N.M. 1986)",
      url: "https://www.nmlegis.gov/",
      sourceUrl: "https://www.nmlegis.gov/",
      effectiveDate: "1912-01-06",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must protect a legitimate business interest",
        "Must not be unduly burdensome to the employee",
        "Courts may reform overbroad restrictions"
      ],
      penalties: undefined,
      exceptions:
        "Non-compete prohibited for healthcare practitioners under N.M. Stat. Ann. § 24-1I-2"
    },
    {
      id: "ny-non-compete",
      jurisdiction: "ny",
      title: "Non-Compete Agreement Enforceability",
      code: "N.Y. Lab. Law",
      section: "N/A (common law)",
      citation: "BDO Seidman v. Hirshberg, 93 N.Y.2d 382 (1999)",
      url: "https://www.nysenate.gov/legislation/laws/LAB",
      sourceUrl: "https://www.nysenate.gov/legislation/laws/",
      effectiveDate: "1788-07-26",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law three-prong test",
        "Must protect a legitimate business interest (trade secrets, confidential info, unique services)",
        "Must not impose undue hardship on the employee",
        "Must not be harmful to the public",
        "Courts may partially enforce (blue-pencil) overbroad agreements",
        "Continued employment alone may not be sufficient consideration for existing employees"
      ],
      penalties: undefined,
      exceptions: "Broadcast employees (prohibited under N.Y. Lab. Law § 202-k)"
    },
    {
      id: "nc-non-compete",
      jurisdiction: "nc",
      title: "Non-Compete Agreement Enforceability",
      code: "N.C. Gen. Stat.",
      section: "§ 75-1 et seq. (common law framework)",
      citation: "United Labs., Inc. v. Kuykendall, 335 S.E.2d 9 (N.C. 1985)",
      url: "https://www.ncleg.gov/Laws/GeneralStatuteSections/Chapter75",
      sourceUrl: "https://www.ncleg.gov/Laws/",
      effectiveDate: "1789-11-21",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if reasonable in time and territory",
        "Must protect a legitimate business interest",
        "Must be in writing and supported by consideration",
        "Consideration requirement: for new employees, employment itself; for existing employees, new or additional consideration required",
        "Courts generally will NOT blue-pencil (strict blue-pencil only)"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "oh-non-compete",
      jurisdiction: "oh",
      title: "Non-Compete Agreement Enforceability",
      code: "Ohio Rev. Code",
      section: "N/A (common law)",
      citation: "Raimonde v. Van Vlerah, 325 N.E.2d 544 (Ohio 1975)",
      url: "https://codes.ohio.gov/ohio-revised-code",
      sourceUrl: "https://codes.ohio.gov/",
      effectiveDate: "1803-03-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and time",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil (modify) overbroad agreements",
        "Continued employment is generally sufficient consideration",
        "Must not impose undue hardship"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "pa-non-compete",
      jurisdiction: "pa",
      title: "Non-Compete Agreement Enforceability",
      code: "Pa. Cons. Stat.",
      section: "N/A (common law)",
      citation: "Hess v. Gebhard & Co., 808 A.2d 912 (Pa. 2002)",
      url: "https://www.legis.state.pa.us/cfdocs/legis/LI/Public/cons_index.cfm",
      sourceUrl: "https://www.legis.state.pa.us/",
      effectiveDate: "1787-12-12",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be ancillary to an employment relationship or supported by adequate consideration",
        "Must be reasonably limited in time and geographic scope",
        "Must protect a legitimate business interest",
        "Courts may blue-pencil to reform overbroad terms",
        "New consideration required for agreements entered into after employment has begun"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "sc-non-compete",
      jurisdiction: "sc",
      title: "Non-Compete Agreement Enforceability",
      code: "S.C. Code Ann.",
      section: "N/A (common law)",
      citation: "Poynter Investments, Inc. v. Century Builders of Piedmont, Inc., 387 S.C. 583 (2010)",
      url: "https://www.scstatehouse.gov/code/statmast.php",
      sourceUrl: "https://www.scstatehouse.gov/code/",
      effectiveDate: "1788-05-23",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test; disfavored but permitted",
        "Must be necessary for protection of legitimate business interest",
        "Must be reasonably limited in time and geographic area",
        "Must be reasonable as to both employer and employee",
        "Must not violate public policy",
        "Courts strictly construe and may blue-pencil"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "sd-non-compete",
      jurisdiction: "sd",
      title: "Non-Compete Agreement Enforceability",
      code: "S.D. Codified Laws",
      section: "§ 53-9-8 to 53-9-12",
      citation: "S.D. Codified Laws § 53-9-8 et seq.",
      url: "https://sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute=53-9-8",
      sourceUrl: "https://sdlegislature.gov/Statutes/",
      effectiveDate: "1899-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-competes enforceable only within statutory framework",
        "Employee may agree not to engage in same type of business within a specified area for up to 2 years",
        "Must be limited to a specific geographic area",
        "Must be reasonable and limited to 2-year maximum"
      ],
      penalties: undefined,
      exceptions:
        "Sale of a business (broader restrictions allowed)"
    },
    {
      id: "tn-non-compete",
      jurisdiction: "tn",
      title: "Non-Compete Agreement Enforceability",
      code: "Tenn. Code Ann.",
      section: "N/A (common law)",
      citation: "Murfreesboro Med. Clinic, P.A. v. Udom, 166 S.W.3d 674 (Tenn. 2005)",
      url: "https://www.tn.gov/content/tn/lawsandregs.html",
      sourceUrl: "https://www.tn.gov/",
      effectiveDate: "1796-06-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in time, territory, and scope of activity",
        "Must protect a legitimate business interest",
        "Must be supported by consideration",
        "Courts may blue-pencil overbroad restrictions",
        "Continued employment is sufficient consideration"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "tx-non-compete",
      jurisdiction: "tx",
      title: "Covenants Not to Compete",
      code: "Tex. Bus. & Com. Code",
      section: "§ 15.50–15.52",
      citation: "Tex. Bus. & Com. Code § 15.50",
      url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.15.htm",
      sourceUrl: "https://statutes.capitol.texas.gov/",
      effectiveDate: "1989-09-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable if ancillary to an otherwise enforceable agreement and reasonable",
        "Must include consideration: access to trade secrets, confidential information, or specialized training",
        "Must be reasonable in scope, geography, and duration",
        "Courts must reform overbroad agreements to make them enforceable (mandatory reformation)",
        "Special provisions for physicians: must allow buyout; must permit continuation of care for patients with acute conditions"
      ],
      penalties: undefined,
      exceptions:
        "Physicians have additional protections (buyout right, patient continuity)"
    },
    {
      id: "ut-non-compete",
      jurisdiction: "ut",
      title: "Post-Employment Restrictions Act",
      code: "Utah Code Ann.",
      section: "§ 34-51-101 to 34-51-301",
      citation: "Utah Code Ann. § 34-51-201",
      url: "https://le.utah.gov/xcode/Title34/Chapter51/34-51.html",
      sourceUrl: "https://le.utah.gov/xcode/",
      effectiveDate: "2016-05-10",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Maximum enforceable duration of 1 year post-termination",
        "Agreements exceeding 1 year are void as to the excess period",
        "Must be supported by consideration",
        "Must protect a legitimate business interest",
        "Courts apply common law reasonableness to other terms (geography, scope)"
      ],
      penalties: undefined,
      exceptions:
        "Sale of a business (not subject to 1-year limit); broadcasting employees (non-competes prohibited)"
    },
    {
      id: "vt-non-compete",
      jurisdiction: "vt",
      title: "Non-Compete Agreement Enforceability",
      code: "Vt. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Gardiner, Conn. & Wright, P.C. v. Batt (Vt. Super. Ct. 2017)",
      url: "https://legislature.vermont.gov/statutes/",
      sourceUrl: "https://legislature.vermont.gov/statutes/",
      effectiveDate: "1791-03-04",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must protect a legitimate business interest",
        "Must be supported by consideration",
        "Courts may blue-pencil overbroad restrictions"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "wv-non-compete",
      jurisdiction: "wv",
      title: "Non-Compete Agreement Enforceability",
      code: "W. Va. Code",
      section: "N/A (common law)",
      citation: "Weimer v. Lex, 709 S.E.2d 862 (W. Va. 2011)",
      url: "https://www.wvlegislature.gov/wvcode/code.cfm",
      sourceUrl: "https://www.wvlegislature.gov/wvcode/",
      effectiveDate: "1863-06-20",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be reasonable in scope, geography, and duration",
        "Must protect a legitimate business interest",
        "Courts strictly construe against the employer",
        "Must not be oppressive to the employee"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "wi-non-compete",
      jurisdiction: "wi",
      title: "Non-Compete Agreement Enforceability",
      code: "Wis. Stat.",
      section: "§ 103.465",
      citation: "Wis. Stat. § 103.465",
      url: "https://docs.legis.wisconsin.gov/statutes/statutes/103/465",
      sourceUrl: "https://docs.legis.wisconsin.gov/statutes/",
      effectiveDate: "1957-01-01",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Non-compete enforceable only if reasonably necessary for the protection of the employer",
        "Must impose reasonable limitations on time and territory",
        "Must not be unreasonably harsh or oppressive to the employee",
        "Courts will NOT blue-pencil; if any part is unreasonable, the entire agreement fails",
        "Must be supported by consideration"
      ],
      penalties: undefined,
      exceptions: undefined
    },
    {
      id: "wy-non-compete",
      jurisdiction: "wy",
      title: "Non-Compete Agreement Enforceability",
      code: "Wyo. Stat. Ann.",
      section: "N/A (common law)",
      citation: "Hopper v. All Pet Animal Clinic, Inc., 861 P.2d 531 (Wyo. 1993)",
      url: "https://wyoleg.gov/statutes",
      sourceUrl: "https://wyoleg.gov/",
      effectiveDate: "1890-07-10",
      lastVerified: "2026-11-15",
      topics: ["non-compete", "employment"],
      keyProvisions: [
        "Enforceable under common law reasonableness test",
        "Must be in writing and part of a contract supported by consideration",
        "Must protect a legitimate business interest",
        "Must be reasonable in duration and geographic scope",
        "Courts apply a balancing test weighing employer need vs. employee hardship vs. public interest"
      ],
      penalties: undefined,
      exceptions: undefined
    },
  ],
};
