import * as React from "react";
import { TouchableOpacity } from "react-native";

interface IconRoundButtonProps {
  icon: React.ReactNode;
  background: string;
  size: number;
}

const IconRoundButton: React.FC<IconRoundButtonProps> = ({
  icon,
  background,
  size,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2,
        backgroundColor: background,
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconRoundButton;
