import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import OnboardingComponent from "src/components/Onboarding/OnboardingComponent";
import { COLORS } from "src/constants/colors";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { moderateScale } from "src/utils/scale";

interface OnboardingProps {}

const Onboarding: React.FC<OnboardingProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skipBtn}>
        <Text style={styles.skipTxt}>SKIP</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.67 }}>
        <OnboardingComponent step={2} />
      </View>
      <View style={{ flex: 0.2 }} />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFF",
  },
  skipBtn: {
    alignItems: "flex-end",
    flex: 0.13,
    justifyContent: "flex-end",
  },
  skipTxt: {
    fontSize: moderateScale(16),
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    color: COLORS.primaryRed,
  },
});
