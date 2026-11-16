# @allem-law/statutes

U.S. Code and state statute database, citation parsing, and statute resolution.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @allem-law/statutes
```

## Usage

```typescript
import { parseCitation, resolveStatute } from "@allem-law/statutes";

const cite = parseCitation("42 U.S.C. § 1983");
const statute = resolveStatute(cite);
```

## License

MIT
