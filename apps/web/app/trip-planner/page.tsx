'use client';

import { Container } from '@tripie-pyotato/design-system';
import { getTripPlan } from 'app/api/chat/route';

import API from 'constants/api-routes';
import { CHAT_CACHE_DB_NAME, DB_NAME } from 'constants/auth';
import useFunnel from 'hooks/useFunnel';
import { classNames } from 'wrapper';

import firestoreService from 'app/api/firebase';
import { CustomUser } from 'app/api/gpt/route';
import Nav from 'app/home/_components/nav/Nav';
import ROUTE from 'constants/routes';
import { useDebounce } from 'hooks/useDebounce';
import { TripPlanner } from 'models/Aws';
import { ContinentKeys } from 'models/Continent';
import { Continentl } from 'models/Continentl';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CityStep from './_components/Cities';
import CompanionStep from './_components/Companion';
import ContinentStep from './_components/Continents';
import CountryStep from './_components/Countries';
import DoneStep from './_components/Done';
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
      firestoreService.getListWithIds('continentl').then(async countries => {
        // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
        const { code } = countries?.filter((place: Continentl) => place.id === chatItems.country)[0] as Continentl;
        const data = await getTripPlan({ ...chatItems, code });
        if (data != null) {
          await firestoreService.increment(DB_NAME, id, 'usedTokens');
          const {
            duration,
            companion,
            continent,
            country,
            preference,
            city: { selected },
          } = chatItems;
          return await firestoreService.getAddedItemId(CHAT_CACHE_DB_NAME, {
            duration,
            data: JSON.stringify(data),
            city: selected,
            companion: companion.split(','),
            continent,
            country,
            createdAt: serverTime,
            createdBy: id,
            preference,
          });
        }
      });
    }
  }
  return null;
};

const TripPlan = () => {
  const navigate = useRouter();

  const { data: userData } = useSession();

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
    DONE: {
      continent: ContinentKeys;
      country: string;
      city: { all: string[]; selected: string[] };
      duration: string;
      companion: string;
      preference: string;
    };
  }>({
    id: 'trip-plan',
    initial: {
      step: 'CONTINENT',
      context: { continent: 'ALL' },
      index: 0,
    },
  });

  const onHandleSubmit = useDebounce(async () => {
    if (userData.user.id == null) {
      return;
    }
    const id = await handleSubmit(funnel.context as TripPlanner, userData?.user?.id as CustomUser['id']);
    funnel.history.clear();
    navigate.replace(`${ROUTE.TRIP_PLANNER.href}/${id}`);
  });

  return (
    <Container margin="none" className={cx('background')}>
      <Nav />
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
            onPrev={history.back}
          />
        )}
        CITY={({ context, history }) => (
          <CityStep
            onNext={(selected: string[]) => {
              history.push('DURATION', { ...context, city: { ...context.city, selected } });
            }}
            onPrev={history.back}
            context={context}
          />
        )}
        DURATION={({ context, history }) => (
          <DurationStep
            onPrev={history.back}
            context={context}
            onNext={duration => history.push('COMPANION', { ...context, duration })}
          />
        )}
        COMPANION={({ context, history }) => (
          <CompanionStep
            onPrev={history.back}
            context={context}
            onNext={companion => history.push('PREFERENCE', { ...context, companion })}
          />
        )}
        PREFERENCE={({ context, history }) => (
          <PreferenceStep
            onPrev={history.back}
            context={context}
            onNext={preference => {
              history.push('DONE', { ...context, preference });
              onHandleSubmit();
            }}
          />
        )}
        DONE={({ context }) => <DoneStep context={context} />}
      />
    </Container>
  );
};

export default TripPlan;
