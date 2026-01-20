'use client';

import { Card, Divider, ParticleBackground } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import API from 'constants/api-routes';
import { ReactNode } from 'react';
import TestAccountInput from './_components/TestAccountInput';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ParticleBackground>
      <Container
        display="inline-flex"
        margin="none"
        padding="none"
        justifyContent="center"
        alignItems="center"
        zIndex="default"
      >
        <Container fillAvailable={false} margin="none" padding="none">
          <Card sizes="large" cloudinaryUrl={API.MEDIA_URL}>
            <Stack direction="column" gap="default" margin="none" display="inline-flex" alignItems="center">
              <Text.Accented>
                <Headings.H2>Welcome</Headings.H2>
              </Text.Accented>
              <Text alignItems="center" preserveWhiteSpace="none" applyMargin="top-bottom">
                회원전용 서비스를 이용하기 위해 로그인을 해주세요.
              </Text>
              <Divider />
              {children}
              <Container margin="m" applyMargin="top">
                <TestAccountInput />
              </Container>
            </Stack>
          </Card>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
