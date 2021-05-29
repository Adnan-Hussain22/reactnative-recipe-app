import { moderateScale } from "src/utils/scale";
import { CUSTOM_FONTS } from "./fonts";

export const typographyStyles = {
  H1: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(26),
  },
  H2: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(23),
  },
  BodyBold: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(18),
  },
  BodySemiBold: {
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    fontSize: moderateScale(18),
  },
  Body: {
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    fontSize: moderateScale(16),
  },
  BodyLight: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
  },
  P: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(13),
  },
};

export type typographyVariant = keyof typeof typographyStyles;
