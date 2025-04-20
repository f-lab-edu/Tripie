import { Plugin } from 'esbuild';
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'; //https://github.com/vercel/turborepo/discussions/692#discussioncomment-6415071
import { defineConfig } from 'tsup';

import fs from 'fs/promises';

interface ESBuildUseClientOptions {
  filter?: RegExp;
}

// https://github.com/evanw/esbuild/issues/3196
export const esbuildUseClient = ({ filter = /\.(ts|tsx|js|jsx)$/ }: ESBuildUseClientOptions = {}): Plugin => ({
  name: 'use-client',
  setup(build): void {
    build.onLoad({ filter }, async args => {
      // Skip files in `/core/`
      if (args.path.includes('/core/')) {
        return;
      }

      const source = await fs.readFile(args.path, 'utf8');
      const loader = args.path.endsWith('.tsx') ? 'tsx' : 'ts';

      const data = await build.esbuild.transform(source, {
        loader,
        banner: '"use client";',
      });

      return {
        warnings: data.warnings,
        contents: data.code + `//# sourceMappingURL=${data.map}`,
      };
    });
  },
});

export default defineConfig(options => ({
  entry: ['src'],
  minify: true,
  splitting: true,
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
    entry: [
      './src/index.ts',
      './src/components/index.ts',
      './src/components/core/index.ts',
      './src/shared/index.ts',
      './src/hooks/index.ts',
      './src/wrappers/index.tsx',
    ],
  },
  external: ['react', 'next'],
  // banner: {
  //   js: `'use client';`, // https://esbuild.github.io/api/#banner // https://github.com/evanw/esbuild/issues/3115#issuecomment-1546184806
  // },
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: postcssModules({ basedir: './dist' }),
    }),
    sassPlugin({
      filter: /\.scss$/,
    }),
    esbuildUseClient(),
  ],
  jsx: 'automatic', // https://github.com/egoist/tsup/issues/792
  ...options,
}));
