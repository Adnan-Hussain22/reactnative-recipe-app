import * as React from "react";
import { FlatList } from "react-native";
import {
  DiscoverListHorizontalItem,
  DiscoverListTitle,
} from "src/components/Discover";
import { DiscoverSectionDataType } from "src/features/Discover/Discover";
import { DiscoverListHorizontalItem_recipe$key } from "src/services/graphql/__generated__/DiscoverListHorizontalItem_recipe.graphql";

interface DiscoverListHorizontalProps {
  data: DiscoverSectionDataType;
  type: number;
  title?: string;
  index?: number;
  onPress?: () => void;
}

const DiscoverListHorizontal: React.FC<DiscoverListHorizontalProps> = ({
  data,
  type,
  title,
  index,
  onPress,
}) => {
  return (
    <>
      {title ? (
        <DiscoverListTitle
          sectionIndex={index}
          title={title}
          onPress={onPress}
        />
      ) : null}
      <FlatList
        data={data}
        keyExtractor={(_, listIndex) => `recipesList_${index}_${listIndex}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <DiscoverListHorizontalItem
            recipe={item as DiscoverListHorizontalItem_recipe$key}
            type={type}
            isLast={index === data.length - 1}
          />
        )}
      />
    </>
  );
};

export default DiscoverListHorizontal;
