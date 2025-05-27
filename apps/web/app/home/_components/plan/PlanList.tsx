'use client';

import { AnimatedButton, Card, Icon } from '@tripie-pyotato/design-system/@components';
import { List, Stack, Text } from '@tripie-pyotato/design-system/@core';
import PLANS from 'constants/plans';

export default function PlanList() {
  return (
    // <Stack margin="l" applyMargin="bottom" flexWrapOn="wrap-lg" gap="l">
    //   {Object.keys(PLANS).map(key => (
    //     <Card key={PLANS[key].label} margin="none" sizes="full" padding="m">
    //       <Card.Header margin="none">
    //         <Stack direction="column" margin="none">
    //           {PLANS[key].label}
    //           <Text size="h3">
    //             <Text.Accented>{PLANS[key].price}</Text.Accented>
    //           </Text>
    //         </Stack>
    //       </Card.Header>
    //       <Card.Content applyMargin="bottom" margin="sm">
    //         Per month
    //       </Card.Content>
    //       <Card.Divider margin="none" />
    //       <Card.Content>
    //         <List view={'column'} gap={'default'}>
    //           {PLANS[key].items.map(({ label, description, icon }) => (
    //             <List.Item gap={'default'} justifyContent={'flex-start'} alignItems={'center'} key={label}>
    //               {icon === 'X' ? <Icon.X /> : <Icon.Check />}
    //               <Text crossOut={icon === 'X'}>{description}</Text>
    //             </List.Item>
    //           ))}
    //         </List>
    //         <AnimatedButton
    //           isFullSize={true}
    //           withBorder={true}
    //           withMinWidth={true}
    //           onClick={() => alert(`chose ${PLANS[key].label}`)}
    //         >
    //           Get started with {PLANS[key].label}
    //         </AnimatedButton>
    //       </Card.Content>
    //     </Card>
    //   ))}
    // </Stack>
    <Stack margin="l" applyMargin="bottom" flexWrapOn="wrap-lg" gap="l">
      {Object.keys(PLANS).map(key => (
        <Card key={PLANS[key].label} margin="none" sizes="full" padding="m">
          <Card.Header margin="none">
            <Stack direction="column" margin="none">
              {PLANS[key].label}
              <Text size="h3">
                <Text.Accented>{PLANS[key].price}</Text.Accented>
              </Text>
            </Stack>
          </Card.Header>
          <Card.Content applyMargin="bottom" margin="sm">
            Per month
          </Card.Content>
          <Card.Divider margin="none" />
          <Card.Content>
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
          </Card.Content>
        </Card>
      ))}
    </Stack>
  );
}
