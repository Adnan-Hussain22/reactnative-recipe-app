import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { formStyles, typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";
import RecipeCover from "./RecipeCover";
import RecipeCookingTime from "./RecipeCookingTime";
import RecipeCuisineList from "./RecipeCuisineList";

const LEFT_SPACING = moderateScale(15);

export const validationSchema = yup.object().shape({
  recipeName: yup.string().required(CREATE_RECIPE_VALIDATIONS.RECIPE_NAME),
});

const CreateRecipeScreen: React.FC = () => {
  const { control } = useForm<{
    recipeName: string;
    description: string;
    cover: string;
    cookingTime: { time: string; scale: "hr" | "min" };
    cuisine: string;
    serving: string;
    calories: string;
    restaurant: string;
  }>({
    defaultValues: {
      recipeName: "",
      cover: "",
      description: "",
      cookingTime: { time: "", scale: "hr" },
      serving: "",
      calories: "",
      restaurant: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{ height: moderateScale(45) }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: "absolute",
              left: moderateScale(12),
              zIndex: 1,
            }}
          >
            <Icon
              type="Ionicons"
              name="chevron-back"
              style={{ fontSize: moderateScale(23) }}
            />
          </TouchableOpacity>
          <Typography variant="H2" textAlign="center">
            Create Recipe
          </Typography>
        </View>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            <Controller
              control={control}
              name="restaurant"
              render={({ field: { value, onChange } }) => (
                <View style={styles.inputContainer}>
                  <Typography variant="P" color={COLORS.statsGreySecondary}>
                    Restaurant
                  </Typography>
                  <TextInput
                    placeholder="Select restaurant"
                    containerStyle={styles.input}
                    style={typographyStyles.P}
                    value={value}
                    onChangeText={onChange}
                  />
                </View>
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateRecipeScreen;

const styles = StyleSheet.create({
  container: {
    ...FlexStyles.flexContainer,
    backgroundColor: COLORS.white,
    paddingTop: moderateScale(50),
  },
  body: {
    ...FlexStyles.flexContainer,
    backgroundColor: COLORS.primaryGrey,
  },

  inputContainer: {
    marginHorizontal: LEFT_SPACING,
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: "transparent",
    borderRadius: moderateScale(4),
    ...formStyles.inputContainer,
  },
});
