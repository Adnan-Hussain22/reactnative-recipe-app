import * as React from "react";
import { View, StyleSheet } from "react-native";
import { height } from "src/utils/scale";
import { Logo } from "../Svgs/Logo";
import { SvgWrapper } from "../Svgs/SvgWrapper";

export const SignupLogo = () => {
  return (
    <View style={styles.container}>
      <SvgWrapper size={height * 0.2}>
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
