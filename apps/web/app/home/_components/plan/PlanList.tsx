'use client';

import { AnimatedButton, Card, Container, Divider, Headings, Icon, List, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PLANS from 'constants/plans';

import Style from './plan-list.module.scss';

const cx = classNames.bind(Style);

export default function PlanList() {
  return Object.keys(PLANS).map(key => (
    <Card key={PLANS[key].label}>
      <Container align="left" margin="none">
        {PLANS[key].label}
      </Container>
      <Headings.H3 className={cx('accented', 'left-align', 'max')}>{PLANS[key].price}</Headings.H3>
      <Container margin="none" align="left">
        Per month
      </Container>
      <Divider />
      <List>
        {PLANS[key].items.map(({ label, description, icon }) => (
          <li className={cx('flex', 'list-item')} key={label}>
            {icon === 'X' ? <Icon.X /> : <Icon.Check />}
            <Text className={cx(icon === 'X' ? 'cross' : null)}>{description}</Text>
          </li>
        ))}
      </List>
      <AnimatedButton className={cx('max')} withBorder={true} onClick={() => alert('basic')}>
        <Container margin="none" className={cx('flex')}>
          Get started with {PLANS[key].label} <Icon />
        </Container>
      </AnimatedButton>
    </Card>
  ));
}
