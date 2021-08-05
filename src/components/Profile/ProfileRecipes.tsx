import * as React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { graphql, usePaginationFragment } from "react-relay";
import RecipeItem from "src/components/RecipeItem";
import { ProfileRecipesPaginationQuery } from "src/services/graphql/__generated__/ProfileRecipesPaginationQuery.graphql";
import { ProfileRecipes_recipes$key } from "src/services/graphql/__generated__/ProfileRecipes_recipes.graphql";
import { RecipeItem_recipe$key } from "src/services/graphql/__generated__/RecipeItem_recipe.graphql";
import NoRecipes from "./NoRecipes";

interface ProfileRecipesProps {
  recipes: unknown[];
  recipesRef: ProfileRecipes_recipes$key;
}

const recipesFragment = graphql`
  fragment ProfileRecipes_recipes on User
  @refetchable(queryName: "ProfileRecipesPaginationQuery")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  ) {
    recipes(first: $count, after: $cursor)
      @connection(key: "ProfileRecipesPagination_recipes") {
      edges {
        node {
          _id
          ...RecipeItem_recipe
        }
      }
    }
  }
`;

const ProfileRecipes: React.FC<ProfileRecipesProps> = ({ recipesRef }) => {
  const { data } = usePaginationFragment<
    ProfileRecipesPaginationQuery,
    ProfileRecipes_recipes$key
  >(recipesFragment, recipesRef);
  const recipes = React.useMemo(() => data.recipes?.edges ?? [], [data]);

  const renderItem = React.useCallback(
    ({ item: { node } }: ListRenderItemInfo<{ node: any }>) => (
      <RecipeItem recipeRef={node as RecipeItem_recipe$key} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={({ node }) => `__profileRecipe_${node._id}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoRecipes onPress={() => {}} />}
      />
    </View>
  );
};

export default ProfileRecipes;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
