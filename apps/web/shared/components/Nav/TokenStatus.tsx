'use client';

import { Icon } from '@tripie-pyotato/design-system/@components';
import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import Text from '@tripie-pyotato/design-system/@core/Text';

import useChatToken from 'hooks/useChatToken';

const TokenStatus = () => {
  const { remainingToken, isAdmin, usedGptToken, status } = useChatToken();

  if (status === 'loading') {
    return (
      <Text size="tiny" applyMargin="all">
        <Icon.Loading /> <AnimatedText.Jump>토큰 확인중...</AnimatedText.Jump>
      </Text>
    );
  }

  if (status === 'unauthenticated') {
    return <Text size="tiny">로그인</Text>;
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
