'use client';

import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import Text from '@tripie-pyotato/design-system/@core/Text';

import ROUTE from '@/constants/routes';
import Divider from '@tripie-pyotato/design-system/@components/Divider';
import UnstyledLink from '@tripie-pyotato/design-system/@components/Link';
import { Container } from '@tripie-pyotato/design-system/@core';
import { COLORS } from '@tripie-pyotato/design-system/shared';
import useChatToken from 'hooks/useChatToken';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import TripieIcon from '../TripieIcon/TripieIcon';

const TokenStatus = () => {
  const { remainingToken, isAdmin, usedGptToken, status } = useChatToken();
  const pathName = usePathname();
  const fontColor = useMemo(() => (pathName.startsWith(ROUTE.TRIP_PLANNER.href) ? 400 : 50), [pathName]);

  if (status === 'unauthenticated') {
    return (
      <Container margin="none">
        <UnstyledLink href={'/sign-in'}>
          <Text size="tiny" color={COLORS[fontColor]}>
            로그인 후 추천받기
          </Text>
        </UnstyledLink>
        <Divider />
      </Container>
    );
  }

  if (status === 'loading') {
    return (
      <Text size="tiny" applyMargin="all" margin="sm">
        <TripieIcon variant="loading" /> <AnimatedText.Jump>토큰 확인중...</AnimatedText.Jump>
      </Text>
    );
  }

  if (isAdmin && usedGptToken != null) {
    return (
      <Text size="tiny" margin="sm" applyMargin="all">
        {usedGptToken}개 사용
      </Text>
    );
  }

  if (Number.isInteger(remainingToken)) {
    if (remainingToken === 0) {
      return (
        <Text size="tiny" margin="sm" applyMargin="all">
          토큰 소진!
        </Text>
      );
    }
    return (
      <Text size="tiny" margin="sm" applyMargin="all">
        {remainingToken} 토큰
      </Text>
    );
  }

  return (
    <Text size="tiny" applyMargin="all" margin="sm">
      <TripieIcon variant="loading" /> <AnimatedText.Jump>토큰 확인중...</AnimatedText.Jump>
    </Text>
  );
};
export default TokenStatus;
