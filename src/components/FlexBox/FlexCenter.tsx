import React, { FC } from "react";
import { View } from "react-native";
import FlexStyles from "./FlexStyles";
import { FlexViewProps } from "./types";
import { shouldFlexOrNot } from "./shouldFlexOrNot";

export const FlexCenter: FC<FlexViewProps> = ({ style, noFlex, ...props }) => (
  <View
    style={[FlexStyles.flexCenter, shouldFlexOrNot(noFlex), style]}
    {...props}
  />
);
