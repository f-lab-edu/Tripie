'use client';

import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { List, Stack, Text, TripieCard } from '@tripie-pyotato/design-system/@core';
import PLANS from 'constants/plans';

export default function PlanList() {
  return (
    <Stack margin="l" applyMargin="bottom" flexWrapOn="wrap-lg" gap="l">
      {Object.keys(PLANS).map(key => (
        <TripieCard key={PLANS[key].label} margin="none" sizes="full" padding="m">
          <TripieCard.Header margin="none">
            <Stack direction="column" margin="none">
              {PLANS[key].label}
              <Text size="h3">
                <Text.Accented>{PLANS[key].price}</Text.Accented>
              </Text>
            </Stack>
          </TripieCard.Header>
          <TripieCard.Content applyMargin="bottom" margin="sm">
            Per month
          </TripieCard.Content>
          <TripieCard.Divider margin="none" />
          <TripieCard.Content>
            <List view={'column'} gap={'default'}>
              {PLANS[key].items.map(({ label, description, icon }) => (
                <List.Item gap={'default'} justifyContent={'flex-start'} alignItems={'center'} key={label}>
                  {icon === 'X' ? <Icon.X /> : <Icon.Check />}
                  <Text crossOut={icon === 'X'}>{description}</Text>
                </List.Item>
              ))}
            </List>
            <AnimatedButton
              isFullSize={true}
              withBorder={true}
              withMinWidth={true}
              onClick={() => alert(`chose ${PLANS[key].label}`)}
            >
              Get started with {PLANS[key].label}
            </AnimatedButton>
          </TripieCard.Content>
        </TripieCard>
      ))}
    </Stack>
  );
}
