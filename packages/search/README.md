# @allem-law/search

Full-text and semantic search across legal authorities.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @allem-law/search
```

## Usage

```typescript
import { createIndex, search } from "@allem-law/search";

const index = createIndex(documents);
const results = search(index, "due process equal protection");
```

## License

MIT
