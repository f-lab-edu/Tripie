// @ts-check

// /**
//  * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
//  */

import path from 'path';
import { fileURLToPath } from 'url';

/** For __dirname in ES modules */
const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, '../../packages/design-system/src')],
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

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eu.ui-avatars.com',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'media.triple.guide',
        pathname: '/triple-cms/**',
      },
      {
        protocol: 'https',
        hostname: 'blogthumb.pstatic.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'blogthumb.pstatic.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'blogthumb2.naver.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogthumb2.naver.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'continentl.com',
        pathname: '/storage/country_flag_image/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.tripie-api.shop',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
