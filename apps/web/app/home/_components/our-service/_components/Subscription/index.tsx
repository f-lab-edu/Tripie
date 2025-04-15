'use client';
import { Card, Chip, Container, Switch } from '@tripie-pyotato/design-system/@components';
import { useCycle } from '@tripie-pyotato/design-system/@hooks';
import { classNames } from 'wrapper';

import Style from './subscription.module.scss';

const cx = classNames.bind(Style);

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <Card.Content>
      <Container margin="m" withBorder={true} className={cx('chip-wrap')} applyMargin="bottom" padding="sm">
        <Switch current={current} cycle={cycle} text={current} />
        <span>Subscription</span>
      </Container>
      <Container margin="none" withBorder={true} className={cx('chip-wrap')} padding="m">
        <Chip>Basic</Chip>
        <Chip.Accented current={current} cycle={cycle}>
          Pro
        </Chip.Accented>
        <Chip>Custom</Chip>
      </Container>
    </Card.Content>
  );
}
