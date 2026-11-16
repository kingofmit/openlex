# @openlex/regulations

CFR and state regulatory code mapping, agency resolution.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/regulations
```

## Usage

```typescript
import { lookupCFR, resolveAgency } from "@openlex/regulations";

const reg = lookupCFR({ title: 21, part: 314 });
const agency = resolveAgency("FDA");
```

## Links

- [Homepage](https://kingallem.com/open-source)
- [All packages](https://www.npmjs.com/org/openlex)
- [GitHub](https://github.com/kingofmit/openlex)

## License

MIT
