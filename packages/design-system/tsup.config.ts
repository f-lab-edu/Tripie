import { sassPlugin } from 'esbuild-sass-plugin'; //https://github.com/vercel/turborepo/discussions/692#discussioncomment-6415071
import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  splitting: false,
  treeshake: true,
  format: ['cjs', 'esm'],
  entry: [
    './src/index.ts',
    './src/index.tsx',
    './src/*/*.tsx',
    './src/*/*.ts',
    './src/*.tsx',
    './src/*.ts',
    './src/*/index.ts',
    './src/global.scss',
    './src/mixins.scss',
    './src/variables.scss',
    './src/**/*.scss',
  ],
  outDir: 'dist',
  esbuildPlugins: [sassPlugin()],
  target: ['es2022', 'node18', 'esnext'],
  dts: {
    resolve: true,
    // build types for `src/index.ts` only
    // otherwise `Options` will not be exported by `tsup`, not sure how this happens, probably a bug in rollup-plugin-dts
    entry: './src/index.ts',
  },
  metafile: true,
  sourcemap: false,
  clean: true,
});
