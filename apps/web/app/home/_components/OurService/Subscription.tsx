'use client';
import AccentedButton from '@tripie-pyotato/design-system/@components/AccentedButton';
import Card from '@tripie-pyotato/design-system/@components/Card';
import Chip from '@tripie-pyotato/design-system/@components/Chip';
import Switch from '@tripie-pyotato/design-system/@components/Switch';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Text from '@tripie-pyotato/design-system/@core/Text';

import { useCycle } from '@tripie-pyotato/design-system/@hooks';

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');
  return (
    <Card.Content fillAvailable={true}>
      <Container
        display="inline-flex"
        margin="m"
        withBorder={true}
        applyMargin="bottom"
        gap="l"
        alignItems="center"
        padding="sm"
        justifyContent="center"
      >
        <Switch current={current} cycle={cycle} text={current} />
        <Text bold={true} noGapUnderText={true}>
          Subscription
        </Text>
      </Container>
      <Container
        justifyContent="center"
        display="inline-flex"
        margin="none"
        withBorder={true}
        gap="l"
        padding="m"
        alignItems="center"
      >
        <Chip>Free</Chip>
        <AccentedButton current={current} cycle={cycle}>
          Unlimited
        </AccentedButton>
        <Chip>Custom</Chip>
      </Container>
    </Card.Content>
  );
}
