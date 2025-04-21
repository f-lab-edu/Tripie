'use client';
import { Container } from '@tripie-pyotato/design-system/@core';
import { ReactNode } from 'react';

export default function PostLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container margin="xl" applyMargin="top" justifyContent="center">
      {children}
    </Container>
  );
}
