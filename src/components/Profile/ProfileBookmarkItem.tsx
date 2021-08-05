import * as React from "react";
import { graphql, useFragment } from "react-relay";
import RecipeItem from "src/components/RecipeItem";
import { ProfileBookmarkItem_recipe$key } from "src/services/graphql/__generated__/ProfileBookmarkItem_recipe.graphql";
import { RecipeItem_recipe$key } from "src/services/graphql/__generated__/RecipeItem_recipe.graphql";

interface ProfileBookmarkItemProps {
  bookmarkRef: ProfileBookmarkItem_recipe$key;
}

const bookmarFragment = graphql`
  fragment ProfileBookmarkItem_recipe on Bookmark {
    recipe {
      ...RecipeItem_recipe
    }
  }
`;

export const ProfileBookmarkItem: React.FC<ProfileBookmarkItemProps> = ({
  bookmarkRef,
}) => {
  const data = useFragment(bookmarFragment, bookmarkRef);

  return <RecipeItem recipeRef={data.recipe as RecipeItem_recipe$key} />;
};
