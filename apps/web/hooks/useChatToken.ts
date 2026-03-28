'use client';

import { MAX_TOKEN } from '@/constants/chat';
import ROUTE from 'constants/routes';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import useToken from './query/useToken';

/**
 * 악의적인 챗지피티 사용 제한하기 위한 조치
 * (어드민 계정을 제외한 테스트 및 방문자들은 최대 10번 사용해볼 수 있다. 구독 서비스를 추가한다면 free/unlimited/custom 에 따라 달리 부여)
 */
const useChatToken = () => {
  const { data, status } = useSession();

  const pathname = usePathname();
  const navigate = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [usedGptToken, setUsedGptToken] = useState<number>(0);
  const [remainingToken, setRemainingToken] = useState<number>(0);
  const { data: tokenData } = useToken(data?.token?.id, data?.token?.ip);
  // 만약 사용자가 로그인하지 않은 채로 지피티를 사용하고자 한다면 로그인 페이지로 이동
  // 🤔 여기말고 페이지 단위에서 차단하는 방법이 있을듯?
  useEffect(() => {
    if (status === 'unauthenticated' && pathname === ROUTE.TRIP_PLANNER.href) {
      // 지피티 페이지일 경우에만 로그인 필수
      navigate.replace(ROUTE.SIGN_IN.href);
    }
  }, [status, pathname]);

  // 어드민 계정일 경우, 토큰을 모두 사용해도 지피티 이용이 가능하도록
  const isEligible = useMemo(() => {
    if (status !== 'unauthenticated') {
      return isAdmin || (remainingToken != null && remainingToken > 0);
    }
    return 'loading';
  }, [status, isAdmin, remainingToken]);

  // firebase 에 저장해둔 유저의 챗지피지티 이용 사항을 확인해
  // 사용한 토큰 개수, 남은 토큰 개수, 어드민 여부의 state를 적용.
  useEffect(() => {
    setIsAdmin(tokenData?.user?.isAdmin === true);
    const usedTokens = tokenData?.user?.usedTokens ?? 0;
    setUsedGptToken(usedTokens);
    setRemainingToken(Math.max(MAX_TOKEN - usedTokens, 0));
  }, [data, status]);

  return { isAdmin, usedGptToken, remainingToken, isEligible, status };
};
export default useChatToken;
