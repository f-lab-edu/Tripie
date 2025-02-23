'use client';
import { Card, Chip, Container, Switch, useCycle } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from './subscription.module.scss';

const cx = classNames.bind(Style);

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <Card.Content>
      <Container margin="l" className={cx('with-border', 'chip-wrap')} applyMargin="bottom">
        <Switch current={current} cycle={cycle} text={current} />
        <div>Subscription</div>
      </Container>
      <Container margin="none" className={cx('with-border', 'chip-wrap')}>
        <Chip>Basic</Chip>
        <Chip.Accented current={current} cycle={cycle}>
          Pro
        </Chip.Accented>
        <Chip>Custom</Chip>
      </Container>
    </Card.Content>
  );
}
