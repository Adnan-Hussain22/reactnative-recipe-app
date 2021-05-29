import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { height, moderateScale } from "src/utils/scale";
import TextInput from "../TextInput";
import Typography from "../Typography/Typography";

interface SignupFormProps {}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="H1" marginBottom={moderateScale(15)}>
        Create an account
      </Typography>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Verify Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    justifyContent: "center",
  },
});
