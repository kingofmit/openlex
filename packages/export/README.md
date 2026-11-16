# @allem-law/export

Export query results to JSON, CSV, Markdown, and legal memo format.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @allem-law/export
```

## Usage

```typescript
import { exportToCSV, exportToMarkdown } from "@allem-law/export";

const csv = exportToCSV(queryResults);
const markdown = exportToMarkdown(queryResults);
```

## License

MIT
