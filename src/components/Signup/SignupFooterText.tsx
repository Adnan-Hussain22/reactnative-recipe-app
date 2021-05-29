import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "src/constants/colors";
import Typography from "../Typography";

interface SignupFooterTextProps {}

export const SignupFooterText = (props: SignupFooterTextProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="BodyLight" color={COLORS.textGrey} marginRight={8}>
        Have an account?
      </Typography>
      <TouchableOpacity>
        <Typography variant="Body" color={COLORS.primaryRed}>
          Sign In
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
