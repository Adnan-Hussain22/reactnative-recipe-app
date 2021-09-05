/* eslint-disable no-unused-vars */
import {
  Control,
  DeepMap,
  FieldError,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";

export type Ingredient = {
  name: string;
  amount: number;
  scale: string;
};

export type IngredientGroup = {
  category: string;
  ingredients: Ingredient[];
};

export type RecipeIngredientsForm = {
  restaurant: string;
  ingredientGroups: IngredientGroup[];
};

export type RecipeIngredientsFormControl = Control<RecipeIngredientsForm>;

export type SubmitRecipeIngredients =
  UseFormHandleSubmit<RecipeIngredientsForm>;

export type WatchRecipeIngredients = UseFormWatch<RecipeIngredientsForm>;

export type OnChangeCategory = (value: string, index: number) => void;

export type OnChangeIngredient = (
  value: Ingredient,
  categoryIndex: number,
  ingredientIndex: number
) => void;

export type MainFormErrors = DeepMap<IngredientGroup, FieldError>;

export type IngredientFormErrors = Partial<DeepMap<Ingredient, FieldError>[]>;

export interface RecipeIngredientsFormContextType
  extends RecipeIngredientsForm {
  errors: MainFormErrors;
  control: RecipeIngredientsFormControl;
  watch: WatchRecipeIngredients;
  onChangeCategory: OnChangeCategory;
  onChangeIngredient: OnChangeIngredient;
  handleSubmit: SubmitRecipeIngredients;
}
