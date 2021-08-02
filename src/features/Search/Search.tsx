import * as React from "react";
import { SafeAreaView, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useRecoilState, useSetRecoilState } from "recoil";

import SearchInput from "src/components/SearchInput/SearchInput";
import { COLORS } from "src/constants/colors";
import { SearchRecipes } from "src/features/Search/SearchRecipes";
import { SearchRestaurant } from "src/features/Search/SearchRestaurant";
import { moderateScale } from "src/utils/scale";
import { searchRecipesAtom } from "./searchRecipesAtom";
import { styles } from "./style";

const RecipeFilter = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchRecipesAtom);

  const handleSetSearch = React.useCallback(
    (text: string) => {
      setSearchQuery((prev) => ({ ...prev, query: text }));
    },
    [setSearchQuery]
  );
  return <SearchInput value={searchQuery.query} onChange={handleSetSearch} />;
};

const SearchScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const setQuery = useSetRecoilState(searchRecipesAtom);
  const [routes] = React.useState([
    { key: "Recipe", title: "Recipe" },
    { key: "Restaurant", title: "Restaurant" },
  ]);

  const renderScene = React.useMemo(
    () =>
      SceneMap({
        Recipe: SearchRecipes,
        Restaurant: SearchRestaurant,
      }),
    []
  );

  const handleChange = React.useCallback(
    (newIndex) => {
      setQuery((prev) => ({ ...prev, type: routes[newIndex]?.key }));
      setIndex(newIndex);
    },
    [setQuery]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <RecipeFilter />
        <TabView
          style={{ marginTop: moderateScale(10) }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={handleChange}
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
