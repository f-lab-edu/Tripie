'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import Accordion from 'shared/components/Accordian/Accordian';
import { ACCORDIAN_VARIANTS } from 'shared/components/Accordian/variants';
import Style from './faq.module.scss';

const cx = classNames.bind(Style);

const ourWorkList = [
  {
    tag: "What's unique about Tripie?",
    header: "What's unique about Tripie?",
    details:
      "Our extremely flexible development subscription is what set's us apart in the AI-development space. We fully understand that your business needs differ every month in this fast paced-environment. That's why we created our innovative subscription model.",
  },
  {
    tag: 'How many builds can I request each month?',
    header: 'How many builds can I request each month?',
    details:
      'You can request unlimited builds and unlimited revisions, your developers are ready to transform your ideas into reality!',
  },
  {
    tag: 'Can I cancel my subscription at any time?',
    header: 'Can I cancel my subscription at any time?',
    details: 'Yes, you can pause or cancel your subscription whenever you want!',
  },
  {
    tag: 'How secure are your solutions?',
    header: 'How secure are your solutions?',
    details:
      'Security is paramount. We adhere to best practices and industry standards to protect your data and privacy.',
  },
  {
    tag: 'Can your solutions scale with my business growth?',
    header: 'Can your solutions scale with my business growth?',
    details: 'Definitely. Both our solutions and our subscriptions are designed to handle your business growth.',
  },
];

export default function FaqList() {
  return (
    <Container className={cx('wrap')} applyMargin="top-bottom">
      {ourWorkList.map(({ tag, header, details }) => (
        <Accordion key={tag} className={cx('our-work-contents')}>
          <Accordion.Header>
            <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
              <Accordion.Icon
                src={ROUTES.RESOURCE.ARROW['src']}
                variants={ACCORDIAN_VARIANTS.BUTTON}
                className={cx('faq-icon')}
              />
              {header}
            </Container>
          </Accordion.Header>
          <Accordion.Divider />
          <Container applyMargin="top-bottom">
            <Accordion.Body>{details}</Accordion.Body>
          </Container>
        </Accordion>
      ))}
    </Container>
  );
}
