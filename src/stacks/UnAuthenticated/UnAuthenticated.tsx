import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "src/features/Signup";
import { UNAUHTENTICATED_ROUTES } from "src/constants/Routes";
import Login from "src/features/Login";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={UNAUHTENTICATED_ROUTES.SIGNUP} component={Signup} />
      <Stack.Screen name={UNAUHTENTICATED_ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
