import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import OnboardingComponent from "src/components/Onboarding/OnboardingComponent";

interface OnboardingProps {}

const Onboarding = (props: OnboardingProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "flex-end", flex: 0.2 }}>
        <Text>Skip</Text>
      </View>
      <View style={{ flex: 0.6 }}>
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
});
