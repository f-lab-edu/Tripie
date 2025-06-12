'use client';

import { Icon, ParticleBackground, RotatingBlur } from '@tripie-pyotato/design-system/@components';
import FlickTextButton from '@tripie-pyotato/design-system/@components/FlickTextButton';

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
    <Container gap="default" alignItems="center" margin="none" justifyContent="center">
      {SHORT_CUT_LINKS.map(({ tag, link, contents }) => (
        <FlickTextButton
          withBorder={true}
          key={tag}
          sizes={'large'}
          stretched={false}
          onClick={() => navigation.push(link)}
        >
          {contents}
        </FlickTextButton>
      ))}
    </Container>
  );
};

export default function Header() {
  return (
    <ParticleBackground>
      <RotatingBlur />
      <Stack alignItems="center" zIndex={'default'} direction="column" gap="l" margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Stack>
    </ParticleBackground>
  );
}
