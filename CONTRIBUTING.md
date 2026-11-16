# Contributing to OpenLex

Thank you for your interest in contributing to OpenLex, an open-source jurisdiction mapping engine for U.S. law.

## Getting Started

1. Clone the repository: `git clone https://github.com/kingofmit/openlex.git`
2. Install dependencies: `pnpm install`
3. Build all packages: `pnpm build`
4. Run all tests: `pnpm test`

## Project Structure

OpenLex is a monorepo with 9 packages:

| Package | Description |
|---------|-------------|
| `@openlex/core` | Types, jurisdiction model, topic taxonomy, and query engine |
| `@openlex/statutes` | U.S. Code and state statute database, citation parsing, and statute resolution |
| `@openlex/courts` | Court system hierarchy, venue determination, and judicial structure |
| `@openlex/regulations` | CFR and state regulatory code mapping, agency resolution, and preemption rules |
| `@openlex/search` | Full-text and semantic search across legal authorities |
| `@openlex/export` | Export query results to JSON, CSV, Markdown, and legal memo format |
| `@openlex/react` | React hooks and components for building legal research UIs |
| `@openlex/api` | REST API server for the jurisdiction mapping engine |
| `@openlex/demo` | Demo application showcasing OpenLex capabilities |

## Adding or Updating Statute Data

Statute data files live in `packages/statutes/src/data/`. Each topic is a `.ts` file that exports a `TopicDataFile`.

### Step-by-step

1. Open or create a topic file in `packages/statutes/src/data/` (e.g., `minimum-wage.ts`).
2. Import the `TopicDataFile` type from `../loader`.
3. Export a named constant of type `TopicDataFile` containing a `topic`, `description`, `federalBaseline`, and `entries` array.
4. Each entry in the `entries` array must include all required fields:
   - **id** -- unique identifier (e.g., `ca-minimum-wage`)
   - **jurisdiction** -- lowercase two-letter state code (e.g., `ca`, `tx`, `ny`)
   - **title** -- human-readable title of the statute
   - **code** -- the code name (e.g., `Cal. Lab. Code`)
   - **section** -- section number (e.g., `ss 1182.12`)
   - **citation** -- full citation string
   - **sourceUrl** -- HTTPS URL from an official government source
   - **lastVerified** -- date the entry was last verified, in `YYYY-MM-DD` format
   - **keyProvisions** -- non-empty array of strings summarizing key provisions
   - **topics** -- array of topic IDs from the taxonomy (see `packages/core/src/topics.ts`)
5. Monetary values (`monetaryValues` array) must follow these rules:
   - `type` must be one of: `limit`, `fine`, `fee`, `threshold`, `wage`, `penalty`, `duration`
   - `unit` must be one of: `usd`, `usd-per-hour`, `usd-per-month`, `usd-per-year`, `months`, `years`, `days`, `multiplier`, `ratio`, `ounces`, `grams`, `percent`
6. All dates must be in `YYYY-MM-DD` format.
7. `sourceUrl` must be an HTTPS URL from an official government source (state legislature, DOL, etc.).
8. If the topic file is new, add it to `packages/statutes/src/data/index.ts`.
9. Run `pnpm test` to validate. The data integrity tests check all entries for required fields, valid jurisdictions, URL formats, date formats, and monetary value constraints.

## State Legislature URL Directory

When adding `sourceUrl` or `url` values, refer to the official legislature or code website for each state:

