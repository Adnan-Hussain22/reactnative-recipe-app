import { useCallback, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "src/providers/Auth";
import { AuthResponse } from "src/services/api";
import { StorageService } from "src/services/storage";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  const { setTokens, setUser } = authContext;

  const onAuthenticated = useCallback(
    async (res: AuthResponse) => {
      if (res.data?.tokens) {
        setTokens(res.data.tokens);
        await StorageService.saveToken(res.data.tokens);
      }
      if (res.data?.user) {
        setUser(res.data.user);
        await StorageService.saveUser(res.data.user);
      }
    },
    [setUser, setTokens]
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
      }
    );
  }, [setTokens, setUser]);

  return useMemo(() => ({ ...authContext, onAuthenticated }), [authContext]);
};
