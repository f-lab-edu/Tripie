import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

/**
 * https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
 */
const ThemeWrapper = dynamic(() => import('@tripie/design-system/components/body/_body'), { ssr: false });

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeWrapper>{children}</ThemeWrapper>;
}
