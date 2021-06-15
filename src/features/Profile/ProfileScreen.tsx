import * as React from "react";
import { useMemo } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import NoRecipes from "src/components/Profile/NoRecipes";
import RecipeRequestModal from "src/components/Profile/RecipeRequestModal";
import ProfileStatsList from "src/components/Profile/ProfileStatsList";
import UserInfo from "src/components/Profile/UserInfo";

import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";
import ProfileRequestItem from "src/components/Profile/ProfileRequestItem";

const ProfileScreen: React.FC = () => {
  const stats = useMemo(
    () => [
      { title: "Follower", stats: 5 },
      { title: "Following", stats: 25 },
      { title: "Recipe", stats: 0 },
      { title: "Likes", stats: 56 },
    ],
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <UserInfo
          name="Grace Berry"
          username="gracebee"
          avatar=""
          location="Washington, DC"
        />
        <ProfileStatsList data={stats} />
        <RecipeRequestModal />
        <ProfileRequestItem
          name="Grace bee"
          username="gracebee"
          avatar="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          description="something very very special that i cannot describe :P"
          likes={56}
        />
        {/* <NoRecipes /> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    paddingTop: moderateScale(20),
    paddingHorizontal: width * 0.04,
  },
});
