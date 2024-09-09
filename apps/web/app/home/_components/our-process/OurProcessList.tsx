import Card from 'shared/components/Card/Card';
import RotatingGlobe from '../../../../shared/components/Globe/RotatingGlobe';
import ApplicationList from './application-list/ApplicationList';
import Description from './description/Description';
import Subscription from './subscription/Subscription';

const cards = [
  {
    label: 'Subscribe',
    content: <Subscription />,
    description:
      "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
  },
  {
    label: 'Request',
    content: <ApplicationList />,
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
    content: <RotatingGlobe />,
    description:
      'Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.',
  },
];

export default function OurProcessList() {
  return cards.map(({ label, content, description }, index) => (
    <Card key={label}>
      <Card.Content>{content}</Card.Content>
      <Card.Description>
        <Description order={index + 1} descriptionTitle={label}>
          {description}
        </Description>
      </Card.Description>
    </Card>
  ));
}
