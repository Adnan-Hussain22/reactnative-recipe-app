import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerStack from "./Drawer";
import UnAuthenticatedStack from "./UnAuthenticated";

const DeciderStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <DeciderStack.Navigator headerMode="none">
    {userToken ? (
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
      />
    )}
  </DeciderStack.Navigator>
);

export default RootStackScreen;
