import { Cusine } from "src/assets/images";

import { IRecipe } from "src/typings/recipe";

export const RECIPE_DATA: IRecipe = {
  name: "Hampden-Sydney",
  chefName: "Cactus Club",
  origan: "Snap Chef",
  image: Cusine,
  rating: 3,
  cookTime: 40,
  serving: 4,
  calories: 560,
  ingredients: [
    {
      title: "Chicken",
      steps: [
        {
          description: "Chicken brestes, cut into small 1 or 2 inch strips",
          quantity: "1",
        },
        {
          description: "Sesame Oil",
          quantity: "1 tbsp",
        },
        {
          description: "Panko Breadcrumbs",
          quantity: "1 1/4 cup",
          substitutes: [
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
          ],
        },
      ],
    },
    {
      title: "Chicken",
      steps: [
        {
          description: "Chicken brestes, cut into small 1 or 2 inch strips",
          quantity: "1",
        },
        {
          description: "Sesame Oil",
          quantity: "1 tbsp",
        },
        {
          description: "Panko Breadcrumbs",
          quantity: "1 1/4 cup",
          substitutes: [
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
          ],
        },
      ],
    },
  ],
  instructions: [
    {
      id: 1,
      instruction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error ipsa cupiditate eaque quisquam repellendus voluptate perferendis laborum et labore! Provident iste minima asperiores fugiat nemo explicabo eligendi ipsum illo!",
    },
    {
      id: 2,
      instruction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error ipsa cupiditate eaque quisquam repellendus voluptate perferendis laborum et labore! Provident iste minima asperiores fugiat nemo explicabo eligendi ipsum illo!",
    },
    {
      id: 3,
      instruction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error ipsa cupiditate eaque quisquam repellendus voluptate perferendis laborum et labore! Provident iste minima asperiores fugiat nemo explicabo eligendi ipsum illo!",
    },
    {
      id: 4,
      instruction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error ipsa cupiditate eaque quisquam repellendus voluptate perferendis laborum et labore! Provident iste minima asperiores fugiat nemo explicabo eligendi ipsum illo!",
    },
  ],
};
