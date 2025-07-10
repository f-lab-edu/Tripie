'use client';

import Card from '@tripie-pyotato/design-system/@components/Card';
import FlickTextButton from '@tripie-pyotato/design-system/@components/FlickTextButton';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import List from '@tripie-pyotato/design-system/@core/List';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';

import PLANS from 'app/home/_components/Plan/constants';

export default function Plan() {
  return (
    <Background variant={3} id="Plans" applyPadding="top-left-right" padding="m">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            <Text.Accented>Plans</Text.Accented> to suit your needs
          </Headings.H2>
        </Container>
        <Stack margin="l" applyMargin="bottom" flexWrapOn="wrap-lg" gap="l">
          {Object.keys(PLANS).map(key => (
            <Card key={PLANS[key].label} margin="none" sizes="full" padding="m">
              <Card.Header margin="none">
                <Stack direction="column" margin="none" alignItems="start">
                  <Text size="tiny" noGapUnderText={true}>
                    {PLANS[key].label}
                  </Text>
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
                    <List.Item justifyContent={'flex-start'} alignItems={'center'} key={label}>
                      {icon === 'X' ? <Icon.X /> : <Icon.Check />}
                      <Text crossOut={icon === 'X'}> {description}</Text>
                    </List.Item>
                  ))}
                </List>
                <FlickTextButton
                  withBorder={true}
                  sizes="large"
                  stretched={true}
                  onClick={() => alert(`chose ${PLANS[key].label}`)}
                >
                  Get started with {PLANS[key].label}
                </FlickTextButton>
              </Card.Content>
            </Card>
          ))}
        </Stack>
      </MotionSlideUp>
    </Background>
  );
}
