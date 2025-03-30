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
import { classNames } from 'wrapper';

import ROUTE from 'constants/routes';

import { useRouter } from 'next/navigation';
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
  const navigation = useRouter();
  const SHORT_CUT_LINKS = [
    { tag: 'services', link: ROUTE.SERVICES.href, contents: 'Our services' },
    {
      tag: 'contacts',
      link: ROUTE.CONTACT.href,
      contents: (
        <span className={cx('flex')}>
          Get in touch <Icon />
        </span>
      ),
    },
  ];

  return (
    <Container align="center" margin="none" className={cx('flex', 'button-wrap')}>
      {SHORT_CUT_LINKS.map(({ tag, link, contents }) => (
        <AnimatedButton
          withBorder={true}
          key={tag}
          className={cx('main-button')}
          withMinWidth={true}
          onClick={() => navigation.push(link)}
        >
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
      <Container align="center" className={cx('wrap')} margin="none">
        <PageTitle />
        <ShortCutButtons />
      </Container>
    </ParticleBackground>
  );
}
