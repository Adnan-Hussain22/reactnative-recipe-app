import { useContext } from "react";
import { RecipeIngrediantsFormContext } from "src/providers";

export const useRecipeIngrediantForm = () =>
  useContext(RecipeIngrediantsFormContext);
