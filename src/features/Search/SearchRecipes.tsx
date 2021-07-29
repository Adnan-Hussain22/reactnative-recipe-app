import * as React from "react";
import { Text, View } from "react-native";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import RecipeList from "src/components/RecipeList";

const query = graphql`
  query RecipeListSearchRecipesQuery($queryString: String) {
    searchRecipes(queryString: $queryString) {
      count
      edges {
        node {
          ...RecipeFragment
        }
      }
    }
  }
`;

const SearchRecipesContainer: React.FC<{
  queryRef: PreloadedQuery<SearchRecipesQuery>;
}> = ({ queryRef }) => {
  const data = usePreloadedQuery(query, queryRef);

  return <RecipeList title="Top Rated" />;
};

export const SearchRecipes: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<SearchRecipesQuery>(query);

  React.useEffect(() => {
    if (!queryRef) {
      loadQuery({});
    }
  }, [queryRef, loadQuery]);

  if (!queryRef) {
    return null;
  }

  return (
    <React.Suspense
      fallback={
        <View>
          <Text>Loading..</Text>
        </View>
      }
    >
      <SearchRecipesContainer queryRef={queryRef} />
    </React.Suspense>
  );
};
