'use client';

import { useState } from 'react';

/**
 * framer motion의 useCycle과 유사하게
 * 가능한 스타일 states를 받아, 현재 스타일과 가능한 스타일들을 토글하는 기능을 합니다.
 * 현재 스타일을 토글 시 인덱스로 가능한 스타일을 직접 접근해서 설정할 수 있습니다.
 * ex.
 * const [current, toggle] = useCycle(false,true,'custom');
 * `current`은 false를 리턴하고, `toggle()`은  current를 true로, `toggle(2)`은'custom'로 설정합니다.
 */
const useCycle = (...states: any[]) => {
  const [possibleStates] = useState(states);

  const [current, setCurrent] = useState(possibleStates[0]);

  const toggleState = (index?: number) => {
    if (index != null) {
      setCurrent(current[index]);
    } else {
      const filtered = possibleStates.filter(state => state !== current);
      setCurrent(filtered[0]);
    }
  };

  return [current, toggleState];
};
export default useCycle;
