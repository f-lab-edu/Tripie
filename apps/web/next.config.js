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
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, './node_modules/@tripie-pyotato/design-system/src'),
    ],
    silenceDeprecations: ['legacy-js-api'],
  },

  // transpilePackages: ['@tripie-pyotato/design-system'],

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
};

export default nextConfig;
