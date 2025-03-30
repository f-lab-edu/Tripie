'use client';
import { Card, Container, Divider, Headings, ParticleField, Text } from '@tripie-pyotato/design-system';
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
    // <Container margin="none" className={cx('background')}>
    <Container className={cx('background', 'header')} margin="none">
      {/* <Nav /> */}
      <Container className={cx('gradient-bottom')} margin="none" />
      <Container margin="none" className={cx('login-wrap')}>
        <Card className={cx('login-card')}>
          <Container applyMargin="top" margin="l" align="center">
            <Text.Accented>
              <Headings.H2>Welcome</Headings.H2>
            </Text.Accented>
          </Container>
          <Container preserveWhiteSpace={true} align="center" applyMargin="top-bottom">
            모든 서비스를 이용하기 위해 {'\n'}로그인을 해주세요.
          </Container>
          <Divider />
          {children}
        </Card>
      </Container>
      <ParticleField />
    </Container>
    // </Container>
  );
}
