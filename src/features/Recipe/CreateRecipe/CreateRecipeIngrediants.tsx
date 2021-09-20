import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Typography from "src/components/Typography";
import { SearchDropdown } from "src/components/Form";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import { TouchableIcon } from "src/components/Icon";
import Spacer from "src/components/Spacer";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { CreateIngrediantGroup } from "./CreateIngrediantGroup";
import { NextButton } from "./NextButton";
import { styles } from "./styles";
import { IngrediantSchema } from "./IngrediantInput";
import { RecipeIngredientsForm } from "./type";

const restaurants = [
  {
    value: "60e9e64d08a15b5cd1eb878d",
    label: "Cafe Aylanto",
  },
  {
    value: "60e9e64d08a15b5cd1eb878c",
    label: "Movenpick Hotel",
  },
  {
    value: "60e9e64d08a15b5cd1eb878b",
    label: "Suzie Wong",
  },
  {
    value: "60e9e64d08a15b5cd1eb878a",
    label: "Okra",
  },
  {
    value: "60e9e64d08a15b5cd1eb8789",
    label: "BBQ Tonight",
  },
  {
    value: "60e9e64d08a15b5cd1eb8788",
    label: "Sakura",
  },
  {
    value: "60e9e64d08a15b5cd1eb8787",
    label: "Kolachi",
  },
];

type CreateRecipeIngrediantsProps = {
  onSubmit: (data: RecipeIngredientsForm) => void;
};

export const schema = yup.object().shape({
  restaurant: yup.string().required(CREATE_RECIPE_VALIDATIONS.RESTAURANT),
  categorizedIngredients: yup
    .array()
    .of(
      yup.object().shape({
        category: yup
          .string()
          .required(CREATE_RECIPE_VALIDATIONS.CATEGORY_NAME),
        ingredients: yup.array().of(IngrediantSchema).min(1),
      })
    )
    .min(1),
});

const emptyData = {
  category: "",
  ingredients: [{ name: "", amount: 1, scale: "tbsp" }],
};

const CreateRecipeIngrediants: React.FC<CreateRecipeIngrediantsProps> =
  React.memo(({ onSubmit }) => {
    const { control, handleSubmit, setValue, watch } =
      useFormContext<RecipeIngredientsForm>();
    const watchCategorizedIngredients = watch("categorizedIngredients");
    const { remove } = useFieldArray({
      control,
      name: "categorizedIngredients",
    });
    const handleAdd = () => {
      watchCategorizedIngredients.push(JSON.parse(JSON.stringify(emptyData)));
      setValue("categorizedIngredients", watchCategorizedIngredients);
    };

    const handleDeleteCategory = (categoryIndex: number) => {
      if (watchCategorizedIngredients.length > 1) {
        remove(categoryIndex);
      }
    };

    return (
      <View style={componentStyles.container}>
        <Controller
          control={control}
          name="restaurant"
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Typography
                variant="P"
                color={COLORS.statsGreySecondary}
                marginBottom={moderateScale(8)}
              >
                Restaurant
              </Typography>
              <SearchDropdown
                items={restaurants}
                onChange={onChange}
                placeholder="Select restaurant"
                value={value}
              />
            </View>
          )}
        />
        <View style={[styles.inputContainer, { marginTop: moderateScale(25) }]}>
          <View
            style={[
              FlexStyles.flexDirectionRow,
              FlexStyles.justifyContentSpaceBetween,
            ]}
          >
            <Typography
              variant="P"
              color={COLORS.statsGreySecondary}
              marginBottom={moderateScale(8)}
            >
              Add Categorized Ingredients
            </Typography>
            <TouchableIcon
              type="Feather"
              name="plus-circle"
              onPress={handleAdd}
              style={{
                color: COLORS.statsGreyPrimary,
                fontSize: moderateScale(18),
              }}
            />
          </View>
          <React.Fragment>
            {watchCategorizedIngredients.map((value, index) => (
              <CreateIngrediantGroup
                key={`categorizedIngredients.${index}`}
                categoryIndex={index}
                categorizedIngredient={value}
                onDeleteCategory={handleDeleteCategory}
              />
            ))}
          </React.Fragment>
        </View>
        <Spacer size={20} scale />
        <NextButton onPress={handleSubmit(onSubmit)} />
      </View>
    );
  });

export default (props: CreateRecipeIngrediantsProps) => {
  const methods = useForm<RecipeIngredientsForm>({
    defaultValues: {
      restaurant: "",
      categorizedIngredients: [{ ...emptyData }],
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <CreateRecipeIngrediants {...props} />
    </FormProvider>
  );
};

const componentStyles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15),
    flex: 1,
  },
});
