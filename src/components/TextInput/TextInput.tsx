import * as React from "react";
import {
  TextInput as NativeInput,
  TextInputProps as NativeProps,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface TextInputProps extends NativeProps {
  containerStyle?: ViewStyle;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyle,
  error,
  ...props
}) => {
  return (
    <View style={{ marginVertical: moderateScale(6) }}>
      <InputWrapper style={containerStyle}>
        <NativeInput {...props} />
      </InputWrapper>
      <Typography
        variant="P"
        color={COLORS.primaryRed}
        paddingLeft={moderateScale(18)}
        opacity={error ? 1 : 0}
        marginTop={moderateScale(4)}
      >
        {error || "some error"}
      </Typography>
    </View>
  );
};

export default TextInput;
