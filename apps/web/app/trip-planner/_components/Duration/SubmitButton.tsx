'use client';
import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { useCallback } from 'react';

const SubmitButton = ({
  duration,
  onNext,
}: {
  duration: {
    start: string;
    end: string;
  };
  onNext: (duration: string) => void;
  onPrev: () => void;
}) => {
  const handleSubmit = useCallback(() => {
    if (duration.end === '' || duration.start === '') {
      return;
    } else {
      onNext(`${duration.start} ~ ${duration.end}`);
    }
  }, [duration]);
  return (
    <AnimatedButton withBorder={true} disabled={duration.end === ''} isFullSize={true} onClick={handleSubmit}>
      {duration.end === '' ? (
        <Text size="small">여행의 시작과 끝나는 날짜를 선택해주세요.</Text>
      ) : (
        <Text>
          다음 <Icon />
        </Text>
      )}
    </AnimatedButton>
  );
};

export default SubmitButton;
