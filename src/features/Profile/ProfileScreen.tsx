import * as React from "react";
import { useMemo } from "react";
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import NoRecipes from "src/components/Profile/NoRecipes";
import RecipeRequestModal from "src/components/Profile/RecipeRequestModal";
import ProfileStatsList from "src/components/Profile/ProfileStatsList";
import UserInfo from "src/components/Profile/UserInfo";
import ProfileRequestItem from "src/components/Profile/ProfileRequestItem";
import RecipeItem from "src/components/RecipeItem";
import ProfileTabBar from "src/components/Profile/TabBar/ProfileTabBar";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";

const ProfileScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "RECIPE", title: "Recipe" },
    { key: "REQUEST", title: "Request" },
    { key: "BOOKMARK", title: "Bookmark" },
  ]);
  const stats = useMemo(
    () => [
      { title: "Follower", stats: 5 },
      { title: "Following", stats: 25 },
      { title: "Recipe", stats: 0 },
      { title: "Likes", stats: 56 },
    ],
    []
  );

  const RECIPE = () => (
    <View style={{ flex: 1 }}>
      <NoRecipes />
    </View>
  );

  const REQUEST = () => (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <RecipeRequestModal />
      <ProfileRequestItem
        name="Grace bee"
        username="gracebee"
        avatar="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        description="something very very special that i cannot describe :P"
        likes={56}
      />
    </View>
  );

  const BOOKMARK = () => (
    <View style={{ flex: 1 }}>
      <RecipeItem bookmark />
      <RecipeItem bookmark />
      <RecipeItem bookmark />
      <RecipeItem bookmark />
      <RecipeItem bookmark />
    </View>
  );

  const renderScene = SceneMap({
    RECIPE,
    REQUEST,
    BOOKMARK,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <SectionList
          sections={[
            { data: ["1"], index: 0 },
            { data: [], index: 1 },
          ]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => `__discoverItem__${index}`}
          stickySectionHeadersEnabled
          renderSectionHeader={({ section }) => {
            return section.index === 0 ? null : (
              <View style={{ flex: 1 }}>
                <TabView
                  style={{ marginTop: moderateScale(20) }}
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width, height: layout.height }}
                  renderTabBar={(props) => {
                    return (
                      <ProfileTabBar
                        routes={routes}
                        index={index}
                        onPress={(key) => props.jumpTo(key)}
                      />
                    );
                  }}
                />
              </View>
            );
          }}
          renderItem={({ section }) => {
            if (section.index === 0)
              return (
                <>
                  <UserInfo
                    name="Grace Berry"
                    username="gracebee"
                    avatar=""
                    location="Washington, DC"
                  />
                  <ProfileStatsList data={stats} />
                </>
              );
            return null;
          }}
        />
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
