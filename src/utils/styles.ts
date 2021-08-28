import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const normalizeStyle = (
  style: StyleProp<TextStyle | ViewStyle>,
  extraStyles?: TextStyle | ViewStyle
) => {
  if (Array.isArray(style)) return [extraStyles, ...style];
  return [extraStyles, style];
};
