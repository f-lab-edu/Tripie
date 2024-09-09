'use client';

import { Container, Headings, Text } from '@tripie/design-system';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Card from 'shared/components/Card/Card';
import Divider from 'shared/components/Divider/Divider';
import Icon from 'shared/components/Icon/Icon';
import List from 'shared/components/List/List';
import Style from './plan-list.module.scss';

const cx = classNames.bind(Style);

interface Item {
  label: string;
  description: string;
  icon: string;
}

interface PlanList {
  [index: string]: { label: string; price: string; items: Item[] };
}

const planList = {
  BASIC: {
    label: 'Basic',
    price: '€1.997',
    items: [
      { label: '1 dedicated developer', description: '1 dedicated developer', icon: ROUTES.RESOURCE.CHECK.src },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: ROUTES.RESOURCE.CHECK.src,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Business consulting', description: 'Business consulting', icon: ROUTES.RESOURCE.X.src },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: ROUTES.RESOURCE.X.src },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: ROUTES.RESOURCE.CHECK.src },
    ],
  },
  PRO: {
    label: 'Pro',
    price: '€3.997',
    items: [
      { label: '2 dedicated developers', description: '2 dedicated developers', icon: ROUTES.RESOURCE.CHECK.src },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: ROUTES.RESOURCE.CHECK.src,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Business consulting', description: 'Business consulting', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: ROUTES.RESOURCE.CHECK.src },
    ],
  },
  CUSTOM: {
    label: 'Enterprise',
    price: 'Custom',
    items: [
      { label: 'X dedicated developers', description: 'X dedicated developers', icon: ROUTES.RESOURCE.CHECK.src },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: ROUTES.RESOURCE.CHECK.src,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Business consulting', description: 'Business consulting', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: ROUTES.RESOURCE.CHECK.src },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: ROUTES.RESOURCE.CHECK.src },
    ],
  },
} as PlanList;

export default function PlanList() {
  return Object.keys(planList).map(key => (
    <Card key={planList[key].label}>
      <div className={cx('left-align', 'max')}>{planList[key].label}</div>
      <Headings.H3 className={cx('accented', 'left-align', 'max')}>{planList[key].price}</Headings.H3>
      <div className={cx('left-align', 'max')}>Per month</div>
      <Divider />
      <List>
        {planList[key].items.map(({ label, description, icon }) => (
          <li className={cx('flex', 'list-item')} key={label}>
            <Icon src={icon} />
            <Text className={cx(icon === ROUTES.RESOURCE.X.src ? 'cross' : null)}>{description}</Text>
          </li>
        ))}
      </List>
      <AnimatedButton className={cx('max')} withBorder={true} onClick={() => alert('basic')}>
        <Container margin="none" className={cx('flex')}>
          Get started with {planList[key].label} <Icon src={ROUTES.RESOURCE.ARROW['src']} />
        </Container>
      </AnimatedButton>
    </Card>
  ));
}
