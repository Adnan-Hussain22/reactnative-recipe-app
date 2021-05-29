import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { height, moderateScale } from "src/utils/scale";
import TextInput from "../TextInput";
import Typography from "../Typography/Typography";

interface Form {
  email: string;
  password: string;
  verifyPassword: string;
}

export type SignupFormFields = keyof Form;

interface SignupFormProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (key: SignupFormFields, value: string) => void;
  errors: Form;
}

export const SignupForm: React.FC<SignupFormProps> = React.memo((props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verifyPassword, setVerifyPassword] = React.useState("");

  const handleChange = (key: SignupFormFields, value: string) => {
    switch (key) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "verifyPassword":
        setVerifyPassword(value);
        break;
      default:
        break;
    }
    props.onChange(key, value);
  };

  return (
    <View style={styles.container}>
      <Typography variant="H1" marginBottom={moderateScale(15)}>
        Create an account
      </Typography>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        error={props.errors.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        error={props.errors.password}
        onChangeText={(text) => handleChange("password", text)}
      />
      <TextInput
        placeholder="Verify Password"
        style={styles.input}
        value={verifyPassword}
        error={props.errors.verifyPassword}
        onChangeText={(text) => handleChange("verifyPassword", text)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    justifyContent: "center",
  },
  input: {
    ...typographyStyles.P,
    color: COLORS.textGrey,
  },
});
