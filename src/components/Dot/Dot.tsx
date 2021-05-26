import * as React from "react";
import { View } from "react-native";

interface DotProps {
  color: string;
  size: number;
  spacing?: number;
}

const Dot: React.FC<DotProps> = ({ color, size, spacing = 3 }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size / 2,
        marginHorizontal: spacing,
        marginVertical: 3,
      }}
    />
  );
};

export default Dot;
