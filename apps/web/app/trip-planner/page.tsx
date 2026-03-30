'use client';

import { useDebounce } from '@tripie-pyotato/hooks';

import useFunnel from 'hooks/useFunnel';

import { Text } from '@tripie-pyotato/design-system/@core';
import { Background } from '@tripie-pyotato/design-system/@core/layout';

import { TripPlanner } from '@/models/Aws';
import ROUTE from 'constants/routes';
import { ContinentKeys } from 'models/Continent';
import { useQueryClient } from '@tanstack/react-query';
import useToken from 'hooks/query/useToken';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';
import CityStep from './_components/Cities';
import CompanionStep from './_components/Companion';
import ContinentStep from './_components/Continents';
import CountryStep from './_components/Countries';
import DoneStep from './_components/Done';
import DurationStep from './_components/Duration';
import PreferenceStep from './_components/Preference';
import { submitTripPlan } from './api';

export type FunnelSteps = {
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
};

export type FunnelProps = {
  onPrev: () => void;
  progress: ReactNode;
};

const Progress = ({ index }: { index: number }) => {
  const funnelSteps = ['CONTINENT', 'COUNTRY', 'CITY', 'DURATION', 'COMPANION', 'PREFERENCE'] as const;
  const stepCount = funnelSteps.length;
  return (
    <>
      &nbsp;(<Text.Accented noGapUnderText={true}>&nbsp;{index + 1}&nbsp;</Text.Accented>/ {stepCount}&nbsp;)
    </>
  );
};
const TripPlan = () => {
  const navigate = useRouter();

  const { data: userData } = useSession();
  const queryClient = useQueryClient();
  const pendingContextRef = useRef<TripPlanner | null>(null);

  const funnel = useFunnel<FunnelSteps>({
    id: 'trip-plan',
    initial: {
      step: 'CONTINENT',
      context: { continent: 'ALL' },
      index: 0,
    },
  });

  const onHandleSubmit = useDebounce(async () => {
    if (userData?.token?.id == null || pendingContextRef.current == null) {
      return;
    }
    // test 계정(credentials)만 ip 기반 토큰 추적, OAuth 유저는 undefined
    const ip = userData?.token?.ip as string | undefined;
    const userId = userData?.token?.id;
    const tokenQueryKey = useToken.queryKey(userId, ip);

    // 성공 시 차감될 토큰을 미리 반영 (optimistic update)
    const previousTokenData = queryClient.getQueryData(tokenQueryKey);
    queryClient.setQueryData(tokenQueryKey, (old: { user?: { usedTokens?: number } } | undefined) => ({
      ...old,
      user: { ...old?.user, usedTokens: (old?.user?.usedTokens ?? 0) + 1 },
    }));

    try {
      const id = await submitTripPlan(pendingContextRef.current, userId, ip);
      funnel.history.clear();

      if (id != null) {
        navigate.replace(`${ROUTE.TRIP_PLANNER.href}/${id}`);
      }
    } catch (error) {
      // 실패 시 rollback
      queryClient.setQueryData(tokenQueryKey, previousTokenData);
      console.error('Trip plan submission failed:', error);
      funnel.history.back();
    }
  });

  return (
    <Background variant={0} applyPadding="left-right" padding="m" alignItems="center" justifyContent="space-between">
      <funnel.Render
        CONTINENT={({ context, history, index }) => (
          <ContinentStep
            progress={<Progress index={index} />}
            context={context}
            continent={context?.continent ?? 'ALL'}
            onNext={(selected: { continent?: ContinentKeys }) => {
              history.push('COUNTRY', selected);
            }}
          />
        )}
        COUNTRY={({ context, history, index }) => (
          <CountryStep
            progress={<Progress index={index} />}
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
        CITY={({ context, history, index }) => (
          <CityStep
            progress={<Progress index={index} />}
            onNext={(selected: string[]) => {
              history.push('DURATION', { ...context, city: { ...context.city, selected } });
            }}
            onPrev={history.back}
            context={context}
          />
        )}
        DURATION={({ context, history, index }) => (
          <DurationStep
            progress={<Progress index={index} />}
            onPrev={history.back}
            context={context}
            onNext={duration => history.push('COMPANION', { ...context, duration })}
          />
        )}
        COMPANION={({ context, history, index }) => (
          <CompanionStep
            progress={<Progress index={index} />}
            onPrev={history.back}
            context={context}
            onNext={companion => history.push('PREFERENCE', { ...context, companion })}
          />
        )}
        PREFERENCE={({ context, history, index }) => (
          <PreferenceStep
            progress={<Progress index={index} />}
            onPrev={history.back}
            context={context}
            onNext={preference => {
              const finalContext = { ...context, preference } as TripPlanner;
              pendingContextRef.current = finalContext;
              history.push('DONE', finalContext);
              onHandleSubmit();
            }}
          />
        )}
        DONE={({ context }) => <DoneStep context={context} />}
      />
    </Background>
  );
};

export default TripPlan;
