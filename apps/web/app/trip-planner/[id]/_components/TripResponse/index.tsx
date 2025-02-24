'use client';
import classNames from 'classnames/bind';

import { Container, Headings, Icon, Text } from '@tripie-pyotato/design-system';

import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import { TripContent } from 'models/Aws';
import { Coordinate } from 'models/Geo';
import { DefaultUser } from 'next-auth';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, createContext, useEffect, useMemo, useState } from 'react';
import Loading from 'shared/components/Loading';
import { handleTabAction } from 'utils/new-tab';
import MapTab, { ChatResponseData } from './MapTab';
import Style from './trip-response.module.scss';

const cx = classNames.bind(Style);

export type CustomUser = DefaultUser & { id: string };

/** props drilling 완화를 위해 컨텍스트로 state 관리. 전역으로 사용될 state는 아니기 때문에 간단히 내장 useContext 사용
 * 선택한 tab의 일정, `{일정 날짜}-{선택 일정 인덱스}`
 */
export const TabContext = createContext<{ current: string; cycle: Dispatch<SetStateAction<string>> }>({
  current: '0-0',
  cycle: () => null,
});

/** props drilling 완화를 위해 컨텍스트로 state 관리. 전역으로 사용될 state는 아니기 때문에 간단히 내장 useContext 사용
 * 선택한 여행 일정 일짜
 */
export const SelectedDateContext = createContext<{ currentDate: number; dateCycle: Dispatch<SetStateAction<number>> }>({
  currentDate: 0,
  dateCycle: () => null,
});

const TripResponse = ({ data }: { data: ChatResponseData }) => {
  const { remainingToken, isAdmin, usedGptToken } = useChatToken();

  const router = useRouter();
  const pathName = usePathname();

  // 뒤로 가기 시 강제로 처음으로
  useEffect(() => {
    const handleBack = (event: PopStateEvent) => {
      event.preventDefault();
      router.push(ROUTE.TRIP_PLANNER.href + '?trip-plan.step=CONTINENT');
    };

    window?.addEventListener('popstate', handleBack);

    return () => window?.removeEventListener('popstate', handleBack);
  }, [router]);

  // 여행 일정 중 선택한 날짜
  const [selectedDate, setSelectedDate] = useState<number>(0);
  // 여행 일정 중 선택한 일정
  const [selectedActivity, setSelectedActivity] = useState(`${selectedDate}-0`);

  // selectedActivity만 바뀔때마다 리렌더되도록
  const selectedActivityValues = useMemo(() => {
    return { current: selectedActivity, cycle: setSelectedActivity };
  }, [selectedActivity]);

  // selectedDate만 바뀔때마다 리렌더되도록
  const selectedDateValues = useMemo(() => {
    return { currentDate: selectedDate, dateCycle: setSelectedDate };
  }, [selectedDate]);

  const coordinates = useMemo(() => {
    if (data == null) {
      return null;
    }

    return data.plans.trips.map((trip: TripContent) =>
      trip.activities.map(activity => activity?.coordinates)
    ) as unknown as Coordinate[][];
  }, [data]);

  if (coordinates == null) {
    return <Loading />;
  }

  // 다른 일정을 찾는다면 처음으로 이동
  const handleNavigation = () => {
    handleTabAction({ url: `${ROUTE.TRIP_PLANNER.href}?trip-plan.step=CONTINENT`, action: 'open' });
    setTimeout(() => {
      handleTabAction({ action: 'close' });
    }, 100);
  };

  return (
    <Container margin="none" className={cx('background')}>
      <TabContext.Provider value={selectedActivityValues}>
        <SelectedDateContext.Provider value={selectedDateValues}>
          <Container margin="none">
            <Icon onTapStart={handleNavigation} />
            {remainingToken != null && !isAdmin ? `${remainingToken}토큰으로 다른 일정 추천 받아보기` : ''}
            {isAdmin ? `어드민님, (${usedGptToken}개 사용) 다른 일정 추천 받기` : null}
            <Headings.H2>
              <Text.Accented>Chat</Text.Accented>
            </Headings.H2>
          </Container>
          <Container margin="none" className={cx('trip-content-wrap')}>
            <MapTab data={data.plans} coordinates={coordinates} />
          </Container>
        </SelectedDateContext.Provider>
      </TabContext.Provider>
    </Container>
  );
};

export default TripResponse;
