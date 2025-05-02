'use client';
import { AnimatedButton, Icon, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Background, Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
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
    <Background variant={0} justifyContent="center" gap={'l'} applyPadding="all" padding="m">
      <Headings.H2>
        이런! <Text.Accented>토큰을 </Text.Accented>
        <Text.Accented>다 사용했네요!</Text.Accented>
      </Headings.H2>

      <TextUnderLineAnimation>
        <Link
          className={cx('link-wrap')}
          href="mailto:pyotato.dev@gmail.com?subject=Hello&body=Can I have extra tokens?"
        >
          <Text.Accented>@관리자</Text.Accented>에게 토큰 요청하기 <Icon />
        </Link>
      </TextUnderLineAnimation>

      <Container margin="none" preserveWhiteSpace="sm">
        여행지에 대한 <Text.Accented>팁</Text.Accented>이나 <Text.Accented>아이디어</Text.Accented>를 {'\n'}얻고
        싶으신가요?
      </Container>
      <Container margin="none" className={cx('list-wrap')}>
        <RegionInfo />
      </Container>
      <AnimatedButton withBorder={true} onClick={() => navigate.replace(ROUTE.HOME.href)} isFullSize={true}>
        홈으로 돌아가기
      </AnimatedButton>
    </Background>
  );
};

export default ContactAdmin;
