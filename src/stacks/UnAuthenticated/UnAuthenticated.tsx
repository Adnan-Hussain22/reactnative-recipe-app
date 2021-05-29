import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup, { PersonalInfo, ProfileInfo } from "src/features/Signup";
import { UNAUHTENTICATED_ROUTES } from "src/constants/Routes";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={UNAUHTENTICATED_ROUTES.SIGNUP}
    >
      <Stack.Screen name={UNAUHTENTICATED_ROUTES.SIGNUP} component={Signup} />
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
