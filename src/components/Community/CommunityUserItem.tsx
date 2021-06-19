import * as React from "react";
import { View, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import FollowButton from "src/components/Button/FollowButton";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

// interface CommunityUserItemProps {}

const CommunityUserItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <UserAvatar
        size={90}
        name="Ahmed Ali"
        src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        key={Math.random()}
        style={{ width: 90 }}
      />
      <Typography
        variant="Body"
        marginVertical={moderateScale(5)}
        textAlign="center"
      >
        Ahmed Ali
      </Typography>
      <Typography color={COLORS.textGrey} textAlign="center">
        ahMedai
      </Typography>
      <FollowButton onPress={() => {}} />
    </View>
  );
};

export default CommunityUserItem;

const styles = StyleSheet.create({
  container: {
    width: 125,
    alignItems: "center",
  },
});
