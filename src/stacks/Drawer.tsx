import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Authenticated Stack
import AuthenticatedStack from "./Authenticated";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={AuthenticatedStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;