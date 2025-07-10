'use client';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

import '@tripie-pyotato/design-system/global';
import { ReactNode } from 'react';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useAppTheme();
  return <>{children}</>;
}
