'use client';
import { Container } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';

export default function PostLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container margin="xl" applyMargin="top">
      {children}
    </Container>
  );
}
