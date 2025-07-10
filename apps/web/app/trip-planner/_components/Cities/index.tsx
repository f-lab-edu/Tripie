'use client';
import { Icon, NavigationButton } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import PREFERENCE_LIST from 'constants/preferences';

import { useMemo, useState } from 'react';

import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
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
        <NavigationButton
          sizes={'large'}
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={
        <>
          내가 여행하고 싶은 <Text.Accented>{'\n'}도시</Text.Accented>는?&nbsp;
          {progress}
        </>
      }
      decor={<Clouds rows={3} length={6} />}
      refreshIcon={<Icon.Refresh onTapStart={() => setSelected([])} />}
      listItems={<CityList cities={cities} selected={selected} setSelected={setSelected} />}
      disabled={selected.length == 0}
      submitButtonChildren={
        <>
          {selected.length === 0 ? (
            '다중 선택이 가능해요.'
          ) : (
            <>
              다음 <Icon />
            </>
          )}
        </>
      }
      clickAction={() => onNext(selected)}
    />
  );
};

export default CityStep;