| State | Code | Legislature / Code Website |
|-------|------|---------------------------|
| Alabama | AL | legislature.state.al.us |
| Alaska | AK | akleg.gov |
| Arizona | AZ | azleg.gov |
| Arkansas | AR | arkleg.state.ar.us |
| California | CA | leginfo.legislature.ca.gov |
| Colorado | CO | leg.colorado.gov |
| Connecticut | CT | cga.ct.gov |
| Delaware | DE | legis.delaware.gov |
| Florida | FL | leg.state.fl.us |
| Georgia | GA | legis.ga.gov |
| Hawaii | HI | capitol.hawaii.gov |
| Idaho | ID | legislature.idaho.gov |
| Illinois | IL | ilga.gov |
| Indiana | IN | iga.in.gov |
| Iowa | IA | legis.iowa.gov |
| Kansas | KS | kslegislature.org |
| Kentucky | KY | legislature.ky.gov |
| Louisiana | LA | legis.la.gov |
| Maine | ME | legislature.maine.gov |
| Maryland | MD | mgaleg.maryland.gov |
| Massachusetts | MA | malegislature.gov |
| Michigan | MI | legislature.mi.gov |
| Minnesota | MN | revisor.mn.gov |
| Mississippi | MS | legislature.ms.gov |
| Missouri | MO | moga.mo.gov |
| Montana | MT | leg.mt.gov |
| Nebraska | NE | nebraskalegislature.gov |
| Nevada | NV | leg.state.nv.us |
| New Hampshire | NH | gencourt.state.nh.us |
| New Jersey | NJ | njleg.state.nj.us |
| New Mexico | NM | nmlegis.gov |
| New York | NY | nysenate.gov |
| North Carolina | NC | ncleg.gov |
| North Dakota | ND | legis.nd.gov |
| Ohio | OH | legislature.ohio.gov |
| Oklahoma | OK | oklegislature.gov |
| Oregon | OR | oregonlegislature.gov |
| Pennsylvania | PA | legis.state.pa.us |
| Rhode Island | RI | rilegislature.gov |
| South Carolina | SC | scstatehouse.gov |
| South Dakota | SD | sdlegislature.gov |
| Tennessee | TN | capitol.tn.gov |
| Texas | TX | capitol.texas.gov |
| Utah | UT | le.utah.gov |
| Vermont | VT | legislature.vermont.gov |
| Virginia | VA | virginiageneralassembly.gov |
| Washington | WA | leg.wa.gov |
| West Virginia | WV | wvlegislature.gov |
| Wisconsin | WI | legis.wisconsin.gov |
| Wyoming | WY | wyoleg.gov |
| District of Columbia | DC | code.dccouncil.gov |

## Adding Court Data

Court system data lives in `packages/courts/src/data/`. The primary file is `state-courts.ts`, which exports an array of `StateCourtSystem` objects.

Each `StateCourtSystem` includes:
- `stateId` -- lowercase two-letter state code
- `stateName` -- full state name
- `supremeCourt` -- a single `Court` object for the state's highest court
- `appellateCourts` -- array of intermediate appellate `Court` objects
- `trialCourts` -- array of general jurisdiction trial `Court` objects
- `specializedCourts` -- array of specialized `Court` objects (tax, probate, family, etc.)
- `hasIntermediateAppellate` -- boolean (11 states lack an intermediate appellate court)
- `judicialDistricts` -- number of judicial districts, or `null`
- `notes` -- array of strings noting quirks (e.g., New York's inverted naming)

Federal district courts are in `federal-districts.ts`.

## Adding Preemption Rules

Preemption rule data lives in `packages/regulations/src/data/preemption/`. Each domain (employment, firearms, privacy, etc.) has its own file exporting a `PreemptionDomain`.

Each `PreemptionRule` within a domain includes:
- `id` -- unique identifier
- `federalStatute` -- name of the federal law
- `federalCitation` -- citation to the federal statute
- `type` -- one of `express`, `field`, `conflict`, `floor`, `ceiling`
- `scope` -- description of what the rule covers
- `stateCanExceed` -- whether states can impose stricter requirements
- `affectedTopics` -- array of topic IDs
- `affectedStates` -- array of state codes, or `"all"`
- `sourceUrl` -- HTTPS URL to the federal statute text

If adding a new domain, create a new file and register it in `packages/regulations/src/data/preemption/index.ts`.

## Running the API

```bash
pnpm --filter @openlex/api start
```

The API server exposes REST endpoints for querying statutes, courts, regulations, and comparisons.

## Running the Demo

```bash
pnpm --filter @openlex/demo build && pnpm --filter @openlex/demo start
```

## Code Style

- TypeScript in strict mode across all packages
- CommonJS (CJS) output format
- No external runtime dependencies in core packages (`@openlex/core`, `@openlex/statutes`, `@openlex/courts`, `@openlex/regulations`, `@openlex/search`, `@openlex/export`)
- `@openlex/react` has a peer dependency on React 18 or 19
- `@openlex/api` and `@openlex/demo` may use runtime dependencies as needed

## PR Process

1. Create a feature branch from `main`.
2. Add tests for new functionality.
3. Ensure `pnpm build && pnpm test` passes locally.
4. CI runs automated validation on data file changes, including:
   - Required field checks on all statute entries
   - Jurisdiction code validation
   - URL format and HTTPS enforcement
   - Date format validation
   - Monetary value type and unit validation
   - Key provision non-empty checks
5. Submit a PR with a clear description of what changed and why.

## Questions?

Open an issue or reach out at allem.ahmed@gmail.com.
