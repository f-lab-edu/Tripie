import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  splitting: false,
  treeshake: true,
  format: ['esm', 'cjs'],
  entry: ['./src/index.ts'],
  outDir: 'dist',
});
