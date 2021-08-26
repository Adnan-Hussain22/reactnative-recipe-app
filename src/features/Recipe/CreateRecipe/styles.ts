import { StyleSheet } from "react-native";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import { COLORS } from "src/constants/colors";
import { formStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";

const LEFT_SPACING = moderateScale(15);

export const styles = StyleSheet.create({
  container: {
    ...FlexStyles.flexContainer,
    backgroundColor: COLORS.white,
    paddingTop: moderateScale(50),
  },
  body: {
    ...FlexStyles.flexContainer,
    backgroundColor: COLORS.primaryGrey,
  },

  inputContainer: {
    marginHorizontal: LEFT_SPACING,
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: "transparent",
    borderRadius: moderateScale(4),
    ...formStyles.inputContainer,
  },
});
