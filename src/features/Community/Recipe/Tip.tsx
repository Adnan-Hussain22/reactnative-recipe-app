import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { moderateScale } from "src/utils/scale";

const Tip: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconParent}>
        <Icon name="bulb" type="Ionicons" style={styles.icon} />
      </View>
      <View style={styles.tipContainer}>
        <Text style={styles.heading}>TIP:</Text>
        <Text style={styles.tip}>Tap on</Text>
        <Text style={styles.bullet}>Red Ingredients*</Text>
        <Text style={styles.tip}>to see thier subtitles!</Text>
      </View>
    </View>
  );
};

export default Tip;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 30,
    borderColor: COLORS.primaryYellow,
    borderWidth: 1,
    overflow: "hidden",
  },
  iconParent: { flex: 0.15 },
  icon: {
    marginLeft: moderateScale(15),
    color: COLORS.primaryYellow,
    fontSize: moderateScale(25),
  },
  tipContainer: { flexDirection: "row", flex: 0.85, flexWrap: "wrap" },
  heading: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
    color: COLORS.statsGreyPrimary,
  },
  tip: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(15),
    color: COLORS.textGrey,
    paddingLeft: 5,
  },
  bullet: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: moderateScale(15),
    color: COLORS.primaryRed,
    paddingLeft: 5,
  },
});
