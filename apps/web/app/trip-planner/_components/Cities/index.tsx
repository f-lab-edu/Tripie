'use client';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import PREFERENCE_LIST from 'constants/preferences';

import { ContinentKeys } from 'models/Continent';
import { ReactNode, useMemo, useState } from 'react';

import Layout from '../Layout/Layout';
import CityList from './CityList';
import SubmitButton from './SubmitButton';

interface Props {
  context: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  onNext: (cities: string[]) => void;
  onPrev: () => void;
  progress: ReactNode;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const CityStep = ({ context, onNext, onPrev, progress }: Props) => {
  // 전체 도시
  const cities = useMemo(() => {
    return context.city.all;
  }, [context]);
  const [selected, setSelected] = useState<Array<string>>(context.city.selected);

  return (
    <Layout
      navigateIcon={
        <Icon.Navigate
          sizes="large"
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={
        <>
          내가 여행하고 싶은 <Text.Accented>{'\n'}도시</Text.Accented>는? {progress}
        </>
      }
      decor={
        <>
          {Array.from({ length: 30 }, (_, index) => (
            <Icon.Cloud key={index} index={index} />
          ))}
          <Icon.Plane />
        </>
      }
      refreshIcon={<Icon.Refresh onTapStart={() => setSelected([])} />}
      listItems={<CityList cities={cities} selected={selected} setSelected={setSelected} />}
      submitButton={<SubmitButton selected={selected} onNext={onNext} />}
    />
  );
};

export default CityStep;
