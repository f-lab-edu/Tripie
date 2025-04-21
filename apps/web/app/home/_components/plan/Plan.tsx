'use client';

import { MotionSlideUp } from '@tripie-pyotato/design-system';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import PlanList from './PlanList';
import Style from './plan.module.scss';

const cx = classNames.bind(Style);

export default function Plan() {
  return (
    <section className={cx('plan')} id="Plans">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Container applyMargin="top" margin="sm">
            <Headings.H2>
              <Text.Accented>Plans </Text.Accented>to suit your needs
            </Headings.H2>
          </Container>
        </MotionSlideUp>
        <PlanList />
      </Container>
    </section>
  );
}
