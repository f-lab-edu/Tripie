import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import { ReactNode, Suspense } from 'react';
import Provider from '../provider/layout';

import Loading from 'shared/components/Loading';
import Nav from 'shared/components/Nav';
import { sharedMetaData } from './shared-metadata';

import API from 'constants/api-routes';
import Head from 'next/head';

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
      <Head>
        {/* http://localhost:3000/_next/static/chunks/_d41a2fc5._.css */}
        {/* <link rel="preload" href="/_next/static/chunks/_d41a2fc5.css" as="style" /> */}
        {/* <link rel="preload" href="/_next/static/chunks/_9befec6e.css" as="style" /> */}
        {/* https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools */}
        <link rel="preconnect" href="https://maps.geo.ap-northeast-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://maps.geo.ap-northeast-1.amazonaws.com" />.
        <link rel="preconnect" href={API.MEDIA_URL}></link>
        <link rel="dns-prefetch" href={API.MEDIA_URL}></link>
      </Head>
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
