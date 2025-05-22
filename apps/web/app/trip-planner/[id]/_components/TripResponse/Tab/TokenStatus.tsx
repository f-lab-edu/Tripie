'use client';
import { AnimatedText, Icon, TextUnderLineAnimation, UnStyledButton } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const TokenStatus = () => {
  const { remainingToken, isAdmin, usedGptToken, status } = useChatToken();

  const router = useRouter();
  // 다른 일정을 찾는다면 처음으로 이동
  const handleNavigation = () => {
    if (status === 'unauthenticated') {
      return signIn();
    }
    return router.push(ROUTE.TRIP_PLANNER.href + '?trip-plan.step=CONTINENT');
  };

  return (
    <Container gap="l" justifyContent="left" margin="l" padding="none" applyMargin="top">
      {status === 'loading' ? (
        <Container margin="none" gap="sm" justifyContent="start">
          <Icon.Loading /> <AnimatedText.Jump>토큰 확인중...</AnimatedText.Jump>
        </Container>
      ) : (
        <TextUnderLineAnimation>
          <UnStyledButton onclick={handleNavigation}>
            <Text gap={'sm'}>
              <Icon />
              {remainingToken != null && !isAdmin ? `${remainingToken}토큰으로 다른 일정 추천 받아보기` : ''}
              {isAdmin ? `어드민님, (${usedGptToken}개 사용) 다른 일정 추천 받기` : null}
              {status === 'unauthenticated' && '로그인하고 일정 추천받아보기'}
            </Text>
          </UnStyledButton>
        </TextUnderLineAnimation>
      )}
    </Container>
  );
};
export default TokenStatus;
