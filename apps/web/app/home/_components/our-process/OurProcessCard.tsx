import { Card } from '@tripie-pyotato/design-system';
import { Container } from '@tripie-pyotato/design-system/@core';
import Description from './_components/Description';
import { Process } from './OurProcess';

export default function OurProcessCard({ content, description, label, index }: Readonly<Process>) {
  return (
    <Container applyMargin="bottom">
      <Card>
        <Card.Content>{content}</Card.Content>
        <Card.Description>
          <Description lineBreak={true} order={index + 1} descriptionTitle={label}>
            {description}
          </Description>
        </Card.Description>
      </Card>
    </Container>
  );
}
