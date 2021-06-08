import { StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

const spacing = {
  marginLeft: moderateScale(18),
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listSpacingTop: {
    marginTop: moderateScale(40),
  },
  titleContainer: {
    marginBottom: moderateScale(20),
    marginTop: moderateScale(20),
    paddingHorizontal: spacing.marginLeft,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemRectangle: {
    width: 180,
  },
  itemSquare: {
    width: 115,
  },
  imageRectangle: {
    height: 125,
    borderRadius: moderateScale(12),
  },
  imageSquared: {
    height: 115,
    borderRadius: moderateScale(10),
  },
});
