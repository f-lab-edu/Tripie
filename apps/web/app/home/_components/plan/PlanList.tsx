'use client';

import { AnimatedButton, Card, Divider, Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, List, Stack, Text } from '@tripie-pyotato/design-system/@core';
import PLANS from 'constants/plans';

export default function PlanList() {
  return (
    <Stack margin="l" applyMargin="top-bottom" flexWrapOn="wrap-lg" gap="l">
      {Object.keys(PLANS).map(key => (
        <Card key={PLANS[key].label}>
          <Container align="left" margin="none">
            {PLANS[key].label}
          </Container>
          <Container align="left" applyMargin="bottom">
            <Headings.H3>
              <Text.Accented>{PLANS[key].price}</Text.Accented>
            </Headings.H3>
          </Container>
          <Container applyMargin="bottom" align="left">
            Per month
          </Container>
          <Divider />
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
        </Card>
      ))}
    </Stack>
  );
}
