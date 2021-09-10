import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
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
};

export const CreateIngrediantGroup: React.FC<PropsType> = React.memo(
  ({ categoryIndex }) => {
    const [collapse, toggleCollapse] = useTogglState(false);
    const {
      control,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useFormContext<RecipeIngredientsForm>();
    const { remove: removeCategory } = useFieldArray({
      control,
      name: "categorizedIngredients",
    });
    const { append: appendIngredient, fields } = useFieldArray({
      control,
      name: `categorizedIngredients.${categoryIndex}.ingredients`,
    });

    const handleChangeCategory = React.useCallback(
      (onChange: CallableFunction) => (category: string) => {
        onChange(category);
      },
      []
    );

    const handleAddIngredient = React.useCallback(() => {
      appendIngredient(
        { name: "", scale: "tbsp", amount: 1 },
        { shouldFocus: true }
      );
    }, [appendIngredient]);

    const handleDeleteCategory = React.useCallback(() => {
      const { categorizedIngredients } = getValues();
      if (categorizedIngredients.length === 1) {
        return;
      }
      removeCategory(categoryIndex);
    }, [removeCategory]);

    const onSubmit = (_: RecipeIngredientsForm) => {
      toggleCollapse();
    };

    return (
      <View style={styles.container}>
        <Controller
          control={control}
          name={`categorizedIngredients.${categoryIndex}.category`}
          render={({ field: { value, onChange } }) => (
            <IngrediantCategory
              category={value}
              setToggle={handleSubmit(onSubmit)}
              toggle={!collapse}
              onAdd={handleAddIngredient}
              onDelete={handleDeleteCategory}
              error={
                errors.categorizedIngredients?.[categoryIndex]?.category
                  ?.message
              }
              onChangeCategory={handleChangeCategory(onChange)}
            />
          )}
        />
        <Spacer size={5} />
        <Divider />
        {console.log("fields==>", fields)}
        {!collapse ? (
          <Controller
            name={`categorizedIngredients.${categoryIndex}.ingredients`}
            control={control}
            render={({ field: { value } }) => {
              console.log(
                "categorizedIngredients.${categoryIndex}.ingredients==>",
                value
              );
              return (
                <React.Fragment />
                // <React.Fragment>
                //   {value.map((_, index) => (
                //     <Controller
                //       key={`_category${categoryIndex}_ingrediant_${index}_`}
                //       control={control}
                //       name={`categorizedIngredients.${categoryIndex}.ingredients.${index}`}
                //       render={() => (
                //         <CreateIngrediantInput
                //           ingredientIndex={index}
                //           categoryIndex={categoryIndex}
                //         />
                //       )}
                //     />
                //   ))}
                // </React.Fragment>
              );
            }}
          />
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
