import { Platform } from "react-native";

import { BOTTOM_TAB_BAR_HEIGHT, BOTTOM_TAB_BAR_PADDING_BOTTOM } from "./common";
import { COLORS } from "./colors";
import { typographyStyles } from "./globalStyles";

export const tabBarOptions = {
  activeTintColor: COLORS.primaryRed,
  labelStyle: {
    ...typographyStyles.P,
    marginTop: 8,
  },
  inactiveTintColor: COLORS.textGrey,
  keyboardHidesTabBar: true,
  tabStyle: {
    paddingBottom:
      Platform.OS === "android" ? BOTTOM_TAB_BAR_PADDING_BOTTOM : undefined,
  },
  style: {
    height: BOTTOM_TAB_BAR_HEIGHT,
  },
};
