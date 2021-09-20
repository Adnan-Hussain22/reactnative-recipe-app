export type Ingredient = {
  name: string;
  amount: number;
  scale: string;
};

export type CategorizedIngredients = {
  category: string;
  ingredients: Ingredient[];
};

export type RecipeIngredientsForm = {
  restaurant: string;
  categorizedIngredients: CategorizedIngredients[];
};

export type ToggleProp = {
  toggle: boolean;
};

export type ICookingForm = {
  instructions: string[];
};
