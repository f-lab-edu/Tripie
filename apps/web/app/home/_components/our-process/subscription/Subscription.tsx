'use client';
import { Container } from '@tripie/design-system';
import classNames from 'classnames/bind';
import Chip from 'shared/components/Chip/Chip';

import useCycle from 'hooks/useCycle';
import Switch from 'shared/components/Switch/Switch';
import Style from './subscription.module.scss';

const cx = classNames.bind(Style);

export default function Subscription() {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <>
      <Container margin="none" className={cx('with-border', 'chip-wrap')}>
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
    </>
  );
}
