import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface LikeBoxProps {
  likes: number;
  style?: ViewStyle;
}

const LikeBox: React.FC<LikeBoxProps> = ({ likes, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon type="AntDesign" name="like1" style={styles.likeIcon} />
      <Typography
        color={COLORS.textGrey}
        marginLeft={moderateScale(10)}
        fontSize={moderateScale(14)}
      >
        {likes} Likes
      </Typography>
    </View>
  );
};

export default LikeBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  likeIcon: { color: COLORS.primaryRed, fontSize: moderateScale(18) },
});
