# @openlex/export

Export query results to JSON, CSV, Markdown, and legal memo format.

Part of [OpenLex](https://github.com/kingofmit/openlex) — open-source jurisdiction mapping engine for U.S. law.

## Installation

```bash
npm install @openlex/export
```

## Usage

```typescript
import { exportToCSV, exportToMarkdown } from "@openlex/export";

const csv = exportToCSV(queryResults);
const markdown = exportToMarkdown(queryResults);
```

## License

MIT
