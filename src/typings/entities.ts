import { GENDER } from "src/constants/common";

export type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  name?: string;
  username: string;
  password: string;
  gender: GENDER;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Tokens = {
  accessToken?: string;
  refreshToken?: string;
};
