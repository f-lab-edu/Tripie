'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system/@components';
import { Background, Container, Headings, Text } from '@tripie-pyotato/design-system/@core';

import ROUTE from 'constants/routes';

import Contact from './Contact';

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
    <Background variant={1} applyPadding="left-right" id={ROUTE.CONTACT.label} padding="m">
      <Container margin="l" applyMargin="top">
        <MotionSlideUp>
          <Container applyMargin="top-bottom" margin="l">
            <Headings.H2>
              Get in <Text.Accented>touch</Text.Accented>
            </Headings.H2>
          </Container>
        </MotionSlideUp>
        <Container margin="l" applyMargin="bottom">
          {Object.keys(contacts).map(key => (
            <Container key={key} applyMargin="bottom">
              <Contact sectionName={key} content={contacts[key as keyof typeof contacts]} />
            </Container>
          ))}
        </Container>
      </Container>
    </Background>
  );
}
