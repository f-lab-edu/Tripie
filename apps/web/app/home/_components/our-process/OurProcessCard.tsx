import { Card } from '@tripie-pyotato/design-system/@components';
import { Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';

import { Process } from './OurProcess';

export default function OurProcessCard({ content, description, label, index }: Readonly<Process>) {
  return (
    <Card>
      <Stack direction="column" margin="none" gap="l" justifyContent="start" alignItems="start">
        <Card.Content>{content}</Card.Content>
        <Card.Description>
          {label != null ? (
            <Headings.H3>
              {index != null ? (
                <Text.Accented>{index.toString.length === 1 ? '0' + (index + 1) : index + 1}. </Text.Accented>
              ) : null}
              {label}
            </Headings.H3>
          ) : null}
          <Text preserveWhiteSpace="xl">{description}</Text>
        </Card.Description>
      </Stack>
    </Card>
  );
}
