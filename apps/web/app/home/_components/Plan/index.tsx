'use client';

import Card from '@tripie-pyotato/design-system/@components/Card';

import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';

import { List } from '@tripie-pyotato/design-system/@core';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';

import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import PLANS from 'app/home/_components/Plan/constants';
import API from 'constants/api-routes';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';

export default function Plan() {
  return (
    <Background variant={5} id="Plans" applyPadding="top-left-right" padding="m">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            <Text.Accented>Plans</Text.Accented> to suit your needs
          </Headings.H2>
        </Container>
        <Stack margin="l" applyMargin="bottom" flexWrapOn="wrap-md" gap="l">
          {Object.keys(PLANS).map(key => (
            <Card key={PLANS[key].label} margin="none" sizes="full" padding="m" cloudinaryUrl={API.MEDIA_URL}>
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
                      {icon === 'X' ? <TripieIcon variant="x" /> : <TripieIcon variant="check" />}
                      <Text crossOut={icon === 'X'}> {description}</Text>
                    </List.Item>
                  ))}
                </List>
                <FlickTextButton
                  withBorder={true}
                  sizes="large"
                  stretched={true}
                  otherChild={
                    <>
                      Get started with <Text.Accented>{PLANS[key].label}</Text.Accented>
                    </>
                  }
                  // onClick={() => alert(`chose ${PLANS[key].label}`)}
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
