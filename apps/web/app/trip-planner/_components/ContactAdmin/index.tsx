'use client';

import { Container, Text } from '@tripie-pyotato/design-system';
import RegionInfo from 'app/home/_components/our-service/_components/RegionInfo';
import classNames from 'classnames/bind';
import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import AnimatedButton from 'shared/components/Button/Animated';
import TextUnderLineAnimation from 'shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './contact-admin.module.scss';

const cx = classNames.bind(Style);

const ContactAdmin = () => {
  const navigate = useRouter();
  return (
    <Container margin="none" className={cx('background')}>
      <Container className={cx('text-wrap')} margin="none">
        <TextUnderLineAnimation>
          <Text className={cx('accented')}>이런! 토큰을 다 사용했네요!</Text>
          <span className={cx('accented')}>@관리자</span>에게 토큰 요청하기
        </TextUnderLineAnimation>
      </Container>
      <Container margin="none">
        <Container applyMargin="bottom">
          <Container applyMargin="bottom" margin="sm">
            여행지에 대한 <span className={cx('accented')}>팁</span>이나{' '}
            <span className={cx('accented')}>아이디어</span>를 얻고 싶으신가요?
          </Container>
        </Container>
        <RegionInfo />
      </Container>
      <Container applyMargin="top-bottom">
        <AnimatedButton
          withBorder={true}
          onClick={() => navigate.replace(ROUTE.HOME.href)}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex')}>
            홈으로 돌아가기
          </Container>
        </AnimatedButton>
      </Container>
    </Container>
  );
};

export default ContactAdmin;
