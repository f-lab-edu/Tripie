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

      // aws 지역 검색
      {
        source: '/api/aws/text',
        destination: 'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/text',
        permanent: true,
      },
      {
        source: '/api/aws/suggested-places',
        destination:
          'https://places.geo.ap-northeast-1.amazonaws.com/places/v0/indexes/explore.place.Esri/search/suggestions',
        permanent: true,
      },

      // {
      //   source: '/api/open-street-map',
      //   destination: 'https://tripie-server.vercel.app/api/location',
      //   permanent: true,
      // },
      // {
      //   source: '/api/location',
      //   destination: 'https://tripie-server.vercel.app/api/location',
      //   permanent: true,
      // },

      //https://nominatim.openstreetmap.org/search
      // {
      //   source: '/api/location',

      //   destination: 'https://tripie-server.vercel.app/api/search-location',
      //   permanent: true,
      // },
      // https://places.geo.ap-southeast-1.amazonaws.com/places/v0/indexes/location.aws.com.demo.places.Esri.PlaceIndex/places/
      // {
      //   source: '/api/aws/location',
      //   // destination:`https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
      //   destination:
      //     'https://places.geo.ap-southeast-1.amazonaws.com/places/v0/indexes/ExamplePlaceIndex/search/place_name',
      //   permanent: true,
      // },

      //

      // {
      //   source: '/api/place-info',
      //   destination: 'https://places.googleapis.com/v1/places:searchText',
      //   permanent: true,
      // },
      // {
      //   source: '/api/places',
      //   destination: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
      //   permanent: true,
      // },
      // {
      //   source: '/api/place-photos',
      //   destination: 'https://maps.googleapis.com/maps/api/place/photo',
      //   permanent: true,
      // },
    ];
  },
  // crossOrigin: 'anonymous',
};

export default nextConfig;
