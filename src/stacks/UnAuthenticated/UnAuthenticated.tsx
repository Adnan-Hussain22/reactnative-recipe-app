import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup, { PersonalInfo, ProfileInfo } from "src/features/Signup";
import { UNAUHTENTICATED_ROUTES } from "src/constants/Routes";
import Login from "src/features/Login";
import { useRoute } from "@react-navigation/core";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  const { params: { isPersonalInfoFilled } = {} } = useRoute();
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={
        isPersonalInfoFilled
          ? UNAUHTENTICATED_ROUTES.PROFILE_INFO
          : UNAUHTENTICATED_ROUTES.PERSONAL_INFO
      }
    >
      <Stack.Screen name={UNAUHTENTICATED_ROUTES.SIGNUP} component={Signup} />
      <Stack.Screen name={UNAUHTENTICATED_ROUTES.LOGIN} component={Login} />
      <Stack.Screen
        name={UNAUHTENTICATED_ROUTES.PERSONAL_INFO}
        component={PersonalInfo}
      />
      <Stack.Screen
        name={UNAUHTENTICATED_ROUTES.PROFILE_INFO}
        component={ProfileInfo}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
