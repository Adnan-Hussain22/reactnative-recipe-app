import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DicoverScreen from "src/features/Discover";
import SearchScreen from "src/features/Search";

import ProfileScreen from "src/features/Profile";
import CreateRecipeScreen from "src/features/Recipe/CreateRecipe/CreateRecipeScreen";
import TabBarIcon from "src/components/TabIcon";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";
import { tabBarOptions } from "src/constants/navigatorOptions";
import CommunityStack from "./Community";

// const getRouteName = (route: Route<string, object | undefined>) =>
//   getFocusedRouteNameFromRoute(route) ?? AUHTENTICATED_ROUTES.DISCOVER;

const { Navigator, Screen } = createBottomTabNavigator();

// const ScanScreen = () => {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Typography>Scan Screen</Typography>
//     </SafeAreaView>
//   );
// };

const AuthenticatedNavigator = () => {
  return (
    <Navigator
      initialRouteName={AUHTENTICATED_ROUTES.CREATE}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        ...tabBarOptions,
      }}
    >
      <Screen name={AUHTENTICATED_ROUTES.DISCOVER} component={DicoverScreen} />
      <Screen name={AUHTENTICATED_ROUTES.SEARCH} component={SearchScreen} />
      <Screen
        name={AUHTENTICATED_ROUTES.CREATE}
        component={CreateRecipeScreen}
      />
      <Screen
        name={AUHTENTICATED_ROUTES.COMMUNITY}
        component={CommunityStack}
      />
      <Screen name={AUHTENTICATED_ROUTES.PROFILE} component={ProfileScreen} />
    </Navigator>
  );
};

export default AuthenticatedNavigator;
