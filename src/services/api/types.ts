import { StatusCode } from "src/constants/api";

export type User = {
  id?: string;
  name: string;
  email: string;
  avatar: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type WithUser = {
  user: User;
};

export type WithTokens = {
  tokens: User;
};

export type Response = {
  statusCode: StatusCode;
  message: string;
};

export type AuthResponse = Response & Partial<WithTokens> & Partial<WithUser>;

export type UpdateUserResponse = Response & Partial<WithUser>;

export type AuthRequest = {
  email: string;
  password: string;
};

export type UpdateUserRequest = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  gender: string;
};
