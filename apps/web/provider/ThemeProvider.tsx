'use client';
import { useAppTheme } from '@tripie/design-system';
import { ReactNode } from 'react';
export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useAppTheme();
  return <>{children}</>;
}
