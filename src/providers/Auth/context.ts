import React from "react";
import { User, Tokens } from "src/typings/entities";
import { Noop } from "src/utils";

export type AuthContextType = Tokens & {
  loading?: boolean;
  user?: User;
  toggleLoading: Noop;
  setTokens: (tokens: Tokens) => void;
  setUser: (user: User) => void;
};

export const AuthContext =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.createContext<AuthContextType>();
