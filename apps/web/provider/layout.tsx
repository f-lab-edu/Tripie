import { ReactNode } from 'react';

import AuthProvider from './NextAuthProvider';
import TanstackQuery from './TanstackQueryProvider';
import ThemeProvider from './ThemeProvider';
// import WebVitals from './WebVitals';

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TanstackQuery>{children}</TanstackQuery>
        {/* <WebVitals /> */}
        {/* <TanstackQuery>{children}</TanstackQuery> */}
      </ThemeProvider>
    </AuthProvider>
  );
}
