# @openlex/search

Full-text and semantic search across legal authorities.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/search
```

## Usage

```typescript
import { createIndex, search } from "@openlex/search";

const index = createIndex(documents);
const results = search(index, "due process equal protection");
```

## License

MIT
