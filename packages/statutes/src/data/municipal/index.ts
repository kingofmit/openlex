/**
 * Municipal ordinance data for topics with significant local variation.
 *
 * Covers rent control, minimum wage, short-term rentals, and paid sick leave
 * in major U.S. cities. Rates and provisions reflect laws as of late 2025;
 * some cities adjust rates annually.
 */

export interface MunicipalOrdinance {
  cityId: string;
  cityName: string;
  stateId: string;
  topic: string;
  ordinanceName: string;
  citation: string;
  description: string;
  keyProvisions: string[];
  effectiveDate: string;
  sourceUrl: string;
  differenceFromState: string;
}

// ---------------------------------------------------------------------------
// Rent Control
// ---------------------------------------------------------------------------

const rentControl: MunicipalOrdinance[] = [
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "rent-control",
    ordinanceName: "Rent Stabilization Law / Housing Stability and Tenant Protection Act",
    citation: "NYC Admin. Code Title 26, Ch. 4; N.Y. RSL ss 26-501 et seq.",
    description:
      "Rent stabilization applies to apartments in buildings of six or more units built between 1947 and 1974. The Rent Guidelines Board sets annual allowable increases.",
    keyProvisions: [
      "Annual rent increases set by the Rent Guidelines Board",
      "Tenants have the right to renewal leases",
      "Vacancy decontrol eliminated by the 2019 HSTPA",
      "Preferential rent protections: landlords cannot raise to legal regulated rent on renewal",
      "Individual Apartment Improvement (IAI) increases capped at $15,000 over 15 years",
      "Applies to roughly 1 million apartments citywide",
    ],
    effectiveDate: "2019-06-14",
    sourceUrl: "https://hcr.ny.gov/rent-stabilization",
    differenceFromState:
      "NYC is the primary jurisdiction where NYS rent stabilization applies. State law (HSTPA 2019) strengthened NYC tenant protections by ending vacancy decontrol and limiting IAIs.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "rent-control",
    ordinanceName: "Los Angeles Rent Stabilization Ordinance (RSO)",
    citation: "LAMC Chapter XV, Art. 1, ss 151.00 et seq.",
    description:
      "Covers rental units in buildings with two or more units built before October 1, 1978. Annual allowable increases are tied to CPI.",
    keyProvisions: [
      "Annual allowable increase of 3-8% tied to CPI (typically 3-4%)",
      "Just cause eviction required for covered units",
      "Relocation assistance required for no-fault evictions",
      "Ellis Act withdrawals require 120-day notice and relocation payments",
      "SCEP (Systematic Code Enforcement Program) inspections for RSO properties",
      "Covers approximately 640,000 units",
    ],
    effectiveDate: "1979-05-01",
    sourceUrl: "https://housing.lacity.org/residents/rso-overview",
    differenceFromState:
      "LA RSO predates and is more restrictive than CA AB 1482 (Tenant Protection Act). AB 1482 caps increases at 5% + CPI for non-RSO units; the RSO typically allows lower increases and covers older building stock.",
  },
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "rent-control",
    ordinanceName: "San Francisco Rent Ordinance",
    citation: "S.F. Admin. Code Chapter 37",
    description:
      "Covers most rental units in buildings with two or more units built before June 13, 1979. Annual increases set by the Rent Board based on CPI.",
    keyProvisions: [
      "Annual allowable increase based on 60% of CPI (often 1-3%)",
      "16 enumerated just cause eviction protections",
      "Owner move-in eviction requires relocation payments and good faith occupancy",
      "Capital improvement passthroughs capped and amortized",
      "Buyout agreements must be filed with the Rent Board",
      "Covers approximately 172,000 units",
    ],
    effectiveDate: "1979-06-13",
    sourceUrl: "https://sfrb.org/",
    differenceFromState:
      "SF Rent Ordinance is substantially more protective than state AB 1482. Annual increase formula yields lower allowable increases, and just cause protections are broader.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "rent-control",
    ordinanceName: "Portland Renter Protections (Oregon SB 608 + Local Overlay)",
    citation: "Portland City Code Title 30.01; ORS 90.323, 90.427",
    description:
      "Oregon SB 608 (2019) established statewide rent increase caps. Portland supplements with additional relocation assistance requirements.",
    keyProvisions: [
      "Statewide cap of 7% + CPI on annual rent increases (SB 608)",
      "Portland requires 90-day notice for rent increases of 10% or more",
      "Mandatory relocation assistance for no-cause terminations and large rent increases",
      "Relocation assistance equals one month's rent",
      "Exemption for units less than 15 years old",
    ],
    effectiveDate: "2019-02-28",
    sourceUrl: "https://www.portland.gov/phb/rental-services",
    differenceFromState:
      "Portland adds mandatory relocation assistance on top of statewide SB 608 rent caps. State law does not require relocation payments.",
  },
  {
    cityId: "oakland",
    cityName: "Oakland",
    stateId: "ca",
    topic: "rent-control",
    ordinanceName: "Oakland Rent Adjustment Ordinance",
    citation: "Oakland Municipal Code 8.22",
    description:
      "Covers most residential rental units built before 1983. Annual increases set by the Rent Adjustment Program based on CPI.",
    keyProvisions: [
      "Annual allowable increase based on CPI (capped at 10%)",
      "Just cause for eviction required",
      "Tenant protection ordinance covers foreclosed properties",
      "Rent Adjustment Program handles petitions for both landlords and tenants",
      "Banking of unused rent increases allowed",
    ],
    effectiveDate: "1980-01-01",
    sourceUrl: "https://www.oaklandca.gov/topics/rent-adjustment-program",
    differenceFromState:
      "Oakland's ordinance is more restrictive than CA AB 1482 for covered units, with just cause protections that predate the state law and CPI-based caps that typically fall below the state 5%+CPI cap.",
  },
  {
    cityId: "st-paul",
    cityName: "St. Paul",
    stateId: "mn",
    topic: "rent-control",
    ordinanceName: "St. Paul Rent Stabilization Ordinance",
    citation: "St. Paul Legislative Code Chapter 193A",
    description:
      "Voter-approved in November 2021, this ordinance caps annual rent increases at 3% for all residential units regardless of building age.",
    keyProvisions: [
      "3% annual cap on rent increases for all rental units",
      "No vacancy decontrol — cap applies even between tenants",
      "Applies to new construction (no exemption for building age)",
      "Landlords may apply for reasonable-return exceptions",
      "Administered by the Department of Safety and Inspections",
    ],
    effectiveDate: "2022-05-01",
    sourceUrl: "https://www.stpaul.gov/departments/safety-inspections/rent-stabilization",
    differenceFromState:
      "Minnesota has no statewide rent control. St. Paul is the first MN city to enact rent stabilization. The lack of a new-construction exemption is unique among U.S. rent control ordinances.",
  },
];

