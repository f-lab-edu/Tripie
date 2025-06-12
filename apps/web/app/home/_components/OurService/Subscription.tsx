'use client';
import { Card, Chip, Switch } from '@tripie-pyotato/design-system/@components';
import AccentedButton from '@tripie-pyotato/design-system/@components/AccentedButton';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import { useCycle } from '@tripie-pyotato/design-system/@hooks';

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <Card.Content>
      <Container margin="m" withBorder={true} applyMargin="bottom" gap="l" alignItems="center" padding="sm">
        <Switch current={current} cycle={cycle} text={current} />
        <Text bold={true} noGapUnderText={true}>
          Subscription
        </Text>
      </Container>
      <Container margin="none" withBorder={true} gap="l" padding="m" alignItems="center">
        <Chip>Basic</Chip>
        <AccentedButton current={current} cycle={cycle}>
          Pro
        </AccentedButton>
        <Chip>Custom</Chip>
      </Container>
    </Card.Content>
  );
}
