'use client';

import { Stack, Text, TripieCard } from '@tripie-pyotato/design-system/@core';

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
    <TripieCard sizes={'full'} margin="none" padding="sm">
      <Stack direction="column" margin="none" gap="l" justifyContent="start" alignItems="start">
        {content}
        <TripieCard.Content padding={'none'}>
          {label != null ? (
            <Text size="h3" bold={true}>
              {label}
            </Text>
          ) : null}
        </TripieCard.Content>
        <TripieCard.Content padding={'none'}>
          <Text preserveWhiteSpace="xl">{description}</Text>
        </TripieCard.Content>
      </Stack>
    </TripieCard>
  );
}
