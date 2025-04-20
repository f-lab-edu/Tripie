'use client';

import { Container } from '@tripie-pyotato/design-system/@components/core';
import { useDebounce } from '@tripie-pyotato/hooks';

import { DB_NAME } from 'constants/auth';
import useFunnel from 'hooks/useFunnel';
import { classNames } from 'wrapper';

import firestoreService from 'app/api/firebase';
import getTripPlan from 'app/api/openai/getTripPlan';
import incrementedTokenId from 'app/api/openai/incrementedTokenId';
import ROUTE from 'constants/routes';
import { TripPlanner } from 'models/Aws';
import { ContinentKeys } from 'models/Continent';
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
  if (id == null) {
    return null;
  }
  const user = await firestoreService.getItem(DB_NAME, id);
  if (user == null) {
    return null;
  }

  return await firestoreService.getListWithIds('continentl').then(async () => {
    const res = await getTripPlan({ ...chatItems });
    if (res.data == null) {
      return null;
    }
    return await incrementedTokenId(chatItems, id, res.data);
  });
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
    const id = await handleSubmit(funnel.context as TripPlanner, userData?.user?.id);
    funnel.history.clear();

    if (id != null) {
      navigate.replace(`${ROUTE.TRIP_PLANNER.href}/${id}`);
    }
    // 에러 발생!
  });

  return (
    <Container margin="none" className={cx('background')} padding="m">
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
