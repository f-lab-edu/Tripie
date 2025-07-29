'use client';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';
import { ReactNode } from 'react';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useAppTheme();
  return <>{children}</>;
}
