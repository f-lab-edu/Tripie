'use client';
import classNames from 'classnames/bind';

import { Container } from '@tripie-pyotato/design-system';

import { MAX_TOKEN } from 'constants/chat';
import RESOURCE from 'constants/resources';
import useChat from 'hooks/query/useChat';
import useLamdba from 'hooks/query/useLambda';
// import useChatToken from 'hooks/useChatToken';
import { Activity, AwsPlace, AwsPlaceResult, TripContent } from 'models/Aws';
import { ContinentKeys } from 'models/Continent';
import { Coordinate } from 'models/Geo';
import { TripieUser } from 'models/User';
import { signIn, useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react';
import Icon from 'shared/components/Icon/Icon';
import AwsMap from './AwsMap';
import ChatTab from './Tab';
import Style from './chat.module.scss';

const cx = classNames.bind(Style);

export interface ChatFunnelProps {
  context: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion: string;
    preference: string;
  };
}

export type LocationMarker = {
  lat: number;
  lng: number;
  label: Activity['label'];
  info: string;
  index: string;
  parent: string;
};
export type AwsLocationWithLabel = {
  label: AwsPlace['Label'];
} & AwsPlaceResult;

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

const ChatFunnel = ({ context }: ChatFunnelProps) => {
  const { data, isLoading } = useChat(context);
  const { status, data: userData } = useSession();
  const { data: googleSearchData } = useLamdba({
    places: data?.places?.[0],
    selectedCities: context.city.selected.join(', '),
  });

  // const { tokenData } = useChatToken({ context });

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

  if (status === 'unauthenticated') {
    signIn();
  }

  if (googleSearchData != null) {
    console.log('googleSearchData', googleSearchData);
  }

  // // 여행 일정 맛보기
  // if (isLoadingGoogleSearchData && !isLoading && data?.plans != null) {
  //   return <ChatTab data={data.plans} />;
  // }

  const coordinates = useMemo(() => {
    if (data) {
      return data.plans.trips.map((trip: TripContent) =>
        trip.activities.map(activity => activity?.coordinates)
      ) as unknown as Coordinate[][];
    } else {
      return null;
    }
  }, [data]);

  // console.log('tokenData', tokenData);

  return (
    <TabContext.Provider value={selectedActivityValues}>
      <SelectedDateContext.Provider value={selectedDateValues}>
        <Container margin="none">
          <Container margin="none">
            {isLoading ? (
              <Icon.Loading />
            ) : (userData?.user as TripieUser)?.isAdmin ? (
              <>
                <Icon.Navigate src={RESOURCE.ARROW} />
              </>
            ) : (
              <>
                <Icon.Navigate src={RESOURCE.ARROW} />{' '}
                {MAX_TOKEN > (userData?.user as TripieUser)?.usedGptToken
                  ? `${MAX_TOKEN - (userData?.user as TripieUser)?.usedGptToken}토큰이 남았습니다.`
                  : `토큰을 모두 사용하셨습니다.`}
              </>
            )}
          </Container>
          <h2>
            <span className={cx('accented')}>Chat</span>
          </h2>
        </Container>
        <Container margin="none" className={cx('trip-content-wrap')}>
          {isLoading || coordinates == null || data == null ? (
            <></>
          ) : (
            <>
              <ChatTab data={data.plans} />
              <AwsMap plans={data.plans} coordinates={coordinates} />
            </>
          )}
        </Container>
      </SelectedDateContext.Provider>
    </TabContext.Provider>
  );
};

export default ChatFunnel;
