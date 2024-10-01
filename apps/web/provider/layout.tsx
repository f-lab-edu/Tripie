import { ReactNode } from 'react';

import dynamic from 'next/dynamic';
import { MapProvider } from './MapProvider';
import TanstackQuery from './TanstackQueryProvider';

/**
 * https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
 */
const ThemeProvider = dynamic(() => import('./ThemeProvider'), { ssr: false });

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider>
      <TanstackQuery>
        <MapProvider>{children}</MapProvider>
      </TanstackQuery>
    </ThemeProvider>
  );
}
