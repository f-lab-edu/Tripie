'use client';

import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import Text from '@tripie-pyotato/design-system/@core/Text';

import useChatToken from 'hooks/useChatToken';
import TripieIcon from '../TripieIcon/TripieIcon';

const TokenStatus = () => {
  const { remainingToken, isAdmin, usedGptToken, status } = useChatToken();

  if (status === 'loading' || remainingToken == null) {
    return (
      <Text size="tiny" applyMargin="all" margin="sm">
        <TripieIcon variant="loading" /> <AnimatedText.Jump>토큰 확인중...</AnimatedText.Jump>
      </Text>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Text size="tiny" margin="sm" applyMargin="all">
        로그인 후 추천받기
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

  return (
    <Text size="tiny" margin="sm" applyMargin="all">
      {remainingToken} 토큰
    </Text>
  );
};
export default TokenStatus;
