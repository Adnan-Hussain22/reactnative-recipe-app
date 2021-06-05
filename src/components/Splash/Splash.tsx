import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {},
});
