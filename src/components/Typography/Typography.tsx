import * as React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import {
  typographyStyles,
  typographyVariant,
} from "src/constants/globalStyles";

export interface TypographyProps extends TextStyle {
  variant?: typographyVariant;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "P",
  ...style
}) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  ...typographyStyles,
});
