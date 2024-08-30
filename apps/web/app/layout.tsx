import type { Metadata } from 'next';

import '@tripie/design-system/global';
import { ReactNode } from 'react';
import Provider from '../provider/layout';

export const metadata: Metadata = {
  title: 'Tripie ✈️',
  description: 'AI enhanced trip planner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
