import { StatusCode } from "src/constants/api";
import { GENDER } from "src/constants/common";
import { User } from "src/typings/entities";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type WithUser = {
  user: User;
};

export type WithTokens = {
  tokens: Tokens;
};

export type Response = {
  statusCode: StatusCode;
  message: string;
};

export type AuthResponse = {
  data?: Partial<WithTokens> & Partial<WithUser>;
} & Response;
// Response & Partial<WithTokens> & Partial<WithUser>;

export type UpdateUserResponse = {
  data?: Partial<WithUser>;
} & Response;

export type AuthRequest = {
  email: string;
  password: string;
};

export type UpdateUserRequest = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  gender: GENDER;
};
