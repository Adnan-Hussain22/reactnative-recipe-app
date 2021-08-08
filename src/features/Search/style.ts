import { StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  indicatorContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: moderateScale(80),
    alignSelf: "center",
    height: 3,
    left: moderateScale(52),
  },
  indicatorLabel: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
