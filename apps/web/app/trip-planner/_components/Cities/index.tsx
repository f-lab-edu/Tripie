'use client';
import PREFERENCE_LIST from 'constants/preferences';

import { useMemo, useState } from 'react';

import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
import NavButton from 'shared/components/NavButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import Clouds from '../../../../shared/components/Clouds';
import Layout from '../Layout/Layout';
import CityList from './CityList';

export type Preference = keyof typeof PREFERENCE_LIST;

const CityStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: FunnelProps & { context: FunnelSteps['CITY']; onNext: (cities: string[]) => void }) => {
  const [selected, setSelected] = useState<Array<string>>(context.city.selected);
  // 전체 도시
  const cities = useMemo(() => {
    return context.city.all;
  }, [context]);

  return (
    <Layout
      navigateIcon={
        <NavButton
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={{ text: '도시', particle: '는' }}
      progress={progress}
      decor={<Clouds rows={3} length={6} />}
      refreshIcon={<TripieIcon variant="refresh" onTapStart={() => setSelected([])} />}
      listItems={<CityList cities={cities} selected={selected} setSelected={setSelected} />}
      disabled={selected.length == 0}
      submitButtonChildren={
        <>
          {selected.length === 0 ? (
            '다중 선택이 가능해요.'
          ) : (
            <>
              다음 <TripieIcon />
            </>
          )}
        </>
      }
      clickAction={() => onNext(selected)}
    />
  );
};

export default CityStep;
