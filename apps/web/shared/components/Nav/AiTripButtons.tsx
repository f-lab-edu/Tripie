'use client';

import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';

import { Icon, Link, Menu, Tooltip } from '@tripie-pyotato/design-system/@components';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import TokenStatus from 'shared/components/Nav/TokenStatus';

// ai 일정짜기 버튼, 토큰이 없는 경우 /not-enough-tokens로 이동
const AiTripButton = ({ isOpen }: { isOpen: boolean }) => {
  const { isEligible, status } = useChatToken();
  const pathName = usePathname();

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
    <Tooltip
      open={isOpen}
      tooltipPosition={'right'}
      tooltipColor={pathName.startsWith(ROUTE.TRIP_PLANNER.href) ? 50 : 400}
      triggerChildren={
        <Menu.Item>
          <Link href={url}>
            AI 추천 맞춤일정
            <Icon />
          </Link>
        </Menu.Item>
      }
      renderDescription={() => <TokenStatus />}
    />
  );
};
export default AiTripButton;
