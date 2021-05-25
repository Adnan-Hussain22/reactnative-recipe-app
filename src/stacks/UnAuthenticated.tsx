import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "src/features";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
