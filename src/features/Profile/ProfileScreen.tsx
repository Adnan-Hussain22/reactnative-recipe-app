import * as React from "react";
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
import ProfileRecipeList from "src/components/Profile/ProfileRecipes";
import ProfileRequestList from "src/components/Profile/ProfileRequestList";
import ProfileBookmarkList from "src/components/Profile/ProfileBookmarkList";
import { useCallback } from "react";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { ProfileScreenQuery } from "src/services/graphql/__generated__/ProfileScreenQuery.graphql";
import ScreenCenterSpinner from "src/components/Spinner/ScreenCenterSpinner.react";
import { ProfileRecipes_recipes$key } from "src/services/graphql/__generated__/ProfileRecipes_recipes.graphql";
import { ProfileBookmarkList_bookmarks$key } from "src/services/graphql/__generated__/ProfileBookmarkList_bookmarks.graphql";
import { ProfileRequestList_recipeRequests$key } from "src/services/graphql/__generated__/ProfileRequestList_recipeRequests.graphql";

export const profileUserQuery = graphql`
  query ProfileScreenQuery($currentUserId: MongoID!) {
    userById(_id: $currentUserId) {
      ...UserInfo_user
      ...ProfileStatsList_user
      ...ProfileRecipes_recipes
      ...ProfileBookmarkList_bookmarks
      ...ProfileRequestList_recipeRequests
    }
  }
`;

const ProfileContainer: React.FC<{
  queryRef: PreloadedQuery<ProfileScreenQuery>;
}> = ({ queryRef }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const routes = React.useMemo(
    () => [
      { key: "RECIPE", title: "Recipe" },
      { key: "REQUEST", title: "Request" },
      { key: "BOOKMARK", title: "Bookmark" },
    ],
    []
  );
  const stats = React.useMemo(
    () => [
      { title: "Follower", stats: 5 },
      { title: "Following", stats: 25 },
      { title: "Recipe", stats: 0 },
      { title: "Likes", stats: 56 },
    ],
    []
  );
  const data = usePreloadedQuery<ProfileScreenQuery>(
    profileUserQuery,
    queryRef
  );

  const renderRecipe = useCallback(
    () => (
      <ProfileRecipeList
        recipesRef={data.userById as ProfileRecipes_recipes$key}
        recipes={[]}
      />
    ),
    [data]
  );

  const renderRequest = useCallback(
    () => (
      <ProfileRequestList
        requestsRef={data.userById as ProfileRequestList_recipeRequests$key}
      />
    ),
    [data]
  );

  const renderBookmark = useCallback(
    () => (
      <ProfileBookmarkList
        bookmarsRef={data.userById as ProfileBookmarkList_bookmarks$key}
      />
    ),
    [data]
  );

  if (!data.userById) return null;

  const renderScene = SceneMap({
    RECIPE: renderRecipe,
    REQUEST: renderRequest,
    BOOKMARK: renderBookmark,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <UserInfo user={data.userById} />
        <ProfileStatsList data={stats} user={data.userById} />
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

const ProfileScreen: React.FC = () => {
  const [queryRef, loadQuery] =
    useQueryLoader<ProfileScreenQuery>(profileUserQuery);

  React.useEffect(() => {
    if (!queryRef) {
      // Todo, replace this user id with current auth user
      loadQuery(
        {
          currentUserId: "60eb045820db51e49ee54c3d",
        },
        { fetchPolicy: "network-only" }
      );
    }
  }, [queryRef, loadQuery]);

  if (!queryRef) return null;

  return (
    <React.Suspense fallback={<ScreenCenterSpinner />}>
      <ProfileContainer queryRef={queryRef} />
    </React.Suspense>
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
