'use client';

import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import Link from 'next/link';

import { Icon, Menu } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';
import { usePathname } from 'next/navigation';

// ai 일정짜기 버튼, 토큰이 없는 경우 /not-enough-tokens로 이동
const AiTripButton = () => {
  const pathName = usePathname();
  const { isEligible, status } = useChatToken();

  if (pathName.startsWith(ROUTE.TRIP_PLANNER.href) || status != 'authenticated') {
    return null;
  }

  return (
    <Menu.Item>
      <Link href={`${API.BASE_URL + ROUTE.TRIP_PLANNER.href}${isEligible ? '' : '/not-enough-tokens'}`}>
        AI 추천 맞춤일정
      </Link>
      <Icon />
    </Menu.Item>
  );
};
export default AiTripButton;
