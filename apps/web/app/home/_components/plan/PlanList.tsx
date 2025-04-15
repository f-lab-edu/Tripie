'use client';

import {
  AnimatedButton,
  Card,
  Container,
  Divider,
  Headings,
  Icon,
  List,
  Text,
} from '@tripie-pyotato/design-system/@components';
import PLANS from 'constants/plans';
import { classNames } from 'wrapper';

import Style from './plan-list.module.scss';

const cx = classNames.bind(Style);

export default function PlanList() {
  return (
    <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
      {Object.keys(PLANS).map(key => (
        <Card key={PLANS[key].label}>
          <Container align="left" margin="none">
            {PLANS[key].label}
          </Container>
          <Container align="left" applyMargin="bottom">
            <Headings.H3 className={cx('max')}>
              <Text.Accented>{PLANS[key].price}</Text.Accented>
            </Headings.H3>
          </Container>
          <Container applyMargin="bottom" align="left">
            Per month
          </Container>
          <Divider />
          <List view="column" gap={'default'}>
            {PLANS[key].items.map(({ label, description, icon }) => (
              <List.Item gap="default" justifyContent="flex-start" alignItems="center" key={label}>
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
    </Container>
  );
}
