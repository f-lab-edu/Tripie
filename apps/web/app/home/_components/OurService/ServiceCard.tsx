'use client';

import Card from '@tripie-pyotato/design-system/@components/Card';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';
import API from 'constants/api-routes';
import { ReactNode } from 'react';

export default function ServiceCard({
  label,
  content,
  description,
}: Readonly<{
  label?: string;
  content: ReactNode;
  description: string;
}>) {
  return (
    <Card sizes={'full'} margin="none" padding="sm" cloudinaryUrl={API.MEDIA_URL}>
      <Stack direction="column" margin="none" gap="l" justifyContent="start" alignItems="start">
        {content}
        <Card.Content padding={'none'}>
          {label != null ? (
            <Text size="h3" bold={true}>
              {label}
            </Text>
          ) : null}
        </Card.Content>
        <Card.Content padding={'none'}>
          <Text preserveWhiteSpace="lg">{description}</Text>
        </Card.Content>
      </Stack>
    </Card>
  );
}
