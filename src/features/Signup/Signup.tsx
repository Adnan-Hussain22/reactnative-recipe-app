import * as React from "react";
import { View, StyleSheet } from "react-native";

import {
  SignupLogo,
  SignupForm,
  SignupButtonBox,
  SignupFooterText,
} from "src/components/Signup";
import { moderateScale } from "src/utils/scale";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <View style={styles.container}>
      <SignupLogo />
      <SignupForm />
      <SignupButtonBox />
      <SignupFooterText />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
});
