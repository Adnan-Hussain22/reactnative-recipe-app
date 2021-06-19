import * as React from "react";
import { useMemo } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import ProfileStatsList from "src/components/Profile/ProfileStatsList";
import UserInfo from "src/components/Profile/UserInfo";
import ProfileTabBar from "src/components/Profile/TabBar/ProfileTabBar";
import { COLORS } from "src/constants/colors";
import { moderateScale, width } from "src/utils/scale";
import ProfileRecipeList from "src/components/Profile/ProfileRecipeList";
import ProfileRequestList from "src/components/Profile/ProfileRequestList";
import ProfileBookmarkList from "src/components/Profile/ProfileBookmarkList";

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

  const renderScene = SceneMap({
    RECIPE: ProfileRecipeList,
    REQUEST: ProfileRequestList,
    BOOKMARK: ProfileBookmarkList,
  });

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
        <TabView
          style={{
            marginTop: moderateScale(20),
          }}
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
