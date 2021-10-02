import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "src/hooks";
import DrawerStack from "./Drawer";
import UnAuthenticatedStack from "./UnAuthenticated";
import { UNAUHTENTICATED_ROUTES } from "src/constants/Routes";
import { PersonalInfo, ProfileInfo } from "src/features/Signup";

const DeciderStack = createStackNavigator();

const render = ({
  accessToken,
  isPersonalInfoFilled,
  isProfileInfoFilled,
}: {
  accessToken: string;
  isPersonalInfoFilled: boolean;
  isProfileInfoFilled: boolean;
}) => {
  if (!accessToken) {
    return (
      <DeciderStack.Screen
        name="UnAuth"
        component={UnAuthenticatedStack}
        options={{
          animationEnabled: false,
        }}
        initialParams={{ isPersonalInfoFilled, isProfileInfoFilled }}
      />
    );
  }
  if (!isPersonalInfoFilled) {
    return (
      <DeciderStack.Screen
        name={UNAUHTENTICATED_ROUTES.PERSONAL_INFO}
        component={PersonalInfo}
      />
    );
  }
  if (!isProfileInfoFilled) {
    return (
      <DeciderStack.Screen
        name={UNAUHTENTICATED_ROUTES.PROFILE_INFO}
        component={ProfileInfo}
      />
    );
  }
  return (
    <DeciderStack.Screen
      name="Drawer"
      component={DrawerStack}
      options={{
        animationEnabled: false,
      }}
    />
  );
};

const Stack = React.memo(
  ({
    accessToken,
    isPersonalInfoFilled,
    isProfileInfoFilled,
  }: {
    accessToken: string;
    isPersonalInfoFilled: boolean;
    isProfileInfoFilled: boolean;
  }) => {
    return (
      <DeciderStack.Navigator headerMode="none">
        {render({ accessToken, isPersonalInfoFilled, isProfileInfoFilled })}
      </DeciderStack.Navigator>
    );
  }
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
