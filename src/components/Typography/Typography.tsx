import * as React from "react";
import { Text, StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import {
  typographyStyles,
  typographyVariant,
} from "src/constants/globalStyles";

export interface TypographyProps extends TextStyle {
  variant?: typographyVariant;
  onPress?: () => void;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "P",
  onPress,
  ...style
}) =>
  onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles[variant], style]}>{children}</Text>
    </TouchableOpacity>
  ) : (
    <Text style={[styles[variant], style]}>{children}</Text>
  );

export default Typography;

const styles = StyleSheet.create({
  ...typographyStyles,
});
