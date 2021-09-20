import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import { useTogglState } from "src/hooks/useToggleState";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { moderateScale } from "src/utils/scale";

import IngrediantCategory from "./IngrediantCategory";
import { CreateIngrediantInput, Ingrediant } from "./CreateIngrediantInput";
import { CategorizedIngredients, RecipeIngredientsForm } from "./type";

export const CategorySchema = yup.object().shape({
  category: yup.string().required(CREATE_RECIPE_VALIDATIONS.CATEGORY_NAME),
});

export type IngredientGroup = {
  category: string;
  ingredients: Ingrediant[];
};

type PropsType = {
  categoryIndex: number;
  categorizedIngredient: CategorizedIngredients;
  onDeleteCategory: (categoryIndex: number) => void;
};

export const CreateIngrediantGroup: React.FC<PropsType> = React.memo(
  ({ categoryIndex, onDeleteCategory }) => {
    const [collapse, toggleCollapse] = useTogglState(false);
    const { control, handleSubmit, setValue, watch } =
      useFormContext<RecipeIngredientsForm>();
    const watchIngredients = watch(
      `categorizedIngredients.${categoryIndex}.ingredients`
    );

    const handleAddIngredient = React.useCallback(() => {
      watchIngredients.push({ name: "", amount: 1, scale: "tbsp" });
      setValue(
        `categorizedIngredients.${categoryIndex}.ingredients`,
        watchIngredients
      );
    }, [setValue, watchIngredients]);

    const handleDeleteCategory = React.useCallback(() => {
      onDeleteCategory(categoryIndex);
    }, [onDeleteCategory, categoryIndex]);

    return (
      <View style={styles.container}>
        <Controller
          control={control}
          name={`categorizedIngredients.${categoryIndex}.category`}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <IngrediantCategory
              category={value}
              toggle={!collapse}
              error={error?.message}
              categoryIndex={categoryIndex}
              setToggle={handleSubmit(toggleCollapse)}
              onAdd={handleAddIngredient}
              onDelete={handleDeleteCategory}
              onChangeCategory={onChange}
            />
          )}
        />
        <Spacer size={5} />
        <Divider />
        {!collapse ? (
          <React.Fragment>
            {watchIngredients.map((_, index) => (
              <CreateIngrediantInput
                key={`categorizedIngredients.${categoryIndex}.ingredients.${index}`}
                ingredientIndex={index}
                categoryIndex={categoryIndex}
              />
            ))}
          </React.Fragment>
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    paddingVertical: moderateScale(15),
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(30),
  },
});
