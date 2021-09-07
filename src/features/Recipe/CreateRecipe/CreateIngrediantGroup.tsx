import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import {
  IngredientFormErrors,
  OnAddIngredient,
  OnChangeCategory,
  OnDeleteIngredient,
  OnDeleteIngredientCategory,
} from "src/providers";
import { useTogglState } from "src/hooks/useToggleState";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { moderateScale } from "src/utils/scale";
import { ConnectRecipeIngrediantForm } from "src/utils/ConnectRecipeContext";

import IngrediantCategory from "./IngrediantCategory";
import { CreateIngrediantInput, Ingrediant } from "./CreateIngrediantInput";

export const CategorySchema = yup.object().shape({
  category: yup.string().required(CREATE_RECIPE_VALIDATIONS.CATEGORY_NAME),
  // ingredients: yup.array().of(IngredientSchema).min(1),
});

export type IngredientGroup = {
  category: string;
  ingredients: Ingrediant[];
};

type MapStateToPropsType = {
  onChangeCategory: OnChangeCategory;
  onDeleteIngredientCategory: OnDeleteIngredientCategory;
  onAddIngredient: OnAddIngredient;
  onDeleteIngredient: OnDeleteIngredient;
  errors?: IngredientFormErrors;
};

type PropsType = {
  categoryIndex: number;
};

const Component: React.FC<PropsType & Partial<MapStateToPropsType>> =
  React.memo(
    ({
      categoryIndex,
      errors: ingredientFormErrors,
      onChangeCategory,
      onAddIngredient,
      onDeleteIngredientCategory,
      onDeleteIngredient,
    }) => {
      const {
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        watch,
      } = useForm<IngredientGroup>({
        defaultValues: {
          category: "",
          ingredients: [{ name: "", scale: "tbsp", amount: 1 }],
        },
        mode: "onChange",
        resolver: yupResolver(CategorySchema),
      });
      const { append, remove } = useFieldArray({
        control,
        name: "ingredients",
      });
      const ingredients = watch("ingredients");
      const [collapse, toggleCollapse] = useTogglState(false);

      const handleChangeCategory = React.useCallback(
        (onChange: CallableFunction) => (category: string) => {
          onChange(category);
          onChangeCategory?.(category, categoryIndex);
        },
        []
      );

      const handleAddIngredient = React.useCallback(() => {
        append({ name: "", scale: "", amount: 1 });
        onAddIngredient!(categoryIndex);
      }, []);

      const handleDeleteCategory = React.useCallback(() => {
        onDeleteIngredientCategory!(categoryIndex);
      }, [ingredients]);

      const handleDeleteIngredient = React.useCallback(
        (index: number) => {
          if (ingredients.length === 1) {
            return;
          }
          remove(index);
          onDeleteIngredient!(categoryIndex, index);
        },
        [ingredients, setValue]
      );

      const onSubmit = () => {
        if (!ingredientFormErrors?.length) {
          toggleCollapse();
        }
      };

      return (
        <View style={styles.container}>
          <Controller
            control={control}
            name="category"
            render={({ field: { value, onChange } }) => (
              <IngrediantCategory
                category={value}
                setToggle={handleSubmit(onSubmit)}
                toggle={!collapse}
                onAdd={handleAddIngredient}
                onDelete={handleDeleteCategory}
                error={errors.category?.message}
                onChangeCategory={handleChangeCategory(onChange)}
              />
            )}
          />
          <Spacer size={5} />
          <Divider />
          <React.Fragment>
            {!collapse
              ? ingredients.map((_, index) => (
                  <CreateIngrediantInput
                    key={`_ingrediant_${index}_`}
                    ingredientIndex={index}
                    categoryIndex={categoryIndex}
                    onDeleteIngredient={handleDeleteIngredient}
                  />
                ))
              : null}
          </React.Fragment>
        </View>
      );
    }
  );

export const CreateIngrediantGroup = ConnectRecipeIngrediantForm<
  MapStateToPropsType,
  PropsType
>(
  ({
    errors,
    onChangeCategory,
    onAddIngredient,
    onDeleteIngredient,
    onAddIngredientCategory,
    onDeleteIngredientCategory,
  }) => ({
    onChangeCategory,
    errors: errors.ingredients,
    onAddCategory: onAddIngredientCategory,
    onDeleteIngredientCategory,
    onAddIngredient,
    onDeleteIngredient,
  })
)(Component);

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    paddingVertical: moderateScale(15),
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(30),
  },
});
