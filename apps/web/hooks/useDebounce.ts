import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { debounce } from 'utils/debounce';

export const useDebounce = (callback: () => void) => {
  const ref: MutableRefObject<typeof callback | null> = useRef(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func);
  }, []);

  return debouncedCallback;
};
