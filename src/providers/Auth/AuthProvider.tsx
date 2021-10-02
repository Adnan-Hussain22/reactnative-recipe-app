import * as React from "react";
import { User, Tokens } from "src/typings/entities";
import { AuthContext } from "./context";

const AuthProvider: React.FC = React.memo(({ children }) => {
  const [user, setUser] = React.useState<User>();
  const [tokens, setTokens] = React.useState<Tokens>();

  return (
    <AuthContext.Provider
      value={{
        ...tokens,
        user,
        setTokens,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export default AuthProvider;
