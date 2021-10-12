import * as React from "react";
import { useTogglState } from "src/hooks";
import { User, Tokens } from "src/typings/entities";
import { AuthContext } from "./context";

const AuthProvider: React.FC = React.memo(({ children }) => {
  const [user, setUser] = React.useState<User>();
  const [tokens, setTokens] = React.useState<Tokens>();
  const [loading, toggleLoading] = useTogglState();

  return (
    <AuthContext.Provider
      value={{
        ...tokens,
        user,
        loading,
        setTokens,
        setUser,
        toggleLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export default AuthProvider;
