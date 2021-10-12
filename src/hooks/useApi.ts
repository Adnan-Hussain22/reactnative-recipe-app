import { useCallback, useMemo } from "react";

import { ApiNames, StatusCode } from "src/constants/api";
import { COMMON_ERROR } from "src/constants/Errors";
import { useTogglState } from "./useToggleState";
import {
  AuthRequest,
  AuthResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  signinAsync,
  signupAsync,
  updateUserAsync,
} from "src/services/api";
import { CustomError } from "src/typings/error";
import { useAuth } from "src/hooks";

export function ReturnApiResponse<T>(
  data: T,
  message: string,
  status: boolean
) {
  return { data, message, status };
}
export const useApi = (apiName: ApiNames) => {
  const [inFlight, toggleInFlight] = useTogglState();
  const { accessToken } = useAuth();

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
              payload as UpdateUserRequest,
              accessToken ?? ""
            ));
            break;
          }
          default:
            break;
        }
        // execption case
        if (!res) {
          throw new CustomError("");
        }
        if (res.statusCode !== StatusCode.SUCCESS) {
          throw new CustomError(res.message, res.statusCode);
        }
        toggleInFlight();
        return ReturnApiResponse(res, res.message, true);
      } catch (error: any) {
        toggleInFlight();
        let message = COMMON_ERROR;
        if (Object.values(StatusCode).includes(error.code)) {
          message = error.message;
        } else if (
          Object.values(StatusCode).includes(error.response?.data?.statusCode)
        ) {
          message = error.response?.data?.message;
        }
        return ReturnApiResponse(null, message, false);
      }
    },
    [toggleInFlight, apiName]
  );

  return useMemo(() => ({ inFlight, commit: handleApi }), [inFlight]);
};
