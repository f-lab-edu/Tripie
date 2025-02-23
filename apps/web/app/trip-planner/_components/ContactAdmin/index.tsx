'use client';

import { AnimatedButton, Container, Text, TextUnderLineAnimation } from '@tripie-pyotato/design-system';
import RegionInfo from 'app/home/_components/our-service/_components/RegionInfo';
import classNames from 'classnames/bind';
import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import Style from './contact-admin.module.scss';

const cx = classNames.bind(Style);

const ContactAdmin = () => {
  const navigate = useRouter();
  return (
    <Container margin="none" className={cx('background')}>
      <Container className={cx('text-wrap')} margin="none">
        <TextUnderLineAnimation>
          <Text.Accented>이런! 토큰을 다 사용했네요!</Text.Accented>
          <Text.Accented>@관리자</Text.Accented>에게 토큰 요청하기
        </TextUnderLineAnimation>
      </Container>
      <Container margin="none">
        <Container applyMargin="bottom">
          <Container applyMargin="bottom" margin="sm">
            여행지에 대한 <Text.Accented>팁</Text.Accented>이나 <Text.Accented>아이디어</Text.Accented>를 얻고
            싶으신가요?
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
