import { Gender } from "src/constants/api";

export type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  name?: string;
  username: string;
  password: string;
  gender: Gender;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Tokens = {
  accessToken?: string;
  refreshToken?: string;
};
