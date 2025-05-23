'use client';

import { Drawer } from '@tripie-pyotato/design-system/@components';
import { useCycle } from '@tripie-pyotato/design-system/@hooks';
import ROUTE from 'constants/routes';
import { TripContent } from 'models/Aws';
import { Coordinate } from 'models/Geo';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, Suspense, createContext, useEffect, useMemo, useState } from 'react';
import Loading from 'shared/components/Loading';
import TripDetails, { ChatResponseData } from './TripDetails';
import TripMap from './TripMap';

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
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(true, false);

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

  // 다른 날짜 혹은 일정 좌표를 클릭하면 탭 열기
  useEffect(() => {
    if (!isOpen) {
      toggleOpen();
    }
  }, [selectedDateValues, selectedActivityValues]);

  if (coordinates == null) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <TabContext.Provider value={selectedActivityValues}>
        <SelectedDateContext.Provider value={selectedDateValues}>
          <Drawer
            isOpen={isOpen}
            toggleOpen={() => toggleOpen()}
            drawerContent={{
              children: <TripDetails data={data.plans} />,
            }}
            drawerBody={{
              children: <TripMap data={data.plans} coordinates={coordinates} />,
            }}
          />
        </SelectedDateContext.Provider>
      </TabContext.Provider>
    </Suspense>
  );
};

export default TripResponse;
