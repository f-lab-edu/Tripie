import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import Loading from 'shared/components/Loading';
import Provider from '../provider/layout';

import Nav from 'shared/components/Nav';
import { sharedMetaData } from './shared-metadata';

export const metadata: Metadata = {
  title: sharedMetaData?.title,
  description: sharedMetaData?.description,
  openGraph: sharedMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head />
      <body>
        {/* useSearchParams() should be wrapped in a suspense boundary: https://github.com/vercel/next.js/discussions/61654#discussioncomment-8820940 */}
        <Suspense fallback={<Loading />}>
          <Provider>
            <Nav />
            {children}
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
