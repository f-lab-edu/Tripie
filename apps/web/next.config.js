// @ts-check

import createBundleAnalyzer from '@next/bundle-analyzer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** For __dirname in ES modules */
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

const nextConfig = withBundleAnalyzer({
  /**
   * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
   */
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, './node_modules/@tripie-pyotato/design-system/src'),
    ],
    loadPaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, './node_modules/@tripie-pyotato/design-system/src'),
    ],
  },

  productionBrowserSourceMaps: process.env.ANALYZE === 'true',

  experimental: {
    optimizePackageImports: ['@tripie-pyotato/design-system'],
    optimizeCss: true,
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
