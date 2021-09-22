import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "src/features/Search";
import ProfileScreen from "src/features/Profile";
import { DiscoverStack } from "src/stacks/Authenticated/DiscoverStack";
import CreateRecipeScreen from "src/features/Recipe/CreateRecipe/CreateRecipeScreen";
import TabBarIcon from "src/components/TabIcon";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";
import { tabBarOptions } from "src/constants/navigatorOptions";
import CommunityStack from "../Community";

// const getRouteName = (route: Route<string, object | undefined>) =>
//   getFocusedRouteNameFromRoute(route) ?? AUHTENTICATED_ROUTES.DISCOVER;

const { Navigator, Screen } = createBottomTabNavigator();

const AuthenticatedNavigator = () => {
  return (
    <Navigator
      initialRouteName={AUHTENTICATED_ROUTES.DISCOVER_STACK}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        ...tabBarOptions,
      }}
    >
      <Screen
        name={AUHTENTICATED_ROUTES.DISCOVER_STACK}
        component={DiscoverStack}
      />
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
