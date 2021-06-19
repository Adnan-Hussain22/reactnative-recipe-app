import * as React from "react";
import { View, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";

const RecipeRequestModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <UserAvatar
          size={styles.avatar.width}
          name="Ahmed Ali"
          src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          style={styles.avatar}
          key={Math.random()}
        />
        <Typography
          width={width * 0.8 - 55}
          color={COLORS.statsGreySecondary}
          variant="BodyLight"
        >
          Tell us what recipe you would like to see!
        </Typography>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.actionContainer}>
          <View style={styles.actionWrapper}>
            <Icon
              name="ios-image"
              type="Ionicons"
              style={[styles.actionIcon, styles.colorRed]}
            />
            <Typography color={COLORS.statsGreySecondary} variant="BodyLight">
              Photo
            </Typography>
          </View>
        </View>
        <View style={[styles.actionContainer, styles.noBorder]}>
          <View style={styles.actionWrapper}>
            <Icon
              name="check-circle"
              type="FontAwesome"
              style={[styles.actionIcon, styles.colorYellow]}
            />
            <Typography color={COLORS.statsGreySecondary} variant="BodyLight">
              Submit
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeRequestModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    paddingTop: moderateScale(20),
    height: 100,
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(15),
  },
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    borderTopWidth: 0.8,
    borderTopColor: COLORS.dotgrey,
  },
  actionContainer: {
    width: "50%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: COLORS.dotgrey,
  },
  actionWrapper: { flexDirection: "row", paddingVertical: 10 },
  actionIcon: {
    fontSize: moderateScale(20),
    color: COLORS.primaryRed,
    marginRight: moderateScale(12),
  },
  colorRed: {
    color: COLORS.primaryRed,
  },
  colorYellow: {
    color: COLORS.primaryYellow,
  },
  noBorder: { borderRightWidth: 0, paddingLeft: "15%" },
});
