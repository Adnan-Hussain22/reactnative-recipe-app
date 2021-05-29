import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import Typography, { TypographyProps } from "../Typography/Typography";
import { moderateScale, width as windowWidth } from "src/utils/scale";

interface ButtonProps extends TypographyProps {
  background?: string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  round?: boolean;
  width?: number;
  style?: ViewStyle;
  center?: boolean;
  text?: string;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  background,
  icon,
  iconRight,
  width = windowWidth,
  round,
  center,
  text,
  style,
  textStyle,
  ...typoGraphyStyles
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        round ? { borderRadius: width / 2 } : null,
        {
          backgroundColor: background,
          alignSelf: center ? "center" : "auto",
          width,
        },
        style,
      ]}
    >
      {icon ? (
        <View style={styles.iconWrapper}>
          {!iconRight ? icon : null}
          <Typography {...typoGraphyStyles} style={textStyle}>
            {text}
          </Typography>
          {iconRight ? icon : null}
        </View>
      ) : (
        <Typography {...typoGraphyStyles} style={textStyle}>
          {text}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});