import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import {
  SignupLogo,
  SignupForm,
  SignupButtonBox,
  SignupFooterText,
} from "src/components/Signup";
import { COLORS } from "src/constants/colors";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const { isIos } = usePlateform();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={isIos ? "padding" : undefined}
      >
        <ScrollView style={styles.main}>
          <SignupLogo />
          <SignupForm />
          <SignupButtonBox />
          <SignupFooterText />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: {
    paddingHorizontal: moderateScale(15),
    backgroundColor: COLORS.white,
  },
});
