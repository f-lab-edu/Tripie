'use client';
import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import PREFERENCE_LIST from 'constants/preferences';

import { ContinentKeys } from 'models/Continent';
import { ReactNode, useCallback } from 'react';

interface Props {
  context: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  onNext: (cities: string[]) => void;
  onPrev: () => void;
  progress: ReactNode;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const SubmitButton = ({ onNext, selected }: { onNext: (cities: string[]) => void; selected: Array<string> }) => {
  const handleSubmit = useCallback(() => {
    onNext(selected);
  }, [selected]);
  return (
    <AnimatedButton withBorder={true} isFullSize={true} disabled={selected.length === 0} onClick={handleSubmit}>
      {selected.length === 0 ? (
        '다중 선택이 가능해요.'
      ) : (
        <>
          다음 <Icon />
        </>
      )}
    </AnimatedButton>
  );
};
export default SubmitButton;
