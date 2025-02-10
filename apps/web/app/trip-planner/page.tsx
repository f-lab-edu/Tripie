'use client';

import { increment } from '@firebase/firestore';
import { Container, Text } from '@tripie-pyotato/design-system';
import { getTripPlan } from 'app/api/chat/route';
import firestoreService from 'app/api/firebase';
import classNames from 'classnames/bind';
import API from 'constants/api-routes';
import { CHAT_DB_NAME, DB_NAME } from 'constants/auth';
import useFunnel from 'hooks/useFunnel';

import { CustomUser } from 'app/api/gpt/route';
import ROUTE from 'constants/routes';
import { useDebounce } from 'hooks/useDebounce';
import { TripPlanner } from 'models/Aws';
import { ContinentKeys } from 'models/Continent';
import { Continentl } from 'models/Continentl';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Icon from 'shared/components/Icon/Icon';
import { randomInt } from 'utils/random';
import CityStep from './_components/Cities';
import CompanionStep from './_components/Companion';
import { ContinentStep } from './_components/Continents';
import { CountryStep } from './_components/Countries';
import DurationStep from './_components/Duration';
import PreferenceStep from './_components/Preference';
import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

const handleSubmit = async (chatItems: TripPlanner, id: string) => {
  const { serverTime } = await fetch(`${API.BASE}${API.SERVER_TIME}`).then(v => v.json());
  if (id != null) {
    const user = await firestoreService.getItem(DB_NAME, id);
    if (user != null) {
      return await // firestoreService.getListWithIds('continentl').then(async countries => {
      firestoreService.getListWithIds('continentl-with-blur-data').then(async countries => {
        // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
        const { code } = countries?.filter((place: Continentl) => place.id === chatItems.country)[0] as Continentl;
        const data = await getTripPlan({ ...chatItems, code });
        const docId = `${serverTime}-${id}`;
        if (data != null) {
          await firestoreService.updateItem(DB_NAME, id, {
            usedTokens: increment(1),
          });
          const {
            duration,
            companion,
            continent,
            country,
            preference,
            city: { selected },
          } = chatItems;
          await firestoreService.addItem(CHAT_DB_NAME, {
            duration,
            data: JSON.stringify(data),
            id: docId,
            city: selected,
            companion: companion.split(','),
            continent,
            country,
            createdAt: serverTime,
            createdBy: id,
            preference,
          });
        }
        return docId;
      });
    }
  }
  return null;
};

const TripPlan = () => {
  const navigate = useRouter();
  const { status, data: userData } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const funnel = useFunnel<{
    CONTINENT: {
      continent?: ContinentKeys;
      country?: string;
      city?: { all: string[]; selected: string[] };
      duration?: string;
      companion?: string;
      preference?: string;
    };
    COUNTRY: {
      continent: ContinentKeys;
      country?: string;
      city?: { all: string[]; selected: string[] };
      duration?: string;
      companion?: string;
      preference?: string;
    };
    CITY: {
      continent: ContinentKeys;
      country: string;
      city: { all: string[]; selected: string[] };
      duration?: string;
      companion?: string;
      preference?: string;
    };
    DURATION: {
      continent: ContinentKeys;
      country: string;
      city: { all: string[]; selected: string[] };
      duration?: string;
      companion?: string;
      preference?: string;
    };
    COMPANION: {
      continent: ContinentKeys;
      country: string;
      city: { all: string[]; selected: string[] };
      duration: string;
      companion?: string;
      preference?: string;
    };
    PREFERENCE: {
      continent: ContinentKeys;
      country: string;
      city: { all: string[]; selected: string[] };
      duration: string;
      companion: string;
      preference?: string;
    };
  }>({
    id: 'trip-plan',
    initial: {
      step: 'CONTINENT',
      context: { continent: 'ALL' },
    },
  });

  if (status === 'unauthenticated') {
    signIn();
  }

  const onHandleSubmit = useDebounce(async () => {
    setIsLoading(true);
    const id = await handleSubmit(funnel.context as TripPlanner, (userData?.user as CustomUser)?.id);
    setIsLoading(false);
    funnel.history.clear();
    navigate.replace(`${ROUTE.TRIP_PLANNER.href}/${id}`);
  });

  if (isLoading) {
    const {
      preference,
      continent,
      city: { selected },
      country,
      companion,
      duration,
    } = funnel.context as TripPlanner;
    const selectedOptions = [
      ...preference.split(','),
      continent,
      selected,
      country,
      ...companion.split(','),
      duration,
    ].flat();
    return (
      <Container margin="none" className={cx('background', 'title-wrap')}>
        <Container className={cx('cloud-wrap')}>
          {Array.from({ length: 17 }, (_, index) => (
            <Icon.Cloud key={index} index={index} />
          ))}
          <Icon.Plane />
        </Container>
        <Container margin="none">
          {selectedOptions.map(text => (
            <Text.Slide animate="fly" duration={randomInt()} key={text}>
              <div className={cx('text-color')}>{text}</div>
            </Text.Slide>
          ))}
        </Container>
        <Container className={cx('cloud-wrap')}>
          {Array.from({ length: 13 }, (_, index) => (
            <Icon.Cloud key={index} index={index} />
          ))}
        </Container>
      </Container>
    );
  }

  return (
    <Container margin="none" className={cx('background')}>
      <funnel.Render
        CONTINENT={({ context, history }) => (
          <ContinentStep
            context={context}
            continent={context?.continent ?? 'ALL'}
            onNext={(selected: { continent?: ContinentKeys }) => {
              history.push('COUNTRY', selected);
            }}
          />
        )}
        COUNTRY={({ context, history }) => (
          <CountryStep
            onNext={(selected: {
              continent?: ContinentKeys;
              country?: string;
              city?: { all: string[]; selected: string[] };
              duration?: string;
            }) => {
              history.push('CITY', { ...context, ...selected });
            }}
            context={context}
          />
        )}
        CITY={({ context, history }) => (
          <CityStep
            onNext={(selected: string[]) => {
              history.push('DURATION', { ...context, city: { ...context.city, selected } });
            }}
            context={context}
          />
        )}
        DURATION={({ context, history }) => (
          <DurationStep context={context} onNext={duration => history.push('COMPANION', { duration })} />
        )}
        COMPANION={({ context, history }) => (
          <CompanionStep context={context} onNext={companion => history.push('PREFERENCE', { companion })} />
        )}
        PREFERENCE={({ context, history }) => (
          <PreferenceStep
            context={context}
            onNext={preference => {
              history.push('PREFERENCE', { preference });
              onHandleSubmit();
            }}
          />
        )}
      />
    </Container>
  );
};

export default TripPlan;
