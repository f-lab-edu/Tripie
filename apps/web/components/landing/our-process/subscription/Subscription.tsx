'use client';
import { Container } from '@tripie/design-system';
import classNames from 'classnames/bind';
import Chip from 'components/shared/Chip/Chip';

import Card from 'components/shared/Card/Card';
import Switch from 'components/shared/Switch/Switch';
import { useCycle } from 'framer-motion';
import Style from './subscription.module.scss';

const cx = classNames.bind(Style);

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');
  return (
    <Card.Content>
      <Container margin="none" className={cx('with-border', 'chip-wrap')}>
        <Switch current={current} cycle={cycle} />
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
