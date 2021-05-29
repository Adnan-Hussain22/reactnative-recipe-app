import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { height, moderateScale } from "src/utils/scale";
import Button, { IconRoundButton } from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

interface SignupButtonBoxProps {}

export const SignupButtonBox = (props: SignupButtonBoxProps) => {
  return (
    <View style={styles.container}>
      <Button
        background={COLORS.primaryRed}
        icon={
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-right"
            style={{ color: COLORS.white, fontSize: moderateScale(25) }}
          />
        }
        iconRight
        round
        center
        width={moderateScale(140)}
        style={styles.createBtn}
        text="CREATE"
        textStyle={styles.createTxt}
      />
      <Typography
        variant="BodyLight"
        {...styles.signupTxt}
        marginBottom={moderateScale(12)}
      >
        Sign up now
      </Typography>
      <View style={styles.socialIconContainer}>
        <IconRoundButton
          icon={
            <Icon name="google" type="FontAwesome" style={styles.socialIcon} />
          }
          background={COLORS.googleOrange}
          size={moderateScale(45)}
        />
        <IconRoundButton
          icon={
            <Icon
              name="facebook-f"
              type="FontAwesome"
              style={styles.socialIcon}
            />
          }
          background={COLORS.fbBlue}
          size={moderateScale(45)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.27,
  },
  createBtn: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(12),
  },
  createTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
  signupTxt: { color: COLORS.textGrey, textAlign: "center", marginTop: 20 },
  socialIconContainer: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  socialIcon: { color: COLORS.white, fontSize: moderateScale(25) },
});
