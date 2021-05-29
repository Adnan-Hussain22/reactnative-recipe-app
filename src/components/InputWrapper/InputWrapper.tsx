import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface InputWrapperProps extends TouchableOpacityProps {
  touchable?: boolean;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  style,
  touchable,
  children,
  onPress,
  ...props
}) => {
  return touchable ? (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: moderateScale(25),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    marginVertical: moderateScale(8),
  },
});
