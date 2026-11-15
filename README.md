<p align="center">
  <img src=".github/OpenLex.png" alt="OpenLex" />
</p>

<p align="center">
  <a href="https://doi.org/10.5281/zenodo.24259139"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.24259139.svg" alt="DOI" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/jurisdictions-50%20states-teal" alt="50 States" />
</p>

Open-source jurisdiction mapping engine for U.S. law. Given a legal topic and location, returns applicable statutes, regulations, and governing bodies.

## Quick Start

```bash
npm install @openlex/core
```

```typescript
import { queryJurisdiction, AuthorityRegistry, findJurisdiction } from "@openlex/core";

const registry = new AuthorityRegistry();
// ... load statutes and regulations into registry

const result = queryJurisdiction({
  topic: "security deposits",
  state: "California",
  includeFederal: true,
}, registry);

// Returns: Cal. Civ. Code §§ 1950.5–1950.7, federal Fair Housing Act references,
// HUD as governing body, and relevant courts
```

## What It Does

| Query | Returns |
|-------|---------|
| `topic: "minimum wage", state: "TX"` | Tex. Lab. Code Ch. 62, 29 U.S.C. § 206, DOL, WHD |
| `topic: "eviction", state: "NY"` | N.Y. Real Prop. Acts. Law Art. 7, relevant NYC rent stabilization |
| `topic: "non-compete", state: "CA"` | Cal. Bus. & Prof. Code § 16600 (non-competes void) |
| `topic: "DUI", state: "FL"` | Fla. Stat. § 316.193, DHSMV, county courts |

## Packages

| Package | Description |
|---------|-------------|
| `@openlex/core` | Types, jurisdiction model, topic taxonomy, query engine, authority registry |
| `@openlex/statutes` | U.S. Code and state statute database, citation parser, cross-state comparison |
| `@openlex/regulations` | CFR and state regulatory code mapping, federal agency database |
| `@openlex/courts` | Federal court hierarchy, circuit mapping, venue determination |
| `@openlex/search` | Full-text search with TF-IDF inverted index across statutes and regulations |
| `@openlex/export` | Export to JSON, CSV, and Markdown legal research memo format |

## Features

- **50-state coverage** — All U.S. states, DC, and territories with FIPS codes
- **Legal topic taxonomy** — 30+ topics across 10 practice areas with aliases
- **Citation parsing** — Parses U.S.C., C.F.R., and state statute citations into structured data
- **Federal preemption** — Tracks state-federal legal interactions
- **Court routing** — Maps states to federal circuits and determines venue
- **Cross-state comparison** — Compare how different states handle the same legal issue
- **Search** — TF-IDF full-text search across all legal authorities
- **Export** — JSON, CSV, and Markdown legal memo output
- **Zero dependencies** — Pure TypeScript, no external runtime deps

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/) workspaces
- [Changesets](https://github.com/changesets/changesets) for versioning

## Development

```bash
git clone https://github.com/kingofmit/openlex.git
cd openlex
pnpm install
pnpm build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Disclaimer

OpenLex provides legal information, not legal advice. This data is for informational and educational purposes only. Consult a licensed attorney for advice on your specific situation.

## Support

If you find OpenLex useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](./LICENSE) - [Ahmed Allem](https://kingallem.com)
