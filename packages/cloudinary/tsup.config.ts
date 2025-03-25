import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  splitting: false,
  treeshake: true,
  format: 'esm',
  entry: ['./src/index.ts'],
  outDir: 'dist',
});
