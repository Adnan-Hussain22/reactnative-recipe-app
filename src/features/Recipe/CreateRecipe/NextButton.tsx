import * as React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Button from "src/components/Button";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";

type NextButtonProps = {
  // eslint-disable-next-line no-unused-vars
  onPress: () => void;
};

export const NextButton: React.FC<NextButtonProps> = ({ onPress }) => {
  return (
    <Button
      text="NEXT"
      background={COLORS.primaryRed}
      round
      center
      style={styles.button}
      variant="Body"
      textStyle={styles.nextTxt}
      icon={
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          style={iconStyles.iosChevron}
        />
      }
      iconRight
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: moderateScale(15),
    width: widthPercentageToDP("70%"),
    alignItems: "center",
  },
  nextTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});