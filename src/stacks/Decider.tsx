import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "src/hooks";
import DrawerStack from "./Drawer";
import UnAuthenticatedStack from "./UnAuthenticated";

const DeciderStack = createStackNavigator();

const Stack = React.memo(
  ({
    accessToken,
    isPersonalInfoFilled,
    isProfileInfoFilled,
  }: {
    accessToken: string;
    isPersonalInfoFilled: boolean;
    isProfileInfoFilled: boolean;
  }) => (
    <DeciderStack.Navigator headerMode="none">
      {accessToken && isPersonalInfoFilled && isProfileInfoFilled ? (
        <DeciderStack.Screen
          name="Drawer"
          component={DrawerStack}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <DeciderStack.Screen
          name="UnAuth"
          component={UnAuthenticatedStack}
          options={{
            animationEnabled: false,
          }}
          initialParams={{ isPersonalInfoFilled, isProfileInfoFilled }}
        />
      )}
    </DeciderStack.Navigator>
  )
);

const RootStackScreen = () => {
  const { accessToken, user } = useAuth();
  const { isPersonalInfoFilled, isProfileInfoFilled, token } = React.useMemo(
    () => ({
      isPersonalInfoFilled: !!user?.firstName,
      isProfileInfoFilled: !!user?.username,
      token: accessToken ?? "",
    }),
    [user, accessToken]
  );
  return (
    <Stack
      accessToken={token}
      isPersonalInfoFilled={isPersonalInfoFilled}
      isProfileInfoFilled={isProfileInfoFilled}
    />
  );
};

export default RootStackScreen;