// ---------------------------------------------------------------------------
// Minimum Wage (cities above state minimum)
// ---------------------------------------------------------------------------

const minimumWage: MunicipalOrdinance[] = [
  {
    cityId: "seattle",
    cityName: "Seattle",
    stateId: "wa",
    topic: "minimum-wage",
    ordinanceName: "Seattle Minimum Wage Ordinance",
    citation: "SMC 14.19",
    description:
      "Seattle's minimum wage is among the highest in the nation. Rate varies by employer size and adjusts annually with CPI.",
    keyProvisions: [
      "Large employers (501+ employees): $20.76/hr (2025)",
      "Small employers (500 or fewer): $20.76/hr or $17.76/hr with $3.00 in tips/benefits",
      "Annual CPI adjustment effective January 1",
      "No tip credit for large employers",
      "Covers all employees who work 2+ hours per week in Seattle",
    ],
    effectiveDate: "2025-01-01",
    sourceUrl: "https://www.seattle.gov/laborstandards/ordinances/minimum-wage",
    differenceFromState:
      "WA state minimum wage is $16.66/hr (2025). Seattle's rate is $4.10/hr higher for large employers.",
  },
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "minimum-wage",
    ordinanceName: "San Francisco Minimum Wage Ordinance",
    citation: "S.F. Admin. Code Chapter 12R",
    description:
      "SF minimum wage adjusts annually based on CPI. Applies to all employees performing work in the city.",
    keyProvisions: [
      "$18.67/hr (2024 rate, adjusted annually)",
      "Annual CPI adjustment, no scheduled phase-in steps",
      "No tip credit allowed",
      "Applies to all employers regardless of size",
      "Enforcement by the Office of Labor Standards Enforcement (OLSE)",
    ],
    effectiveDate: "2024-07-01",
    sourceUrl: "https://sfgov.org/olse/minimum-wage-ordinance",
    differenceFromState:
      "CA state minimum wage is $16.00/hr (2024). SF's rate is $2.67/hr higher. CA fast food minimum ($20/hr) can exceed SF's general minimum for that sector.",
  },
  {
    cityId: "denver",
    cityName: "Denver",
    stateId: "co",
    topic: "minimum-wage",
    ordinanceName: "Denver Minimum Wage Ordinance",
    citation: "Denver Revised Municipal Code 58-16 through 58-27",
    description:
      "Denver sets its own minimum wage above the state level, with annual CPI adjustments.",
    keyProvisions: [
      "$18.29/hr (2025)",
      "Annual CPI adjustment effective January 1",
      "Tipped employee minimum: $15.27/hr (2025)",
      "Applies to all work performed within the City and County of Denver",
      "Enforced by the Denver Auditor's Office",
    ],
    effectiveDate: "2025-01-01",
    sourceUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Auditors-Office/Denver-Minimum-Wage",
    differenceFromState:
      "CO state minimum wage is $14.81/hr (2025). Denver's rate is approximately $3.48/hr higher.",
  },
  {
    cityId: "chicago",
    cityName: "Chicago",
    stateId: "il",
    topic: "minimum-wage",
    ordinanceName: "Chicago Minimum Wage Ordinance",
    citation: "Chicago Municipal Code 1-24",
    description:
      "Chicago's minimum wage increases annually with CPI. Separate rates for tipped workers and small employers during phase-in.",
    keyProvisions: [
      "Large employers (21+ employees): $16.20/hr (2025)",
      "Small employers (4-20 employees): $15.00/hr (2025)",
      "Tipped workers: $11.02/hr (2025)",
      "Domestic workers covered",
      "Annual CPI adjustment effective July 1",
    ],
    effectiveDate: "2025-07-01",
    sourceUrl: "https://www.chicago.gov/city/en/depts/bacp/supp_info/minimumwageinformation.html",
    differenceFromState:
      "IL state minimum wage is $14.00/hr (2025). Chicago's rate for large employers is $2.20/hr higher.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "minimum-wage",
    ordinanceName: "Los Angeles Minimum Wage Ordinance",
    citation: "LAMC Section 187",
    description:
      "LA's minimum wage applies to all employees who work at least two hours in a week within the city. Adjusts annually with CPI.",
    keyProvisions: [
      "$17.28/hr (2025, adjusted annually with CPI)",
      "No tip credit allowed",
      "Applies to all employers regardless of size",
      "Covers employees who perform at least 2 hours of work in LA per week",
      "Hotel worker minimum wage: $19.73/hr (hotels with 60+ rooms)",
    ],
    effectiveDate: "2025-07-01",
    sourceUrl: "https://wagesla.lacity.org/",
    differenceFromState:
      "CA state minimum wage is $16.50/hr (2025). LA's general rate is $0.78/hr higher; hotel workers receive significantly more.",
  },
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "minimum-wage",
    ordinanceName: "New York City Minimum Wage (NY Labor Law ss 652)",
    citation: "NY Labor Law ss 652; 12 NYCRR Part 146",
    description:
      "NYC minimum wage is set at the state level but at a higher rate than the rest of New York State.",
    keyProvisions: [
      "$16.50/hr for all employers (2025)",
      "No small employer exception within NYC",
      "Tipped workers in food service: $11.00/hr cash wage plus tips",
      "Annual indexed increases based on CPI beginning 2027",
      "Fast food workers: $16.50/hr (same as general minimum as of 2025)",
    ],
    effectiveDate: "2025-01-01",
    sourceUrl: "https://dol.ny.gov/minimum-wage",
    differenceFromState:
      "NYS minimum wage outside NYC is $15.50/hr (2025). NYC rate is $1.00/hr higher by state statute, recognizing higher cost of living.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "minimum-wage",
    ordinanceName: "Portland Metro Area Minimum Wage (Oregon SB 1532)",
    citation: "ORS 653.025",
    description:
      "Oregon's tiered minimum wage system sets a higher rate for the Portland metro area compared to the rest of the state.",
    keyProvisions: [
      "Portland metro: $15.95/hr (2025)",
      "Standard (rest of state): $14.70/hr",
      "Rural counties: $13.70/hr",
      "Annual adjustment effective July 1",
      "No local authority to set rates above the state schedule",
    ],
    effectiveDate: "2025-07-01",
    sourceUrl: "https://www.oregon.gov/boli/workers/pages/minimum-wage.aspx",
    differenceFromState:
      "Portland metro rate is $1.25/hr above standard Oregon rate and $2.25/hr above rural rate. This is set by state law, not a local ordinance.",
  },
];

