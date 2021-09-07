import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

import Typography from "src/components/Typography";
import { SearchDropdown } from "src/components/Form";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import { TouchableIcon } from "src/components/Icon";
import Spacer from "src/components/Spacer";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import { ConnectRecipeIngrediantForm } from "src/utils/ConnectRecipeContext";
import { CreateIngrediantGroup } from "./CreateIngrediantGroup";
import { NextButton } from "./NextButton";
import { styles } from "./styles";
import {
  RecipeIngredientsForm,
  RecipeIngredientsFormContextType,
  IngredientGroup,
  RecipeIngredientsFormControl,
  SubmitRecipeIngredients,
  WatchRecipeIngredients,
  OnAddIngredientCategory,
} from "src/providers/CreateRecipeForm/type";
import { HoNoop } from "src/utils/noop";

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

type MappedProps = {
  ingredientGroups?: IngredientGroup[];
  control: RecipeIngredientsFormControl;
  handleSubmit: SubmitRecipeIngredients;
  watch: WatchRecipeIngredients;
  onAddIngredientCategory: OnAddIngredientCategory;
};

type CreateRecipeIngrediantsProps = Partial<MappedProps> & {
  onSubmit: (data: RecipeIngredientsForm) => void;
};

const CreateRecipeIngrediants: React.FC<CreateRecipeIngrediantsProps> =
  React.memo(
    ({ control, onSubmit, handleSubmit = HoNoop, onAddIngredientCategory }) => {
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
          <View
            style={[styles.inputContainer, { marginTop: moderateScale(25) }]}
          >
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
                onPress={onAddIngredientCategory!}
                style={{
                  color: COLORS.statsGreyPrimary,
                  fontSize: moderateScale(18),
                }}
              />
            </View>
            <Controller
              control={control}
              name="ingredientGroups"
              render={({ field: { value } }) => (
                <React.Fragment>
                  {value.map((_, index) => (
                    <CreateIngrediantGroup
                      key={`_ingrediantGroup_${index}_`}
                      categoryIndex={index}
                    />
                  ))}
                </React.Fragment>
              )}
            />
          </View>
          <Spacer size={20} scale />
          <NextButton onPress={handleSubmit(onSubmit)} />
        </View>
      );
    }
  );

const mapStateToProps = ({
  control,
  handleSubmit,
  watch,
  onAddIngredientCategory,
}: RecipeIngredientsFormContextType): MappedProps => ({
  control,
  handleSubmit,
  watch,
  onAddIngredientCategory,
});

export default ConnectRecipeIngrediantForm<
  MappedProps,
  CreateRecipeIngrediantsProps
>(mapStateToProps)(CreateRecipeIngrediants);

const componentStyles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15),
    flex: 1,
  },
});
