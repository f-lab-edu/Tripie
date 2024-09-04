import classNames from 'classnames/bind';
import Style from './our-process.module.scss';
import Subscription from './subscription/Subscription';
const cx = classNames.bind(Style);

const cards = [
  {
    label: 'Subscribe',
    content: <Subscription />,
    description:
      "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
  },
  {
    label: 'Request',
    content: 'content',
    description:
      'Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.',
  },
  {
    label: 'Build',
    content: 'content',
    description:
      'Our developers swiftly begin building your custom solutions, prioritising speed without compromising on quality.',
  },
  {
    label: 'Test & optimise',
    content: 'content',
    description:
      "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
  },
  {
    label: 'Become an industry leader',
    content: 'content',
    description:
      ' Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.',
  },
];

export default function OurProcess() {
  return (
    <section className={cx('our-process')} id="Process">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Our <span className={cx('accented')}>process</span>
          </Headings.H2>
        </MotionSlideUp>
        <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
          {cards.map(({ label, content, description }, index) => (
            <Card key={label}>
              <Card.Content>{content}</Card.Content>
              <Card.Description>
                <Description descriptionTitle={`${index + 1}. ${label}`}>{description}</Description>
              </Card.Description>
            </Card>
          ))}
        </Container>
      </Container>
    </section>
  );
}
