import * as React from "react";
import { TouchableOpacity } from "react-native";

interface IconRoundButtonProps {
  icon: React.ReactNode;
  background: string;
  size: number;
  onPress: () => void;
}

const IconRoundButton: React.FC<IconRoundButtonProps> = ({
  icon,
  background,
  size,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: background,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconRoundButton;
