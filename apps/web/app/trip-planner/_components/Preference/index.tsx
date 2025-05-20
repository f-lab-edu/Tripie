import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';

import PREFERENCE_LIST from 'constants/preferences';

import { Text } from '@tripie-pyotato/design-system/@core';
import { ContinentKeys } from 'models/Continent';
import { ReactNode, useCallback, useState } from 'react';
import Layout from '../Layout/Layout';
import PreferenceList from './PreferenceList';

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion: string;
    preference?: string;
  };
  onNext: (preference: string) => void;
  onPrev: () => void;
  progress: ReactNode;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const PreferenceStep = ({ context, onNext, onPrev, progress }: Props) => {
  const [selected, setSelected] = useState<Array<Preference> | []>(
    context?.preference == null ? [] : (context.preference.split(',') as Array<Preference>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

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
          내가 선호하는 여행 <Text.Accented>{'\n'}스타일</Text.Accented>은?{progress}
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
      listItems={<PreferenceList selected={selected} setSelected={setSelected} />}
      submitButton={
        <AnimatedButton isFullSize={true} withBorder={true} disabled={selected.length === 0} onClick={handleSubmit}>
          <Text>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon />
              </>
            )}
          </Text>
        </AnimatedButton>
      }
    />
  );
};

export default PreferenceStep;
