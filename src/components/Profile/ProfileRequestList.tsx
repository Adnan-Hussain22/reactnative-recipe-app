import * as React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { graphql, usePaginationFragment } from "react-relay";
import { ProfileRequestItem_recipeRequest$key } from "src/services/graphql/__generated__/ProfileRequestItem_recipeRequest.graphql";
import { ProfileRequestListQuery } from "src/services/graphql/__generated__/ProfileRequestListQuery.graphql";
import { ProfileRequestList_recipeRequests$key } from "src/services/graphql/__generated__/ProfileRequestList_recipeRequests.graphql";
import ProfileRequestItem from "./ProfileRequestItem";
import RecipeRequestModal from "./RecipeRequestModal";

interface ProfileRequestListProps {
  requestsRef: ProfileRequestList_recipeRequests$key;
}

const requestsFragment = graphql`
  fragment ProfileRequestList_recipeRequests on User
  @refetchable(queryName: "ProfileRequestListQuery")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  ) {
    recipeRequests(first: $count, after: $cursor)
      @connection(key: "ProfileRequestListPagination_recipeRequests") {
      edges {
        node {
          _id
          ...ProfileRequestItem_recipeRequest
        }
      }
    }
  }
`;

const ProfileRequestList: React.FC<ProfileRequestListProps> = ({
  requestsRef,
}) => {
  const { data } = usePaginationFragment<
    ProfileRequestListQuery,
    ProfileRequestList_recipeRequests$key
  >(requestsFragment, requestsRef);

  const requests = React.useMemo(
    () => data.recipeRequests?.edges ?? [],
    [data]
  );

  const renderItem = React.useCallback(
    ({ item: { node } }: ListRenderItemInfo<{ node: any }>) => (
      <ProfileRequestItem
        name="Grace bee"
        username="gracebee"
        avatar="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        description="something very very special that i cannot describe :P"
        likes={56}
        requestRef={node as ProfileRequestItem_recipeRequest$key}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={requests}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={RecipeRequestModal}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProfileRequestList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainerStyle: { paddingHorizontal: 10 },
});
