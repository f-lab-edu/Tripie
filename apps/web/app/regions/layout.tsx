import '@tripie-pyotato/design-system/global';
import type { Metadata } from 'next';

import { Container } from '@tripie-pyotato/design-system';
import Nav from 'app/home/_components/nav/Nav';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './_components/shared/regions.module.scss';

const cx = classNames.bind(Style);

export const metadata: Metadata = {
  title: 'Tripie ✈️',
  description: 'AI enhanced trip planner',
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container margin="none" className={cx('background')}>
      <Nav />
      {children}
    </Container>
  );
}
