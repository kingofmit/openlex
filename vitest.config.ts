import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: { globals: true },
  resolve: {
    alias: {
      '@openlex/core': path.resolve(__dirname, 'packages/core/src'),
      '@openlex/statutes': path.resolve(__dirname, 'packages/statutes/src'),
      '@openlex/courts': path.resolve(__dirname, 'packages/courts/src'),
      '@openlex/regulations': path.resolve(__dirname, 'packages/regulations/src'),
      '@openlex/export': path.resolve(__dirname, 'packages/export/src'),
      '@openlex/search': path.resolve(__dirname, 'packages/search/src'),
    },
  },
});
