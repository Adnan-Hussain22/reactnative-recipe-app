import * as React from "react";
import { View } from "react-native";
import { moderateScale } from "src/utils/scale";

interface SpacerProps {
  size: number;
  scale?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ size, scale }) => {
  return <View style={{ height: scale ? moderateScale(size) : size }} />;
};

export default Spacer;
