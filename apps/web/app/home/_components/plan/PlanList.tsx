'use client';

import { AnimatedButton, Card, Container, Divider, Headings, List, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PLANS from 'constants/plans';
import RESOURCE from 'constants/resources';

import Icon from 'shared/components/Icon/Icon';
import Style from './plan-list.module.scss';

const cx = classNames.bind(Style);

export default function PlanList() {
  return Object.keys(PLANS).map(key => (
    <Card key={PLANS[key].label}>
      <div className={cx('left-align', 'max')}>{PLANS[key].label}</div>
      <Headings.H3 className={cx('accented', 'left-align', 'max')}>{PLANS[key].price}</Headings.H3>
      <div className={cx('left-align', 'max')}>Per month</div>
      <Divider />
      <List>
        {PLANS[key].items.map(({ label, description, icon }) => (
          <li className={cx('flex', 'list-item')} key={label}>
            <Icon src={icon} />
            <Text className={cx(icon === RESOURCE.X ? 'cross' : null)}>{description}</Text>
          </li>
        ))}
      </List>
      <AnimatedButton className={cx('max')} withBorder={true} onClick={() => alert('basic')}>
        <Container margin="none" className={cx('flex')}>
          Get started with {PLANS[key].label} <Icon src={RESOURCE.ARROW} />
        </Container>
      </AnimatedButton>
    </Card>
  ));
}
