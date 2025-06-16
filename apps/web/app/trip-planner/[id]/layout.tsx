// import Container from '@tripie-pyotato/design-system/@core/Container';
import { Container } from '@tripie-pyotato/design-system/@core';
import { ReactNode } from 'react';

import { classNames } from 'wrapper';
import Style from './sign-in.module.scss';

const cx = classNames.bind(Style);

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container margin="none" padding="none" className={cx('wrap')}>
      {children}
    </Container>
  );
}
