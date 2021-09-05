import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import { IngredientFormErrors, OnChangeCategory } from "src/providers";
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
  errors?: IngredientFormErrors;
};

type PropsType = {
  categoryIndex: number;
};

const Component: React.FC<PropsType & Partial<MapStateToPropsType>> =
  React.memo(
    ({ categoryIndex, errors: ingredientFormErrors, onChangeCategory }) => {
      const {
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues,
        watch,
      } = useForm<IngredientGroup>({
        defaultValues: {
          category: "",
          ingredients: [{ name: "", scale: "tbsp", amount: 1 }],
        },
        mode: "all",
        resolver: yupResolver(CategorySchema),
      });
      const { ingredients } = getValues();
      const [collapse, toggleCollapse] = useTogglState(false);

      const handleChangeCategory = React.useCallback(
        (onChange: CallableFunction) => (category: string) => {
          onChange(category);
          // onChangeCategory?.(category, categoryIndex);
        },
        []
      );

      const handleAdd = React.useCallback(() => {
        const newState = [...ingredients];
        newState.push({ name: "", scale: "", amount: 1 });
        setValue("ingredients", newState);
      }, [ingredients]);

      const handleDelete = React.useCallback(
        (index: number) => {
          if (ingredients.length === 1) {
            return;
          }
          console.log("handleDelete==>", { length: ingredients.length, index });
          const newState = [...ingredients];
          newState.splice(index, 1);
          console.log("newState==>", newState);
          setValue("ingredients", newState);
        },
        [ingredients]
      );

      const onSubmit = () => {
        if (!ingredientFormErrors?.length) {
          toggleCollapse();
        }
      };

      console.log("ingredients==>", ingredients);

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
                onAdd={handleAdd}
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
                    onDeleteIngredient={handleDelete}
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
>(({ onChangeCategory, errors }) => ({
  onChangeCategory,
  errors: errors.ingredients,
}))(Component);

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    paddingVertical: moderateScale(15),
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(30),
  },
});
