'use client';
// import {
//   AnimatedButton,
//   Container,
//   Headings,
//   Icon,
//   ParticleBackground,
//   RotatingBlur,
//   Text,
// } from '@tripie-pyotato/design-system/@components';
import {
  AnimatedButton,
  Headings,
  Icon,
  ParticleBackground,
  RotatingBlur,
  Text,
} from '@tripie-pyotato/design-system/@components';

import { Container } from '@tripie-pyotato/design-system/@components/core';
import { classNames } from 'wrapper';

import ROUTE from 'constants/routes';

import { useRouter } from 'next/navigation';
import Style from './header.module.scss';

const cx = classNames.bind(Style);

const PageTitle = () => {
  return (
    <Container margin="none" alignItems="center" justifyContent="center" preserveWhiteSpace={true}>
      <Headings.H1>
        <Text.Accented>AI </Text.Accented>enhanced{'\n'}trip planner.
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
          Get in touch <Icon />
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
      <Container align="center" alignItems="center" className={cx('wrap')} margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Container>
    </ParticleBackground>
  );
}
