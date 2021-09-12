import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon, { IconProps } from "./Icon";

type TouchableIconProps = IconProps & {
  onPress: () => void;
  disabled?: boolean;
};

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  onPress,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};
