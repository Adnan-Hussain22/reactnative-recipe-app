import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Button from "src/components/Button";
import { Logo } from "src/components/Svgs/Logo";
import { SvgWrapper } from "src/components/Svgs/SvgWrapper";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import Icon from "src/components/Icon";
import IconRoundButton from "src/components/Button/IconRoundButton";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: moderateScale(55),
          marginBottom: moderateScale(10),
        }}
      >
        <SvgWrapper size={130}>
          <Logo />
        </SvgWrapper>
      </View>
      <Typography variant="H1">Create an account</Typography>
      <View>
        <TextInput placeholder="E-mail" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Verify Password" />
      </View>
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
      <Typography variant="BodyLight" {...styles.signupTxt}>
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Typography variant="BodyLight" color={COLORS.textGrey} marginRight={8}>
          Have an account?
        </Typography>
        <TouchableOpacity>
          <Typography variant="Body" color={COLORS.primaryRed}>
            Sign In
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
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
