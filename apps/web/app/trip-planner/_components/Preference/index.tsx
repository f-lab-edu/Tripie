import { Icon, NavigationButton } from '@tripie-pyotato/design-system/@components';

import PREFERENCE_LIST from 'constants/preferences';

import { Text } from '@tripie-pyotato/design-system/@core';
import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
import { useCallback, useState } from 'react';
import Clouds from '../Done/Clouds';
import Layout from '../Layout/Layout';
import PreferenceList from './PreferenceList';

interface Props {
  context: FunnelSteps['PREFERENCE'];
  onNext: (preference: string) => void;
  onPrev: () => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const PreferenceStep = ({ context, onNext, onPrev, progress }: Props & FunnelProps) => {
  const [selected, setSelected] = useState<Array<Preference> | []>(
    context?.preference == null ? [] : (context.preference.split(',') as Array<Preference>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

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
          내가 선호하는 여행 <Text.Accented>{'\n'}스타일</Text.Accented>은?{progress}
        </>
      }
      decor={<Clouds.WithPlane />}
      refreshIcon={<Icon.Refresh onTapStart={() => setSelected([])} />}
      listItems={<PreferenceList selected={selected} setSelected={setSelected} />}
      clickAction={handleSubmit}
      disabled={selected.length === 0}
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
    />
  );
};

export default PreferenceStep;
