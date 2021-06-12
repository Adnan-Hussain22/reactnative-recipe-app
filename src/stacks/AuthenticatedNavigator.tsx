import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";

import DicoverScreen from "src/features/Discover";
import SearchScreen from "src/features/Search";
import CommunityScreen from "src/features/Community";
import TabBarIcon from "src/components/TabIcon";
import Typography from "src/components/Typography";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";
import { tabBarOptions } from "src/constants/navigatorOptions";

// const getRouteName = (route: Route<string, object | undefined>) =>
//   getFocusedRouteNameFromRoute(route) ?? AUHTENTICATED_ROUTES.DISCOVER;

const { Navigator, Screen } = createBottomTabNavigator();

const ScanScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Scan Screen</Typography>
    </SafeAreaView>
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Profile Screen</Typography>
    </SafeAreaView>
  );
};

const AuthenticatedNavigator = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        // tabBarVisible:
        //   getRouteName(route) !== CHAT_SCREEN &&
        //   getRouteName(route) !== NEW_MESSAGE_SCREEN,
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
      <Screen name={AUHTENTICATED_ROUTES.SCAN} component={ScanScreen} />
      <Screen
        name={AUHTENTICATED_ROUTES.COMMUNITY}
        component={CommunityScreen}
      />
      <Screen name={AUHTENTICATED_ROUTES.PROFILE} component={ProfileScreen} />
    </Navigator>
  );
};

export default AuthenticatedNavigator;
