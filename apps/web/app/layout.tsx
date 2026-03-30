import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import { ReactNode, Suspense } from 'react';
import Provider from '../provider/layout';

import Loading from 'shared/components/Loading';
import Nav from 'shared/components/Nav';
import { sharedMetaData } from './shared-metadata';

import { CARD_NOISE_URL } from '@tripie-pyotato/design-system/resource-constants';
import API from 'constants/api-routes';

export const metadata: Metadata = {
  title: sharedMetaData?.title,
  description: sharedMetaData?.description,
  openGraph: sharedMetaData,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools */}
        <link rel="preconnect" href="https://maps.geo.ap-northeast-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://maps.geo.ap-northeast-1.amazonaws.com" />
        <link rel="preconnect" href={API.MEDIA_URL} />
        <link rel="dns-prefetch" href={API.MEDIA_URL} />
        {/* CardNoise CSS background-image — used on every Card, preload here since client components can't inject into SSR <head> */}
        <link rel="preload" as="image" href={CARD_NOISE_URL(API.MEDIA_URL + '/')} fetchPriority="high" />
      </head>
      <body>
        {/* useSearchParams() should be wrapped in a suspense boundary: https://github.com/vercel/next.js/discussions/61654#discussioncomment-8820940 */}
        <Suspense fallback={<Loading />}>
          <Provider>
            <Nav />
            {children}
            <Analytics />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
