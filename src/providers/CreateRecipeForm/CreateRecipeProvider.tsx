import React, { useCallback, useState } from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import * as yup from "yup";

import { RecipeIngredientsForm, Ingredient, IngredientGroup } from "./type";
import { RecipeIngredientsFormContext } from "./context";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { yupResolver } from "@hookform/resolvers/yup";

const emptyData = {
  category: "",
  ingredients: [{ amount: 1, scale: "tbsp", name: "" }],
};

export const schema = yup.object().shape({
  restaurant: yup.string().required(CREATE_RECIPE_VALIDATIONS.RESTAURANT),
});

export const CreateRecipeProvider: React.FC = ({ children }) => {
  const { control, handleSubmit, watch, setValue } =
    useForm<RecipeIngredientsForm>({
      defaultValues: {
        restaurant: "",
        ingredientGroups: [emptyData],
      },
      mode: "onChange",
      resolver: yupResolver(schema),
    });
  const [errors, setErrors] = useState<DeepMap<IngredientGroup, FieldError>>(
    {}
  );

  const ingredientGroups = watch("ingredientGroups");
  const restaurant = watch("restaurant");

  const onChangeCategory = useCallback(
    (value: string, index: number) => {
      if (!ingredientGroups[index]) {
        return;
      }
      ingredientGroups[index].category = value;
      setValue("ingredientGroups", ingredientGroups);
    },
    [ingredientGroups]
  );

  const onChangeIngredient = useCallback(
    (value: Ingredient, categoryIndex: number, ingredientIndex: number) => {
      if (!ingredientGroups[categoryIndex]?.ingredients) {
        return;
      }
      const ingredients = ingredientGroups[categoryIndex]?.ingredients;
      ingredients[ingredientIndex] = value;
      ingredientGroups[categoryIndex].ingredients = ingredients;
      setValue("ingredientGroups", ingredientGroups);
    },
    [ingredientGroups]
  );

  return (
    <RecipeIngredientsFormContext.Provider
      value={{
        restaurant,
        ingredientGroups,
        control,
        watch,
        errors,
        handleSubmit,
        onChangeCategory,
        onChangeIngredient,
      }}
    >
      {children}
    </RecipeIngredientsFormContext.Provider>
  );
};
