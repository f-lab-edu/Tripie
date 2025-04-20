'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@components/core';
import { classNames } from 'wrapper';

import ROUTE from 'constants/routes';

import Contact from './Contact';
import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const contacts = {
  Email: {
    child: <>mail@tripie-pyotato.com</>,
    link: 'mailto:mail@tripie-pyotato.com?subject=Hello&body=How%20can%20I%20help%20you?',
  },
  Github: {
    child: (
      <>
        <Text.Accented>@</Text.Accented> Pyotato
      </>
    ),
    link: 'mailto:pyotato.dev@gmail.com?subject=Hello&body=How%20can%20I%20help%20you?',
  },
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