// ---------------------------------------------------------------------------
// Short-Term Rental Regulations
// ---------------------------------------------------------------------------

const shortTermRental: MunicipalOrdinance[] = [
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "short-term-rental",
    ordinanceName: "Local Law 18 of 2022 (Short-Term Rental Registration Law)",
    citation: "NYC Admin. Code ss 26-2101 et seq.",
    description:
      "One of the strictest short-term rental laws in the US. Hosts must register with the city and be present during the stay.",
    keyProvisions: [
      "All short-term rental hosts must register with the Mayor's Office of Special Enforcement (OSE)",
      "Host must be present in the dwelling during the rental period",
      "Maximum 2 guests for rentals under 30 days",
      "Only one listing per host (must be their primary residence)",
      "Booking platforms prohibited from processing unregistered listings",
      "Violations: up to $5,000 per offense for hosts, $1,500 per transaction for platforms",
    ],
    effectiveDate: "2023-09-05",
    sourceUrl: "https://www.nyc.gov/site/specialenforcement/registration/registration.page",
    differenceFromState:
      "NYC's law is a local overlay; NYS Multiple Dwelling Law ss 4(8)(a) already prohibited rentals under 30 days in Class A multiple dwellings unless the host is present. LL18 adds registration and platform enforcement.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "short-term-rental",
    ordinanceName: "Home-Sharing Ordinance",
    citation: "LAMC ss 12.22 A.32",
    description:
      "Requires registration and limits short-term rentals to a host's primary residence with an annual cap on rental days.",
    keyProvisions: [
      "Annual registration required ($89 fee, renewed annually)",
      "Only primary residence may be listed (host must live there 6+ months/year)",
      "120-day annual cap on home-sharing (extendable to 365 with Extended Home-Sharing permit)",
      "RSO (rent-stabilized) units prohibited from home-sharing",
      "Platform responsibility: must verify registration before listing",
      "14% Transient Occupancy Tax applies",
    ],
    effectiveDate: "2019-07-01",
    sourceUrl: "https://planning.lacity.org/plans-policies/home-sharing",
    differenceFromState:
      "CA has no statewide short-term rental law; regulation is entirely local. LA's 120-day cap and RSO prohibition are more restrictive than many CA cities.",
  },
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "short-term-rental",
    ordinanceName: "Short-Term Residential Rental Ordinance (Proposition F amendments)",
    citation: "S.F. Admin. Code Chapter 41A, ss 41A.4-41A.5g",
    description:
      "Hosts must register with the Office of Short-Term Rentals and comply with annual night caps.",
    keyProvisions: [
      "Business registration and short-term rental registration required",
      "Unhosted rentals capped at 90 nights per year",
      "Hosted rentals: unlimited nights",
      "Must be host's primary residence (275+ nights/year)",
      "Platforms must verify registration and report quarterly",
      "14% Transient Occupancy Tax",
      "$250 annual registration fee",
    ],
    effectiveDate: "2015-02-01",
    sourceUrl: "https://shorttermrentals.sfgov.org/",
    differenceFromState:
      "CA provides no statewide framework. SF's platform-reporting mandate and 90-day unhosted cap were pioneering and influenced later regulations in other CA cities.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "short-term-rental",
    ordinanceName: "Portland Short-Term Rental Permit Program",
    citation: "Portland City Code 33.207",
    description:
      "Requires a permit from the Bureau of Development Services. Distinguishes between accessory and non-accessory short-term rentals.",
    keyProvisions: [
      "Type A (accessory): host lives on-site, up to 5 bedrooms, permit required",
      "Type B (non-accessory): host not on-site, limited to specific zones, conditional use review",
      "Annual permit required ($178/year for Type A)",
      "Safety inspection required",
      "Transient Lodging Tax (11.5%) applies",
      "Platforms must collect and remit taxes under platform agreement with city",
    ],
    effectiveDate: "2014-08-01",
    sourceUrl: "https://www.portland.gov/bds/short-term-rentals",
    differenceFromState:
      "Oregon has no statewide short-term rental regulation. Portland's Type A/B distinction and safety inspection requirements are locally developed.",
  },
  {
    cityId: "denver",
    cityName: "Denver",
    stateId: "co",
    topic: "short-term-rental",
    ordinanceName: "Denver Short-Term Rental Licensing Ordinance",
    citation: "Denver Revised Municipal Code 33-49 through 33-56",
    description:
      "Requires a license and limits short-term rentals to the host's primary residence.",
    keyProvisions: [
      "Short-term rental license required (primary residence only)",
      "Must reside in the property at least 270 days/year",
      "License application requires a notarized affidavit of primary residency",
      "Lodger's Tax (10.75%) must be collected and remitted",
      "License must be displayed on all listings",
      "No more than one license per person",
    ],
    effectiveDate: "2017-01-01",
    sourceUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Business-Licensing/Short-Term-Rentals",
    differenceFromState:
      "Colorado has no statewide short-term rental law. Denver's primary-residence requirement is stricter than many CO mountain towns that allow non-owner-occupied rentals.",
  },
  {
    cityId: "nashville",
    cityName: "Nashville",
    stateId: "tn",
    topic: "short-term-rental",
    ordinanceName: "Nashville Short-Term Rental Property Ordinance",
    citation: "Metro Nashville Code of Laws 17.16.070",
    description:
      "Distinguishes between owner-occupied and non-owner-occupied permits. Non-owner-occupied permits are capped and limited by zoning.",
    keyProvisions: [
      "Owner-occupied permit: owner lives on property, permitted in all zoning districts",
      "Non-owner-occupied permit: not available in R and RS zoning districts (residential single-family)",
      "Existing non-owner-occupied permits in restricted zones grandfathered but non-transferable",
      "Annual permit required ($313 fee)",
      "Property and sales tax compliance required",
      "Maximum occupancy limits tied to bedrooms",
    ],
    effectiveDate: "2015-01-01",
    sourceUrl: "https://www.nashville.gov/departments/codes/short-term-rental-permits",
    differenceFromState:
      "TN preemption law (2019 HB 1182) limits cities from banning owner-occupied STRs but allows regulation of non-owner-occupied. Nashville's non-owner-occupied zoning restrictions are among the tightest allowable under state law.",
  },
];

