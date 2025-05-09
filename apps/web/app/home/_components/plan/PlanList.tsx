'use client';

import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { List, Stack, Text, TripieCard } from '@tripie-pyotato/design-system/@core';
import PLANS from 'constants/plans';

export default function PlanList() {
  return (
    <Stack
      // display="grid"
      margin="l"
      applyMargin="bottom"
      flexWrapOn="wrap-lg"
      gap="l"
    >
      {Object.keys(PLANS).map(key => (
        // <Card key={PLANS[key].label}>
        // <Container justifyContent="start" margin="none">
        //   {PLANS[key].label}
        // </Container>
        // <Container justifyContent="start" applyMargin="bottom" margin="xsm">
        //   <Headings.H3>
        //     <Text.Accented>{PLANS[key].price}</Text.Accented>
        //   </Headings.H3>
        // </Container>
        //   <Container applyMargin="bottom" justifyContent="start">
        //     Per month
        //   </Container>
        //   <Divider />
        // <List view={'column'} gap={'default'}>
        //   {PLANS[key].items.map(({ label, description, icon }) => (
        //     <List.Item gap={'default'} justifyContent={'flex-start'} alignItems={'center'} key={label}>
        //       {icon === 'X' ? <Icon.X /> : <Icon.Check />}
        //       <Text crossOut={icon === 'X'}>{description}</Text>
        //     </List.Item>
        //   ))}
        // </List>
        // <AnimatedButton
        //   isFullSize={true}
        //   withBorder={true}
        //   withMinWidth={true}
        //   onClick={() => alert(`chose ${PLANS[key].label}`)}
        // >
        //   Get started with {PLANS[key].label}
        // </AnimatedButton>
        // </Card>
        <TripieCard key={PLANS[key].label} margin="none" sizes="full">
          <TripieCard.Header applyMargin={'top-left-right'}>
            <Stack direction="column" margin="none">
              {PLANS[key].label}
              <Text size="h3">
                <Text.Accented>{PLANS[key].price}</Text.Accented>
              </Text>
            </Stack>
          </TripieCard.Header>
          <TripieCard.Content>Per month</TripieCard.Content>
          <TripieCard.Divider />
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
