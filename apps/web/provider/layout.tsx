import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
