import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon, { IconProps } from "./Icon";

type TouchableIconProps = IconProps & {
  onPress: () => void;
};

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};
