'use client';
import { Accordion, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import FAQS from 'constants/faq';

import Style from './faq.module.scss';

const cx = classNames.bind(Style);

export default function FaqList() {
  return (
    <Container className={cx('wrap')} applyMargin="top-bottom">
      {FAQS.map(({ tag, header, details }) => (
        <Container key={tag} applyMargin="all">
          <Accordion>
            <Accordion.Header>
              <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
                <Accordion.Icon />
                {header}
              </Container>
            </Accordion.Header>
            <Accordion.Divider />
            <Container applyMargin="top-bottom" preserveWhiteSpace={true}>
              <Accordion.Body>
                <Container applyMargin="top-bottom" margin="m">
                  {details}
                </Container>
              </Accordion.Body>
            </Container>
          </Accordion>
        </Container>
      ))}
    </Container>
  );
}
