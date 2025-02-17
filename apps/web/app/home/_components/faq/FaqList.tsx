'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import FAQS from 'constants/faq';

import Accordion from 'shared/components/Accordian/Accordian';
import { ACCORDIAN_VARIANTS } from 'shared/components/Accordian/variants';
import Style from './faq.module.scss';

const cx = classNames.bind(Style);

export default function FaqList() {
  return (
    <Container className={cx('wrap')} applyMargin="top-bottom">
      {FAQS.map(({ tag, header, details }) => (
        <Accordion key={tag} className={cx('our-work-contents')}>
          <Accordion.Header>
            <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
              <Accordion.Icon variants={ACCORDIAN_VARIANTS.BUTTON} className={cx('faq-icon')} />
              {/* <Accordion.Icon src={RESOURCE.ARROW} variants={ACCORDIAN_VARIANTS.BUTTON} className={cx('faq-icon')} /> */}
              {header}
            </Container>
          </Accordion.Header>
          <Accordion.Divider />
          <Container applyMargin="top-bottom" className={cx('accordion-body')}>
            <Accordion.Body>
              <Container applyMargin="top-bottom" margin="m">
                {details}
              </Container>
            </Accordion.Body>
          </Container>
        </Accordion>
      ))}
    </Container>
  );
}
