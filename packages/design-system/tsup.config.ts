import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'; //https://github.com/vercel/turborepo/discussions/692#discussioncomment-6415071
import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  entry: ['src'],
  minify: true,
  splitting: true,
  treeshake: 'recommended',
  format: ['cjs', 'esm'],
  dts: { resolve: true, entry: ['./src/index.ts', './src/shared/index.ts'] },
  external: ['react', 'next'],
  banner: {
    js: `'use client';`, // https://esbuild.github.io/api/#banner // https://github.com/evanw/esbuild/issues/3115#issuecomment-1546184806
  },
  esbuildPlugins: [
    // useClientPlugin,
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: postcssModules({ basedir: './dist' }),
    }),
    sassPlugin({
      filter: /\.scss$/,
    }),
  ],
  ...options,
}));
