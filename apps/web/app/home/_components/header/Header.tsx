'use client';
import {
  AnimatedButton,
  Container,
  Headings,
  Icon,
  ParticleBackground,
  RotatingBlur,
  Text,
} from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import ROUTE from 'constants/routes';
import Link from 'next/link';

import Nav from '../nav/Nav';

import Style from './header.module.scss';

const cx = classNames.bind(Style);

const PageTitle = () => {
  return (
    <Container margin="none" align="center" className={cx('preserve-white-space')}>
      <Headings.H1>
        <Text.Accented>AI </Text.Accented>enhanced{'\n'}trip planner.
      </Headings.H1>
    </Container>
  );
};

const ShortCutButtons = () => {
  const SHORT_CUT_LINKS = [
    { tag: 'services', link: ROUTE.SERVICES.href, contents: 'Our services' },
    {
      tag: 'contacts',
      link: ROUTE.CONTACT.href,
      contents: (
        <Container margin="none" className={cx('flex')}>
          Get in touch <Icon />
        </Container>
      ),
    },
  ];

  return (
    <Container align="center" margin="none" className={cx('flex', 'button-wrap')}>
      {SHORT_CUT_LINKS.map(({ tag, link, contents }) => (
        <Link href={link} key={tag}>
          <AnimatedButton withBorder={true} className={cx('main-button')} hasMin={true}>
            {contents}
          </AnimatedButton>
        </Link>
      ))}
    </Container>
  );
};

export default function Header() {
  return (
    <ParticleBackground>
      <Nav />
      <RotatingBlur />
      <Container align="center" className={cx('wrap')} margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Container>
    </ParticleBackground>
  );
}
