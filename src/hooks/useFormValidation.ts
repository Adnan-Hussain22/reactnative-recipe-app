import { useMemo } from "react";

export const useFormValidation = <T>(errors: T) => {
  const hasError = useMemo(
    () => Object.keys(errors).length > 0,
    [{ ...errors }]
  );

  return { hasError };
};
