import * as React from "react";
import { View, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import Button from "src/components/Button";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
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
      <Button
        icon={{
          type: "AntDesign",
          name: "plus",
          style: { color: COLORS.primaryRed, fontSize: moderateScale(13) },
        }}
        round
        center
        width={moderateScale(90)}
        style={styles.followBtn}
        text="Follow"
        textStyle={styles.follow}
        onPress={() => {}}
      />
    </View>
  );
};

export default CommunityUserItem;

const styles = StyleSheet.create({
  container: {
    width: 125,
    alignItems: "center",
  },
  followBtn: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(14),
    borderWidth: 1,
    borderColor: COLORS.primaryYellow,
    marginTop: moderateScale(8),
  },
  follow: {
    ...typographyStyles.BodySemiBold,
    color: COLORS.primaryRed,
    fontSize: 15,
  },
});
