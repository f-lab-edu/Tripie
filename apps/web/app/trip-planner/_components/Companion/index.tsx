'use client';

import COMPANION_LIST from 'constants/companions';

import Text from '@tripie-pyotato/design-system/@core/Text';
import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
import { useCallback, useState } from 'react';
import NavButton from 'shared/components/NavButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
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
        <NavButton
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={{
        custom: (
          <>
            <Text.Accented>누구</Text.Accented>와 떠나나요?{' '}
          </>
        ),
      }}
      progress={progress}
      disabled={selected.length === 0}
      decor={<Clouds.WithPlane />}
      refreshIcon={<TripieIcon variant="refresh" onTapStart={() => setSelected([])} />}
      listItems={<CompanionList context={context} selected={selected} setSelected={setSelected} />}
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
      clickAction={handleSubmit}
    />
  );
};

export default CompanionStep;
