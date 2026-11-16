import { TopicDataFile } from "../loader";

export const securityDeposits: TopicDataFile = {
  topic: "security-deposits",
  description:
    "State laws governing security deposit limits, return deadlines, and landlord obligations",
  federalBaseline: null,
  entries: [
    // Alabama
    {
      id: "al-security-deposits",
      jurisdiction: "al",
      title: "Alabama Security Deposit Law",
      code: "Ala. Code",
      section: "35-9A-201",
      citation: "Ala. Code § 35-9A-201",
      url: "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/Coatoc.htm",
      sourceUrl:
        "https://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/Coatoc.htm",
      effectiveDate: "2006-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 60 days after termination and delivery of possession",
        "Landlord must provide itemized statement of deductions",
        "Deposit must be held in a separate account in an Alabama bank",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld plus reasonable attorney fees",
      exceptions:
        "Does not apply to occupancy under a rental agreement covering premises used by the tenant primarily for agricultural purposes",
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 60,
          unit: "days",
          description: "Deadline to return security deposit after termination",
        },
      ],
    },

    // Alaska
    {
      id: "ak-security-deposits",
      jurisdiction: "ak",
      title: "Alaska Security Deposit Law",
      code: "Alaska Stat.",
      section: "34.03.070",
      citation: "Alaska Stat. § 34.03.070",
      url: "https://www.akleg.gov/basis/statutes.asp#34.03.070",
      sourceUrl: "https://www.akleg.gov/basis/statutes.asp#34.03.070",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent unless monthly rent exceeds $2,000",
        "Landlord must return deposit within 14 days if tenant gives proper notice, 30 days otherwise",
        "Landlord must provide written itemized accounting of deductions",
        "Deposit must be held in a trust account or surety bond",
      ],
      penalties:
        "Landlord who fails to comply may be liable for double the amount of the deposit",
      exceptions:
        "If rent exceeds $2,000 per month, no statutory cap on deposit amount",
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description:
            "Maximum security deposit when monthly rent is $2,000 or less",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description:
            "Deadline to return deposit when tenant gives proper notice",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit when tenant does not give proper notice",
        },
      ],
    },

    // Arizona
    {
      id: "az-security-deposits",
      jurisdiction: "az",
      title: "Arizona Security Deposit Law",
      code: "Ariz. Rev. Stat.",
      section: "33-1321",
      citation: "Ariz. Rev. Stat. § 33-1321",
      url: "https://www.azleg.gov/ars/33/01321.htm",
      sourceUrl: "https://www.azleg.gov/ars/33/01321.htm",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one and one-half months' rent",
        "Landlord must return deposit within 14 business days after termination and delivery of possession",
        "Landlord must provide itemized statement of deductions",
        "Prepaid rent is not a security deposit",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1.5,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description:
            "Deadline to return deposit (14 business days) after termination",
        },
      ],
    },

    // Arkansas
    {
      id: "ar-security-deposits",
      jurisdiction: "ar",
      title: "Arkansas Security Deposit Law",
      code: "Ark. Code Ann.",
      section: "18-16-304",
      citation: "Ark. Code Ann. § 18-16-304",
      url: "https://www.arkleg.state.ar.us/Acts/FTSDocument?id=18-16-304&title=18&subtitle=16",
      sourceUrl:
        "https://www.arkleg.state.ar.us/Acts/FTSDocument?id=18-16-304&title=18&subtitle=16",
      effectiveDate: "2019-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 60 days after termination",
        "Landlord must provide itemized list of damages and charges",
        "Deposit may be applied to unpaid rent, damages, or cleaning",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the amount plus reasonable attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 60,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // California
    {
      id: "ca-security-deposits",
      jurisdiction: "ca",
      title: "California Security Deposit Law",
      code: "Cal. Civ. Code",
      section: "1950.5",
      citation: "Cal. Civ. Code § 1950.5",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV",
      sourceUrl:
        "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV",
      effectiveDate: "2024-07-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent (effective July 1, 2024, for most landlords)",
        "Landlord must return deposit within 21 days after tenant vacates",
        "Landlord must provide itemized statement of deductions with receipts",
        "No interest required unless required by local ordinance",
      ],
      penalties:
        "Landlord who retains deposit in bad faith may be liable for up to twice the deposit amount plus actual damages",
      exceptions:
        "Small landlords (owning no more than 2 residential properties with no more than 4 units total) may charge up to 2 months' rent until July 1, 2025",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit for most landlords (effective July 1, 2024)",
        },
        {
          type: "duration",
          amount: 21,
          unit: "days",
          description: "Deadline to return deposit after tenant vacates",
        },
      ],
    },

    // Colorado
    {
      id: "co-security-deposits",
      jurisdiction: "co",
      title: "Colorado Security Deposit Law",
      code: "Colo. Rev. Stat.",
      section: "38-12-103",
      citation: "Colo. Rev. Stat. § 38-12-103",
      url: "https://leg.colorado.gov/colorado-revised-statutes",
      sourceUrl: "https://leg.colorado.gov/colorado-revised-statutes",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount (parties may agree)",
        "Landlord must return deposit within 60 days after lease termination (or 72 hours if emergency or hazardous condition)",
        "Landlord must provide written itemized statement of deductions",
        "Tenant may request inspection before move-out",
      ],
      penalties:
        "Landlord who willfully retains deposit may be liable for treble the amount wrongfully withheld plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 60,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Connecticut
    {
      id: "ct-security-deposits",
      jurisdiction: "ct",
      title: "Connecticut Security Deposit Law",
      code: "Conn. Gen. Stat.",
      section: "47a-21",
      citation: "Conn. Gen. Stat. § 47a-21",
      url: "https://www.cga.ct.gov/current/pub/chap_831.htm#sec_47a-21",
      sourceUrl:
        "https://www.cga.ct.gov/current/pub/chap_831.htm#sec_47a-21",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 30 days after termination or 15 days after receiving forwarding address, whichever is later",
        "Landlord must pay interest on deposit annually",
        "Landlord must provide itemized statement of deductions",
      ],
      penalties:
        "Landlord who fails to return deposit within required time is liable for double the deposit amount",
      exceptions:
        "Tenants age 62 or older: deposit limited to one month's rent",
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description:
            "Maximum security deposit (1 month for tenants 62 or older)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit after termination or 15 days after receiving forwarding address",
        },
      ],
    },

    // Delaware
    {
      id: "de-security-deposits",
      jurisdiction: "de",
      title: "Delaware Security Deposit Law",
      code: "Del. Code Ann. tit. 25",
      section: "5514",
      citation: "Del. Code Ann. tit. 25, § 5514",
      url: "https://delcode.delaware.gov/title25/c055/sc02/index.html",
      sourceUrl: "https://delcode.delaware.gov/title25/c055/sc02/index.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent for leases of one year or more",
        "Landlord must return deposit within 20 days after termination",
        "Landlord must hold deposit in escrow at a federally insured institution",
        "Landlord must provide itemized list of damages within 20 days",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount plus attorney fees",
      exceptions:
        "No pet deposit limit specified separately; month-to-month tenancies may have no limit on first year",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit for leases of one year or more",
        },
        {
          type: "duration",
          amount: 20,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Florida
    {
      id: "fl-security-deposits",
      jurisdiction: "fl",
      title: "Florida Security Deposit Law",
      code: "Fla. Stat.",
      section: "83.49",
      citation: "Fla. Stat. § 83.49",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.49.html",
      sourceUrl:
        "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.49.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 15 days if no claim, or 30 days with itemized claim by certified mail",
        "Landlord must notify tenant in writing within 30 days of receipt of deposit where it is held",
        "Deposit may be held in interest-bearing or non-interest-bearing account, or surety bond",
      ],
      penalties:
        "Landlord who fails to give required notice forfeits right to impose claim on deposit",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 15,
          unit: "days",
          description:
            "Deadline to return deposit if no claim against it; 30 days if landlord intends to impose a claim",
        },
      ],
    },

    // Georgia
    {
      id: "ga-security-deposits",
      jurisdiction: "ga",
      title: "Georgia Security Deposit Law",
      code: "Ga. Code Ann.",
      section: "44-7-30",
      citation: "Ga. Code Ann. § 44-7-30 et seq.",
      url: "https://www.legis.ga.gov/api/legislation/document/20212022/201472",
      sourceUrl: "https://www.legis.ga.gov/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after tenant vacates",
        "Landlord must provide written statement of damages within 3 business days of inspection",
        "Landlord must place deposit in an escrow account and provide tenant with account details",
      ],
      penalties:
        "Landlord who fails to comply is liable for three times the retained amount plus attorney fees",
      exceptions:
        "Exemptions for landlords who own 10 or fewer units (not required to use escrow account or provide written list of existing damage at move-in, but still must return deposit timely)",
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after tenant vacates",
        },
      ],
    },

    // Hawaii
    {
      id: "hi-security-deposits",
      jurisdiction: "hi",
      title: "Hawaii Security Deposit Law",
      code: "Haw. Rev. Stat.",
      section: "521-44",
      citation: "Haw. Rev. Stat. § 521-44",
      url: "https://www.capitol.hawaii.gov/hrscurrent/Vol12_Ch0501-0588/HRS0521/HRS_0521-0044.htm",
      sourceUrl:
        "https://www.capitol.hawaii.gov/hrscurrent/Vol12_Ch0501-0588/HRS0521/HRS_0521-0044.htm",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent",
        "Landlord must return deposit within 14 days after termination and delivery of possession",
        "Landlord must provide written itemized list of deductions",
        "Landlord may not require both last month's rent and security deposit exceeding one month total",
      ],
      penalties:
        "Landlord who fails to return deposit or provide statement within 14 days is liable for three times the amount wrongfully retained plus costs and attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Idaho
    {
      id: "id-security-deposits",
      jurisdiction: "id",
      title: "Idaho Security Deposit Law",
      code: "Idaho Code",
      section: "6-321",
      citation: "Idaho Code § 6-321",
      url: "https://legislature.idaho.gov/statutesrules/idstat/Title6/T6CH3/SECT6-321/",
      sourceUrl:
        "https://legislature.idaho.gov/statutesrules/idstat/Title6/T6CH3/SECT6-321/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 21 days after surrender of premises, or up to 30 days if stated in lease",
        "Landlord must provide itemized statement of deductions",
        "Deposit may be used for unpaid rent, damages beyond normal wear and tear, and cleaning",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit may be liable for treble damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 21,
          unit: "days",
          description:
            "Deadline to return deposit (up to 30 days if stated in lease)",
        },
      ],
    },

    // Illinois
    {
      id: "il-security-deposits",
      jurisdiction: "il",
      title: "Illinois Security Deposit Law",
      code: "765 Ill. Comp. Stat.",
      section: "710/1",
      citation: "765 Ill. Comp. Stat. 710/1",
      url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2202&ChapterID=62",
      sourceUrl:
        "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2202&ChapterID=62",
      effectiveDate: "2022-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount (Chicago has local limits of 1.5 months)",
        "Landlord must return deposit within 30 days if no deductions, or 30 days with itemized statement",
        "Landlord of 25+ units must pay interest on deposits held more than 6 months",
        "Landlord must provide itemized statement of damages within 30 days",
      ],
      penalties:
        "Landlord who fails to comply is liable for an amount equal to two times the security deposit plus attorney fees",
      exceptions:
        "Properties with fewer than 5 units where owner resides in one unit are exempt from Security Deposit Return Act",
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description:
            "No statutory limit on security deposit amount statewide",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit or provide itemized statement",
        },
      ],
    },

    // Indiana
    {
      id: "in-security-deposits",
      jurisdiction: "in",
      title: "Indiana Security Deposit Law",
      code: "Ind. Code",
      section: "32-31-3-12",
      citation: "Ind. Code § 32-31-3-12",
      url: "https://iga.in.gov/laws/2024/ic/titles/32#32-31-3",
      sourceUrl: "https://iga.in.gov/laws/2024/ic/titles/32#32-31-3",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must provide itemized list of damages if deductions made",
        "Tenant must provide forwarding address in writing to receive deposit",
      ],
      penalties:
        "Landlord who fails to return deposit or provide statement is liable for the amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Iowa
    {
      id: "ia-security-deposits",
      jurisdiction: "ia",
      title: "Iowa Security Deposit Law",
      code: "Iowa Code",
      section: "562A.12",
      citation: "Iowa Code § 562A.12",
      url: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=562A&session=90",
      sourceUrl:
        "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=562A&session=90",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written statement of damages and estimated costs",
        "Deposit must be held in a bank or savings institution",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for up to double the amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Kansas
    {
      id: "ks-security-deposits",
      jurisdiction: "ks",
      title: "Kansas Security Deposit Law",
      code: "Kan. Stat. Ann.",
      section: "58-2550",
      citation: "Kan. Stat. Ann. § 58-2550",
      url: "https://www.ksrevisor.org/statutes/chapters/ch58/058_025_0050.html",
      sourceUrl:
        "https://www.ksrevisor.org/statutes/chapters/ch58/058_025_0050.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent for unfurnished, one and one-half months for furnished",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written itemized list of deductions",
        "Pet deposit may not exceed one-half month's rent additional",
      ],
      penalties:
        "Landlord who fails to return deposit or provide itemization is liable for one and one-half times the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit for unfurnished unit (1.5 months for furnished)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Kentucky
    {
      id: "ky-security-deposits",
      jurisdiction: "ky",
      title: "Kentucky Security Deposit Law",
      code: "Ky. Rev. Stat. Ann.",
      section: "383.580",
      citation: "Ky. Rev. Stat. Ann. § 383.580",
      url: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=35756",
      sourceUrl:
        "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=35756",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination and delivery of possession (60 days for itemized list)",
        "Landlord must place deposit in a federally insured institution and notify tenant of location",
        "Landlord must provide itemized statement of damages within 30 days",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the full deposit amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit (60 days for itemized statement if deductions made)",
        },
      ],
    },

    // Louisiana
    {
      id: "la-security-deposits",
      jurisdiction: "la",
      title: "Louisiana Security Deposit Law",
      code: "La. Rev. Stat. Ann.",
      section: "9:3251",
      citation: "La. Rev. Stat. Ann. § 9:3251",
      url: "https://www.legis.la.gov/legis/Law.aspx?d=109340",
      sourceUrl: "https://www.legis.la.gov/legis/Law.aspx?d=109340",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after lease termination and receipt of forwarding address",
        "Landlord must provide itemized statement of deductions",
        "Deposit may be applied to unpaid rent, damages, and other authorized charges",
      ],
      penalties:
        "Landlord who fails to return deposit or provide itemization is liable for actual damages or $200, whichever is greater, plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit after termination and receipt of forwarding address",
        },
      ],
    },

    // Maine
    {
      id: "me-security-deposits",
      jurisdiction: "me",
      title: "Maine Security Deposit Law",
      code: "Me. Rev. Stat. Ann. tit. 14",
      section: "6031",
      citation: "Me. Rev. Stat. Ann. tit. 14, § 6031",
      url: "https://legislature.maine.gov/statutes/14/title14sec6031.html",
      sourceUrl:
        "https://legislature.maine.gov/statutes/14/title14sec6031.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 30 days after termination (21 days if written lease requires)",
        "Landlord must provide written statement of any damage claimed",
        "Landlord must hold deposit in a separate account and notify tenant of institution name",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld plus attorney fees and court costs",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit after termination (21 days if lease specifies)",
        },
      ],
    },

    // Maryland
    {
      id: "md-security-deposits",
      jurisdiction: "md",
      title: "Maryland Security Deposit Law",
      code: "Md. Code Ann., Real Prop.",
      section: "8-203",
      citation: "Md. Code Ann., Real Prop. § 8-203",
      url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=grp&section=8-203",
      sourceUrl:
        "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=grp&section=8-203",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must provide written itemized list of damages with receipts within 45 days",
        "Landlord must hold deposit in a Maryland financial institution and pay interest on deposits held more than 6 months",
      ],
      penalties:
        "Landlord who fails to comply is liable for up to three times the security deposit plus reasonable attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description:
            "Deadline to return deposit after termination",
        },
      ],
    },

    // Massachusetts
    {
      id: "ma-security-deposits",
      jurisdiction: "ma",
      title: "Massachusetts Security Deposit Law",
      code: "Mass. Gen. Laws",
      section: "ch. 186, § 15B",
      citation: "Mass. Gen. Laws ch. 186, § 15B",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartII/TitleI/Chapter186/Section15B",
      sourceUrl:
        "https://malegislature.gov/Laws/GeneralLaws/PartII/TitleI/Chapter186/Section15B",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must pay 5% annual interest on deposit or actual interest earned",
        "Landlord must provide written itemized statement of damages with sworn statement",
      ],
      penalties:
        "Landlord who fails to comply forfeits right to retain any portion of the deposit and must return it in full with treble damages plus 5% interest and attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Michigan
    {
      id: "mi-security-deposits",
      jurisdiction: "mi",
      title: "Michigan Security Deposit Law",
      code: "Mich. Comp. Laws",
      section: "554.602",
      citation: "Mich. Comp. Laws § 554.602 et seq.",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=MCL-554-602",
      sourceUrl:
        "https://www.legislature.mi.gov/Laws/MCL?objectName=MCL-554-602",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one and one-half months' rent",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide itemized list of damages within 30 days",
        "Deposit must be held in a regulated financial institution",
      ],
      penalties:
        "Landlord who fails to itemize deductions within 30 days is liable for double the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1.5,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Minnesota
    {
      id: "mn-security-deposits",
      jurisdiction: "mn",
      title: "Minnesota Security Deposit Law",
      code: "Minn. Stat.",
      section: "504B.178",
      citation: "Minn. Stat. § 504B.178",
      url: "https://www.revisor.mn.gov/statutes/cite/504B.178",
      sourceUrl: "https://www.revisor.mn.gov/statutes/cite/504B.178",
      effectiveDate: "2024-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 21 days after termination",
        "Landlord must provide written statement of reasons for withholding",
        "Interest must be paid on deposit at a rate of 1% simple interest per year (for deposits held 5+ months in Minneapolis)",
      ],
      penalties:
        "Landlord who fails to return deposit or provide statement is liable for the amount wrongfully withheld plus a penalty of up to $500",
      exceptions:
        "If tenant owes rent, landlord may deduct from deposit without providing itemization beyond the rent amount",
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 21,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Mississippi
    {
      id: "ms-security-deposits",
      jurisdiction: "ms",
      title: "Mississippi Security Deposit Law",
      code: "Miss. Code Ann.",
      section: "89-8-21",
      citation: "Miss. Code Ann. § 89-8-21",
      url: "https://law.justia.com/codes/mississippi/title-89/chapter-8/",
      sourceUrl: "https://www.legislature.ms.gov/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must provide itemized written statement of damages",
        "Deposit may be applied to unpaid rent and damages beyond normal wear and tear",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the amount withheld plus reasonable attorney fees and up to $200 in punitive damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Missouri
    {
      id: "mo-security-deposits",
      jurisdiction: "mo",
      title: "Missouri Security Deposit Law",
      code: "Mo. Rev. Stat.",
      section: "535.300",
      citation: "Mo. Rev. Stat. § 535.300",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=535.300",
      sourceUrl:
        "https://revisor.mo.gov/main/OneSection.aspx?section=535.300",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 30 days after termination and delivery of possession",
        "Landlord must provide itemized list of deductions",
        "Deposit may be used for unpaid rent, damages, and utilities",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Montana
    {
      id: "mt-security-deposits",
      jurisdiction: "mt",
      title: "Montana Security Deposit Law",
      code: "Mont. Code Ann.",
      section: "70-25-201",
      citation: "Mont. Code Ann. § 70-25-201",
      url: "https://leg.mt.gov/bills/mca/title_0700/chapter_0250/part_0020/section_0010/0700-0250-0020-0010.html",
      sourceUrl:
        "https://leg.mt.gov/bills/mca/title_0700/chapter_0250/part_0020/section_0010/0700-0250-0020-0010.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination (10 days if no deductions)",
        "Landlord must provide written itemized statement of deductions",
        "Deposit may be applied to rent owed, damages, and cleaning",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit may be liable for the amount wrongfully withheld plus damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit after termination (10 days if no deductions)",
        },
      ],
    },

    // Nebraska
    {
      id: "ne-security-deposits",
      jurisdiction: "ne",
      title: "Nebraska Security Deposit Law",
      code: "Neb. Rev. Stat.",
      section: "76-1416",
      citation: "Neb. Rev. Stat. § 76-1416",
      url: "https://nebraskalegislature.gov/laws/statutes.php?statute=76-1416",
      sourceUrl:
        "https://nebraskalegislature.gov/laws/statutes.php?statute=76-1416",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent (no pets) or one and one-quarter months with pets",
        "Landlord must return deposit within 14 days after termination",
        "Landlord must provide written itemized statement of deductions",
        "Deposit must be deposited in a federally insured institution",
      ],
      penalties:
        "Landlord who fails to comply forfeits right to withhold any portion and must return full amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit (1.25 months if pet deposit included)",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Nevada
    {
      id: "nv-security-deposits",
      jurisdiction: "nv",
      title: "Nevada Security Deposit Law",
      code: "Nev. Rev. Stat.",
      section: "118A.242",
      citation: "Nev. Rev. Stat. § 118A.242",
      url: "https://www.leg.state.nv.us/nrs/NRS-118A.html#NRS118ASec242",
      sourceUrl:
        "https://www.leg.state.nv.us/nrs/NRS-118A.html#NRS118ASec242",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed three months' rent",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written itemized accounting of deductions",
        "Deposit may be used for unpaid rent, damages, and cleaning",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the full amount of the deposit",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 3,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // New Hampshire
    {
      id: "nh-security-deposits",
      jurisdiction: "nh",
      title: "New Hampshire Security Deposit Law",
      code: "N.H. Rev. Stat. Ann.",
      section: "540-A:6",
      citation: "N.H. Rev. Stat. Ann. § 540-A:6",
      url: "https://www.gencourt.state.nh.us/rsa/html/LV/540-A/540-A-6.htm",
      sourceUrl:
        "https://www.gencourt.state.nh.us/rsa/html/LV/540-A/540-A-6.htm",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent or $100, whichever is greater",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide itemized list of damages with written statement",
        "No interest payment required",
      ],
      penalties:
        "Landlord who fails to return deposit or provide itemization forfeits right to withhold any portion",
      exceptions:
        "Shared facilities where landlord resides are exempt from the deposit limit",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit (one month's rent or $100, whichever is greater)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // New Jersey
    {
      id: "nj-security-deposits",
      jurisdiction: "nj",
      title: "New Jersey Security Deposit Law",
      code: "N.J. Stat. Ann.",
      section: "46:8-19",
      citation: "N.J. Stat. Ann. § 46:8-19",
      url: "https://www.njleg.state.nj.us/",
      sourceUrl: "https://www.njleg.state.nj.us/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one and one-half months' rent",
        "Landlord must return deposit within 30 days after termination (5 days for fire, flood, or condemnation)",
        "Landlord must pay annual interest on deposit or invest in approved account",
        "Landlord must provide written receipt with bank name and interest rate",
      ],
      penalties:
        "Landlord who fails to provide proper notice or accounting may be liable for double the deposit amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1.5,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // New Mexico
    {
      id: "nm-security-deposits",
      jurisdiction: "nm",
      title: "New Mexico Security Deposit Law",
      code: "N.M. Stat. Ann.",
      section: "47-8-18",
      citation: "N.M. Stat. Ann. § 47-8-18",
      url: "https://nmonesource.com/nmos/nmsa/en/nav_date.do",
      sourceUrl: "https://nmonesource.com/nmos/nmsa/en/nav_date.do",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent for leases under one year; no limit for longer terms",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written itemized statement of deductions",
        "Deposit must be deposited in an insured interest-bearing account in New Mexico",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit or fails to provide itemization is liable for the full deposit amount plus damages",
      exceptions:
        "Leases of one year or more may have a higher deposit (no statutory cap)",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit for leases under one year",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // New York
    {
      id: "ny-security-deposits",
      jurisdiction: "ny",
      title: "New York Security Deposit Law",
      code: "N.Y. Gen. Oblig. Law",
      section: "7-108",
      citation: "N.Y. Gen. Oblig. Law § 7-108",
      url: "https://www.nysenate.gov/legislation/laws/GOB/7-108",
      sourceUrl: "https://www.nysenate.gov/legislation/laws/GOB/7-108",
      effectiveDate: "2019-06-14",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent (effective June 2019, Housing Stability and Tenant Protection Act)",
        "Landlord must return deposit within 14 days after tenant vacates",
        "Landlord must provide itemized statement of deductions",
        "Deposit must be held in an interest-bearing account; tenant receives interest minus 1% administrative fee",
      ],
      penalties:
        "Landlord who fails to return deposit or provide statement may be liable for punitive damages up to twice the deposit amount",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description: "Deadline to return deposit after tenant vacates",
        },
      ],
    },

    // North Carolina
    {
      id: "nc-security-deposits",
      jurisdiction: "nc",
      title: "North Carolina Security Deposit Law",
      code: "N.C. Gen. Stat.",
      section: "42-51",
      citation: "N.C. Gen. Stat. § 42-51",
      url: "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-51.html",
      sourceUrl:
        "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-51.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent for month-to-month, one and one-half months for terms longer than month-to-month but less than one year, two months for leases of a year or more",
        "Landlord must return deposit within 30 days after termination (may extend to 60 days for itemized accounting of damages)",
        "Landlord must hold deposit in a trust account at a licensed financial institution",
        "Landlord must notify tenant of the name and address of the bank where deposit is held",
      ],
      penalties:
        "Landlord who fails to account for deposit or return it timely may be subject to attorney fees awarded to tenant",
      exceptions:
        "Pet deposits are allowed but included in the overall deposit limits",
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description:
            "Maximum security deposit (varies by lease term: 1.5 months for terms longer than month-to-month but under 1 year; 2 months for month-to-month or 1 year+)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // North Dakota
    {
      id: "nd-security-deposits",
      jurisdiction: "nd",
      title: "North Dakota Security Deposit Law",
      code: "N.D. Cent. Code",
      section: "47-16-07.1",
      citation: "N.D. Cent. Code § 47-16-07.1",
      url: "https://www.ndlegis.gov/cencode/t47c16.pdf",
      sourceUrl: "https://www.ndlegis.gov/cencode/t47c16.pdf",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent (or amount of pet damage deposit, whichever applies)",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written, itemized statement of deductions",
        "Deposit may be used for unpaid rent, damages, and cleaning costs",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for treble the amount wrongfully retained",
      exceptions:
        "Landlord may collect additional pet damage deposit; combined deposit (rent security + pet) may not exceed two months' rent",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit (2 months including pet deposit)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Ohio
    {
      id: "oh-security-deposits",
      jurisdiction: "oh",
      title: "Ohio Security Deposit Law",
      code: "Ohio Rev. Code Ann.",
      section: "5321.16",
      citation: "Ohio Rev. Code Ann. § 5321.16",
      url: "https://codes.ohio.gov/ohio-revised-code/section-5321.16",
      sourceUrl:
        "https://codes.ohio.gov/ohio-revised-code/section-5321.16",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination and receipt of forwarding address",
        "Landlord must provide itemized written statement of deductions",
        "Deposits exceeding one month's rent or $50 (whichever is greater) must earn interest at 5% per annum if held for 6+ months",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount withheld plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Oklahoma
    {
      id: "ok-security-deposits",
      jurisdiction: "ok",
      title: "Oklahoma Security Deposit Law",
      code: "Okla. Stat. tit. 41",
      section: "115",
      citation: "Okla. Stat. tit. 41, § 115",
      url: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=440026",
      sourceUrl:
        "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=440026",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must provide written itemized statement of deductions",
        "Tenant must provide written notice of forwarding address",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Oregon
    {
      id: "or-security-deposits",
      jurisdiction: "or",
      title: "Oregon Security Deposit Law",
      code: "Or. Rev. Stat.",
      section: "90.300",
      citation: "Or. Rev. Stat. § 90.300",
      url: "https://www.oregonlegislature.gov/bills_laws/ors/ors090.html",
      sourceUrl:
        "https://www.oregonlegislature.gov/bills_laws/ors/ors090.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 31 days after termination and delivery of possession",
        "Landlord must provide written accounting of deductions with documentation",
        "Landlord must conduct a move-in and move-out inspection",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit or fails to provide accounting is liable for twice the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 31,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Pennsylvania
    {
      id: "pa-security-deposits",
      jurisdiction: "pa",
      title: "Pennsylvania Security Deposit Law",
      code: "68 Pa. Stat. Ann.",
      section: "250.511a",
      citation: "68 Pa. Stat. Ann. § 250.511a",
      url: "https://www.legis.state.pa.us/",
      sourceUrl: "https://www.legis.state.pa.us/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit limited to two months' rent for first year, one month thereafter",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written list of damages within 30 days",
        "Deposit exceeding $100 held for 2+ years must be placed in interest-bearing escrow account; interest belongs to tenant minus 1%",
      ],
      penalties:
        "Landlord who fails to return deposit or provide itemization is liable for double the amount of the deposit",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description:
            "Maximum security deposit in first year of lease (1 month after first year)",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Rhode Island
    {
      id: "ri-security-deposits",
      jurisdiction: "ri",
      title: "Rhode Island Security Deposit Law",
      code: "R.I. Gen. Laws",
      section: "34-18-19",
      citation: "R.I. Gen. Laws § 34-18-19",
      url: "https://webserver.rilegislature.gov/Statutes/TITLE34/34-18/34-18-19.htm",
      sourceUrl:
        "https://webserver.rilegislature.gov/Statutes/TITLE34/34-18/34-18-19.htm",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent",
        "Landlord must return deposit within 20 days after termination",
        "Landlord must provide itemized statement of deductions",
        "No interest required on deposits",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 20,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // South Carolina
    {
      id: "sc-security-deposits",
      jurisdiction: "sc",
      title: "South Carolina Security Deposit Law",
      code: "S.C. Code Ann.",
      section: "27-40-410",
      citation: "S.C. Code Ann. § 27-40-410",
      url: "https://www.scstatehouse.gov/code/t27c040.php",
      sourceUrl: "https://www.scstatehouse.gov/code/t27c040.php",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination and delivery of possession",
        "Landlord must provide itemized statement of damages",
        "Deposit may be used for unpaid rent and damages beyond normal wear and tear",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for up to three times the amount wrongfully withheld plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // South Dakota
    {
      id: "sd-security-deposits",
      jurisdiction: "sd",
      title: "South Dakota Security Deposit Law",
      code: "S.D. Codified Laws",
      section: "43-32-6.1",
      citation: "S.D. Codified Laws § 43-32-6.1",
      url: "https://sdlegislature.gov/Statutes/43-32",
      sourceUrl: "https://sdlegislature.gov/Statutes/43-32",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent (unless special conditions warranting higher deposit exist)",
        "Landlord must return deposit within 14 days after termination (or 45 days with written extension)",
        "Landlord must provide itemized written statement of deductions",
        "No interest required on deposits",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully retained plus attorney fees",
      exceptions:
        "Landlord may require higher deposit if tenant has a pet or special conditions exist that reasonably justify a larger deposit",
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description:
            "Maximum security deposit (may be higher under special conditions)",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description:
            "Deadline to return deposit (up to 45 days with written extension)",
        },
      ],
    },

    // Tennessee
    {
      id: "tn-security-deposits",
      jurisdiction: "tn",
      title: "Tennessee Security Deposit Law",
      code: "Tenn. Code Ann.",
      section: "66-28-301",
      citation: "Tenn. Code Ann. § 66-28-301",
      url: "https://www.tn.gov/content/dam/tn/health/documents/uniform-residential-landlord-tenant-act.pdf",
      sourceUrl: "https://www.capitol.tn.gov/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination and receipt of forwarding address (may withhold for up to 60 days for itemization)",
        "Landlord must provide itemized written statement of damages",
        "Deposit must be held in a separate account at a Tennessee bank",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the amount wrongfully withheld plus attorney fees",
      exceptions:
        "Does not apply to owner-occupied premises with 4 or fewer units",
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Texas
    {
      id: "tx-security-deposits",
      jurisdiction: "tx",
      title: "Texas Security Deposit Law",
      code: "Tex. Prop. Code Ann.",
      section: "92.101",
      citation: "Tex. Prop. Code Ann. § 92.101 et seq.",
      url: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm",
      sourceUrl:
        "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after tenant vacates",
        "Landlord must provide written description and itemized list of deductions",
        "Deposit may be used for damages, cleaning, and unpaid rent",
      ],
      penalties:
        "Landlord who acts in bad faith may be liable for $100, three times the amount wrongfully withheld, and reasonable attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after tenant vacates",
        },
      ],
    },

    // Utah
    {
      id: "ut-security-deposits",
      jurisdiction: "ut",
      title: "Utah Security Deposit Law",
      code: "Utah Code Ann.",
      section: "57-17-3",
      citation: "Utah Code Ann. § 57-17-3",
      url: "https://le.utah.gov/xcode/Title57/Chapter17/57-17-S3.html",
      sourceUrl:
        "https://le.utah.gov/xcode/Title57/Chapter17/57-17-S3.html",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination",
        "Landlord must provide written itemized notice of deductions",
        "Deposit may be used for cleaning, damages, and unpaid rent",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit may be liable for the full deposit amount plus $100 in damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Vermont
    {
      id: "vt-security-deposits",
      jurisdiction: "vt",
      title: "Vermont Security Deposit Law",
      code: "Vt. Stat. Ann. tit. 9",
      section: "4461",
      citation: "Vt. Stat. Ann. tit. 9, § 4461",
      url: "https://legislature.vermont.gov/statutes/section/09/137/04461",
      sourceUrl:
        "https://legislature.vermont.gov/statutes/section/09/137/04461",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 14 days after termination",
        "Landlord must provide written itemized statement of damages",
        "No interest required on deposits",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit or fails to provide statement is liable for double the amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 14,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Virginia
    {
      id: "va-security-deposits",
      jurisdiction: "va",
      title: "Virginia Security Deposit Law",
      code: "Va. Code Ann.",
      section: "55.1-1226",
      citation: "Va. Code Ann. § 55.1-1226",
      url: "https://law.lis.virginia.gov/vacode/title55.1/chapter12/section55.1-1226/",
      sourceUrl:
        "https://law.lis.virginia.gov/vacode/title55.1/chapter12/section55.1-1226/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed two months' rent",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must provide written itemized list of damages within 45 days",
        "Landlord must hold deposit in a separate escrow account and disclose account location",
      ],
      penalties:
        "Landlord who fails to return deposit or provide itemization is liable for the amount withheld plus attorney fees and actual damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 2,
          unit: "months",
          description: "Maximum security deposit amount",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Washington
    {
      id: "wa-security-deposits",
      jurisdiction: "wa",
      title: "Washington Security Deposit Law",
      code: "Wash. Rev. Code",
      section: "59.18.280",
      citation: "Wash. Rev. Code § 59.18.280",
      url: "https://apps.leg.wa.gov/rcw/default.aspx?cite=59.18.280",
      sourceUrl:
        "https://apps.leg.wa.gov/rcw/default.aspx?cite=59.18.280",
      effectiveDate: "2023-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 21 days after termination",
        "Landlord must provide full and specific statement of deductions with payment of balance",
        "Landlord must provide tenant with written checklist describing condition at move-in",
      ],
      penalties:
        "Landlord who fails to provide statement or return deposit within 21 days is liable for up to double the deposit amount plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 21,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // West Virginia
    {
      id: "wv-security-deposits",
      jurisdiction: "wv",
      title: "West Virginia Security Deposit Law",
      code: "W. Va. Code",
      section: "37-6A-1",
      citation: "W. Va. Code § 37-6A-1 et seq.",
      url: "https://www.wvlegislature.gov/wvcode/ChapterEntire.cfm?chap=37&art=6A",
      sourceUrl:
        "https://www.wvlegislature.gov/wvcode/ChapterEntire.cfm?chap=37&art=6A",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 60 days after termination or reoccupancy, whichever occurs first",
        "Landlord must provide written itemized statement of deductions",
        "Deposit may be applied to unpaid rent, damages, and other expenses",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit may be liable for the amount withheld plus damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 60,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Wisconsin
    {
      id: "wi-security-deposits",
      jurisdiction: "wi",
      title: "Wisconsin Security Deposit Law",
      code: "Wis. Stat.",
      section: "704.28",
      citation: "Wis. Stat. § 704.28",
      url: "https://docs.legis.wisconsin.gov/statutes/statutes/704/28",
      sourceUrl:
        "https://docs.legis.wisconsin.gov/statutes/statutes/704/28",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 21 days after termination",
        "Landlord must provide written itemized statement of deductions",
        "No interest required on deposits",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for double the amount wrongfully withheld",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 21,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },

    // Wyoming
    {
      id: "wy-security-deposits",
      jurisdiction: "wy",
      title: "Wyoming Security Deposit Law",
      code: "Wyo. Stat. Ann.",
      section: "1-21-1207",
      citation: "Wyo. Stat. Ann. § 1-21-1207",
      url: "https://wyoleg.gov/NXT/gateway.dll/Statutes/2024/Title/1/Chapter/21?f=templates&fn=default.htm",
      sourceUrl: "https://wyoleg.gov/",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "No statutory limit on security deposit amount",
        "Landlord must return deposit within 30 days after termination (or 15 days if no deductions with written notice to tenant)",
        "Landlord must provide itemized list of deductions",
        "Deposit may be used for unpaid rent, damages, and costs of re-renting",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for the amount wrongfully withheld and may be liable for additional damages",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 0,
          unit: "months",
          description: "No statutory limit on security deposit amount",
        },
        {
          type: "duration",
          amount: 30,
          unit: "days",
          description:
            "Deadline to return deposit after termination (15 days if no deductions)",
        },
      ],
    },

    // District of Columbia
    {
      id: "dc-security-deposits",
      jurisdiction: "dc",
      title: "District of Columbia Security Deposit Law",
      code: "D.C. Code",
      section: "42-3502.17",
      citation: "D.C. Code § 42-3502.17",
      url: "https://code.dccouncil.gov/us/dc/council/code/sections/42-3502.17",
      sourceUrl:
        "https://code.dccouncil.gov/us/dc/council/code/sections/42-3502.17",
      effectiveDate: "2020-01-01",
      lastVerified: "2026-11-15",
      topics: ["security-deposits", "landlord-tenant"],
      keyProvisions: [
        "Security deposit may not exceed one month's rent for an unfurnished unit",
        "Landlord must return deposit within 45 days after termination",
        "Landlord must pay interest on deposit at prevailing passbook savings rate",
        "Landlord must provide written itemized statement of deductions",
      ],
      penalties:
        "Landlord who wrongfully withholds deposit is liable for treble the amount wrongfully withheld plus attorney fees",
      exceptions: undefined,
      monetaryValues: [
        {
          type: "limit",
          amount: 1,
          unit: "months",
          description: "Maximum security deposit for unfurnished unit",
        },
        {
          type: "duration",
          amount: 45,
          unit: "days",
          description: "Deadline to return deposit after termination",
        },
      ],
    },
  ],
};
