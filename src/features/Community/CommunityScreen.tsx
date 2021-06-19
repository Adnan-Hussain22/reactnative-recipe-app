import * as React from "react";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet, FlatList, ScrollView } from "react-native";
import {
  CommunityUserItem,
  RecipeRequestItem,
  RecipeRequestButton,
} from "src/components/Community";
import DiscoverListHorizontal from "src/components/Discover/DiscoverListHorizontal";
import { DiscoverListTitle } from "src/components/Discover/DiscoverListTitle";
import Spacer from "src/components/Spacer";
import { COLORS } from "src/constants/colors";
import { APP_NAME } from "src/constants/common";
import { DISCOVER_DATA } from "src/features/Discover/data";

const CommunityScreen: React.FC = () => {
  const renderUsers = useCallback(() => <CommunityUserItem />, []);

  const renderRecipeHeader = useCallback(
    () => <RecipeRequestButton onPress={() => {}} />,
    []
  );
  const renderRecipe = useCallback(() => <RecipeRequestItem />, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverListTitle title={`Top ${APP_NAME}s`} onPress={() => {}} />
        <FlatList
          data={new Array(7).fill(0)}
          horizontal
          renderItem={renderUsers}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `__${index}__`}
        />
        <Spacer size={15} scale />
        <DiscoverListHorizontal
          data={DISCOVER_DATA[0].data}
          title="Trending Recipes"
          onPress={() => {}}
          type={0}
        />
        <DiscoverListTitle title="Recipe Requests" onPress={() => {}} />
        <FlatList
          data={new Array(7).fill(0)}
          horizontal
          contentContainerStyle={styles.recipeListContainer}
          renderItem={renderRecipe}
          ListHeaderComponent={renderRecipeHeader}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `__${index}__`}
        />
        <Spacer size={40} scale />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  recipeListContainer: { height: 280, marginTop: 10 },
});
