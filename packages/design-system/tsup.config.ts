import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'; //https://github.com/vercel/turborepo/discussions/692#discussioncomment-6415071
import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  entryPoints: ['src'],
  minify: true,
  splitting: true,
  treeshake: 'recommended',
  format: ['cjs', 'esm'],
  dts: { resolve: true, entry: ['./src/index.ts', './src/shared/index.ts'] },
  external: ['react'],
  banner: {
    js: `'use client';`, // https://esbuild.github.io/api/#banner // https://github.com/evanw/esbuild/issues/3115#issuecomment-1546184806
  },
  esbuildPlugins: [
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

// !!previous

// export default defineConfig(options => ({
//   entryPoints: ['src'],
//   // entry: [
//   //   './src/index.ts',
//   //   './src/index.tsx',
//   //   './src/*/*.tsx',
//   //   './src/*/*.ts',
//   //   './src/*.tsx',
//   //   './src/*.ts',
//   //   './src/*/index.ts',
//   //   './src/**/*.scss',
//   //   './src/*.scss',
//   // ],
//   format: ['cjs', 'esm'],
//   dts: { resolve: true, entry: ['./src/index.ts', './src/shared/index.ts'] },
//   external: ['react'],
//   esbuildPlugins: [
//     sassPlugin({ filter: /\.module\.scss$/, transform: postcssModules({ basedir: './dist' }) }),
//     sassPlugin({
//       filter: /\.scss$/,
//     }),

//     // sassPlugin({
//     //   filter: /base\/_.*\.scss$/,
//     //   // transform: postcssModules({ basedir: './dist/base' }),
//     //   // type: 'local-css',
//     //   async transform(source) {
//     //     const { css } = await postcss([autoprefixer]).process(source);
//     //     return css;
//     //   },
//     //   type: 'lit-css',
//     //   // postcss:postcss([autoprefixer])
//     //   // transform: postcssModules({ basedir: './dist/base' }),
//     //   // type: 'css-text',
//     // }),

//     // sassPlugin({
//     //   filter: /\.scss$/,

//     // }),
//   ],

//   ...options,
// }));

// export default defineConfig({
//   minify: true,
//   splitting: true,
//   treeshake: true,
//   format: ['cjs', 'esm'],
//   entry: [
//     './src/index.ts',
//     './src/index.tsx',
//     './src/*/*.tsx',
//     './src/*/*.ts',
//     './src/*.tsx',
//     './src/*.ts',
//     './src/*/index.ts',
//     './src/base/*.scss',
//     './src/**/*.scss',
//     './src/*.scss',
//   ],
//   outDir: 'dist',
// esbuildPlugins: [
//   sassPlugin({ filter: /\.module\.scss$/, transform: postcssModules({ basedir: './dist' }) }),
//   sassPlugin({
//     filter: /\.scss$/,
//     // type: 'lit-css',
//     // type: 'css-text',
//   }),
//   sassPlugin({
//     filter: /base\/_.*\.scss$/,
//     // transform: postcssModules({ basedir: './dist/base' }),
//     // type: 'local-css',
//     async transform(source) {
//       const { css } = await postcss([autoprefixer]).process(source);
//       return css;
//     },
//     type: 'lit-css',
//     // postcss:postcss([autoprefixer])
//     // transform: postcssModules({ basedir: './dist/base' }),
//     // type: 'css-text',
//   }),

//   // sassPlugin({
//   //   filter: /\.scss$/,

//   // }),
// ],
//   target: 'esnext',
//   dts: {
//     resolve: true,
//     // build types for `src/index.ts` only
//     // otherwise `Options` will not be exported by `tsup`, not sure how this happens, probably a bug in rollup-plugin-dts
//     entry: ['./src/index.ts', './src/shared/index.ts'],
//   },
//   metafile: true,
//   sourcemap: false,
//   clean: true,
// });
