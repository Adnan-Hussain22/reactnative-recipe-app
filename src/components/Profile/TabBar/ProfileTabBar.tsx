import * as React from "react";
import { View, StyleSheet } from "react-native";
import ProfileTabItem from "src/components/Profile/TabBar/ProfileTabItem";

interface ProfileTabBarProps {
  index?: number;
}

const ProfileTabBar: React.FC<ProfileTabBarProps> = () => {
  return (
    <View style={styles.container}>
      <ProfileTabItem title="Recipe" active />
      <ProfileTabItem title="Request" />
      <ProfileTabItem title="Bookmark" />
    </View>
  );
};

export default ProfileTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});
