import * as React from "react";
import { useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  ListRenderItemInfo,
} from "react-native";
import {
  graphql,
  PreloadedQuery,
  useFragment,
  useMutation,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  CommunityUserItem,
  RecipeRequestItem,
  RecipeRequestButton,
} from "src/components/Community";
// import DiscoverListHorizontal from "src/components/Discover/DiscoverListHorizontal";
import { DiscoverListTitle } from "src/components/Discover/DiscoverListTitle";
import { RecipeRequestModal } from "src/components/Profile/RecipeRequestModal";
import { RecipeRequestForm } from "src/components/Profile/RecipeRequestModalCard";
import Spacer from "src/components/Spacer";
import { Spinner } from "src/components/Spinner";
import { COLORS } from "src/constants/colors";
import { APP_NAME } from "src/constants/common";
import { useMediaUpload } from "src/hooks";
import { useTogglState } from "src/hooks/useToggleState";
import { CommunityScreenMutation } from "src/services/graphql/__generated__/CommunityScreenMutation.graphql";
import { CommunityScreenQuery } from "src/services/graphql/__generated__/CommunityScreenQuery.graphql";
import { CommunityScreen_reciperequests$key } from "src/services/graphql/__generated__/CommunityScreen_reciperequests.graphql";
import { RecipeRequestItem_reciperequest$key } from "src/services/graphql/__generated__/RecipeRequestItem_reciperequest.graphql";
// import { DISCOVER_DATA } from "src/features/Discover/data";

const mutation = graphql`
  mutation CommunityScreenMutation($requestRecipeInput: RequestRecipeInput!) {
    requestRecipe(input: $requestRecipeInput) {
      _id
    }
  }
`;

const requestsFragment = graphql`
  fragment CommunityScreen_reciperequests on RecipeRequestRecipeRequests {
    edges {
      node {
        ...RecipeRequestItem_reciperequest
      }
    }
  }
`;

const Screen: React.FC<{
  user: { name: string; avatar: string };
  requestsRef: CommunityScreen_reciperequests$key;
}> = ({ user: { avatar, name }, requestsRef }) => {
  const [commit, isCommitInFlight] =
    useMutation<CommunityScreenMutation>(mutation);
  const recipeRequestsRes = useFragment(requestsFragment, requestsRef);
  const [showRequestModal, toggleRequestModal] = useTogglState();
  const { onUploadMedia, uploadMediaInFlight } = useMediaUpload();

  const recipeRequests = React.useMemo(
    () => recipeRequestsRes.edges,
    [recipeRequestsRes]
  );

  const renderUsers = useCallback(() => <CommunityUserItem />, []);

  const renderRecipeHeader = useCallback(
    () => <RecipeRequestButton onPress={toggleRequestModal} />,
    [toggleRequestModal]
  );

  const renderRecipe = useCallback(
    ({
      item,
    }: ListRenderItemInfo<{ node: RecipeRequestItem_reciperequest$key }>) => (
      <RecipeRequestItem recipeRequestRef={item.node} />
    ),
    []
  );

  const handleSubmitRequest = useCallback(
    async (form: RecipeRequestForm) => {
      toggleRequestModal();
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
    <SafeAreaView style={styles.container}>
      <RecipeRequestModal
        visible={showRequestModal}
        avatar={avatar}
        name={name}
        onClose={toggleRequestModal}
        onSubmit={handleSubmitRequest}
      />
      <Spinner
        visible={!showRequestModal && (isCommitInFlight || uploadMediaInFlight)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverListTitle title={`Top ${APP_NAME}s`} onPress={() => {}} />
        <FlatList
          data={new Array(7).fill(0)}
          horizontal
          renderItem={renderUsers}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `__${index}__`}
        />
        <Spacer size={15} scale />
        {/* <DiscoverListHorizontal
          data={DISCOVER_DATA[0].data}
          title="Trending Recipes"
          onPress={() => {}}
          type={0}
        /> */}
        <DiscoverListTitle title="Recipe Requests" onPress={() => {}} />
        <FlatList
          data={recipeRequests}
          horizontal
          contentContainerStyle={styles.recipeListContainer}
          renderItem={renderRecipe}
          ListHeaderComponent={renderRecipeHeader}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `__${index}__`}
        />
        <Spacer size={40} scale />
      </ScrollView>
    </SafeAreaView>
  );
};

const query = graphql`
  query CommunityScreenQuery($currentUserId: MongoID!) {
    userById(_id: $currentUserId) {
      avatar
      name
    }
    listRecipeRequests(first: 15) {
      ...CommunityScreen_reciperequests
    }
  }
`;

const CommunityLoader = ({
  queryRef,
}: {
  queryRef: PreloadedQuery<CommunityScreenQuery>;
}) => {
  const data = usePreloadedQuery(query, queryRef);
  return (
    <Screen
      user={data.userById as any}
      requestsRef={
        data.listRecipeRequests as CommunityScreen_reciperequests$key
      }
    />
  );
};

const CommunityScreen = () => {
  const [queryRef, loadQuery] = useQueryLoader<CommunityScreenQuery>(query);

  React.useEffect(() => {
    if (!queryRef) {
      // Todo, replace this user id with current auth user
      loadQuery({ currentUserId: "60eb045820db51e49ee54c3d" });
    }
  }, [queryRef]);

  if (!queryRef) {
    return <Spinner visible />;
  }

  return (
    <React.Suspense fallback={<Spinner visible />}>
      <CommunityLoader queryRef={queryRef} />
    </React.Suspense>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  recipeListContainer: { height: 280, marginTop: 10 },
});
