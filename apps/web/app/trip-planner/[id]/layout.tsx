import Container from '@tripie-pyotato/design-system/@core/Container';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { ReactNode } from 'react';

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
