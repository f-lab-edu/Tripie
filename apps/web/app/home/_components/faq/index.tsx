'use client';
import Accordion from '@tripie-pyotato/design-system/@components/Accordion';
import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Text from '@tripie-pyotato/design-system/@core/Text';
import FAQS from './constants';

export default function Faq() {
  return (
    <Background variant={1} padding="m" applyPadding="left-right">
      <Container applyMargin="top-bottom" margin="xl">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <Container applyMargin="bottom">
            {FAQS.map(({ tag, header, details }) => (
              <Container key={tag} applyMargin="top-bottom" padding="sm" applyPadding="bottom">
                <Accordion>
                  <Accordion.Header>
                    <Container justifyContent="start" margin="none" gap="sm">
                      <Accordion.Icon />
                      {header}
                    </Container>
                  </Accordion.Header>
                  <Accordion.Divider />
                  <Accordion.Body padding={'default'} applyPadding="top-bottom">
                    <Container margin="l" applyMargin="top">
                      <Text preserveWhiteSpace={'xl'}>{details}</Text>
                    </Container>
                  </Accordion.Body>
                </Accordion>
              </Container>
            ))}
          </Container>
        </MotionSlideUp>
      </Container>
    </Background>
  );
}