// ---------------------------------------------------------------------------
// Paid Sick Leave
// ---------------------------------------------------------------------------

const paidSickLeave: MunicipalOrdinance[] = [
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "paid-sick-leave",
    ordinanceName: "San Francisco Paid Sick Leave Ordinance",
    citation: "S.F. Admin. Code Chapter 12W",
    description:
      "The first paid sick leave law in the U.S. (2006). Covers all employees who work in SF, including part-time and temporary workers.",
    keyProvisions: [
      "Accrual: 1 hour per 30 hours worked",
      "Small employers (1-9 employees): up to 40 hours banked",
      "Large employers (10+ employees): up to 72 hours banked",
      "Usable after 90 days of employment",
      "Covers care for family members (broadly defined)",
      "No waiting period for accrual to begin",
      "Applies to all employees working in SF regardless of employer location",
    ],
    effectiveDate: "2007-02-05",
    sourceUrl: "https://sfgov.org/olse/paid-sick-leave-ordinance",
    differenceFromState:
      "CA state law (Healthy Workplaces Act) provides 5 days/40 hrs minimum. SF provides up to 72 hours for larger employers and was enacted 8 years before the state law.",
  },
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "paid-sick-leave",
    ordinanceName: "NYC Earned Safe and Sick Time Act",
    citation: "NYC Admin. Code Title 20, Ch. 8, ss 20-911 et seq.",
    description:
      "Provides both sick leave and safe leave (for domestic violence, stalking, trafficking) to NYC employees.",
    keyProvisions: [
      "Accrual: 1 hour per 30 hours worked",
      "Employers with 100+ employees: up to 56 hours/year",
      "Employers with 5-99 employees: up to 40 hours paid sick leave",
      "Employers with 1-4 employees: up to 40 hours unpaid sick leave",
      "Covers safe time (domestic violence, sexual assault, stalking, trafficking)",
      "Usable after 120 days of employment",
      "Carryover of unused time required",
    ],
    effectiveDate: "2020-09-30",
    sourceUrl: "https://www.nyc.gov/site/dca/workers/workersrights/paid-safe-sick-leave-law.page",
    differenceFromState:
      "NYS Paid Sick Leave (2020) provides 40-56 hours depending on employer size. NYC's law predates the state law and additionally covers 'safe time' for victims of domestic violence.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "paid-sick-leave",
    ordinanceName: "Los Angeles Paid Sick Leave Ordinance (Measure GS successor)",
    citation: "LAMC Section 187.04",
    description:
      "Provides paid sick leave to employees who work in LA for 30+ days in a year.",
    keyProvisions: [
      "Accrual: 1 hour per 30 hours worked",
      "Up to 48 hours or 6 days of paid sick leave per year",
      "Usable after 90 days of employment",
      "Unused sick leave carries over (capped at 72 hours)",
      "Covers care for family members, preventive care, and specified purposes",
      "Applies to all employers with employees working in LA",
    ],
    effectiveDate: "2017-07-01",
    sourceUrl: "https://wagesla.lacity.org/",
    differenceFromState:
      "CA state provides 5 days/40 hrs. LA provides 6 days/48 hrs with a higher carryover cap of 72 hours.",
  },
  {
    cityId: "seattle",
    cityName: "Seattle",
    stateId: "wa",
    topic: "paid-sick-leave",
    ordinanceName: "Seattle Paid Sick and Safe Time Ordinance",
    citation: "SMC 14.16",
    description:
      "Provides tiered paid sick and safe time based on employer size. Covers physical and mental health, safety reasons, and bereavement.",
    keyProvisions: [
      "Accrual: 1 hour per 30 hours worked (Tier 1: 1-49 employees)",
      "Tier 2 (50-249 employees): 1 hour per 30 hours, up to 56 hours",
      "Tier 3 (250+ employees): 1 hour per 30 hours, up to 72 hours plus 32 hours additional for frontline workers",
      "Covers mental health, bereavement, and school/business closures",
      "Safe time for domestic violence, sexual assault, and stalking",
      "No waiting period to use accrued time",
    ],
    effectiveDate: "2012-09-01",
    sourceUrl: "https://www.seattle.gov/laborstandards/ordinances/paid-sick-and-safe-time",
    differenceFromState:
      "WA state I-1433 provides 1 hour per 40 hours worked with no cap differentiation by employer size. Seattle accrues faster (1:30 vs 1:40) and provides up to 108 hours for large employers.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "paid-sick-leave",
    ordinanceName: "Portland Paid Sick Leave (Oregon Sick Time Law)",
    citation: "ORS 653.601-653.661; Portland City Code 9.01.010-060",
    description:
      "Portland's local ordinance was superseded by Oregon's statewide sick time law in 2016 but originally established the local mandate in 2014.",
    keyProvisions: [
      "Accrual: 1 hour per 30 hours worked",
      "Employers with 10+ employees (6+ in Portland): paid leave up to 40 hours",
      "Smaller employers: unpaid protected sick time",
      "Usable after 90 days of employment",
      "Covers family members, public health emergencies, and domestic violence",
      "Portland threshold is 6 employees (vs state 10) for paid leave requirement",
    ],
    effectiveDate: "2014-01-01",
    sourceUrl: "https://www.portland.gov/bhr/sick-time",
    differenceFromState:
      "Oregon state law requires paid sick time for employers with 10+ employees. Portland's earlier ordinance set the threshold at 6 employees, and this lower threshold still applies within city limits.",
  },
  {
    cityId: "chicago",
    cityName: "Chicago",
    stateId: "il",
    topic: "paid-sick-leave",
    ordinanceName: "Chicago Paid Leave and Paid Sick and Safe Leave Ordinance",
    citation: "Chicago Municipal Code 1-24-045",
    description:
      "Expanded in 2024 to include both paid sick leave and general paid leave. One of the most generous city-level leave mandates in the U.S.",
    keyProvisions: [
      "40 hours paid sick leave per 12-month period",
      "40 hours paid leave (general purpose) per 12-month period",
      "Accrual: 1 hour per 35 hours worked for each type",
      "Paid leave can be used for any reason",
      "Unused paid leave must be paid out at separation",
      "Covers all employees working 80+ hours in a 120-day period in Chicago",
    ],
    effectiveDate: "2024-12-31",
    sourceUrl: "https://www.chicago.gov/city/en/depts/bacp/supp_info/paidleave.html",
    differenceFromState:
      "IL Paid Leave for All Workers Act (2024) provides 40 hours of general paid leave. Chicago doubles this by providing 40 hours paid sick leave PLUS 40 hours general paid leave (80 hours total).",
  },
  {
    cityId: "dc",
    cityName: "Washington, D.C.",
    stateId: "dc",
    topic: "paid-sick-leave",
    ordinanceName: "Accrued Sick and Safe Leave Act",
    citation: "D.C. Code ss 32-531.01 et seq.",
    description:
      "Tiered paid sick leave based on employer size, with broad coverage for safe leave purposes.",
    keyProvisions: [
      "100+ employees: 1 hour per 37 hours worked, up to 7 days/year",
      "25-99 employees: 1 hour per 43 hours worked, up to 5 days/year",
      "1-24 employees: 1 hour per 87 hours worked, up to 3 days/year",
      "Tipped restaurant workers: 1 hour per 43 hours worked, up to 5 days",
      "Covers safe leave for stalking, domestic violence, and sexual abuse",
      "Carryover of unused leave permitted",
    ],
    effectiveDate: "2014-02-22",
    sourceUrl: "https://does.dc.gov/service/accrued-sick-and-safe-leave-act",
    differenceFromState:
      "DC is its own jurisdiction (not subject to a state law). The tiered employer-size approach is unique and was a model for several subsequent state laws.",
  },
];

