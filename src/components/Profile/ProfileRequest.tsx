import * as React from "react";
import { View, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";

// interface ProfileRequestProps {}

const ProfileRequest = () => {
  return (
    <View
      style={{
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
      }}
    >
      <View
        style={{
          paddingTop: moderateScale(20),
          height: 100,
          paddingHorizontal: moderateScale(20),
          borderBottomWidth: 0.3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
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
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: moderateScale(20),
          paddingTop: moderateScale(10),
        }}
      >
        <View
          style={{
            width: "50%",
            paddingHorizontal: "10%",
            flexDirection: "row",
          }}
        >
          <Icon
            name="ios-image"
            type="Ionicons"
            style={{
              fontSize: moderateScale(20),
              color: COLORS.primaryRed,
              marginRight: moderateScale(12),
            }}
          />
          <Typography color={COLORS.statsGreySecondary} variant="BodyLight">
            Photo
          </Typography>
        </View>
        <Icon
          name="check-circle"
          type="FontAwesome5"
          style={{ fontSize: moderateScale(20), color: COLORS.primaryYellow }}
        />
      </View>
    </View>
  );
};

export default ProfileRequest;

const styles = StyleSheet.create({
  container: {},
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(15),
  },
});
