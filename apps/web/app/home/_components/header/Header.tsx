'use client';

import { AnimatedButton, Icon, ParticleBackground, RotatingBlur } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import ROUTE from 'constants/routes';

import { useRouter } from 'next/navigation';

const PageTitle = () => {
  return (
    <Container margin="none" alignItems="center" justifyContent="center">
      <Headings.H1>
        <Text.Accented>AI</Text.Accented> enhanced{'\n'}trip planner.
      </Headings.H1>
    </Container>
  );
};

const ShortCutButtons = () => {
  const navigation = useRouter();
  const SHORT_CUT_LINKS = [
    { tag: 'services', link: ROUTE.SERVICES.href, contents: 'Our services' },
    {
      tag: 'contacts',
      link: ROUTE.CONTACT.href,
      contents: (
        <>
          Get in touch <Icon sizes="icon" />
        </>
      ),
    },
  ];

  return (
    <Container align="center" margin="none" justifyContent="center" gap="default">
      {SHORT_CUT_LINKS.map(({ tag, link, contents }) => (
        <AnimatedButton withBorder={true} key={tag} withMinWidth={true} onClick={() => navigation.push(link)}>
          {contents}
        </AnimatedButton>
      ))}
    </Container>
  );
};

export default function Header() {
  return (
    <ParticleBackground>
      <RotatingBlur />
      <Stack align="center" zIndex={'default'} alignItems="center" direction="column" gap="l" margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Stack>
    </ParticleBackground>
  );
}
