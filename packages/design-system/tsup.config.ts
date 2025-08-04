import { Plugin } from 'esbuild';
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { defineConfig, Options } from 'tsup';
import { dependencies, peerDependencies } from './package.json';

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
  // splitting: true,
  splitting: false, // ✅ Disable this
  external: [...Object.keys(dependencies || {}), ...Object.keys(peerDependencies || {})],
  format: ['cjs', 'esm'],
  target: ['es2022', 'es2020'],
  clean: true,
  dts: true,
  onSuccess: 'node ./scripts/inject-css.js && node ./scripts/inject-use-client.js',
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      type: 'css', // type: 'style',
      transform: postcssModules({
        // generateScopedName: '[local]__[hash:base64:5]',
        basedir: './dist',
      }),
    }),
    sassPlugin({
      filter: /\.scss$/,
      type: 'css',
    }),
  ],

  esbuildOptions(options) {
    options.jsx = 'automatic'; // https://github.com/egoist/tsup/issues/792
    options.inject = [path.resolve(__dirname, './scripts/react-import.ts')]; // !!THIS IS A WORKAROUND !! solution https://github.com/egoist/tsup/issues/792 is not working!!
  },
  loader: {
    '.scss': 'css', // 'css' OR 'file' depending on structure
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
        './src/@components/data-display/AnimatedText/index.ts',
        './src/@components/data-display/Carousel/index.ts',
        './src/@components/data-display/Chip/index.ts',
        './src/@components/data-display/Divider/index.ts',
        './src/@components/data-display/Image/index.ts',
        './src/@components/data-display/TextFillAnimation/index.ts',
        './src/@components/data-display/Tooltip/index.ts',
        './src/@components/data-display/TextUnderlineAnimation/index.ts',
        './src/@components/data-display/TripieIcon/index.ts',
        './src/@components/feedback/index.ts',
        './src/@components/feedback/SplashScreen/index.ts',
        './src/@components/feedback/Toast/index.ts',
        './src/@components/feedback/Notification/index.ts',
        './src/@components/inputs/index.ts',
        './src/@components/inputs/Switch/index.ts',
        './src/@components/inputs/TripieButton/index.ts',
        './src/@components/inputs/TripieButton/Button.client.tsx',
        './src/@components/inputs/TripieButton/Accented/index.ts',
        './src/@components/inputs/TripieButton/Animated/index.ts',
        './src/@components/inputs/TripieButton/Flick/index.ts',
        './src/@components/inputs/TripieButton/Basic/index.ts',
        './src/@components/navigation/index.ts',
        './src/@components/navigation/Drawer/index.ts',
        './src/@components/navigation/Button/index.ts',
        './src/@components/navigation/Link/index.ts',
        './src/@components/navigation/Menu/index.ts',
        './src/@components/surfaces/index.ts',
        './src/@components/surfaces/Accordion/index.ts',
        './src/@components/surfaces/AnimatedCard/index.ts',
        './src/@components/surfaces/AnimatedContainer/index.ts',
        './src/@components/surfaces/AppBar/index.ts',
        './src/@components/surfaces/Card/index.ts',
        './src/@components/x/index.ts',
        './src/@components/x/Calendar/index.ts',
        './src/@components/x/Globe/index.ts',
        './src/@components/x/Lines/index.ts',
        './src/@components/x/Map/index.ts',
        './src/@components/x/Marker/index.ts',
        './src/@components/x/MotionSlideUp/index.ts',
        './src/@components/x/Particle/Background/index.ts',
        './src/@components/x/Particle/Field/index.ts',
        './src/@components/x/RotatingBlur/index.ts',
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
        './src/@core/data-display/Headings/index.ts',
        './src/@core/data-display/List/index.ts',
        './src/@core/data-display/ListItem/index.ts',
        './src/@core/data-display/Text/index.ts',
        './src/@core/feedback/index.ts',
        './src/@core/feedback/TripieSkeleton/index.ts',
        './src/@core/layout/index.ts',
        './src/@core/layout/Background/index.ts',
        './src/@core/layout/Stack/index.ts',
        './src/@core/layout/Table/index.ts',
        './src/@core/layout/TripieContainer/index.ts',
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
      entry: [
        './src/index.ts',
        './src/shared/index.ts',
        './src/wrappers/index.tsx',
        './src/@hooks/index.ts',
        './src/provider/index.ts',
      ],
    },
  },
]);
