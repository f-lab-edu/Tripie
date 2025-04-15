import { debounce } from '@tripie-pyotato/utils/@debounce';
import { MutableRefObject, useEffect, useMemo, useRef } from 'react';

const useDebounce = (callback: () => void) => {
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

export default useDebounce;
