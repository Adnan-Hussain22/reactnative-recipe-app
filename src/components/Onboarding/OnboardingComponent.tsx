import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { moderateScale } from "src/utils/scale";

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
      <Text>{content[step].title}</Text>
      <Text>{content[step].text}</Text>
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
});
