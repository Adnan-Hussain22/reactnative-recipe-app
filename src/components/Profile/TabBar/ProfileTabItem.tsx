import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface ProfileTabItemProps {
  title: string;
  active?: boolean;
  routeKey: string;
  // eslint-disable-next-line no-unused-vars
  onPress: (key: string) => void;
}

const ProfileTabItem: React.FC<ProfileTabItemProps> = ({
  title,
  active,
  routeKey,
  onPress,
}) => {
  return (
    <View style={[styles.container, { width: "33%" }]}>
      <TouchableOpacity
        style={[styles.container, { paddingLeft: 15 }]}
        disabled={active}
        onPress={() => onPress(routeKey)}
      >
        <Typography
          variant="Body"
          color={active ? COLORS.primaryRed : COLORS.statsGreySecondary}
          fontSize={moderateScale(17)}
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
