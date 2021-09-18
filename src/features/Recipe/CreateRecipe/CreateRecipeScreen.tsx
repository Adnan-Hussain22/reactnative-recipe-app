import * as React from "react";
import { ScrollView, TouchableOpacity, View, SafeAreaView } from "react-native";
import { graphql, useMutation } from "react-relay";

import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import {
  CreateRecipeInput,
  CreateRecipeScreenMutation,
  RecipeIngredientInput,
} from "src/services/graphql/__generated__/CreateRecipeScreenMutation.graphql";
import { moderateScale } from "src/utils/scale";
import { convertToSec } from "src/utils/time";

import { CreateRecipeCooking, ICookingForm } from "./CreateRecipeCooking";
import CreateRecipeInfo, { RecipeInfoForm } from "./CreateRecipeInfo";
import CreateRecipeIngrediants from "./CreateRecipeIngrediants";
import { RecipeIngredientsForm } from "./type";
import { styles } from "./styles";
import { Spinner } from "src/components/Spinner";
import FlexStyles from "src/components/FlexBox/FlexStyles";

enum CreateRecipeSteps {
  RECIPE_INFO,
  RECIPE_INGREDIANTS,
  RECIPE_COOKING,
}

const createRecipeMutation = graphql`
  mutation CreateRecipeScreenMutation($createRecipeInput: CreateRecipeInput!) {
    createRecipe(input: $createRecipeInput) {
      _id
      name
    }
  }
`;

type RecipeState = [
  RecipeInfoForm | null,
  RecipeIngredientsForm | null,
  ICookingForm | null
];

const CreateRecipeScreen: React.FC = () => {
  const [step, setStep] = React.useState<CreateRecipeSteps>(
    CreateRecipeSteps.RECIPE_INFO
  );
  const [formState, setFormState] = React.useState<RecipeState>([
    null,
    null,
    null,
  ]);
  const [commitRecipe, recipeInFlight] =
    useMutation<CreateRecipeScreenMutation>(createRecipeMutation);

  const handleCreateRecipe = React.useCallback(
    (state: RecipeState) => {
      const [recipeInfo, recipeIngredient, recipeInstruction] = state;
      if (!recipeInfo || !recipeIngredient || !recipeInstruction) {
        return;
      }
      const ingredients: RecipeIngredientInput[] =
        recipeIngredient.categorizedIngredients.flatMap((category) =>
          category.ingredients.map((ingredient) => ({
            group: category.category,
            amount: `${ingredient.amount} ${ingredient.scale}`,
            name: ingredient.name,
          }))
        );
      const payload: CreateRecipeInput = {
        name: recipeInfo.recipeName,
        image: recipeInfo.cover,
        description: recipeInfo.description,
        calories: Number(recipeInfo.calories),
        serving: Number(recipeInfo.serving),
        cookingTime: convertToSec(
          recipeInfo.cookingTime.scale,
          Number(recipeInfo.cookingTime.time)
        ),
        restraunts: [recipeIngredient.restaurant],
        ingredients,
        instructions: recipeInstruction.instructions,
      };
      commitRecipe({
        variables: {
          createRecipeInput: payload,
        },
        onCompleted: () => {},
        onError: () => {},
      });
    },
    [commitRecipe]
  );

  const onStep = React.useCallback(
    (data: RecipeInfoForm | RecipeIngredientsForm | ICookingForm) => {
      console.log("onStep==>", data);
      setFormState((prev) => {
        const newState = [...prev];
        newState[step] = data;
        return newState as any;
      });
      if (step === CreateRecipeSteps.RECIPE_COOKING) {
        formState[step] = data as any;
        handleCreateRecipe(formState);
        return;
      }
      setStep((prev) => prev + 1);
    },
    [step, setFormState, setStep, handleCreateRecipe, formState]
  );

  return (
    <SafeAreaView style={FlexStyles.flexContainer}>
      <View style={styles.container}>
        <Spinner visible={recipeInFlight} text={"Creating recipe..."} />
        <View style={{ height: moderateScale(45) }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: "absolute",
              left: moderateScale(12),
              zIndex: 1,
            }}
          >
            <Icon
              type="Ionicons"
              name="chevron-back"
              style={{ fontSize: moderateScale(23) }}
            />
          </TouchableOpacity>
          <Typography variant="H2" textAlign="center">
            Create Recipe
          </Typography>
        </View>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
          >
            {step === CreateRecipeSteps.RECIPE_INFO ? (
              <CreateRecipeInfo onSubmit={onStep} />
            ) : step === CreateRecipeSteps.RECIPE_INGREDIANTS ? (
              <CreateRecipeIngrediants onSubmit={onStep} />
            ) : (
              <CreateRecipeCooking onSubmit={onStep} />
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateRecipeScreen;
