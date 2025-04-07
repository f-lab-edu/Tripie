'use client';
import { Accordion, Container } from '@tripie-pyotato/design-system';
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
            <Container applyMargin="top-bottom" preserveWhiteSpace={true}>
              <Accordion.Body>
                <Container applyMargin="top-bottom" margin="m">
                  {details}
                </Container>
              </Accordion.Body>
            </Container>
          </Accordion>
        </Container>
      ))}
    </Container>
  );
}
