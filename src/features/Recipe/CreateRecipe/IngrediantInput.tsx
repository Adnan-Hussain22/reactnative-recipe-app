/* eslint-disable no-unused-vars */
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import { TouchableIcon } from "src/components/Icon";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";
import { styles } from "./styles";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";

type IngrediantInputProps = {
  onSubmit: (form: FormValues) => void;
  toggleEditable: () => void;
  step: number;
};

type FormValues = {
  name: string;
  amount: number;
  scale: string;
};

export const IngrediantSchema = yup.object().shape({
  name: yup.string().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_NAME),
  amount: yup.number().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_AMOUNT),
  scale: yup.string().required(CREATE_RECIPE_VALIDATIONS.INGREDIANT_SCALE),
});

const IngrediantInput: React.FC<IngrediantInputProps> = ({
  step,
  onSubmit,
  toggleEditable,
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      amount: 1,
      scale: "tbsp",
    },
    mode: "all",
    resolver: yupResolver(IngrediantSchema),
  });

  const submit = (form: FormValues) => {
    onSubmit(form);
    toggleEditable();
  };

  return (
    <React.Fragment>
      <View
        style={[
          FlexStyles.flexDirectionRow,
          FlexStyles.justifyContentSpaceBetween,
        ]}
      >
        <Typography
          variant="BodyLight"
          color={COLORS.statsGreySecondary}
          marginBottom={moderateScale(15)}
        >
          Ingrediant {step}
        </Typography>
        <TouchableIcon
          type="FontAwesome5"
          name="check-circle"
          size={20}
          color={COLORS.primaryRed}
          onPress={handleSubmit(submit)}
        />
      </View>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <React.Fragment>
            <Typography variant="P" color={COLORS.statsGreySecondary}>
              Name
            </Typography>
            <TextInput
              placeholder="Name of ingredients"
              containerStyle={componentStyles.input}
              style={typographyStyles.P}
              autoFocus
              value={value}
              onChangeText={onChange}
              error={errors.name?.message}
            />
          </React.Fragment>
        )}
      />
      <View style={[FlexStyles.flexRow, FlexStyles.justifyContentSpaceBetween]}>
        <Controller
          control={control}
          name="amount"
          render={({ field: { value, onChange } }) => (
            <View>
              <Typography variant="P" color={COLORS.statsGreySecondary}>
                Amount
              </Typography>
              <TextInput
                placeholder="Ingredient amount"
                containerStyle={{
                  ...componentStyles.input,
                  ...componentStyles.inputContainer,
                }}
                style={typographyStyles.P}
                value={`${value}`}
                onChangeText={onChange}
                keyboardType="numeric"
                error={errors.amount?.message}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="scale"
          render={({ field: { value, onChange } }) => (
            <View>
              <Typography variant="P" color={COLORS.statsGreySecondary}>
                Scale
              </Typography>
              <TextInput
                placeholder="tbsp, tsp, g/G, l/L"
                containerStyle={{
                  ...componentStyles.input,
                  ...componentStyles.inputContainer,
                }}
                style={typographyStyles.P}
                value={value}
                onChangeText={onChange}
                error={errors.scale?.message}
              />
            </View>
          )}
        />
      </View>
    </React.Fragment>
  );
};

export default IngrediantInput;

const componentStyles = StyleSheet.create({
  input: {
    ...styles.input,
    borderWidth: 1,
    borderColor: COLORS.dotgrey,
  },
  inputContainer: {
    width: widthPercentageToDP("35%"),
  },
});
