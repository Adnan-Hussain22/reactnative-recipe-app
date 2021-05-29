import * as React from "react";
import {
  StyleSheet,
  TextInput as NativeInput,
  TextInputProps as NativeProps,
  View,
} from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface TextInputProps extends NativeProps {}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      <NativeInput {...props} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: moderateScale(25),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    marginVertical: moderateScale(8),
  },
});
