import * as React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { graphql, useFragment } from "react-relay";

import { ProfileRequestBox } from "src/components/Profile/ProfileRequestBox";
import RecipeRequestModal from "src/components/Profile/RecipeRequestModal";
import { RecipeTips_tips$key } from "src/services/graphql/__generated__/RecipeTips_tips.graphql";

interface RecipeTipsProps {
  recipeRef: RecipeTips_tips$key;
}

type RecipeTip = {
  text: string;
  image: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
};

const fragment = graphql`
  fragment RecipeTips_tips on Recipe {
    tips {
      _id
      text
      image
      user {
        name
        username
        avatar
      }
    }
  }
`;

export const RecipeTips: React.FC<RecipeTipsProps> = ({ recipeRef }) => {
  const data = useFragment(fragment, recipeRef);

  const renderItem = React.useCallback(
    ({ item }: ListRenderItemInfo<RecipeTip>) => {
      return (
        <ProfileRequestBox
          {...{
            avatar: item.user?.avatar ?? "",
            description: item.text,
            likes: 0,
            username: item.user?.username ?? "",
          }}
        />
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.tips}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={RecipeRequestModal}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainerStyle: { paddingHorizontal: 10 },
});
