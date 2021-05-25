import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComponent from "src/components/Drawer";

// Authenticated Stack
import AuthenticatedStack from "./Authenticated";

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
      <Drawer.Screen name="Home" component={AuthenticatedStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
