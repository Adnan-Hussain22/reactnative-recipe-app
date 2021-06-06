import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";
import TabBarIcon from "src/components/TabIcon";
import { tabBarOptions } from "src/constants/navigatorOptions";
import { SafeAreaView } from "react-native";
import Typography from "src/components/Typography";

// eslint-disable-next-line @typescript-eslint/ban-types
// const getRouteName = (route: Route<string, object | undefined>) =>
//   getFocusedRouteNameFromRoute(route) ?? AUHTENTICATED_ROUTES.DISCOVER;

const { Navigator, Screen } = createBottomTabNavigator();

const DiscoverScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Discover Screen</Typography>
    </SafeAreaView>
  );
};

const SearchScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Search Screen</Typography>
    </SafeAreaView>
  );
};

const ScanScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Scan Screen</Typography>
    </SafeAreaView>
  );
};

const CommunityScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Typography>Community Screen</Typography>
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
      <Screen name={AUHTENTICATED_ROUTES.DISCOVER} component={DiscoverScreen} />
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
