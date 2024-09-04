import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  splitting: true,
  treeshake: true,
  format: ['esm', 'cjs'],
  entry: ['./src/index.ts', './src/server/index.ts'],
  outDir: 'dist',
});
