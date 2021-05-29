import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { height, moderateScale } from "src/utils/scale";
import Button, { IconRoundButton } from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

interface SignupButtonBoxProps {
  onCreate: () => void;
  onGmail: () => void;
  onFacebook: () => void;
}

export const SignupButtonBox: React.FC<SignupButtonBoxProps> = React.memo(
  ({ onCreate, onGmail, onFacebook }) => {
    return (
      <View style={styles.container}>
        <Button
          background={COLORS.primaryRed}
          icon={
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              style={iconStyles.iosChevron}
            />
          }
          iconRight
          round
          center
          width={moderateScale(150)}
          style={styles.createBtn}
          text="CREATE"
          textStyle={styles.createTxt}
          onPress={onCreate}
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
              <Icon
                name="google"
                type="FontAwesome"
                style={styles.socialIcon}
              />
            }
            background={COLORS.googleOrange}
            size={moderateScale(45)}
            onPress={onGmail}
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
            onPress={onFacebook}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    height: height * 0.27,
  },
  createBtn: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(30),
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
