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

export const updateUserAsync = (payload: UpdateUserRequest) =>
  API.post<UpdateUserResponse>("/auth/update", payload);

// export const resetPasswordAsync = (email: string) =>
//   API.put<ResetPasswordResponse>("auth/forgot-password", { email });
