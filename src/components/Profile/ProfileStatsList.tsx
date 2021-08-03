import * as React from "react";
import { View, StyleSheet } from "react-native";
import { graphql, useFragment } from "react-relay";
import { ProfileStatsList_user$key } from "src/services/graphql/__generated__/ProfileStatsList_user.graphql";
import { moderateScale } from "src/utils/scale";
import ProfileStat from "./ProfileStat";

interface ProfileStatsListProps {
  data: { title: string; stats: number }[];
  user: ProfileStatsList_user$key;
}

const profileStatsFragment = graphql`
  fragment ProfileStatsList_user on User {
    noOfRecipes
    likeRequests
  }
`;

const ProfileStatsList: React.FC<ProfileStatsListProps> = ({ user }) => {
  const stats = useFragment(profileStatsFragment, user);
  const data = React.useMemo<{ title: string; stats: number }[]>(() => {
    return [
      { title: "Follower", stats: 5 },
      { title: "Following", stats: 25 },
      { title: "Recipes", stats: stats.noOfRecipes ?? 0 },
      { title: "Likes", stats: stats.likeRequests ?? 0 },
    ];
  }, []);
  return (
    <View style={styles.container}>
      {data.map((val, index) => (
        <ProfileStat
          key={`__profileStat${index}__`}
          title={val.title}
          stats={val.stats}
        />
      ))}
    </View>
  );
};

export default ProfileStatsList;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(8),
    backgroundColor: "#F4F4F4",
    padding: moderateScale(15),
    marginTop: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
