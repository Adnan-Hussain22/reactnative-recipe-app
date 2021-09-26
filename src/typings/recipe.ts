export interface IIngredient {
  category: string;
  ingredients: ISteps[];
}

export interface IInstruction {
  id: number;
  instruction: string;
}
export interface ISteps {
  name: string;
  amount: string;
  substitutes?: string[];
}

export interface IRecipe {
  name: string;
  image: string;
  origan: string;
  chefName: string;
  rating: number;
  cookTime: number;
  serving: number;
  calories: number;
  ingredients: IIngredient[];
  instructions: IInstruction[];
}
