'use client';
import { useAppTheme } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';
export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useAppTheme();
  return <>{children}</>;
}
