import { StyleSheet } from "react-native";
import { height, moderateScale, width } from "src/utils/scale";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { COLORS } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: { flexGrow: 1, backgroundColor: COLORS.white },
  topRow: { marginTop: moderateScale(10), flexDirection: "row" },
  secondRow: { marginTop: moderateScale(10), flexDirection: "row" },
  headingParent: { flex: 0.8 },
  heading: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: 26,
    paddingLeft: 20,
    lineHeight: 30,
    paddingTop: 10,
  },
  origin: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: 16,
    paddingLeft: 20,
    textDecorationLine: "underline",
    color: COLORS.primaryRed,
    textDecorationStyle: "double",
  },
  name: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: 15,
    color: "#000000AA",
    paddingLeft: 15,
  },
  ratingContainer: {
    marginTop: moderateScale(15),
    flexDirection: "row",
    marginLeft: 20,
  },
  ratingText: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: 18,
    color: "#000000",
    paddingLeft: 25,
  },

  iconDown: {
    color: COLORS.primaryRed,
    fontSize: moderateScale(30),
    marginRight: moderateScale(10),
    marginTop: moderateScale(-3),
  },
  backArrow: {
    position: "absolute",
    top: moderateScale(50),
    left: moderateScale(15),
    zIndex: 2,
  },
  image: { width, height: height * 0.25 },
  tabContainer: {
    paddingBottom: moderateScale(20),
  },
  tabView: {
    marginTop: moderateScale(20),
  },
  dropDownHeading: {
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    fontSize: moderateScale(18),
    color: "#000000",
    padding: 20,
  },
  iconDownParent: { marginTop: 15 },
  dropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryGrey,
    shadowColor: "red",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
  },
  dropDownParent: { marginTop: moderateScale(15) },
  boxParent: {
    marginTop: moderateScale(30),
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5,
  },
});
