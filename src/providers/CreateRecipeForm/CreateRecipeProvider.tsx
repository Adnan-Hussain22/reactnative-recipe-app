import React from "react";
import { useForm } from "react-hook-form";

import { RecipeIngrediantsForm } from "./type";
import { RecipeIngrediantsFormContext } from "./context";

const emptyData = {
  category: "",
  ingrediants: [{ amount: 1, scale: "tbsp", name: "" }],
};

export const CreateRecipeProvider: React.FC = ({ children }) => {
  const { control, handleSubmit, watch, getValues } =
    useForm<RecipeIngrediantsForm>({
      defaultValues: {
        restaurant: "",
        ingrediantGroups: [emptyData],
      },
    });

  const { ingrediantGroups, restaurant } = getValues();

  return (
    <RecipeIngrediantsFormContext.Provider
      value={{
        restaurant,
        ingrediantGroups,
        control,
        watch,
        handleSubmit,
      }}
    >
      {children}
    </RecipeIngrediantsFormContext.Provider>
  );
};
