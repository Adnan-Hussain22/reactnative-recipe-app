import React from "react";
import { User, Tokens } from "src/typings/entities";

export type AuthContextType = Tokens & {
  user?: User;
  setTokens: (tokens: Tokens) => void;
  setUser: (user: User) => void;
};

export const AuthContext =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.createContext<AuthContextType>();
