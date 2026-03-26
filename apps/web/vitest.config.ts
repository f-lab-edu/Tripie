import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'utils'),
      models: path.resolve(__dirname, 'models'),
      constants: path.resolve(__dirname, 'constants'),
      hooks: path.resolve(__dirname, 'hooks'),
      app: path.resolve(__dirname, 'app'),
      shared: path.resolve(__dirname, 'shared'),
    },
  },
  css: {
    postcss: { plugins: [] },
  },
});
