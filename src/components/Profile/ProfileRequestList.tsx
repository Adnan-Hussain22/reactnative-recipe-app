import * as React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import {
  graphql,
  useFragment,
  useMutation,
  usePaginationFragment,
} from "react-relay";
import {
  RecipeRequestStaticCard,
  RecipeRequestModal,
  userInfoFragment,
  RecipeRequestForm,
} from "src/components/Profile";
import { Spinner } from "src/components/Spinner";
import { useMediaUpload, useTogglState } from "src/hooks";
import { ProfileRequestItem_recipeRequest$key } from "src/services/graphql/__generated__/ProfileRequestItem_recipeRequest.graphql";
import { ProfileRequestListMutation } from "src/services/graphql/__generated__/ProfileRequestListMutation.graphql";
import { ProfileRequestListQuery } from "src/services/graphql/__generated__/ProfileRequestListQuery.graphql";
import { ProfileRequestList_recipeRequests$key } from "src/services/graphql/__generated__/ProfileRequestList_recipeRequests.graphql";
import { UserInfo_user$key } from "src/services/graphql/__generated__/UserInfo_user.graphql";
import ProfileRequestItem from "./ProfileRequestItem";

interface ProfileRequestListProps {
  userRef: ProfileRequestList_recipeRequests$key | UserInfo_user$key;
}

const mutation = graphql`
  mutation ProfileRequestListMutation(
    $requestRecipeInput: RequestRecipeInput!
  ) {
    requestRecipe(input: $requestRecipeInput) {
      _id
    }
  }
`;

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

const ProfileRequestList: React.FC<ProfileRequestListProps> = ({ userRef }) => {
  const { data } = usePaginationFragment<
    ProfileRequestListQuery,
    ProfileRequestList_recipeRequests$key
  >(requestsFragment, userRef as ProfileRequestList_recipeRequests$key);
  const userData = useFragment(userInfoFragment, userRef as UserInfo_user$key);
  const [commit, isCommitInFlight] =
    useMutation<ProfileRequestListMutation>(mutation);
  const { onUploadMedia, uploadMediaInFlight } = useMediaUpload();
  const [visible, toggleVisisble] = useTogglState();

  const requests = React.useMemo(
    () => data.recipeRequests?.edges ?? [],
    [data]
  );

  const renderItem = React.useCallback(
    ({
      item: { node },
    }: ListRenderItemInfo<{ node: ProfileRequestItem_recipeRequest$key }>) => (
      <ProfileRequestItem requestRef={node} />
    ),
    []
  );

  const renderHeader = React.useCallback(() => {
    return (
      <RecipeRequestStaticCard
        name={userData.name ?? ""}
        avatar={userData.avatar ?? ""}
        onPress={toggleVisisble}
      />
    );
  }, [userData]);

  const handleSubmitRequest = React.useCallback(
    async (form: RecipeRequestForm) => {
      toggleVisisble();
      const image = form.image ? await onUploadMedia(form.image) : undefined;
      commit({
        variables: {
          requestRecipeInput: {
            description: form.value,
            image,
          },
        },
      });
    },
    [onUploadMedia, commit]
  );

  return (
    <View style={styles.container}>
      <Spinner
        visible={!visible && (isCommitInFlight || uploadMediaInFlight)}
      />
      <RecipeRequestModal
        name={userData.name ?? ""}
        avatar={userData.avatar ?? ""}
        autoFocusInput
        visible={visible}
        onClose={toggleVisisble}
        onSubmit={handleSubmitRequest}
      />
      <FlatList
        data={requests}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader}
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
