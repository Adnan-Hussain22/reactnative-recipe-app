import * as React from "react";
import { View, StyleSheet } from "react-native";
import { moderateScale } from "src/utils/scale";
import ProfileStat from "./ProfileStat";

interface ProfileStatsListProps {
  data: { title: string; stats: number }[];
}

const ProfileStatsList: React.FC<ProfileStatsListProps> = ({ data }) => {
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
