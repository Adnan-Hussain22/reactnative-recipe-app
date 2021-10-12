import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { PersonalInfoFormFields } from "src/typings/signup";
import { moderateScale, width } from "src/utils/scale";
import TextInput from "../TextInput";

interface PersonalInfoNameBoxProps {
  control: Control<PersonalInfoFormFields>;
}

export const PersonalInfoNameBox: React.FC<PersonalInfoNameBoxProps> = ({
  control,
}) => {
  return (
    <View style={styles.nameContainer}>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <TextInput
            placeholder="First Name"
            containerStyle={styles.name}
            style={styles.input}
            onChangeText={onChange}
            value={value}
            error={errors.firstName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="firstName"
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <TextInput
            placeholder="Last Name"
            containerStyle={styles.name}
            style={styles.input}
            onChangeText={onChange}
            value={value}
            error={errors.lastName?.message}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: { flexDirection: "row", justifyContent: "space-between" },
  name: {
    width: width * 0.4,
    paddingVertical: moderateScale(0),
  },
  input: {
    ...typographyStyles.P,
    color: COLORS.textGrey,
    height: moderateScale(40),
  },
});
