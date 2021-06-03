import * as React from "react";
import { View, StyleSheet } from "react-native";
import { height, moderateScale } from "src/utils/scale";
import { Logo } from "../Svgs/Logo";
import { SvgWrapper } from "../Svgs/SvgWrapper";

export const SignupLogo = () => {
  return (
    <View style={styles.container}>
      <SvgWrapper size={moderateScale(Math.min(height * 0.2, 130))}>
        <Logo />
      </SvgWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});
