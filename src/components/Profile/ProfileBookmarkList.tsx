import * as React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { graphql, usePaginationFragment } from "react-relay";
import { ProfileBookmarkItem } from "src/components/Profile/ProfileBookmarkItem";
import { ProfileBookmarkItem_recipe$key } from "src/services/graphql/__generated__/ProfileBookmarkItem_recipe.graphql";
import { ProfileBookmarkListQuery } from "src/services/graphql/__generated__/ProfileBookmarkListQuery.graphql";
import { ProfileBookmarkList_bookmarks$key } from "src/services/graphql/__generated__/ProfileBookmarkList_bookmarks.graphql";

interface ProfileBookmarkListProps {
  bookmarsRef: ProfileBookmarkList_bookmarks$key;
}

const bookmarsFragment = graphql`
  fragment ProfileBookmarkList_bookmarks on User
  @refetchable(queryName: "ProfileBookmarkListQuery")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  ) {
    bookmarks(first: $count, after: $cursor)
      @connection(key: "ProfileBookmarkListPagination_bookmarks") {
      edges {
        node {
          _id
          ...ProfileBookmarkItem_recipe
        }
      }
    }
  }
`;

const ProfileBookmarkList: React.FC<ProfileBookmarkListProps> = ({
  bookmarsRef,
}) => {
  const { data } = usePaginationFragment<
    ProfileBookmarkListQuery,
    ProfileBookmarkList_bookmarks$key
  >(bookmarsFragment, bookmarsRef);

  const bookmarks = React.useMemo(() => data.bookmarks?.edges ?? [], [data]);

  const renderItem = React.useCallback(
    ({ item: { node } }: ListRenderItemInfo<{ node: any }>) => (
      <ProfileBookmarkItem
        bookmarkRef={node as ProfileBookmarkItem_recipe$key}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `__Bookmark${index}__${item.node._id}`}
      />
    </View>
  );
};

export default ProfileBookmarkList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
