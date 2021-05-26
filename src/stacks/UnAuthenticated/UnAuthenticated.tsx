import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "src/features/Onboarding";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Onboarding">
      {/* <Stack.Screen name="Login" component={HomeScreen} /> */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
