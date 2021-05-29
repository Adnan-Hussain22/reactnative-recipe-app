import * as React from "react";
import {
  TextInput as NativeInput,
  TextInputProps as NativeProps,
  ViewStyle,
} from "react-native";
import InputWrapper from "../InputWrapper/InputWrapper";

interface TextInputProps extends NativeProps {
  containerStyle?: ViewStyle;
}

const TextInput: React.FC<TextInputProps> = ({ containerStyle, ...props }) => {
  return (
    <InputWrapper style={containerStyle}>
      <NativeInput {...props} />
    </InputWrapper>
  );
};

export default TextInput;
