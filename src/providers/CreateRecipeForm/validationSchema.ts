import * as yup from "yup";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";

export const IngredientSchema = yup.object().shape({
  name: yup.string().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_NAME),
  amount: yup.number().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_AMOUNT),
  scale: yup.string().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_SCALE),
});

export const MainFormSchema = yup.object().shape({
  restaurant: yup.string().required(CREATE_RECIPE_VALIDATIONS.RESTAURANT),
  ingrediantGroups: yup.array().of(
    yup.object().shape({
      category: yup.string().required(CREATE_RECIPE_VALIDATIONS.CATEGORY_NAME),
      ingrediants: yup.array().of(IngredientSchema),
    })
  ),
});
