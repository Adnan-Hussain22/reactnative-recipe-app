import * as React from "react";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { typographyStyles } from "src/constants/globalStyles";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import RecipeCookingTime from "./RecipeCookingTime";
import RecipeCover from "./RecipeCover";
import RecipeCuisineList from "./RecipeCuisineList";
import { styles } from "./styles";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import { NextButton } from "src/features/Recipe/CreateRecipe/NextButton";
import { TimeScale } from "src/typings/time";

interface CreateRecipeInfoProps {
  onSubmit: (data: RecipeInfoForm) => void;
}

export type RecipeInfoForm = {
  recipeName: string;
  description: string;
  cover: string;
  cookingTime: { time: string; scale: TimeScale };
  cuisine: string;
  serving: string;
  calories: string;
};

const validationSchema = yup.object().shape({
  recipeName: yup.string().required(CREATE_RECIPE_VALIDATIONS.RECIPE_NAME),
});

const CreateRecipeInfo: React.FC<CreateRecipeInfoProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<RecipeInfoForm>({
    defaultValues: {
      recipeName: "",
      cover: "",
      description: "",
      cookingTime: { time: "", scale: TimeScale.HOUR },
      serving: "",
      calories: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <View style={{ paddingBottom: moderateScale(20) }}>
      <Controller
        control={control}
        name="cover"
        render={({ field: { value, onChange } }) => (
          <RecipeCover imagePath={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="recipeName"
        render={({ field: { value, onChange } }) => (
          <View style={styles.inputContainer}>
            <Typography variant="P" color={COLORS.statsGreySecondary}>
              Name
            </Typography>
            <TextInput
              placeholder="Recipe Name"
              containerStyle={styles.input}
              style={typographyStyles.P}
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange } }) => (
          <View style={styles.inputContainer}>
            <Typography variant="P" color={COLORS.statsGreySecondary}>
              Description
            </Typography>
            <TextInput
              placeholder="Description Name"
              containerStyle={styles.input}
              style={typographyStyles.P}
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="cookingTime"
        render={({ field: { value, onChange } }) => (
          <RecipeCookingTime
            time={value.time}
            scale={value.scale}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cuisine"
        render={({ field: { value, onChange } }) => (
          <RecipeCuisineList cuisine={value} onChange={onChange} />
        )}
      />
      <View
        style={[
          FlexStyles.flexDirectionRow,
          FlexStyles.justifyContentSpaceBetween,
          { marginTop: moderateScale(18) },
        ]}
      >
        <Controller
          control={control}
          name="serving"
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Typography variant="P" color={COLORS.statsGreySecondary}>
                Serving
              </Typography>
              <TextInput
                placeholder="No of serving person's"
                containerStyle={styles.input}
                style={typographyStyles.P}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="calories"
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Typography variant="P" color={COLORS.statsGreySecondary}>
                Calories
              </Typography>
              <TextInput
                placeholder="Amount of calories"
                containerStyle={styles.input}
                style={typographyStyles.P}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            </View>
          )}
        />
      </View>
      <NextButton onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateRecipeInfo;
