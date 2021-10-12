import { useCallback, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "src/providers/Auth";
import { AuthResponse } from "src/services/api";
import { StorageService } from "src/services/storage";
import { User } from "src/typings/entities";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  const { setTokens, setUser, toggleLoading } = authContext;

  const onAuthenticated = useCallback(
    async (res: AuthResponse) => {
      if (res.data?.tokens) {
        setTokens(res.data.tokens);
        await StorageService.saveToken(res.data.tokens);
      }
      if (res.data?.user) {
        await saveUser(res.data.user);
      }
    },
    [setUser, setTokens]
  );

  const saveUser = useCallback(
    async (user: Partial<User>, merge = true) => {
      const newUser = merge ? { ...authContext.user, ...user } : user;
      setUser(newUser);
      await StorageService.saveUser(newUser);
      return;
    },
    [setUser, authContext]
  );

  useEffect(() => {
    Promise.all([StorageService.getToken(), StorageService.getUser()]).then(
      ([token, user]) => {
        if (token) {
          setTokens(token);
        }
        if (user) {
          setUser(user);
        }
        toggleLoading();
      }
    );
  }, [setTokens, setUser]);

  return useMemo(
    () => ({ ...authContext, onAuthenticated, saveUser }),
    [authContext, saveUser, onAuthenticated]
  );
};
