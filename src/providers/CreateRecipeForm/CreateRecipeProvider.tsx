import React, { useCallback, useState } from "react";
import { DeepMap, FieldError, useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

import { RecipeIngredientsForm, Ingredient, IngredientGroup } from "./type";
import { RecipeIngredientsFormContext } from "./context";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { yupResolver } from "@hookform/resolvers/yup";

const emptyIngredient = { amount: 1, scale: "tbsp", name: "" };

const emptyData = {
  category: "",
  ingredients: [emptyIngredient],
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
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredientGroups",
  });
  const [errors, setErrors] = useState<DeepMap<IngredientGroup, FieldError>>(
    {}
  );
  const ingredientGroups = fields;
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

  const onAddIngredient = useCallback(
    (categoryIndex: number) => {
      const ingredients = ingredientGroups[categoryIndex]?.ingredients;
      if (ingredients) {
        ingredients.push({ ...emptyIngredient });
        ingredientGroups[categoryIndex].ingredients = ingredients;
        setValue("ingredientGroups", ingredientGroups);
      }
    },
    [ingredientGroups, setValue]
  );

  const onDeleteIngredient = useCallback(
    (categoryIndex: number, ingredientIndex: number) => {
      const ingredients = ingredientGroups[categoryIndex]?.ingredients;
      if (ingredients?.length > 1) {
        ingredients.splice(ingredientIndex, 1);
        ingredientGroups[categoryIndex].ingredients = ingredients;
        setValue("ingredientGroups", ingredientGroups);
      }
    },
    [ingredientGroups, setValue]
  );

  const onAddIngredientCategory = useCallback(() => {
    append({ ...emptyData });
  }, [ingredientGroups, setValue]);

  const onDeleteIngredientCategory = useCallback(
    (categoryIndex: number) => {
      if (ingredientGroups.length > 1) {
        remove(categoryIndex);
      }
    },
    [ingredientGroups, setValue]
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
        onAddIngredient,
        onDeleteIngredient,
        onAddIngredientCategory,
        onDeleteIngredientCategory,
      }}
    >
      {children}
    </RecipeIngredientsFormContext.Provider>
  );
};
