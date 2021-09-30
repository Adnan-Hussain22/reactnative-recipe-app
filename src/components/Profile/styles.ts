import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils";

export const recipeRequestCard = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: widthPercentageToDP("88%"),
  },
  infoContainer: {
    paddingTop: moderateScale(20),
    height: 100,
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(15),
  },
  input: {
    ...typographyStyles.P,
    fontSize: moderateScale(14),
    width: "83%",
    minHeight: moderateScale(40),
  },
  imageContainer: {
    height: 179,
    margin: moderateScale(5),
  },
  image: { height: "100%", width: "100%" },
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    borderTopWidth: 0.8,
    borderTopColor: COLORS.dotgrey,
  },
  actionContainer: {
    width: "50%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: COLORS.dotgrey,
  },
  actionWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  actionIcon: {
    fontSize: moderateScale(20),
    color: COLORS.primaryRed,
    marginRight: moderateScale(12),
  },
  colorRed: {
    color: COLORS.primaryRed,
  },
  colorYellow: {
    color: COLORS.primaryYellow,
  },
  colorDisabled: { color: COLORS.statsGreySecondary },
  noBorder: { borderRightWidth: 0, paddingLeft: "15%" },
});
