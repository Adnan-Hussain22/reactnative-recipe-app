import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import UserAvatar from "react-native-user-avatar";
import { graphql, useFragment } from "react-relay";

import FollowButton from "src/components/Button/FollowButton";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { UserInfo_user$key } from "src/services/graphql/__generated__/UserInfo_user.graphql";
import { moderateScale, width } from "src/utils/scale";

interface UserInfoProps {
  user: UserInfo_user$key;
}

const userInfoFragment = graphql`
  fragment UserInfo_user on User {
    _id
    name
    username
    city
    street
    avatar
  }
`;

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const data = useFragment(userInfoFragment, user);

  return (
    <View style={styles.container}>
      <UserAvatar
        size={styles.avatar.width}
        name={data.name ?? "N A"}
        src={data.avatar ?? null}
        style={styles.avatar}
        bgColor={COLORS.statsGreySecondary}
        key={`__user${data?._id ?? ""}__${data?.avatar ?? ""}`}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <Typography variant="BodySemiBold" color={COLORS.statsGreyPrimary}>
            {data.username ?? ""}
          </Typography>
          <Typography
            variant="BodyLight"
            marginVertical={moderateScale(8)}
            color={COLORS.statsGreyPrimary}
          >
            {data.name ?? ""}
          </Typography>
          <View style={styles.locationContainer}>
            <Icon
              type="Entypo"
              name="location-pin"
              style={styles.locationIcon}
            />
            <Typography variant="BodyLight" color={COLORS.statsGreySecondary}>
              {`${data.street}, ${data.city}`}
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
