import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { CUSTOM_FONTS } from "src/constants/fonts";
import { moderateScale, width } from "src/utils/scale";

import * as OnboardingAssets from "../Svgs/Onboarding";
import { SvgWrapper } from "../Svgs/SvgWrapper";

interface OnboardingComponentProps {
  step: number;
}

const svgs = [
  <OnboardingAssets.Onboarding1Svg />,
  <OnboardingAssets.Onboarding2Svg />,
  <OnboardingAssets.Onboarding3Svg />,
];

const content = [
  {
    title: "Scan your food with our camera",
    text: "We'll identify a recipe for you",
  },
  {
    title: "Join a community of cooking enthusiasts",
    text: "Share tips & recipes",
  },
  {
    title: "Request recipes you want to see",
    text: "We'll make sure you'll get a chance to recreate your favorite dish!",
  },
];

const OnboardingComponent: React.FC<OnboardingComponentProps> = ({ step }) => {
  return (
    <View style={styles.container}>
      <SvgWrapper size={moderateScale(280)}>{svgs[step]}</SvgWrapper>
      <Text style={styles.title}>{content[step].title}</Text>
      <Text style={styles.description}>{content[step].text}</Text>
    </View>
  );
};

export default OnboardingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(26),
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    textAlign: "center",
    width: moderateScale(width * 0.8),
  },
  description: {
    fontSize: moderateScale(17),
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    textAlign: "center",
    width: moderateScale(width * 0.8),
  },
});
