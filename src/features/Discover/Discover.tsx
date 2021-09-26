import * as React from "react";
import { useMemo } from "react";
import { SafeAreaView, View, SectionList, Text } from "react-native";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";

import { DiscoverListTitle } from "src/components/Discover";
import DiscoverListHorizontal from "src/components/Discover/DiscoverListHorizontal";
import { DiscoverListHorizontalItem_recipe$key } from "src/services/graphql/__generated__/DiscoverListHorizontalItem_recipe.graphql";
import { DiscoverScreenQuery } from "src/services/graphql/__generated__/DiscoverScreenQuery.graphql";
import { styles } from "./style";

const discoverScreenQuery = graphql`
  query DiscoverScreenQuery($tops: Boolean, $recent: Boolean) {
    recipes(top: $tops, recent: $recent) {
      top {
        ...DiscoverListHorizontalItem_recipe
      }
      recent {
        ...DiscoverListHorizontalItem_recipe
      }
      cusines {
        ...DiscoverListHorizontalItem_recipe
      }
    }
  }
`;

export type DiscoverSectionDataType =
  ReadonlyArray<DiscoverListHorizontalItem_recipe$key | null>;

type DiscoverSectionType = {
  index: number;
  title: string;
  horizontal: boolean;
  type: number;
  data: DiscoverSectionDataType;
};

const Discover: React.FC<{ discoverList: DiscoverSectionType[] }> = ({
  discoverList,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={discoverList}
        keyboardShouldPersistTaps="never"
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => `__discoverItem__${index}`}
        renderSectionHeader={({ section }) => {
          return (
            <>
              <DiscoverListTitle
                sectionIndex={section.index}
                title={section.title}
                onPress={() => {}}
              />
              {section.horizontal ? (
                <DiscoverListHorizontal
                  data={section.data}
                  type={section.type}
                />
              ) : null}
            </>
          );
        }}
        renderItem={() => {
          // if (section.horizontal) return null;
          return null;
        }}
        ListFooterComponent={() => <View style={{ height: 80 }} />}
      />
    </SafeAreaView>
  );
};

const DiscoverScreenContainer = ({
  queryRef,
}: {
  queryRef: PreloadedQuery<DiscoverScreenQuery>;
}) => {
  const data = usePreloadedQuery(discoverScreenQuery, queryRef);
  const discoverList = useMemo(() => {
    const discoverList = [
      {
        index: 0,
        title: "Top Picks",
        horizontal: true,
        type: 0,
        data: data.recipes?.top ?? [],
      },
      {
        index: 1,
        title: "Recently Created",
        horizontal: true,
        type: 0,
        data: data.recipes?.recent ?? [],
      },
      {
        index: 2,
        title: "By Cuisine",
        horizontal: true,
        type: 1,
        data: data.recipes?.cusines ?? [],
      },
    ];
    return discoverList;
  }, [data]);

  return <Discover discoverList={discoverList} />;
};
const DiscoverScreen = () => {
  const [queryRef, loadQuery] =
    useQueryLoader<DiscoverScreenQuery>(discoverScreenQuery);

  React.useEffect(() => {
    if (!queryRef) {
      loadQuery({}, { fetchPolicy: "network-only" });
    }
  }, [queryRef, loadQuery]);

  if (!queryRef) {
    return null;
  }

  return (
    <React.Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }
    >
      <DiscoverScreenContainer queryRef={queryRef} />
    </React.Suspense>
  );
};

export default DiscoverScreen;
