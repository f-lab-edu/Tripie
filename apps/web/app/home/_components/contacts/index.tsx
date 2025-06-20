'use client';

import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Text from '@tripie-pyotato/design-system/@core/Text';

import ROUTE from 'constants/routes';

import Contact from './Contact';

const contacts = {
  Email: {
    child: (
      <>
        mail<Text.Accented>@</Text.Accented>tripie-pyotato.com
      </>
    ),
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
          <Container margin="sm" applyMargin="top">
            <Headings.H2>
              Get in <Text.Accented>touch</Text.Accented>
            </Headings.H2>
          </Container>
          {Object.keys(contacts).map(key => (
            <Contact key={key} sectionName={key} content={contacts[key as keyof typeof contacts]} />
          ))}
        </MotionSlideUp>
      </Container>
    </Background>
  );
}
