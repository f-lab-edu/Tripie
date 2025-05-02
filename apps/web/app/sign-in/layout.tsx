'use client';
import { Card, Divider, ParticleField } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
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
    <Container className={cx('background', 'header')} margin="none">
      <Container className={cx('gradient-bottom')} margin="none" />
      <Container margin="none" className={cx('login-wrap')}>
        <Card className={cx('login-card')}>
          <Container applyMargin="top" margin="l" alignItems="center">
            <Text.Accented>
              <Headings.H2>Welcome</Headings.H2>
            </Text.Accented>
          </Container>
          <Container align="center" applyMargin="top-bottom">
            모든 서비스를 이용하기 위해 {'\n'}로그인을 해주세요.
          </Container>
          <Divider />
          <Container applyMargin="top-bottom">{children}</Container>
        </Card>
      </Container>
      <ParticleField />
    </Container>
  );
}
