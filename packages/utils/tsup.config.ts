import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  ...options,
  minify: true,
  splitting: true,
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
    entry: [
      './src/index.ts',
      './src/date/index.ts',
      './src/debounce/index.ts',
      './src/number/index.ts',
      './src/window/index.ts',
    ],
  },
  // http://lekoarts.de/garden/tsup-excluding-files-from-the-build/
  entry: [
    '!__tests__',
    'src/**/*.ts',
    '!coverage.json',
    '!src/*/coverage.json',
    '!src/**/*/coverage.json',
    '!src/**/*/coverage.*',
  ],
}));
