'use client';
import { Accordion } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
const ourWorkList = [
  {
    year: 2023,
    tag: 'Doodle - customer support chatbot',
    header: 'Doodle - customer support chatbot',
    details:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
  },
  {
    year: 2024,
    tag: 'Dash - AI calling system',
    header: 'Dash - AI calling system',
    details:
      "We've revolutionized Dash's customer service with our an AI calling system. The AI seamlessly handles 73% of incoming calls, providing quick resolutions and immediate support, even during the weekends.",
  },
  {
    year: 2024,
    tag: 'Atomic - AI driven outreach',
    header: 'Atomic - AI driven outreach',
    details:
      'Atomic has supercharged their outreach efforts with our cutting-edge AI-driven system. Our system now handles all outbound communications, enabling Atomic to connect with more potential clients.',
  },
];

export default function OurWorkList() {
  return (
    <Container applyMargin="top">
      {ourWorkList.map(({ year, tag, header, details }) => (
        <Accordion key={tag}>
          <Accordion.Header>
            <Text.Accented size="tiny">{year}</Text.Accented>
            <Container margin="sm" alignItems="center" applyMargin="bottom" justifyContent="start" gap="default">
              <Headings.H3>{header}</Headings.H3>
              <Accordion.Icon />
            </Container>
          </Accordion.Header>
          <Accordion.Divider />
          <Container padding="m" applyMargin="bottom" applyPadding="top-bottom">
            <Accordion.Body>{details}</Accordion.Body>
          </Container>
        </Accordion>
      ))}
    </Container>
  );
}
