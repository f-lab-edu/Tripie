'use client';
import { Icon, NavigationButton } from '@tripie-pyotato/design-system/@components';
import Text from '@tripie-pyotato/design-system/@core/Text';

import COMPANION_LIST from 'constants/companions';

import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
import { useCallback, useState } from 'react';
import Clouds from '../../../../shared/components/Clouds';
import Layout from '../Layout/Layout';
import CompanionList from './CompanionList';

export type Companion = keyof typeof COMPANION_LIST;

const CompanionStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: FunnelProps & {
  onNext: (companion: string) => void;
  context: FunnelSteps['COMPANION'];
}) => {
  const [selected, setSelected] = useState<Array<Companion> | []>(
    context?.companion == null ? [] : (context.companion.split(',') as Array<Companion>)
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
          <Text.Accented>누구</Text.Accented>와 떠나나요? {progress}
        </>
      }
      disabled={selected.length === 0}
      decor={<Clouds.WithPlane />}
      refreshIcon={<Icon.Refresh onTapStart={() => setSelected([])} />}
      listItems={<CompanionList context={context} selected={selected} setSelected={setSelected} />}
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
      clickAction={handleSubmit}
    />
  );
};

export default CompanionStep;
