'use client';

import { Container, Headings, Icon, MotionSlideUp, Text } from '@tripie-pyotato/design-system';
import classNames from 'wrapper';

import ROUTE from 'constants/routes';
import Link from 'next/link';

import Contact from './Contact';
import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const contacts = {
  Email: (
    <Container margin="none" align="left" className={cx('flex')}>
      <Link href="mailto:mail@tripie-pyotato.com?subject=Hello&body=How%20can%20I%20help%20you?">
        mail@tripie-pyotato.com
      </Link>
      <Icon sizes={'large'} />
    </Container>
  ),
  Github: (
    <Container margin="none" align="left" className={cx('flex')}>
      <Link href="mailto:pyotato.dev@gmail.com?subject=Hello&body=How%20can%20I%20help%20you?">
        <Text.Accented>@</Text.Accented> Pyotato
      </Link>
      <Icon sizes={'large'} />
    </Container>
  ),
};

export default function Contacts() {
  return (
    <section className={cx('contact')} id={ROUTE.CONTACT.label}>
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Container applyMargin="top" margin="sm">
            <Headings.H2>
              Get in <Text.Accented>touch</Text.Accented>
            </Headings.H2>
          </Container>
        </MotionSlideUp>
        <Container margin="l" applyMargin="top-bottom">
          {Object.keys(contacts).map(key => (
            <Container key={key} applyMargin="bottom">
              <Contact sectionName={key} content={contacts[key as keyof typeof contacts]} />
            </Container>
          ))}
        </Container>
      </Container>
    </section>
  );
}
