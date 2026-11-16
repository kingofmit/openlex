# @openlex/react

React hooks and components for the OpenLex jurisdiction mapping engine.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/react
```

## Usage

```typescript
import { useJurisdiction, JurisdictionPicker } from "@openlex/react";

const { jurisdiction, setJurisdiction } = useJurisdiction();
return <JurisdictionPicker value={jurisdiction} onChange={setJurisdiction} />;
```

## Links

- [Homepage](https://kingallem.com/open-source)
- [All packages](https://www.npmjs.com/org/openlex)
- [GitHub](https://github.com/kingofmit/openlex)

## License

MIT
