'use client';
import { ReactNode } from 'react';
import Nav from 'shared/components/Nav';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
