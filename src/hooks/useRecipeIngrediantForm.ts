import { useContext } from "react";
import { RecipeIngredientsFormContext } from "src/providers";

export const useRecipeIngrediantForm = () =>
  useContext(RecipeIngredientsFormContext);
