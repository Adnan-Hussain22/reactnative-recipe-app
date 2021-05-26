import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface SvgWrapperProps {
  size: number;
  style?: ViewStyle;
}

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
  size,
  style,
  children,
}) => {
  return (
    <View style={[styles.container, { width: size }, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: { aspectRatio: 1 },
});
