import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { styles } from "./styles";
import { moderateScale } from "src/utils/scale";
import { StyleSheet } from "react-native";
import { SearchDropdown } from "src/components/Form";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import { CreateIngrediantGroup } from "./CreateIngrediantGroup";
import { NextButton } from "./NextButton";
import Spacer from "src/components/Spacer";

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
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: RecipeIngrediantsForm) => void;
};

const validationSchema = yup.object().shape({
  recipeName: yup.string().required(CREATE_RECIPE_VALIDATIONS.RECIPE_NAME),
});

export type RecipeIngrediantsForm = {
  restaurant: string;
};

const CreateRecipeIngrediants: React.FC<CreateRecipeIngrediantsProps> = ({
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm<RecipeIngrediantsForm>({
    defaultValues: {
      restaurant: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

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
          <TouchableOpacity>
            <Icon
              type="Feather"
              name="plus-circle"
              style={{
                color: COLORS.statsGreyPrimary,
                fontSize: moderateScale(18),
              }}
            />
          </TouchableOpacity>
        </View>
        <CreateIngrediantGroup />
      </View>
      <Spacer size={20} scale />
      <NextButton onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateRecipeIngrediants;

const componentStyles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15),
    flex: 1,
  },
});
