import * as React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { generateShadow } from "react-native-shadow-generator";
import UserAvatar from "react-native-user-avatar";
import LikeBox from "src/components/LikeBox";

import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";

// interface RecipeRequestItemProps {}

const RecipeRequestItem: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.userInfo}>
          <UserAvatar
            size={styles.avatar.width}
            name="Ahmed Ali"
            src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            key={Math.random()}
            style={styles.avatar}
          />
          <Typography>Chefmikey</Typography>
        </View>
        <Typography color={COLORS.textGrey}>
          Has anyone tried to make a tawa mutton botti ?
        </Typography>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={normalizeImageSrc(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtoOZDDrpyQ6t1_mCcQeUTU65ywsA-FNSs6xJJPiaDk34pyICBtLXHDZSaTAG8w3JJyg&usqp=CAU"
          )}
          style={styles.image}
        />
      </View>
      <LikeBox likes={56} />
    </TouchableOpacity>
  );
};

export default RecipeRequestItem;

const styles = StyleSheet.create({
  container: {
    width: 210,
    backgroundColor: COLORS.white,
    height: "99%",
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 10,
    marginRight: 15,
    ...generateShadow(4),
  },
  contentWrapper: { padding: 10, marginBottom: 5 },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),
  },
  avatar: { width: moderateScale(30), marginRight: moderateScale(8) },
  imageWrapper: { height: "47%", width: "100%" },
  image: { height: "100%", width: "100%" },
});
