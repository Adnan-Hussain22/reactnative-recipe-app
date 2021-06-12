import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon, { IconProps } from "src/components/Icon";

interface IconRoundButtonProps {
  icon?: React.ReactNode | IconProps;
  background?: string;
  size: number;
  onPress: () => void;
}

const IconRoundButton: React.FC<IconRoundButtonProps> = ({
  icon,
  background,
  size,
  onPress,
}) => {
  const ElemIcon = React.useCallback(() => {
    if (!icon) return <React.Fragment />;
    if (React.isValidElement(icon)) return icon;
    return <Icon {...(icon as IconProps)} />;
  }, [icon]);

  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: background || "transparent",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <ElemIcon />
    </TouchableOpacity>
  );
};

export default IconRoundButton;
