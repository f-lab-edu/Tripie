import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import Card from 'components/shared/Card/Card';
import MotionSlideUp from 'components/shared/MotionSlideUp/MotionSlideUp';
import Description from './description/Description';
import Style from './our-process.module.scss';
import Subscription from './subscription/Subscription';

const cx = classNames.bind(Style);

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
          <Card>
            <Card.Content>
              <Subscription />
            </Card.Content>
            <Card.Description>
              <Description descriptionTitle="01. Subscribe">
                Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as
                your business' needs.
              </Description>
            </Card.Description>
          </Card>
          <Card>
            <Card.Content>// !! !! TODO : replace with '02. Request' 02. Request</Card.Content>
            <Card.Description>
              <Description descriptionTitle="02. Request">
                Start requesting the workflow-automations and AI applications you need, your developers are right there
                to transform your ideas into reality.
              </Description>
            </Card.Description>
          </Card>
          <Card>
            <Card.Content>// !! !! TODO : replace with '03. Build' 03. Build</Card.Content>
            <Card.Description>
              <Description descriptionTitle="03. Build">
                Our developers swiftly begin building your custom solutions, prioritising speed without compromising on
                quality.
              </Description>
            </Card.Description>
          </Card>
          <Card>
            <Card.Content>// !! !! TODO : replace with '04. Test & optimise' 04. Test & optimise</Card.Content>
            <Card.Description>
              <Description descriptionTitle="04. Test & optimise">
                You either approve or request revisions - we're dedicated to refining our builds until you're fully
                satisfied.
              </Description>
            </Card.Description>
          </Card>
          <Card>
            <Card.Content>// !! !! TODO : replace with '05. Become an industry leader'</Card.Content>
            <Card.Description>
              <Description descriptionTitle="05. Become an industry leader">
                Continue requesting as many workflow-automations and AI-applications as you wish, and transform your
                organisation into a worldwide industry leader.
              </Description>
            </Card.Description>
          </Card>
        </Container>
      </Container>
    </section>
  );
}
