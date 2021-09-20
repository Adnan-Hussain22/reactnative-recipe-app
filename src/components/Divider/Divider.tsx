import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

type DividerProps = {
  size?: number;
  style?: ViewStyle;
};

const Divider: React.FC<DividerProps> = ({ size = 0.5, style }) => {
  return (
    <View style={[styles.container, style, { height: moderateScale(size) }]} />
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.inputBorder,
    width: "100%",
  },
});
