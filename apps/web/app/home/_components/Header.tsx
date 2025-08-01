'use client';

import { FlickTextButton, ParticleField, RotatingBlur } from '@tripie-pyotato/design-system/@components';
import TripieBackground from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';

import ROUTE from 'constants/routes';

import { useRouter } from 'next/navigation';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';

const PageTitle = () => {
  return (
    <Container display={'inline-flex'} margin="none" alignItems="center" justifyContent="center">
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
          Get in touch <TripieIcon sizes="icon" />
        </>
      ),
    },
  ];

  return (
    <Container display={'inline-flex'} gap="default" alignItems="center" margin="none" justifyContent="center">
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
    <TripieBackground variant={0} isFullScreen={true}>
      <RotatingBlur />
      <ParticleField />
      <Stack alignItems="center" zIndex={'default'} direction="column" gap="l" margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Stack>
      <TripieBackground variant={7} isFullScreen={true} position={'absolute'} zIndex="base" />
    </TripieBackground>
  );
}
