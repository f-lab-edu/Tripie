'use client';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';
import { ReactNode } from 'react';

import '@tripie-pyotato/design-system/font';
import '@tripie-pyotato/design-system/global';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useAppTheme();
  return <>{children}</>;
}
