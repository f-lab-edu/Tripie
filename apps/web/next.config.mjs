// @ts-check

/**
 * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, '../../packages/design-system/src')],
    silenceDeprecations: ['legacy-js-api'],
    // prependData: `@import "@tripie-pyotato/design-system/shared";`,
    // prependData: `
    // @import "@tripie-pyotato/design-system/global";
    // @import "@tripie-pyotato/design-system/styles";
    // `,
  },

  webpack: config => {
    config.module.rules = config.module.rules.filter(rule => !(rule.test && rule.test.toString().includes('.scss')));

    config.module.rules.push({
      test: /\.module\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
  transpilePackages: ['@tripie-pyotato/design-system'],
  outputFileTracingIncludes: {
    '/api/gpt': ['node_modules/.prisma/client/**', 'node_modules/@prisma/engines/**'],
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
        pathname: '/**',
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
    ],
  },
  async redirects() {
    // dev 일 경우에만 playground 경로 접근
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/playground',
          destination: '/',
          permanent: true,
        },
        { source: '/', destination: '/home', permanent: true },
        {
          source: '/api/continentl/country-list',
          destination: 'https://continentl.com/api/country-list',
          permanent: true,
        },
        {
          source: '/api/continentl/country-list',
          destination: 'https://continentl.com/api/country-list',
          permanent: true,
        },

        // aws 위치 검색 : 검색어로 찾기
        {
          source: '/api/aws/text',
          destination:
            'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/text',
          permanent: true,
        },
        // 검색어 매칭 없을 경우: 유사 검색어로 찾기
        {
          source: '/api/aws/suggested-places',
          destination:
            'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/suggestions',
          permanent: true,
        },

        // 유사 검색어로 찾은 placeId로 위치 검색
        // https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/location/command/GetPlaceCommand/
        {
          source: '/api/place', // https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
          destination: 'https://tripie-server.vercel.app/api/trip-advisor',
          permanent: true,
        },
      ];
    }
    return [
      { source: '/', destination: '/home', permanent: true },
      {
        source: '/api/continentl/country-list',
        destination: 'https://continentl.com/api/country-list',
        permanent: true,
      },
      {
        source: '/api/continentl/country-list',
        destination: 'https://continentl.com/api/country-list',
        permanent: true,
      },

      // aws 위치 검색 : 검색어로 찾기
      {
        source: '/api/aws/text',
        destination: 'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/text',
        permanent: true,
      },
      // 검색어 매칭 없을 경우: 유사 검색어로 찾기
      {
        source: '/api/aws/suggested-places',
        destination:
          'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/suggestions',
        permanent: true,
      },

      // 유사 검색어로 찾은 placeId로 위치 검색
      // https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html
      // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/location/command/GetPlaceCommand/
      {
        source: '/api/place', // https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
        destination: 'https://tripie-server.vercel.app/api/trip-advisor',
        permanent: true,
      },

      // https://nextjs.org/docs/app/api-reference/next-config-js/redirects
      //
    ];
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/api/:path*',
  //     },
  //     {
  //       source: '/(.*)',
  //       destination: '/',
  //     },
  //   ];
  // },
};

export default nextConfig;
