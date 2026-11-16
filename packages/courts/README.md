# @openlex/courts

Court system hierarchy, venue determination, and judicial structure.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/courts
```

## Usage

```typescript
import { findCourt, determineVenue } from "@openlex/courts";

const court = findCourt("S.D.N.Y.");
const venue = determineVenue({ state: "NY", district: "Southern" });
```

## Links

- [Homepage](https://kingallem.com/open-source)
- [All packages](https://www.npmjs.com/org/openlex)
- [GitHub](https://github.com/kingofmit/openlex)

## License

MIT
