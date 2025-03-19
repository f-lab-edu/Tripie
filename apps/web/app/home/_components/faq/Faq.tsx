'use client';
import { Container, Headings, MotionSlideUp } from '@tripie-pyotato/design-system';
import { classNames } from 'wrapper';

import FaqList from './FaqList';
import Style from './faq.module.scss';
const cx = classNames.bind(Style);

export default function Faq() {
  return (
    <section className={cx('faq')}>
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <FaqList />
        </MotionSlideUp>
      </Container>
    </section>
  );
}
