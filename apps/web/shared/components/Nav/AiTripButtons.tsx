'use client';

import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import Link from 'next/link';

import { Icon, Menu } from '@tripie-pyotato/design-system/@components';
// import TokenStatus from 'app/trip-planner/[id]/_components/TripResponse/TokenStatus';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

// ai 일정짜기 버튼, 토큰이 없는 경우 /not-enough-tokens로 이동
const AiTripButton = () => {
  const pathName = usePathname();
  const { isEligible, status } = useChatToken();

  const url = useMemo(() => {
    if (status === 'authenticated' && isEligible) {
      return ROUTE.TRIP_PLANNER.href;
    } else if (!isEligible) {
      return `${ROUTE.TRIP_PLANNER.href}/not-enough-tokens`;
    } else {
      return ROUTE.SIGN_IN.href;
    }
  }, [isEligible, status]);

  return (
    <Menu.Item>
      <Link
        href={url}
        // href={`${API.BASE_URL + status != 'authenticated' ? ROUTE.SIGN_IN.href : ROUTE.TRIP_PLANNER.href + isEligible ? '' : '/not-enough-tokens'}`}
      >
        AI 추천 맞춤일정
      </Link>
      <Icon />
    </Menu.Item>
  );
};
export default AiTripButton;
