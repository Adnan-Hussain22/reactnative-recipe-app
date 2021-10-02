import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Control, Controller, DeepMap, FieldError } from "react-hook-form";
import * as yup from "yup";

import { COLORS } from "src/constants/colors";
import { ONBOARDING_VALIDATIONS as ERRORS } from "src/constants/Errors";
import { typographyStyles } from "src/constants/globalStyles";
import { height, moderateScale } from "src/utils/scale";
import TextInput from "../TextInput";
import Typography from "../Typography/Typography";

export interface SignupFormFields {
  email: string;
  password: string;
  verifyPassword: string;
}

export const signupValidationSchema = yup.object().shape({
  email: yup.string().email(ERRORS.EMAIL).required(ERRORS.EMAIL),
  password: yup.string().min(6).required(ERRORS.STRONG_PASSWORD),
  verifyPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], ERRORS.PASSWORD_NOTMATCH)
    .required(ERRORS.PASSWORD_NOTMATCH),
});

interface SignupFormProps {
  errors: DeepMap<SignupFormFields, FieldError>;
  control: Control<SignupFormFields>;
}

export const SignupForm: React.FC<SignupFormProps> = React.memo((props) => {
  return (
    <View style={styles.container}>
      <Typography variant="H1" marginBottom={moderateScale(15)}>
        Create an account
      </Typography>
      <Controller
        control={props.control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={props.errors.email?.message || ""}
            autoCapitalize="none"
            errorStyle={styles.error}
            containerStyle={styles.inputContainer}
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={props.errors.password?.message || ""}
            autoCapitalize="none"
            errorStyle={styles.error}
            containerStyle={styles.inputContainer}
          />
        )}
      />
      <Controller
        control={props.control}
        name="verifyPassword"
        render={({ field: { value, onChange } }) => (
          <TextInput
            secureTextEntry
            placeholder="Verify Password"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={props.errors.verifyPassword?.message || ""}
            autoCapitalize="none"
            errorStyle={styles.error}
            containerStyle={styles.inputContainer}
          />
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    justifyContent: "center",
    maxHeight: 290,
  },
  input: {
    ...typographyStyles.P,
    color: COLORS.textGrey,
  },
  inputContainer: {
    paddingVertical: moderateScale(10),
  },
  error: {
    marginLeft: moderateScale(10),
  },
});
