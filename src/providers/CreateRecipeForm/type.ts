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

export type RecipeIngrediantsFormContextType = {
  control: Control<RecipeIngrediantsForm>;
  onSubmit: UseFormHandleSubmit<RecipeIngrediantsForm>;
  watch: UseFormWatch<RecipeIngrediantsForm>;
};
