'use client';
import { Card, ParticleBackground } from '@tripie-pyotato/design-system/@components';
import { Container, Divider, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
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
    <ParticleBackground>
      <Container
        margin="none"
        padding="m"
        applyPadding="left-right"
        justifyContent="center"
        alignItems="center"
        zIndex="default"
      >
        <Card className={cx('login-card')}>
          <Stack direction="column" gap="default" margin="none">
            <Text.Accented>
              <Headings.H2>Welcome</Headings.H2>
            </Text.Accented>
            <Text alignItems="center" preserveWhiteSpace="none" applyMargin="top-bottom">
              회원전용 서비스를 이용하기 위해 로그인을 해주세요.
            </Text>
            <Divider />
            {children}
          </Stack>
        </Card>
      </Container>
    </ParticleBackground>
  );
}
