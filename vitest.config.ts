import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: { globals: true },
  resolve: {
    alias: {
      '@allem-law/core': path.resolve(__dirname, 'packages/core/src'),
      '@allem-law/statutes': path.resolve(__dirname, 'packages/statutes/src'),
      '@allem-law/courts': path.resolve(__dirname, 'packages/courts/src'),
      '@allem-law/regulations': path.resolve(__dirname, 'packages/regulations/src'),
      '@allem-law/export': path.resolve(__dirname, 'packages/export/src'),
      '@allem-law/search': path.resolve(__dirname, 'packages/search/src'),
    },
  },
});
