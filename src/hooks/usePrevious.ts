import { useCallback, useRef } from "react";
export function usePrevious<T>(defaultValue: T) {
  const ref = useRef<T>(defaultValue);
  const setPrevious = useCallback((val) => {
    ref.current = val;
  }, []);

  return {
    val: ref.current,
    setVal: setPrevious,
  };
}
