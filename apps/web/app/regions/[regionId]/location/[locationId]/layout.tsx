import '@tripie-pyotato/design-system/global';

import { Container } from '@tripie-pyotato/design-system';
import Nav from 'app/home/_components/nav/Nav';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Nav />
      <Container margin="xl" applyMargin="top">
        {children}
      </Container>
    </>
  );
}
