import * as React from "react";
import { Control, Controller, DeepMap, FieldError } from "react-hook-form";
import { View, StyleSheet } from "react-native";

import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";

export interface FormFields {
  email: string;
  password: string;
}

interface LoginFormProps {
  errors: DeepMap<FormFields, FieldError>;
  control: Control<FormFields>;
}

const LoginForm: React.FC<LoginFormProps> = ({ control, errors }) => {
  return (
    <View style={styles.container}>
      <Typography variant="H1" marginBottom={moderateScale(15)}>
        Sign in to your account
      </Typography>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder="E-mail or username"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={errors.email?.message || ""}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={errors.password?.message || ""}
            autoCapitalize="none"
          />
        )}
      />
      <Typography textAlign="center" color={COLORS.textGrey}>
        Forget my password
      </Typography>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  input: {
    ...typographyStyles.P,
    color: COLORS.textGrey,
  },
});
