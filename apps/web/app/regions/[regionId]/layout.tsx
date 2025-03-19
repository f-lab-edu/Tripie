import '@tripie-pyotato/design-system/global';

import { Container } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';

export default function Layout({
  children,
  select,
  list,
}: Readonly<{
  children: ReactNode;
  select: ReactNode;
  list: ReactNode;
}>) {
  return (
    <>
      <Container margin="xl" applyMargin="top">
        {children}
      </Container>
      <Container>{select}</Container>
      <Container>{list}</Container>
    </>
  );
}
