export interface IIngredient {
  title: string;
  steps: ISteps[];
}

export interface IInstruction {
  id: number;
  instruction: string;
}
export interface ISteps {
  description: string;
  quantity: string;
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
