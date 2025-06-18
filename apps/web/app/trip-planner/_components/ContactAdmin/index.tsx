'use client';
import { AnimatedButton, Icon, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Background, Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import RegionSelect from 'app/home/_components/OurService/RegionList';
import ROUTE from 'constants/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Style from './contact-admin.module.scss';

const cx = classNames.bind(Style);

const ContactAdmin = () => {
  const navigate = useRouter();
  return (
    <Background variant={0} justifyContent="center" gap={'l'} applyPadding="all" padding="m">
      <Stack margin="l" applyMargin="top" direction="column" gap="default" alignItems="start">
        <Headings.H2>
          이런! <Text.Accented>토큰을 </Text.Accented>
          <Text.Accented>다 사용했네요!</Text.Accented>
        </Headings.H2>

        <TextUnderLineAnimation>
          <Link
            className={cx('link-wrap')}
            href="mailto:pyotato.dev@gmail.com?subject=Hello&body=Can I have extra tokens?"
          >
            <Text.Accented noGapUnderText={true}>@관리자</Text.Accented>에게 토큰 요청하기 <Icon />
          </Link>
        </TextUnderLineAnimation>

        <Container margin="none" preserveWhiteSpace="sm">
          여행지에 대한 <Text.Accented>팁</Text.Accented>이나 <Text.Accented>아이디어</Text.Accented>를 {'\n'}얻고
          싶으신가요?
        </Container>
        <Container margin="none" className={cx('list-wrap')}>
          <RegionSelect />
        </Container>

        <AnimatedButton isFullSize={true} withBorder={true} onClick={() => navigate.replace(ROUTE.HOME.href)}>
          홈으로 돌아가기
        </AnimatedButton>
      </Stack>
    </Background>
  );
};

export default ContactAdmin;
