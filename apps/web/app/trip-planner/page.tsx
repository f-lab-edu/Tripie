'use client';

import { useDebounce } from '@tripie-pyotato/hooks';

import useFunnel from 'hooks/useFunnel';

import { Text } from '@tripie-pyotato/design-system/@core';
import { Background } from '@tripie-pyotato/design-system/@core/layout';

import { Response } from 'app/api/openai/getTripPlan';
import ROUTE from 'constants/routes';
import { TripPlanner } from 'models/Aws';
import { ContinentKeys } from 'models/Continent';
import { useSession } from 'next-auth/react';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import api from 'utils/ky';
import CityStep from './_components/Cities';
import CompanionStep from './_components/Companion';
import ContinentStep from './_components/Continents';
import CountryStep from './_components/Countries';
import DoneStep from './_components/Done';
import DurationStep from './_components/Duration';
import PreferenceStep from './_components/Preference';

export type TripPlannerSuccessReponse = { data: { id: string } } & Response;

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

// const ContinentStep = dynamic(import('./_components/Continents/index'), { ssr: false });
// const CountryStep = dynamic(import('./_components/Countries/index'), { ssr: false });
// const DurationStep = dynamic(import('./_components/Duration'), { ssr: false });
// const CompanionStep = dynamic(import('./_components/Companion/index'), { ssr: false });
// const PreferenceStep = dynamic(import('./_components/Preference/index'), { ssr: false });
// const DoneStep = dynamic(import('./_components/Done/index'), { ssr: false });

const handleSubmit = async (chatItems: TripPlanner, id: string) => {
  if (id == null) {
    return null;
  }
  const res: TripPlannerSuccessReponse = await api.post('openai', { json: { ...chatItems, id } }).json();
  return res?.data?.id;
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

  const funnel = useFunnel<FunnelSteps>({
    id: 'trip-plan',
    initial: {
      step: 'CONTINENT',
      context: { continent: 'ALL' },
      index: 0,
    },
  });

  const onHandleSubmit = useDebounce(async () => {
    if (userData?.user.id == null) {
      return;
    }
    const id = await handleSubmit(funnel.context as TripPlanner, userData?.user?.id);
    funnel.history.clear();

    if (id != null) {
      navigate.replace(`${ROUTE.TRIP_PLANNER.href}/${id}`);
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
              history.push('DONE', { ...context, preference });
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
