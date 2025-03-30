'use client';
import { Container, Icon, NoStyleButton, Text, TextUnderLineAnimation } from '@tripie-pyotato/design-system';

import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import ROUTE from 'constants/routes';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import useChatToken from 'hooks/useChatToken';
import { Coordinate } from 'models/Geo';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import AwsMap from 'shared/components/AwsMap';
import { classNames } from 'wrapper';
import { SelectedDateContext, TabContext } from '..';
import ChatTab from '../Tab';
import Style from './trip-response.module.scss';

const cx = classNames.bind(Style);

export type ChatResponseData = {
  plans: AiTripPlanResponse;
  placeSet: {
    name: string;
    selectedCities: string;
  }[];
  places: string[][];
};

const MapTab = ({ data, coordinates }: { data: ChatResponseData['plans']; coordinates: Coordinate[][] }) => {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);
  const { center, locationMarker } = useAwsMap({ coordinates, plans: data });
  const { remainingToken, isAdmin, usedGptToken, status } = useChatToken();
  const router = useRouter();

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  // 다른 일정을 찾는다면 처음으로 이동
  const handleNavigation = () => {
    if (status === 'unauthenticated') {
      return signIn();
    }
    return router.push(ROUTE.TRIP_PLANNER.href + '?trip-plan.step=CONTINENT');
  };

  return (
    <>
      <Container align="left" margin="none" className={cx('button-wrap')}>
        {status === 'loading' ? (
          <>
            <Icon.Loading /> <Text.Jump>토큰 확인중...</Text.Jump>
          </>
        ) : (
          <TextUnderLineAnimation>
            <NoStyleButton className={cx('center')} action={handleNavigation}>
              <Icon />
              {remainingToken != null && !isAdmin ? `${remainingToken}토큰으로 다른 일정 추천 받아보기` : ''}
              {isAdmin ? `어드민님, (${usedGptToken}개 사용) 다른 일정 추천 받기` : null}
              {status === 'unauthenticated' && '로그인하고 일정 추천받아보기'}
            </NoStyleButton>
          </TextUnderLineAnimation>
        )}
      </Container>
      <Container margin="none" className={cx('trip-content-wrap')}>
        <ChatTab data={data} />
        <AwsMap
          style={{ height: '85vh' }}
          interactive={true}
          center={center[currentDate]}
          locationMarker={locationMarker[currentDate]}
        />
      </Container>
    </>
  );
};

export default MapTab;
