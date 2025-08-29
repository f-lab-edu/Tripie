// @ts-check

import createBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
import path from 'path';
import { fileURLToPath } from 'url';

/** For __dirname in ES modules */
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

const withPurgeCss = [
  'postcss-flexbugs-fixes',
  [
    'postcss-preset-env',
    {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  ],
  [
    '@fullhuman/postcss-purgecss',
    {
      content: [
        './components/**/*.{js,jsx,ts,tsx}',
        './shared/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}', // if you're using the App Router
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body'],
    },
  ],
];

// Add other plugins here in the array if needed
const nextConfig = withPlugins([[withBundleAnalyzer, withPurgeCss]], {
  /**
   * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
   */
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, './node_modules/@tripie-pyotato/design-system/src'),
    ],
    silenceDeprecations: ['legacy-js-api'],
  },

  transpilePackages: ['@tripie-pyotato/design-system'],

  outputFileTracingIncludes: {
    '/api/gpt': ['node_modules/.prisma/client/**', 'node_modules/@prisma/engines/**'],
  },

  // compress: false,
  async rewrites() {
    return [
      {
        source: '/:cloudName/image/upload/:transform*/:publicId',
        destination: 'https://res.cloudinary.com/:cloudName/image/upload/:transform*/:publicId',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tripie-mauve.vercel.app',
          },
        ],
        destination: 'https://media.tripie-api.shop/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL('https://media.tripie-api.shop/dbzzletpw/**'),
      new URL('https://res.cloudinary.com/dbzzletpw/**'),
    ],
    // minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year in seconds
  },

  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
});

export default nextConfig;
