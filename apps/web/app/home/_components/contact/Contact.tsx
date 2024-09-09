'use client';

import { Container, Headings, Text } from '@tripie/design-system';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import { useRouter } from 'next/navigation';
import Divider from 'shared/components/Divider/Divider';
import Icon from 'shared/components/Icon/Icon';
import MotionSlideUp from 'shared/components/MotionSlideUp/MotionSlideUp';
import TextUnderLineAnimation from '../../../../shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './contact.module.scss';

const cx = classNames.bind(Style);

export default function Contact() {
  const router = useRouter();
  return (
    <section className={cx('contact')} id="Contact">
      <Container applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Get in <span className={cx('accented')}>touch</span>
          </Headings.H2>
        </MotionSlideUp>
        <Container className={cx('wrap')} margin="l" applyMargin="top-bottom">
          <Container margin="none">
            <Container margin="none" className={cx('wrap')}>
              <span className={cx('small')}>Email</span>
              <TextUnderLineAnimation>
                <div className={cx('text-wrap')}>
                  mail@tripie.com <Icon src={ROUTES.RESOURCE.ARROW.src} className={cx('big-arrow')} />
                </div>
              </TextUnderLineAnimation>
              <Divider />
            </Container>
          </Container>
          <Container margin="none">
            <Container margin="none" className={cx('wrap')}>
              <Text size="tiny" className={cx('small')}>
                Github
              </Text>
              <TextUnderLineAnimation>
                <div className={cx('text-wrap')}>
                  <span className={cx('accented')}>@ </span>Pyotato
                  <Icon src={ROUTES.RESOURCE.ARROW.src} className={cx('big-arrow')} />
                </div>
              </TextUnderLineAnimation>
              <Divider />
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
