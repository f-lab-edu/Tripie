'use client';
// import { Accordion, Container } from '@tripie-pyotato/design-system/@components';
import { Accordion } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import FAQS from 'constants/faq';

export default function FaqList() {
  return (
    <Container applyMargin="top-bottom">
      {FAQS.map(({ tag, header, details }) => (
        <Container key={tag} applyMargin="top-bottom" padding="sm" applyPadding="bottom">
          <Accordion>
            <Accordion.Header>
              <Container justifyContent="start" margin="none">
                <Accordion.Icon />
                {header}
              </Container>
            </Accordion.Header>
            <Accordion.Divider />
            <Accordion.Body preserveWhiteSpace={true} padding={'sm'} applyPadding="top-bottom" margin="none">
              {details}
            </Accordion.Body>
          </Accordion>
        </Container>
      ))}
    </Container>
  );
}
