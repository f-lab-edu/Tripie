'use client';
import { AnimatedButton, Icon, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@components/core';
import RegionInfo from 'app/home/_components/our-service/_components/RegionInfo';
import ROUTE from 'constants/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { classNames } from 'wrapper';
import Style from './contact-admin.module.scss';

const cx = classNames.bind(Style);

const ContactAdmin = () => {
  const navigate = useRouter();
  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="xl" applyMargin="top">
        <Headings.H2>
          <span className={cx('break-text')}>
            이런! <Text.Accented>토큰을 </Text.Accented>
          </span>
          <Text.Accented>다 사용했네요!</Text.Accented>
        </Headings.H2>
      </Container>
      <Container margin="none" className={cx('main-wrap')}>
        <Container className={cx('text-wrap')} margin="none">
          <TextUnderLineAnimation>
            <Link
              className={cx('link-wrap')}
              href="mailto:pyotato.dev@gmail.com?subject=Hello&body=Can I have extra tokens?"
            >
              <Text.Accented>@관리자</Text.Accented>에게 토큰 요청하기 <Icon />
            </Link>
          </TextUnderLineAnimation>
        </Container>
        <Container applyMargin="bottom">
          <Container applyMargin="top-bottom" margin="sm" preserveWhiteSpace={true}>
            <Container margin="none" className={cx('break-text')}>
              여행지에 대한 <Text.Accented>팁</Text.Accented>이나 <Text.Accented>아이디어</Text.Accented>를
            </Container>
            얻고 싶으신가요?
          </Container>
        </Container>
        <Container margin="none" className={cx('list-wrap')}>
          <RegionInfo />
        </Container>
      </Container>
      <Container applyMargin="top-bottom">
        <AnimatedButton
          withBorder={true}
          onClick={() => navigate.replace(ROUTE.HOME.href)}
          className={cx('submit-button')}
        >
          <span className={cx('flex')}>홈으로 돌아가기</span>
        </AnimatedButton>
      </Container>
    </Container>
  );
};

export default ContactAdmin;
