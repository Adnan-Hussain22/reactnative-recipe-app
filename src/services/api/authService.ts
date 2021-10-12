import { API } from "./api";
import {
  AuthRequest,
  AuthResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./types";

export const signinAsync = (payload: AuthRequest) =>
  API.post<AuthResponse>("/auth/login", payload);

export const signupAsync = (payload: AuthRequest) =>
  API.post<AuthResponse>("/auth/signup", payload);

export const updateUserAsync = (
  payload: UpdateUserRequest,
  accessToken: string
) =>
  API.post<UpdateUserResponse>("/auth/update", payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

// export const resetPasswordAsync = (email: string) =>
//   API.put<ResetPasswordResponse>("auth/forgot-password", { email });
