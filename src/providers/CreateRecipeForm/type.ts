import { Control, UseFormHandleSubmit, UseFormWatch } from "react-hook-form";

export type Ingrediant = {
  name: string;
  amount: number;
  scale: string;
};

export type IngrediantGroup = {
  category: string;
  ingrediants: Ingrediant[];
};

export type RecipeIngrediantsForm = {
  restaurant: string;
  ingrediantGroups: IngrediantGroup[];
};

export type RecipeIngrediantsFormControl = Control<RecipeIngrediantsForm>;

export type SubmitRecipeIngrediants =
  UseFormHandleSubmit<RecipeIngrediantsForm>;

export type WatchRecipeIngrediants = UseFormWatch<RecipeIngrediantsForm>;

export interface RecipeIngrediantsFormContextType
  extends RecipeIngrediantsForm {
  control: RecipeIngrediantsFormControl;
  handleSubmit: SubmitRecipeIngrediants;
  watch: WatchRecipeIngrediants;
}
