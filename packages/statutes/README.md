# @openlex/statutes

U.S. Code and state statute database, citation parsing, and statute resolution.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/statutes
```

## Usage

```typescript
import { parseCitation, resolveStatute } from "@openlex/statutes";

const cite = parseCitation("42 U.S.C. § 1983");
const statute = resolveStatute(cite);
```

## Links

- [Homepage](https://kingallem.com/open-source)
- [All packages](https://www.npmjs.com/org/openlex)
- [GitHub](https://github.com/kingofmit/openlex)

## License

MIT
