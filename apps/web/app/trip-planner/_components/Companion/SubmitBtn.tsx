'use client';
import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';

import COMPANION_LIST from 'constants/companions';

import { Text } from '@tripie-pyotato/design-system/@core';
import { useCallback } from 'react';

export type Companion = keyof typeof COMPANION_LIST;

const SubmitBtn = ({ onNext, selected }: { onNext: (companion: string) => void; selected: Array<Companion> | [] }) => {
  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);
  return (
    <AnimatedButton withBorder={true} isFullSize={true} disabled={selected.length === 0} onClick={handleSubmit}>
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
  );
};

export default SubmitBtn;
