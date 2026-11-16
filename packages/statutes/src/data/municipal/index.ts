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
// Combined export
// ---------------------------------------------------------------------------

export const MUNICIPAL_ORDINANCES: MunicipalOrdinance[] = [
  ...rentControl,
  ...minimumWage,
  ...shortTermRental,
  ...paidSickLeave,
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
