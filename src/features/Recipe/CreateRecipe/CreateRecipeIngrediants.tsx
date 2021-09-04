import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Controller } from "react-hook-form";

import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import { StyleSheet } from "react-native";
import { SearchDropdown } from "src/components/Form";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import Spacer from "src/components/Spacer";
import { CreateIngrediantGroup } from "./CreateIngrediantGroup";
import { NextButton } from "./NextButton";
import { styles } from "./styles";
import { ConnectRecipeIngrediantForm } from "src/utils/ConnectRecipeContext";
import {
  RecipeIngrediantsForm,
  RecipeIngrediantsFormContextType,
  IngrediantGroup,
  RecipeIngrediantsFormControl,
  SubmitRecipeIngrediants,
} from "src/providers/CreateRecipeForm/type";

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
  ingrediantGroups: IngrediantGroup[];
  control: RecipeIngrediantsFormControl;
  handleSubmit: SubmitRecipeIngrediants;
};

type CreateRecipeIngrediantsProps = MappedProps & {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: RecipeIngrediantsForm) => void;
};

const CreateRecipeIngrediants: React.FC<CreateRecipeIngrediantsProps> =
  React.memo(({ control, ingrediantGroups, onSubmit, handleSubmit }) => {
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
          {ingrediantGroups.map((_, index) => (
            <CreateIngrediantGroup key={`_ingrediantGroup_${index}_`} />
          ))}
        </View>
        <Spacer size={20} scale />
        <NextButton onPress={handleSubmit(onSubmit)} />
      </View>
    );
  });

const mapStateToProps = (
  state: RecipeIngrediantsFormContextType
): MappedProps => ({
  ingrediantGroups: state.ingrediantGroups,
  control: state.control,
  handleSubmit: state.handleSubmit,
});

export default ConnectRecipeIngrediantForm<CreateRecipeIngrediantsProps>(
  mapStateToProps
)(CreateRecipeIngrediants);

const componentStyles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15),
    flex: 1,
  },
});
