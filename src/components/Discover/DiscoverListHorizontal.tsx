import * as React from "react";
import { FlatList } from "react-native";
import {
  DiscoverListHorizontalItem,
  DiscoverListTitle,
} from "src/components/Discover";

interface DiscoverListHorizontalProps {
  data: any[];
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
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <DiscoverListHorizontalItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            type={type}
            isLast={index === data.length - 1}
          />
        )}
      />
    </>
  );
};

export default DiscoverListHorizontal;
