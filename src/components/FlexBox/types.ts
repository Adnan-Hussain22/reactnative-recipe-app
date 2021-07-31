import { ViewProps } from "react-native";

export type FlexViewProps = ViewProps & {
  /**
   * Set flex to `{flex: 0}`
   */
  noFlex?: boolean;
};
