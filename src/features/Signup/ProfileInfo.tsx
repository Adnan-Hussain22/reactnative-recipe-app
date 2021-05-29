import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Button from "src/components/Button";
import Icon from "src/components/Icon";
import { ProfileImageBox, UsernameBox } from "src/components/ProfileInfo";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { useKeyboard } from "src/hooks/useKeyboard";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";

interface ProfileInfoProps {}

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const { isIos } = usePlateform();
  const { keyboardHeight } = useKeyboard();
  const bottom = keyboardHeight ? (isIos ? keyboardHeight + 20 : 20) : 50;
  return (
    <SafeAreaView style={styles.container}>
      <UsernameBox />
      <ProfileImageBox />
      <Button
        round
        center
        iconRight
        text="NEXT"
        variant="Body"
        background={COLORS.primaryRed}
        width={moderateScale(150)}
        style={{ ...styles.button, bottom }}
        textStyle={styles.nextTxt}
        icon={
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-right"
            style={iconStyles.iosChevron}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
  },
  nextTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});
