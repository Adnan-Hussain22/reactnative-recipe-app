import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "src/features";

const AuthStack = createStackNavigator();

const AuthenticatedStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthenticatedStack;
