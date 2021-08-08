import * as React from "react";
import { View, FlatList } from "react-native";
import Tip from "src/features/Community/Recipe/Tip";
import { IIngredient } from "src/typings/recipe";
import RecipeIngredientItems from "src/features/Community/Recipe/RecipeIngredientItems";

interface RecipeIngredientProps {
  ingredients: IIngredient[];
}

const RecipeIngredient: React.FC<RecipeIngredientProps> = ({ ingredients }) => {
  return (
    <View>
      <Tip />
      <FlatList
        data={ingredients}
        keyExtractor={(_, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <RecipeIngredientItems ingredient={item} />}
      />
    </View>
  );
};

export default RecipeIngredient;
