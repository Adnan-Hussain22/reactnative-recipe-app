import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import RecipeList from "src/components/RecipeList";

import SearchInput from "src/components/SearchInput/SearchInput";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

const SearchScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Recipe", title: "Recipe" },
    { key: "Restaurant", title: "Restaurant" },
  ]);

  const Recipe = () => <RecipeList title="Top Rated" />;

  const Restaurant = () => <RecipeList title="Restaurants nearby" />;

  const renderScene = SceneMap({
    Recipe,
    Restaurant,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <SearchInput />
        <TabView
          style={{ marginTop: moderateScale(10) }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorContainerStyle={styles.indicatorContainer}
              inactiveColor={COLORS.textGrey}
              activeColor={COLORS.primaryRed}
              labelStyle={styles.indicatorLabel}
              indicatorStyle={styles.indicator}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  indicatorContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: moderateScale(80),
    alignSelf: "center",
    height: 3,
    left: moderateScale(52),
  },
  indicatorLabel: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
