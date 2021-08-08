import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityScreen from "src/features/Community";
import { Recipe } from "../features/Community";

const CommunityStack = createStackNavigator();

const CommunityStackScreen = () => (
  <CommunityStack.Navigator initialRouteName="Community" headerMode="none">
    <CommunityStack.Screen
      name="Community"
      component={CommunityScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <CommunityStack.Screen
      name="Recipe"
      component={Recipe}
      options={{
        animationEnabled: false,
      }}
    />
  </CommunityStack.Navigator>
);

export default CommunityStackScreen;
