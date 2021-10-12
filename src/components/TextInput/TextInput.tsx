import * as React from "react";
import {
  TextInput as NativeInput,
  TextInputProps as NativeProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface TextInputProps extends NativeProps {
  containerStyle?: ViewStyle;
  errorStyle?: TextStyle;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyle,
  error,
  errorStyle,
  ...props
}) => {
  return (
    <View style={{ marginVertical: moderateScale(3) }}>
      <InputWrapper style={containerStyle}>
        <NativeInput {...props} />
      </InputWrapper>
      <Typography
        variant="P"
        color={COLORS.primaryRed}
        opacity={error ? 1 : 0}
        marginTop={moderateScale(5)}
        {...errorStyle}
      >
        {error || "some error"}
      </Typography>
    </View>
  );
};

export default TextInput;
