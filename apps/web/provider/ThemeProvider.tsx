'use client';
import { useAppTheme } from '@tripie-pyotato/design-system';
import { ReactNode, useEffect } from 'react';
export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { setMode } = useAppTheme();

  useEffect(() => {
    setMode('dark');
  }, []);

  return <>{children}</>;
}
