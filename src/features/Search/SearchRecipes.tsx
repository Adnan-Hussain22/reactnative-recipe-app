import * as React from "react";
import {
  graphql,
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { useRecoilValue } from "recoil";
import RecipeList from "src/components/RecipeList";
import ScreenCenterSpinner from "src/components/Spinner/ScreenCenterSpinner.react";
import { searchRecipesAtom } from "src/features/Search/Search";
import { usePrevious } from "src/hooks/usePrevious";
import { SearchRecipesListQuery } from "src/services/graphql/__generated__/SearchRecipesListQuery.graphql";
import { SearchRecipesQuery } from "src/services/graphql/__generated__/SearchRecipesQuery.graphql";
import { SearchRecipes_recipe$key } from "src/services/graphql/__generated__/SearchRecipes_recipe.graphql";

const paginationQuery = graphql`
  fragment SearchRecipes_recipe on Query
  @refetchable(queryName: "SearchRecipesListQuery")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
    queryString: { type: "String" }
  ) {
    searchRecipes(first: $count, after: $cursor, queryString: $queryString)
      @connection(key: "SearchRecipesListQuery_searchRecipes") {
      edges {
        node {
          id
          name
          description
          image
          totalRating
        }
      }
    }
  }
`;

const query = graphql`
  query SearchRecipesQuery($queryString: String) {
    ...SearchRecipes_recipe @arguments(queryString: $queryString)
  }
`;

const RecipesListContainer: React.FC<{ queryRef: SearchRecipes_recipe$key }> =
  ({ queryRef }) => {
    const { data, refetch } = usePaginationFragment<
      SearchRecipesListQuery,
      SearchRecipes_recipe$key
    >(paginationQuery, queryRef);
    const searchQuery = useRecoilValue(searchRecipesAtom);
    const { val: previousQuery, setVal: setPreviousQuery } = usePrevious({
      type: "Recipe",
      query: "",
    });

    const recipes = React.useMemo(
      () => data?.searchRecipes?.edges ?? [],
      [data]
    );

    React.useEffect(() => {
      if (
        searchQuery.query !== previousQuery.query ||
        searchQuery.type !== previousQuery.type
      ) {
        setPreviousQuery(searchQuery);
        refetch({ queryString: searchQuery.query });
      }
    }, [searchQuery]);

    return (
      <React.Suspense fallback={<ScreenCenterSpinner />}>
        <RecipeList title="Top Rated" data={recipes} />
      </React.Suspense>
    );
  };

export const SearchRecipesContainer: React.FC<{
  queryRef: PreloadedQuery<SearchRecipesQuery>;
}> = ({ queryRef }) => {
  const data = usePreloadedQuery(query, queryRef);

  return <RecipesListContainer queryRef={data} />;
};

export const SearchRecipes: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<SearchRecipesQuery>(query);

  React.useEffect(() => {
    if (!queryRef) {
      return loadQuery({ queryString: "" }, { fetchPolicy: "network-only" });
    }
  }, [loadQuery, queryRef]);

  if (!queryRef) {
    return null;
  }
  return (
    <React.Suspense fallback={<ScreenCenterSpinner />}>
      <SearchRecipesContainer queryRef={queryRef} />
    </React.Suspense>
  );
};
