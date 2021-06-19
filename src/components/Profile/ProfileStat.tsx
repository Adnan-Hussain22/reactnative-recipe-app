import * as React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";

interface ProfileStatProps {
  title: string;
  stats: number;
}

const ProfileStat: React.FC<ProfileStatProps> = ({ title, stats }) => {
  return (
    <View style={styles.container}>
      <Typography
        color={COLORS.statsGreySecondary}
        fontSize={moderateScale(15)}
      >
        {title}
      </Typography>
      <Typography
        variant="BodyBold"
        color={COLORS.statsGreyPrimary}
        textAlign="center"
        marginTop={moderateScale(5)}
      >
        {stats}
      </Typography>
    </View>
  );
};

export default ProfileStat;

const styles = StyleSheet.create({
  container: {
    width: width / 4 - 20,
    alignItems: "center",
  },
});
