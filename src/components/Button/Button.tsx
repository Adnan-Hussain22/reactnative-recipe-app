import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import Typography, { TypographyProps } from "../Typography/Typography";
import { moderateScale, width as windowWidth } from "src/utils/scale";
import Icon, { IconProps } from "src/components/Icon";
import { useCallback } from "react";

interface ButtonProps extends TypographyProps {
  background?: string;
  icon?: React.ReactNode | IconProps;
  iconRight?: boolean;
  round?: boolean;
  width?: number;
  style?: ViewStyle;
  center?: boolean;
  text?: string;
  textStyle?: TextStyle;
  // iconStyle?: StyleProp<TextStyle>;
  onPress: () => void;
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
  // iconStyle,
  onPress,
  ...typoGraphyStyles
}) => {
  const ElemIcon = useCallback(() => {
    if (!icon) return <React.Fragment />;
    if (React.isValidElement(icon)) return icon;
    return <Icon {...(icon as IconProps)} />;
  }, [icon]);

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
      onPress={onPress}
    >
      {icon ? (
        <View style={styles.iconWrapper}>
          {!iconRight ? <ElemIcon /> : null}
          <Typography {...typoGraphyStyles} {...textStyle}>
            {text}
          </Typography>
          {iconRight ? <ElemIcon /> : null}
        </View>
      ) : (
        <Typography {...typoGraphyStyles} {...textStyle}>
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
