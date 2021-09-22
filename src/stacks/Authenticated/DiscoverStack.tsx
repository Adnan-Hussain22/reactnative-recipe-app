import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DiscoverScreen from "src/features/Discover";
import RecipeScreen from "src/features/Community/Recipe/Recipe";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";

const { Navigator, Screen } = createStackNavigator();

export const DiscoverStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen
        name={AUHTENTICATED_ROUTES.DISCOVER_SCREEN}
        component={DiscoverScreen}
      />
      <Screen
        name={AUHTENTICATED_ROUTES.RECIPE_SCREEN}
        component={RecipeScreen}
      />
    </Navigator>
  );
};
