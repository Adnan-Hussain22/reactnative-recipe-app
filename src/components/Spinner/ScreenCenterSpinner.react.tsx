import * as React from "react";
import { ActivityIndicator } from "react-native";
import { FlexCenter } from "src/components/FlexBox";

const ScreenCenterSpinner: React.FC = () => {
  return (
    <FlexCenter>
      <ActivityIndicator />
    </FlexCenter>
  );
};

export default ScreenCenterSpinner;
