import * as React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { moderateScale } from "src/utils/scale";

type variant = "H1" | "H2" | "BodyBold" | "BodySemiBold" | "Body" | "BodyLight";

export interface TypographyProps extends TextStyle {
  variant?: variant;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "Body",
  ...style
}) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  H1: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(26),
  },
  H2: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(23),
  },
  BodyBold: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(18),
  },
  BodySemiBold: {
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    fontSize: moderateScale(18),
  },
  Body: {
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    fontSize: moderateScale(16),
  },
  BodyLight: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
  },
});
