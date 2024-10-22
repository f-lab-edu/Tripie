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
    includePaths: [path.join(__dirname, 'styles')],
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
    ],
  },
  async redirects() {
    // dev 일 경우에만 playground 경로 접근
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/playground/*',
          destination: '/',
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
        source: '/api/aws/place-by-id/:path*', // https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
        destination:
          'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/places/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
