import { Plugin } from 'esbuild';
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { defineConfig, Options } from 'tsup';

// components not marked with "use client;"
const coreEntries = fg.sync(path.resolve(__dirname, 'src/@core/**/*.{ts,tsx}'), {
  ignore: ['**/*.client.ts', '**/*.client.tsx'],
});

// hooks marked with "use client;"
const clientHookEntries = fg.sync(path.resolve(__dirname, 'src/@hooks/*.client.{ts,tsx}'));

// components marked with "use client;"
const clientComponentEntries = fg.sync(path.resolve(__dirname, 'src/@components/**/*.client.{ts,tsx}'));

// other entries
const otherEntries = fg.sync(path.resolve(__dirname, 'src/**/*.{ts,tsx,scss}'), {
  ignore: ['**/*.client.ts', '**/*.client.tsx'],
});

interface ESBuildUseClientOptions {
  filter?: RegExp;
}

// https://github.com/evanw/esbuild/issues/3196
// export const esbuildUseClient = ({ filter = /\.(ts|tsx|js|jsx)$/ }: ESBuildUseClientOptions = {}): Plugin => ({

export const esbuildUseClient = ({ filter = /\/.client\.tsx?$/ }: ESBuildUseClientOptions = {}): Plugin => ({
  name: 'use-client',
  setup(build): void {
    build.onLoad({ filter }, async args => {
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

const defaultConfig: Partial<Options> = {
  minify: true,
  splitting: true,
  external: ['react', 'next'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
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
  esbuildOptions(options) {
    options.jsx = 'automatic'; // https://github.com/egoist/tsup/issues/792
    options.inject = [path.resolve(__dirname, './react-import.ts')]; // !!THIS IS A WORKAROUND !! solution https://github.com/egoist/tsup/issues/792 is not working!!
  },
};

export default defineConfig(options => [
  {
    ...options,
    entry: clientComponentEntries,
    outDir: 'dist/@components',
    ...defaultConfig,
    dts: {
      resolve: true,
      entry: [
        './src/@components/data-display/index.ts',
        './src/@components/feedback/index.ts',
        './src/@components/inputs/index.ts',
        './src/@components/navigation/index.ts',
        './src/@components/surfaces/index.ts',
        './src/@components/x/index.ts',
        './src/@components/index.ts',
      ],
    },
  },
  {
    ...options,
    entry: coreEntries,
    outDir: 'dist/@core',
    ...defaultConfig,
    dts: {
      resolve: true,
      entry: [
        './src/@core/data-display/index.ts',
        './src/@core/feedback/index.ts',
        './src/@core/layout/index.ts',
        './src/@core/index.ts',
      ],
    },
  },
  {
    ...options,
    entry: clientHookEntries,
    outDir: 'dist/@hooks',
    ...defaultConfig,
  },

  {
    ...options,
    entry: otherEntries,
    outDir: 'dist',
    ...defaultConfig,
    dts: {
      resolve: true,
      entry: ['./src/index.ts', './src/shared/index.ts', './src/wrappers/index.tsx', './src/@hooks/index.ts'],
    },
  },
]);
