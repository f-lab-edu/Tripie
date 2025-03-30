import '@tripie-pyotato/design-system/global';

import { Container } from '@tripie-pyotato/design-system';

import { ReactNode } from 'react';

export default function Layout({
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