// ---------------------------------------------------------------------------
// Business Licensing
// ---------------------------------------------------------------------------

const businessLicensing: MunicipalOrdinance[] = [
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "business-licensing",
    ordinanceName: "NYC Business License & Permit Requirements",
    citation: "NYC Admin. Code Title 20; 6 RCNY various",
    description:
      "NYC requires most businesses to obtain licenses or permits from the Department of Consumer and Worker Protection (DCWP) in addition to state registration. Over 50 license categories exist.",
    keyProvisions: [
      "General vendor license required for street vendors (limited supply; long waitlist)",
      "Home occupation permits required for home-based businesses in residential zones",
      "Food service establishments require DOHMH permit plus DCWP license",
      "Biennial renewal for most DCWP licenses",
      "Filing with NYC Department of Finance for Commercial Rent Tax if in Manhattan below 96th St",
      "All businesses must register for NYC Employer Identification Number",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.nyc.gov/site/dca/businesses/license-702.page",
    differenceFromState:
      "NYS requires a general business registration (Articles of Organization/Incorporation) filed with DOS. NYC adds its own extensive licensing layer, particularly for consumer-facing businesses, with separate fees and inspections.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "business-licensing",
    ordinanceName: "City of Los Angeles Business Tax Registration Certificate",
    citation: "LAMC Article 1, Chapter II (Business Tax); LAMC 21.00 et seq.",
    description:
      "All businesses operating in LA must obtain a Business Tax Registration Certificate (BTRC) from the Office of Finance. Tax rates vary by business classification.",
    keyProvisions: [
      "Business Tax Registration Certificate (BTRC) required for all businesses",
      "Tax rates range from $1.01 to $5.07 per $1,000 of gross receipts depending on category",
      "Annual renewal required by specified due dates based on account number",
      "Home-based businesses subject to same BTRC requirement",
      "Small business exemption: businesses with gross receipts under $100,000 exempt from tax (not registration)",
      "New businesses exempt from tax for first two years under Start-Up Incentive Program",
    ],
    effectiveDate: "2024-01-01",
    sourceUrl: "https://finance.lacity.org/business-tax",
    differenceFromState:
      "CA does not impose a statewide business license. Cities set their own business tax and registration requirements. LA's gross-receipts-based business tax is the primary local business levy.",
  },
  {
    cityId: "chicago",
    cityName: "Chicago",
    stateId: "il",
    topic: "business-licensing",
    ordinanceName: "Chicago Business License Requirements",
    citation: "Chicago Municipal Code Title 4",
    description:
      "Chicago requires a Limited Business License for most businesses, plus activity-specific licenses administered by the Business Affairs and Consumer Protection (BACP) department.",
    keyProvisions: [
      "Limited Business License (LBL) required for most businesses ($250 for 2 years)",
      "Activity-specific licenses required for food, liquor, public place of amusement, etc.",
      "Retail food establishment license: $660/2 years (1-10,000 sq ft)",
      "Shared kitchen license available for food entrepreneurs ($125/2 years)",
      "Business must pass zoning review before license issuance",
      "Annual regulatory inspections for food, health, and safety compliance",
    ],
    effectiveDate: "2024-01-01",
    sourceUrl: "https://www.chicago.gov/city/en/depts/bacp/provdrs/bus.html",
    differenceFromState:
      "IL requires state-level registration through the Secretary of State but does not impose a statewide business license. Chicago's LBL and activity-specific licensing add significant local requirements and fees.",
  },
  {
    cityId: "houston",
    cityName: "Houston",
    stateId: "tx",
    topic: "business-licensing",
    ordinanceName: "Houston Business Permits and Registrations",
    citation: "Houston Code of Ordinances Chapter 28; Chapter 10 (Health)",
    description:
      "Houston has no general business license requirement but requires activity-specific permits. Notably, Houston is the largest U.S. city without zoning, so land use restrictions are minimal.",
    keyProvisions: [
      "No general business license or business tax at the city level",
      "Activity-specific permits: food dealer, sexually oriented business, massage establishment, etc.",
      "Food dealer permits required from Houston Health Department ($340-$660/year)",
      "Businesses must register with Harris County for property tax purposes",
      "No zoning ordinance; land use governed by deed restrictions and development ordinances",
      "Franchise tax at state level (TX Margin Tax) is the primary business levy",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.houstontx.gov/absd/",
    differenceFromState:
      "TX has no state income tax or general business license. Houston mirrors this light-regulation approach with no general business license, making it one of the least restrictive major cities for business formation.",
  },
  {
    cityId: "phoenix",
    cityName: "Phoenix",
    stateId: "az",
    topic: "business-licensing",
    ordinanceName: "Phoenix Transaction Privilege Tax License and Business Registration",
    citation: "Phoenix City Code Chapter 14; ARS 42-6001 et seq.",
    description:
      "Businesses operating in Phoenix must obtain a Transaction Privilege Tax (TPT) license from the AZ Department of Revenue. Phoenix adds its own TPT surcharge.",
    keyProvisions: [
      "TPT license required from AZ DOR for businesses making taxable sales ($12 fee)",
      "Phoenix city TPT rate of 2.3% added to state 5.6% base rate",
      "Specific business activity licenses for contractors, liquor establishments, and food service",
      "Regulatory license required for massage establishments, tobacco retailers, etc.",
      "Home-based businesses must comply with home occupation permit requirements under zoning code",
      "No general city business license beyond TPT registration",
    ],
    effectiveDate: "2024-01-01",
    sourceUrl: "https://www.phoenix.gov/finance/plt",
    differenceFromState:
      "AZ handles TPT licensing at the state level through the unified DOR system. Phoenix adds its own TPT rate and activity-specific regulatory permits, but does not require a separate general city business license.",
  },
];

// ---------------------------------------------------------------------------
// Cannabis Dispensary Regulations
// ---------------------------------------------------------------------------

const cannabisDispensary: MunicipalOrdinance[] = [
  {
    cityId: "denver",
    cityName: "Denver",
    stateId: "co",
    topic: "cannabis-dispensary",
    ordinanceName: "Denver Retail Marijuana Code",
    citation: "Denver Revised Municipal Code 6-200 through 6-230",
    description:
      "Denver was among the first cities to license retail marijuana establishments after CO Amendment 64 (2012). Local licensing adds to state Marijuana Enforcement Division requirements.",
    keyProvisions: [
      "Local retail marijuana store license required in addition to state MED license",
      "1,000-foot buffer from schools, childcare centers, and drug/alcohol treatment facilities",
      "No new licenses within 1,000 feet of an existing dispensary (density cap)",
      "Social consumption (tasting room) pilot program established under I-300",
      "Delivery permitted under state HB 19-1234; local opt-in required",
      "Annual local license fee approximately $3,000-$5,000 depending on license type",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Business-Licensing/Marijuana-Licenses",
    differenceFromState:
      "CO allows municipalities to opt out of allowing marijuana businesses entirely. Denver permits them with additional local licensing, zoning buffers, and density caps beyond state requirements.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "cannabis-dispensary",
    ordinanceName: "Portland Cannabis Business Regulations",
    citation: "Portland City Code 14B.130; ORS 475C",
    description:
      "Portland allows cannabis retail with local licensing requirements layered on top of the Oregon Liquor and Cannabis Commission (OLCC) framework.",
    keyProvisions: [
      "OLCC state license required plus Portland business license",
      "1,000-foot buffer from schools and other cannabis retailers",
      "Zoning: permitted in commercial and employment zones; prohibited in residential zones",
      "Local tax: 3% local sales tax on recreational cannabis (Measure 26-180)",
      "Operating hours restricted to 7 AM - 10 PM",
      "Delivery permitted with OLCC delivery endorsement",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.portland.gov/revenue/cannabis-tax",
    differenceFromState:
      "Oregon allows local governments to impose a local tax up to 3% on recreational cannabis sales. Portland exercises this full 3% local tax option. OR cities that voted against Measure 91 may ban retail.",
  },
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "cannabis-dispensary",
    ordinanceName: "San Francisco Cannabis Business Permit",
    citation: "S.F. Business & Tax Regulations Code Article 16; S.F. Health Code Article 19H",
    description:
      "SF operates an equity-focused cannabis licensing program with multiple permit types. The Office of Cannabis oversees local permits alongside state Bureau of Cannabis Control licensing.",
    keyProvisions: [
      "Local Cannabis Business Permit required from SF Office of Cannabis",
      "Equity Program: fee waivers, technical assistance, and priority processing for equity applicants",
      "600-foot buffer from K-12 schools; 600-foot discretionary buffer from other sensitive uses",
      "No cap on total number of retail permits (market-driven)",
      "On-site consumption lounges permitted with additional endorsement",
      "Local cannabis business tax of 1-5% of gross receipts depending on activity type",
    ],
    effectiveDate: "2023-07-01",
    sourceUrl: "https://officeofcannabis.sfgov.org/",
    differenceFromState:
      "CA allows cities to set their own cannabis regulations and can ban or permit retail. SF permits retail with an equity focus and allows on-site consumption, which many CA cities prohibit.",
  },
  {
    cityId: "chicago",
    cityName: "Chicago",
    stateId: "il",
    topic: "cannabis-dispensary",
    ordinanceName: "Chicago Cannabis Business Zoning and Licensing",
    citation: "Chicago Municipal Code 7-42; Chicago Zoning Ordinance 17-9-130",
    description:
      "Chicago allows adult-use cannabis dispensaries in designated zoning districts with a local licensing process that prioritizes social equity applicants from disproportionately impacted areas.",
    keyProvisions: [
      "Local dispensary license required in addition to IL IDFPR adult-use dispensary license",
      "Limited to 110 total dispensary licenses within city limits (7 wards cap)",
      "Social equity applicant priority: 50% of licenses reserved for social equity applicants",
      "1,500-foot buffer between dispensaries",
      "Permitted in B, C, and M zoning districts; special use permit required in some zones",
      "3% local cannabis tax on top of state and county taxes",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.chicago.gov/city/en/depts/bacp/provdrs/bus/svcs/cannabis.html",
    differenceFromState:
      "IL Cannabis Regulation and Tax Act allows municipalities to restrict or ban dispensaries. Chicago permits them with stringent density caps, social equity priority, and an additional 3% local tax.",
  },
  {
    cityId: "boston",
    cityName: "Boston",
    stateId: "ma",
    topic: "cannabis-dispensary",
    ordinanceName: "Boston Cannabis Establishment Zoning and Licensing",
    citation: "Boston Zoning Code Article 8M; City of Boston Cannabis Equity Ordinance",
    description:
      "Boston licenses cannabis establishments through the Mayor's Office of Economic Opportunity & Inclusion with a strong emphasis on equity applicants from communities disproportionately impacted by past marijuana enforcement.",
    keyProvisions: [
      "Host Community Agreement (HCA) required between operator and City of Boston",
      "Community impact fee capped at 3% of gross revenue (per state regulation)",
      "Equity applicants receive priority in permitting and fee waivers",
      "500-foot buffer from schools; conditional use permit required in most zones",
      "On-site consumption not yet permitted (under review)",
      "Operating hours: 8 AM - 10 PM (some locations limited to 9 PM by HCA)",
    ],
    effectiveDate: "2023-07-01",
    sourceUrl: "https://www.boston.gov/departments/economic-opportunity-and-inclusion/cannabis",
    differenceFromState:
      "MA Cannabis Control Commission sets baseline statewide regulations. Boston adds HCA requirements, equity priority licensing, and local zoning restrictions. MA capped HCA community impact fees at 3% in 2022 guidance.",
  },
];

// ---------------------------------------------------------------------------
// Tenant Protections (beyond rent control)
// ---------------------------------------------------------------------------

const tenantProtections: MunicipalOrdinance[] = [
  {
    cityId: "new-york-city",
    cityName: "New York City",
    stateId: "ny",
    topic: "tenant-protections",
    ordinanceName: "Right to Counsel in Eviction Proceedings (Intro. 214-B / Local Law 136 of 2017)",
    citation: "NYC Admin. Code ss 26-1301 et seq.",
    description:
      "NYC was the first city in the U.S. to guarantee free legal representation to tenants facing eviction in Housing Court, regardless of immigration status.",
    keyProvisions: [
      "Guaranteed right to legal counsel for tenants facing eviction in Housing Court",
      "Income-eligible tenants (at or below 200% FPL) in designated zip codes receive free representation",
      "Phased citywide rollout: all zip codes covered by 2022",
      "Administered through contracted legal services providers funded by city budget ($166M+ annually)",
      "Covers holdover, nonpayment, and HP (repair) proceedings",
      "Tenant representation rate increased from 1% to over 70% in covered areas",
    ],
    effectiveDate: "2017-08-11",
    sourceUrl: "https://www.nyc.gov/site/hra/help/legal-services-background.page",
    differenceFromState:
      "NYS has no statewide right to counsel in eviction cases. NYC's program was the first in the nation and has served as a model for similar legislation in other cities and states (including statewide proposals).",
  },
  {
    cityId: "san-francisco",
    cityName: "San Francisco",
    stateId: "ca",
    topic: "tenant-protections",
    ordinanceName: "Restrictions on Ellis Act Evictions and Tenant Buyout Agreements",
    citation: "S.F. Admin. Code Chapter 37, ss 37.9A, 37.9E",
    description:
      "SF imposes additional local protections on top of the state Ellis Act, including mandatory buyout disclosure, relocation payments, and re-rental restrictions for Ellis Act withdrawals.",
    keyProvisions: [
      "Ellis Act withdrawal requires 120-day notice (1 year for elderly/disabled tenants)",
      "Relocation payments required: approximately $7,000-$50,000+ per tenant depending on household composition and disability/senior status",
      "Landlords may not re-rent withdrawn units for at least 5 years; 10-year restriction if any original tenant displaced",
      "Buyout agreements must be filed with the Rent Board; tenants have 45-day rescission period",
      "Tenants have right of first refusal if units are re-offered for rent",
      "Annual relocation payment amounts adjusted by Rent Board",
    ],
    effectiveDate: "2023-03-01",
    sourceUrl: "https://sfrb.org/ellis-act-evictions",
    differenceFromState:
      "CA Ellis Act (Gov. Code 7060-7060.7) gives landlords the right to exit the rental business. SF layers on substantial local protections including higher relocation payments, longer notice periods for protected classes, and buyout regulation that do not exist at the state level.",
  },
  {
    cityId: "seattle",
    cityName: "Seattle",
    stateId: "wa",
    topic: "tenant-protections",
    ordinanceName: "First-in-Time Tenant Screening Requirement",
    citation: "SMC 14.08.050",
    description:
      "Seattle requires landlords to offer rental units to the first qualified applicant who meets the stated screening criteria, preventing discrimination in the selection of tenants.",
    keyProvisions: [
      "Landlords must provide written screening criteria before accepting applications",
      "Applications must be screened in chronological order received",
      "Unit must be offered to the first applicant who meets all stated criteria",
      "Landlord may not skip or reject a qualified applicant in favor of a later one",
      "Screening criteria must be lawful (cannot include source of income, criminal history lookback beyond limits)",
      "Violations enforced by Seattle Office of Civil Rights; private right of action available",
    ],
    effectiveDate: "2017-01-01",
    sourceUrl: "https://www.seattle.gov/civilrights/civil-rights/fair-housing/first-in-time",
    differenceFromState:
      "WA state law does not require first-in-time screening. Seattle's ordinance is unique among major U.S. cities and aims to reduce discrimination by removing subjective landlord selection among qualified applicants.",
  },
  {
    cityId: "portland",
    cityName: "Portland",
    stateId: "or",
    topic: "tenant-protections",
    ordinanceName: "Fair Access in Renting (FAIR) Ordinance — Low-Barrier Screening Criteria",
    citation: "Portland City Code 30.01.086",
    description:
      "Portland's FAIR Ordinance limits the screening criteria landlords may use to evaluate rental applicants, focusing on reducing barriers for applicants with criminal records, prior evictions, and low credit scores.",
    keyProvisions: [
      "Landlords may not deny based on criminal history more than 7 years old (most offenses)",
      "Credit score minimum capped: cannot require score above 500",
      "Prior eviction filings (without judgment) cannot be used as basis for denial",
      "Income-to-rent ratio limited to 2:1 (cannot require more than 2x rent in income)",
      "Security deposit capped at one month's rent under Oregon SB 611",
      "Landlords must provide individualized assessment before denial based on screening criteria",
    ],
    effectiveDate: "2020-03-01",
    sourceUrl: "https://www.portland.gov/phb/rental-services/renter-protections/fair-access-renting",
    differenceFromState:
      "Oregon SB 608 and SB 611 provide statewide tenant protections but do not restrict screening criteria to this extent. Portland's FAIR Ordinance goes substantially further by limiting credit score requirements, criminal history lookback periods, and income-to-rent ratios.",
  },
  {
    cityId: "dc",
    cityName: "Washington, D.C.",
    stateId: "dc",
    topic: "tenant-protections",
    ordinanceName: "Tenant Opportunity to Purchase Act (TOPA)",
    citation: "D.C. Code ss 42-3404.01 et seq.",
    description:
      "TOPA gives DC tenants the right of first refusal to purchase their rental property when the owner decides to sell, enabling tenant cooperatives and affordable housing preservation.",
    keyProvisions: [
      "Landlord must provide written offer of sale to tenants before selling the property",
      "Single-family homes: tenant has 30 days to respond, 60 additional days to negotiate, 60 days to close",
      "Multi-family buildings: tenant association has 45 days to respond, 120 days to negotiate, 120 days to close",
      "Tenants may assign TOPA rights to a third party (often affordable housing developers)",
      "Conversion to condominium triggers additional tenant protections under DCAPA",
      "Failure to comply with TOPA voids the sale; tenants may sue for injunctive relief and damages",
    ],
    effectiveDate: "1980-09-10",
    sourceUrl: "https://dhcd.dc.gov/service/tenant-opportunity-purchase-act-topa",
    differenceFromState:
      "DC is its own jurisdiction with no state-level overlay. TOPA is virtually unique in the U.S.; no other major jurisdiction provides tenants a comparable right of first refusal on property sales. It has been a key tool for preserving affordable housing in DC.",
  },
  {
    cityId: "minneapolis",
    cityName: "Minneapolis",
    stateId: "mn",
    topic: "tenant-protections",
    ordinanceName: "Minneapolis Renter Protection Ordinances (Tenant Screening and Just Cause)",
    citation: "Minneapolis Code of Ordinances 244.2020-244.2060",
    description:
      "Minneapolis enacted a suite of renter protections including limits on tenant screening criteria, advance notice of landlord sale, and protections against retaliation.",
    keyProvisions: [
      "Landlords cannot reject applicants solely for criminal history, prior evictions, or credit score under threshold",
      "Tenants must receive 90 days' notice before lease non-renewal",
      "Advance disclosure of screening criteria before application fee is paid",
      "Tenant protection period after property sale: new owner must honor existing leases",
      "Anti-retaliation protections for tenants who assert legal rights",
      "Enforcement through Minneapolis Civil Rights Department",
    ],
    effectiveDate: "2023-01-01",
    sourceUrl: "https://www.minneapolismn.gov/government/government-data/datasource/renters-protection/",
    differenceFromState:
      "MN does not have statewide tenant screening restrictions at this level. Minneapolis goes beyond state law with criminal history, eviction record, and credit score limitations for screening.",
  },
  {
    cityId: "philadelphia",
    cityName: "Philadelphia",
    stateId: "pa",
    topic: "tenant-protections",
    ordinanceName: "Philadelphia Right to Counsel and Eviction Diversion Program",
    citation: "Philadelphia Code 9-820; Bill No. 200357",
    description:
      "Philadelphia established a right to counsel for low-income tenants in eviction proceedings and an Eviction Diversion Program requiring landlords to participate in mediation before filing.",
    keyProvisions: [
      "Free legal representation for income-eligible tenants (below 200% FPL) in eviction cases",
      "Eviction Diversion Program: landlords must engage in good-faith mediation before filing for eviction",
      "Mediation through city-contracted community organizations",
      "Covers nonpayment and lease violation proceedings in Municipal Court",
      "Emergency rental assistance integrated into diversion program",
      "Program expanded from pilot to permanent during COVID-19 pandemic",
    ],
    effectiveDate: "2022-01-01",
    sourceUrl: "https://www.phila.gov/programs/right-to-counsel-for-tenants-in-eviction-proceedings/",
    differenceFromState:
      "PA has no statewide right to counsel in eviction cases or mandatory diversion program. Philadelphia's program is locally funded and was among the first to combine right to counsel with mandatory pre-filing mediation.",
  },
  {
    cityId: "los-angeles",
    cityName: "Los Angeles",
    stateId: "ca",
    topic: "tenant-protections",
    ordinanceName: "LA Tenant Anti-Harassment Ordinance",
    citation: "LAMC Section 45.33",
    description:
      "LA enacted an anti-harassment ordinance prohibiting landlords from engaging in a wide range of harassing behaviors intended to coerce tenants into vacating their units.",
    keyProvisions: [
      "Prohibits landlord harassment including threats, intimidation, service reduction, and privacy violations",
      "Covers actions such as removing housing services, filing frivolous evictions, and construction disturbances intended to displace",
      "Private right of action: tenants may sue for actual damages, punitive damages, and attorney fees",
      "Civil penalties of $1,000-$10,000 per violation",
      "Rebuttable presumption of retaliation if adverse action taken within 180 days of tenant complaint",
      "Applies to all residential rental units within LA city limits",
    ],
    effectiveDate: "2021-08-07",
    sourceUrl: "https://housing.lacity.org/residents/anti-harassment",
    differenceFromState:
      "CA Civil Code 1940.2 prohibits certain landlord harassment but LA's ordinance covers a broader range of harassing conduct with stronger enforcement mechanisms and higher penalties than the state law.",
  },
];

// ---------------------------------------------------------------------------
// Combined export
// ---------------------------------------------------------------------------

export const MUNICIPAL_ORDINANCES: MunicipalOrdinance[] = [
  ...rentControl,
  ...minimumWage,
  ...shortTermRental,
  ...paidSickLeave,
  ...businessLicensing,
  ...cannabisDispensary,
  ...tenantProtections,
];

/** Find municipal ordinances by city */
export function findOrdinancesByCity(cityId: string): MunicipalOrdinance[] {
  return MUNICIPAL_ORDINANCES.filter((o) => o.cityId === cityId);
}

/** Find municipal ordinances by topic */
export function findOrdinancesByTopic(topic: string): MunicipalOrdinance[] {
  return MUNICIPAL_ORDINANCES.filter((o) => o.topic === topic);
}

/** Find municipal ordinances that differ from state law for a given state */
export function findLocalOverrides(stateId: string): MunicipalOrdinance[] {
  return MUNICIPAL_ORDINANCES.filter((o) => o.stateId === stateId);
}
