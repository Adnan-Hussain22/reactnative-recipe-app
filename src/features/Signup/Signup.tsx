import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Button from "src/components/Button";
import { Logo } from "src/components/Svgs/Logo";
import { SvgWrapper } from "src/components/Svgs/SvgWrapper";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import Icon from "src/components/Icon";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    // <SafeAreaView style={styles.container}>
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
        style={{
          marginTop: moderateScale(20),
          paddingHorizontal: moderateScale(18),
          paddingVertical: moderateScale(12),
        }}
        text="CREATE"
        textStyle={{ color: COLORS.white, letterSpacing: moderateScale(2) }}
      />
      <Typography
        variant="BodyLight"
        style={{ color: "#7e7e7e", textAlign: "center", marginTop: 20 }}
      >
        Sign up now
      </Typography>
    </View>
    // </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
});
