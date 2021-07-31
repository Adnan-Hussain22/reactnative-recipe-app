import * as React from "react";
import { Text, StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import {
  typographyStyles,
  typographyVariant,
} from "src/constants/globalStyles";

export interface TypographyProps extends TextStyle {
  variant?: typographyVariant;
  onPress?: () => void;
  numberOfLines?: number;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "P",
  onPress,
  numberOfLines,
  ...style
}) =>
  onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles[variant], style]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </TouchableOpacity>
  ) : (
    <Text style={[styles[variant], style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );

export default Typography;

const styles = StyleSheet.create({
  ...typographyStyles,
});
