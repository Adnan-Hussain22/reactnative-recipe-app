import * as React from "react";
import { graphql, useFragment } from "react-relay";

import { ProfileRequestBox } from "./ProfileRequestBox";
import { ProfileRequestItem_recipeRequest$key } from "src/services/graphql/__generated__/ProfileRequestItem_recipeRequest.graphql";

interface ProfileRequestItemProps {
  requestRef: ProfileRequestItem_recipeRequest$key;
}

const recipeRequestFragment = graphql`
  fragment ProfileRequestItem_recipeRequest on RecipeRequest {
    image
    description
    likes
    user {
      name
      username
      avatar
    }
  }
`;

const ProfileRequestItem: React.FC<ProfileRequestItemProps> = ({
  requestRef,
}) => {
  const data = useFragment(recipeRequestFragment, requestRef);

  const { avatar, description, likes, username } = React.useMemo(() => {
    return {
      ...data,
      avatar: data.user?.avatar ?? "",
      username: data.user?.username ?? "",
    };
  }, [data]);

  return (
    <ProfileRequestBox
      {...{ avatar, username, likes: likes?.length ?? 0, description }}
    />
  );
};

export default ProfileRequestItem;
