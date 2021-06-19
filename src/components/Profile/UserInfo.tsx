import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import UserAvatar from "react-native-user-avatar";

import FollowButton from "src/components/Button/FollowButton";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";

interface UserInfoProps {
  name: string;
  avatar: string;
  username: string;
  location: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  username,
  avatar,
  location,
}) => {
  return (
    <View style={styles.container}>
      <UserAvatar
        size={styles.avatar.width}
        name={name}
        src={avatar}
        style={styles.avatar}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <Typography variant="BodySemiBold" color={COLORS.statsGreyPrimary}>
            {username}
          </Typography>
          <Typography
            variant="BodyLight"
            marginVertical={moderateScale(8)}
            color={COLORS.statsGreyPrimary}
          >
            {name}
          </Typography>
          <View style={styles.locationContainer}>
            <Icon
              type="Entypo"
              name="location-pin"
              style={styles.locationIcon}
            />
            <Typography variant="BodyLight" color={COLORS.statsGreySecondary}>
              {location}
            </Typography>
          </View>
          <FollowButton onPress={() => {}} />
        </View>
        <TouchableOpacity>
          <Icon
            name="ios-settings-sharp"
            type="Ionicons"
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  avatar: { width: moderateScale(100), height: moderateScale(100) },
  contentWrapper: { flexDirection: "row", marginTop: moderateScale(5) },
  contentContainer: {
    paddingLeft: moderateScale(20),
    width: width * 0.55,
  },
  locationContainer: { flexDirection: "row", marginBottom: moderateScale(5) },
  locationIcon: {
    color: COLORS.primaryRed,
    fontSize: moderateScale(18),
    marginRight: moderateScale(3),
    marginLeft: moderateScale(-3),
  },
  settingsIcon: { fontSize: moderateScale(20), color: "#8A8A8A" },
});
