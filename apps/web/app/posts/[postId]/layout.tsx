import Container from '@tripie-pyotato/design-system/@core/Container';
import { ReactNode } from 'react';
export default function Layout({
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
