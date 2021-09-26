import * as React from "react";
import { View, StyleSheet } from "react-native";
import { generateShadow } from "react-native-shadow-generator";
import UserAvatar from "react-native-user-avatar";
import LikeBox from "src/components/LikeBox";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface ProfileRequestBoxProps {
  username: string;
  avatar: string;
  description: string;
  likes: number;
}

export const ProfileRequestBox: React.FC<ProfileRequestBoxProps> = ({
  avatar,
  description,
  likes,
  username,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <UserAvatar
          size={styles.avatar.width}
          name={username}
          src={avatar}
          style={styles.avatar}
          key={Math.random()}
        />
        <Typography variant="Body" color={COLORS.statsGreyPrimary}>
          {username}
        </Typography>
      </View>
      <View style={styles.descriptionContainer}>
        <Typography variant="BodyLight" color={COLORS.statsGreySecondary}>
          {description}
        </Typography>
        <LikeBox likes={likes} style={styles.likeIconBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(20),
    backgroundColor: COLORS.white,
    padding: moderateScale(18),
    paddingBottom: moderateScale(12),
    borderRadius: moderateScale(10),
    ...generateShadow(4),
  },
  userInfoContainer: { flexDirection: "row", alignItems: "center" },
  avatar: { width: moderateScale(30), marginRight: moderateScale(12) },
  descriptionContainer: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(8),
  },
  likeIconBox: { marginTop: moderateScale(5), paddingLeft: 0 },
});
