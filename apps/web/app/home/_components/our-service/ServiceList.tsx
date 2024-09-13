import classNames from 'classnames/bind';
import Link from 'next/link';
import Card from 'shared/components/Card/Card';
import Description from '../our-process/description/Description';
import Style from './service-list.module.scss';

const cx = classNames.bind(Style);

const serviceList = [
  {
    label: 'Subscribe',
    content: 'content',
    href: '',
    description:
      "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
  },
  {
    label: 'Chatbot',
    content: 'content',
    href: '/chat',
    description:
      'We develop advanced chatbots that are reactive, understand nuances, and are capable of to solving extremely complicated queries.',
  },
  {
    label: 'Business consulting',
    content: 'content',
    href: '',
    description:
      'Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.',
  },
];

export default function ServiceList() {
  return serviceList.map(({ label, content, description, href }) => (
    <Link key={label} href={href} className={cx('link')}>
      <Card>
        <Card.Content>{content}</Card.Content>
        <Card.Description>
          <Description descriptionTitle={label}>{description}</Description>
        </Card.Description>
      </Card>
    </Link>
  ));
}
