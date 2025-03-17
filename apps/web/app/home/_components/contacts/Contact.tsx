'use client';

import { Container, Divider, Headings, Text, TextUnderLineAnimation } from '@tripie-pyotato/design-system';

const Contact = ({ sectionName, content }: { sectionName: string; content: JSX.Element }) => {
  return (
    <Container margin="none">
      <Container margin="none">
        <Text size="tiny">{sectionName}</Text>
        <Container applyMargin="bottom">
          <TextUnderLineAnimation>
            <Headings.H2>{content}</Headings.H2>
          </TextUnderLineAnimation>
        </Container>
        <Divider />
      </Container>
    </Container>
  );
};
export default Contact;
