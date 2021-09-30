import { useCallback, useMemo } from "react";

import { ApiNames, StatusCode } from "src/constants/api";
import { COMMON_ERROR } from "src/constants/Errors";
import { useTogglState } from "src/hooks";
import {
  AuthRequest,
  AuthResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  signinAsync,
  signupAsync,
  updateUserAsync,
} from "src/services/api";

export function ReturnApiResponse<T>(
  data: T,
  message: string,
  status: boolean
) {
  return { data, message, status };
}

export const useApi = (apiName: ApiNames) => {
  const [inFlight, toggleInFlight] = useTogglState();

  const handleApi = useCallback(
    async (
      payload: AuthRequest | UpdateUserRequest
    ): Promise<{
      data: AuthResponse | UpdateUserResponse | null;
      message: string;
      status: boolean;
    }> => {
      try {
        toggleInFlight();
        let res: AuthResponse | UpdateUserResponse | undefined = undefined;
        switch (apiName) {
          case ApiNames.SIGNIN: {
            ({ data: res } = await signinAsync(payload as AuthRequest));
            break;
          }
          case ApiNames.SIGNUP: {
            ({ data: res } = await signupAsync(payload as AuthRequest));
            break;
          }
          case ApiNames.UPDATE_USER: {
            ({ data: res } = await updateUserAsync(
              payload as UpdateUserRequest
            ));
            break;
          }
          default:
            break;
        }
        // execption case
        if (!res) {
          throw new Error("");
        }
        if (res.statusCode !== StatusCode.SUCCESS) {
          throw new Error(res.message);
        }
        toggleInFlight();
        return ReturnApiResponse(res, res.message, true);
      } catch (error) {
        toggleInFlight();
        let message = COMMON_ERROR;
        if (Object.values(StatusCode).includes(error.code)) {
          message = error.message;
        }
        return ReturnApiResponse(null, message, false);
      }
    },
    [toggleInFlight, apiName]
  );

  return useMemo(() => ({ inFlight, commit: handleApi }), [inFlight]);
};
