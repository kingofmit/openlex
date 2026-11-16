# @allem-law/regulations

CFR and state regulatory code mapping, agency resolution.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @allem-law/regulations
```

## Usage

```typescript
import { lookupCFR, resolveAgency } from "@allem-law/regulations";

const reg = lookupCFR({ title: 21, part: 314 });
const agency = resolveAgency("FDA");
```

## License

MIT
