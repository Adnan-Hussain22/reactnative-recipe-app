import * as React from "react";
import { View, FlatList } from "react-native";
import Tip from "src/features/Community/Recipe/Tip";
import { IIngredient } from "src/typings/recipe";
import RecipeIngredientItems from "src/features/Community/Recipe/RecipeIngredientItems";
import { graphql, useFragment } from "react-relay";
import { RecipeIngredient_ingredients$key } from "src/services/graphql/__generated__/RecipeIngredient_ingredients.graphql";

const RecipeIngredientFragment = graphql`
  fragment RecipeIngredient_ingredients on RecipeIngredients
  @relay(plural: true) {
    _id
    name
    group
    amount
  }
`;

interface RecipeIngredientProps {
  ingredientsRef: RecipeIngredient_ingredients$key;
}

const RecipeIngredient: React.FC<RecipeIngredientProps> = ({
  ingredientsRef,
}) => {
  const data = useFragment(
    RecipeIngredientFragment,
    ingredientsRef as RecipeIngredient_ingredients$key
  );

  const groupedIngredients = React.useMemo(() => {
    const res = data.reduce((r, a) => {
      const group = a.group;
      r[group] = r[group] || [];
      r[group].push(a);
      return r;
    }, Object.create(null));
    return Object.entries(res).map(([key, val]) => {
      return {
        category: key,
        ingredients: val,
      };
    }) as IIngredient[];
  }, [data]);
  console.log("data==>", data[0]);
  return (
    <View>
      <Tip />
      <FlatList
        data={groupedIngredients}
        keyExtractor={(_, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <RecipeIngredientItems ingredient={item} />}
      />
    </View>
  );
};

export default RecipeIngredient;
