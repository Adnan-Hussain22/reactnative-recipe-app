import * as React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { generateShadow } from "react-native-shadow-generator";
import UserAvatar from "react-native-user-avatar";
import { graphql, useFragment } from "react-relay";

import LikeBox from "src/components/LikeBox";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { RecipeRequestItem_reciperequest$key } from "src/services/graphql/__generated__/RecipeRequestItem_reciperequest.graphql";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";

const fragment = graphql`
  fragment RecipeRequestItem_reciperequest on RecipeRequest {
    description
    image
    likes
    user {
      name
      avatar
    }
  }
`;

const RecipeRequestItem: React.FC<{
  recipeRequestRef: RecipeRequestItem_reciperequest$key;
}> = ({ recipeRequestRef }) => {
  const data = useFragment(fragment, recipeRequestRef);

  const { description, image, likes, avatar, name } = React.useMemo(
    () => ({
      ...data,
      name: data.user?.name ?? "",
      avatar: data.user?.avatar ?? undefined,
      likes: data.likes?.length ?? 0,
    }),
    []
  );

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.userInfo}>
          <UserAvatar
            size={styles.avatar.width}
            name={name}
            src={avatar}
            key={Math.random()}
            style={styles.avatar}
          />
          <Typography>Chefmikey</Typography>
        </View>
        <Typography color={COLORS.textGrey}>{description}</Typography>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={normalizeImageSrc(image)} style={styles.image} />
      </View>
      <LikeBox likes={likes} />
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
