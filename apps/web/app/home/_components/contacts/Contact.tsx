'use client';

import { Container, Divider, Text, TextUnderLineAnimation } from '@tripie-pyotato/design-system';

const Contact = ({ sectionName, content }: { sectionName: string; content: JSX.Element }) => {
  return (
    <Container margin="none">
      <Container margin="none">
        <Text size="tiny">{sectionName}</Text>
        <Container applyMargin="bottom">
          <TextUnderLineAnimation>{content}</TextUnderLineAnimation>
        </Container>
        <Divider />
      </Container>
    </Container>
  );
};
export default Contact;
