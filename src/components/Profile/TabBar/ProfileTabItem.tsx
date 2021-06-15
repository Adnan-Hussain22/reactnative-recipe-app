import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface ProfileTabItemProps {
  title: string;
  active?: boolean;
}

const ProfileTabItem: React.FC<ProfileTabItemProps> = ({ title, active }) => {
  return (
    <View style={[styles.container, { width: "32.7%" }]}>
      <TouchableOpacity style={styles.container} disabled={active}>
        <Typography
          variant="Body"
          color={active ? COLORS.primaryRed : COLORS.statsGreySecondary}
          fontSize={moderateScale(18)}
        >
          {title}
        </Typography>
        {active ? <View style={styles.bar} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  bar: {
    width: moderateScale(40),
    height: moderateScale(3.8),
    backgroundColor: COLORS.primaryYellow,
    marginTop: moderateScale(8),
  },
});
