import * as React from "react";
import { View, StyleSheet } from "react-native";
import { generateShadow } from "react-native-shadow-generator";
import UserAvatar from "react-native-user-avatar";
import { graphql, useFragment } from "react-relay";

import LikeBox from "src/components/LikeBox";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { ProfileRequestItem_recipeRequest$key } from "src/services/graphql/__generated__/ProfileRequestItem_recipeRequest.graphql";
import { moderateScale } from "src/utils/scale";

interface ProfileRequestItemProps {
  name: string;
  username: string;
  avatar: string;
  description: string;
  likes: number;
  requestRef: ProfileRequestItem_recipeRequest$key;
}

const recipeRequestFragment = graphql`
  fragment ProfileRequestItem_recipeRequest on RecipeRequest {
    image
    description
    likes
    user {
      name
      username
      avatar
    }
  }
`;

const ProfileRequestItem: React.FC<ProfileRequestItemProps> = ({
  requestRef,
}) => {
  const data = useFragment(recipeRequestFragment, requestRef);

  const { avatar, description, likes, username } = React.useMemo(() => {
    return {
      ...data,
      avatar: data.user?.avatar ?? "",
      username: data.user?.username ?? "",
    };
  }, [data]);

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
        <LikeBox likes={likes?.length ?? 0} style={styles.likeIconBox} />
      </View>
    </View>
  );
};

export default ProfileRequestItem;

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
