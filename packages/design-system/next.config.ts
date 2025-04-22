/**
 * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
 */

// import { fileURLToPath } from 'url';

// const __dirname = fileURLToPath(new URL('.', import.meta.url));
import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, '../../packages/design-system/src')],

    silenceDeprecations: ['legacy-js-api'],
  },

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eu.ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'media.triple.guide',
        port: '',
        pathname: '/triple-cms/c_limit,f_auto,h_1024,w_1024/**',
      },
      {
        protocol: 'https',
        hostname: 'blogthumb.pstatic.net',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'http',
        hostname: 'blogthumb.pstatic.net',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'http',
        hostname: 'blogthumb2.naver.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogthumb2.naver.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.triple.guide',
        port: '',
        pathname: '/triple-cms/**',
      },
      {
        protocol: 'https',
        hostname: 'continentl.com',
        port: '',
        pathname: '/storage/country_flag_image/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
