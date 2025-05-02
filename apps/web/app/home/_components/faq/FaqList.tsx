'use client';

import { Accordion } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import FAQS from './constants';

export default function FaqList() {
  return (
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
            <Accordion.Body padding={'default'} applyPadding="top-bottom" margin="none">
              <Text preserveWhiteSpace={'xl'}>{details}</Text>
            </Accordion.Body>
          </Accordion>
        </Container>
      ))}
    </Container>
  );
}
