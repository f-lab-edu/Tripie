'use client';
import classNames from 'classnames/bind';

import { Container } from '@tripie-pyotato/design-system';

import RESOURCE from 'constants/resources';
import ROUTE from 'constants/routes';
import useChatToken from 'hooks/useChatToken';
import { TripContent } from 'models/Aws';
import { Coordinate } from 'models/Geo';
import { DefaultUser } from 'next-auth';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, createContext, useEffect, useMemo, useState } from 'react';
import Icon from 'shared/components/Icon/Icon';
import Loading from 'shared/components/Loading';
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

  return (
    <Container margin="none" className={cx('background')}>
      <TabContext.Provider value={selectedActivityValues}>
        <SelectedDateContext.Provider value={selectedDateValues}>
          <Container margin="none">
            <Icon.Navigate
              src={RESOURCE.ARROW}
              onTapStart={() => router.push(`${ROUTE.TRIP_PLANNER.href}?trip-plan.step=CONTINENT`)}
            />
            {remainingToken != null && !isAdmin ? `${remainingToken}토큰으로 다른 일정 추천 받아보기` : ''}
            {isAdmin ? `어드민 계정입니다. ${usedGptToken} 토큰을 사용하셨습니다.` : null}
            <h2>
              <span className={cx('accented')}>Chat</span>
            </h2>
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
