import * as React from "react";
import { ListRenderItemInfo, RefreshControl } from "react-native";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "src/components/Icon";
import RecipeItem from "src/components/RecipeItem";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { RecipeItem_recipe$key } from "src/services/graphql/__generated__/RecipeItem_recipe.graphql";
import { moderateScale } from "src/utils/scale";

interface RecipeListProps {
  title: string;
  data: any[];
  isLoadingNext: boolean;
  refresh: () => void;
  loadMore: () => void;
}

const RecipeList: React.FC<RecipeListProps> = ({
  title,
  data,
  isLoadingNext,
  refresh,
  loadMore,
}) => {
  const { keyExtractor, footer } = React.useMemo(() => {
    const keyExtractor = (item: any, index: number) => {
      return `__recipeList${index}__${item.node._id}`;
    };

    const footer = () => <View style={{ height: 40 }} />;

    return {
      keyExtractor,
      footer,
    };
  }, []);

  const renderItem = React.useCallback(
    ({
      item: { node },
    }: ListRenderItemInfo<{ node: RecipeItem_recipe$key }>) => {
      return <RecipeItem recipeRef={node} />;
    },
    [data]
  );

  return (
    <>
      <View style={styles.listTitle}>
        <Typography variant="BodySemiBold">{title}</Typography>
        <Icon name="chevron-down" type="Entypo" style={styles.iconDown} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListFooterComponent={footer}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl onRefresh={refresh} refreshing={isLoadingNext} />
        }
      />
    </>
  );
};

export default React.memo(RecipeList);

const styles = StyleSheet.create({
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(20),
    paddingBottom: moderateScale(10),
  },
  iconDown: { color: COLORS.primaryRed, fontSize: moderateScale(20) },
});
