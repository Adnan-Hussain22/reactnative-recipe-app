import { useCallback, useState } from "react";

export const useTogglState = (initialValue = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const toggleState = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [toggle, toggleState];
};
