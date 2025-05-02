import { Card } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { Process } from './OurProcess';

export default function OurProcessCard({ content, description, label, index }: Readonly<Process>) {
  return (
    <Container applyMargin="bottom">
      <Card>
        <Card.Content>{content}</Card.Content>
        <Card.Description>
          {label != null ? (
            <Container applyMargin="top-bottom" margin="sm">
              <Headings.H3>
                {index != null ? (
                  <Text.Accented>{index.toString.length === 1 ? '0' + (index + 1) : index + 1}. </Text.Accented>
                ) : null}
                {label}
              </Headings.H3>
            </Container>
          ) : null}
          <Text preserveWhiteSpace="xl">{description}</Text>
        </Card.Description>
      </Card>
    </Container>
  );
}
