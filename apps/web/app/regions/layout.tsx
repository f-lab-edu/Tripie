import '@tripie-pyotato/design-system/global';
import type { Metadata } from 'next';

import { Container } from '@tripie-pyotato/design-system';
import Nav from 'app/home/_components/nav/Nav';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './layout.module.scss';
import { sharedMetaData } from './shared-metadata';

const cx = classNames.bind(Style);

export const metadata: Metadata = {
  title: sharedMetaData?.title,
  description: sharedMetaData?.description,
  openGraph: sharedMetaData,
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
