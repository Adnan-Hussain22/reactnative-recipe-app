import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComponent from "src/components/Drawer";

import AuthenticatedNavigator from "./Authenticated";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerComponent {...props} />}
      drawerPosition="left"
      drawerStyle={{
        width: 250,
      }}
    >
      <Drawer.Screen name="Home" component={AuthenticatedNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
