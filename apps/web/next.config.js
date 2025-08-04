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

// Add other plugins here in the array if needed
const nextConfig = withPlugins([[withBundleAnalyzer]], {
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
    remotePatterns: [new URL('https://media.tripie-api.shop/**'), new URL('https://res.cloudinary.com/**')],
  },

  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
});

export default nextConfig;
