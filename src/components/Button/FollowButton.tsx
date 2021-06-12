import * as React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";
import Button from "./Button";

interface FollowButtonProps {
  onPress: () => void;
}

const FollowButton: React.FC<FollowButtonProps> = ({ onPress }) => {
  return (
    <Button
      icon={{
        type: "AntDesign",
        name: "plus",
        style: styles.icon,
      }}
      round
      center
      width={moderateScale(90)}
      style={styles.followBtn}
      text="Follow"
      textStyle={styles.follow}
      onPress={onPress}
    />
  );
};

export default FollowButton;

const styles = StyleSheet.create({
  followBtn: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(14),
    borderWidth: 1,
    borderColor: COLORS.primaryYellow,
    marginTop: moderateScale(8),
  },
  follow: {
    ...typographyStyles.BodySemiBold,
    color: COLORS.primaryRed,
    fontSize: 15,
  },
  icon: { color: COLORS.primaryRed, fontSize: moderateScale(13) },
});
