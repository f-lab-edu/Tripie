'use client';
import { TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import FAQS from 'constants/faq';
import RESOURCE from 'constants/resources';
import Accordion from 'shared/components/Accordian/Accordian';
import { ACCORDIAN_VARIANTS } from 'shared/components/Accordian/variants';
import Style from './faq.module.scss';

const cx = classNames.bind(Style);

export default function FaqList() {
  return (
    <TripieContainer className={cx('wrap')} applyMargin="top-bottom">
      {FAQS.map(({ tag, header, details }) => (
        <Accordion key={tag} className={cx('our-work-contents')}>
          <Accordion.Header>
            <TripieContainer className={cx('flex')} margin="sm" applyMargin="top-bottom">
              <Accordion.Icon src={RESOURCE.ARROW} variants={ACCORDIAN_VARIANTS.BUTTON} className={cx('faq-icon')} />
              {header}
            </TripieContainer>
          </Accordion.Header>
          <Accordion.Divider />
          <TripieContainer applyMargin="top-bottom" className={cx('accordion-body')}>
            <Accordion.Body>
              <TripieContainer applyMargin="top-bottom" margin="m">
                {details}
              </TripieContainer>
            </Accordion.Body>
          </TripieContainer>
        </Accordion>
      ))}
    </TripieContainer>
  );
}
