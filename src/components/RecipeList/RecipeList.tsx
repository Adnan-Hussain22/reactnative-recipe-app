import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "src/components/Icon";
import RecipeItem from "src/components/RecipeItem";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface RecipeListProps {
  title: string;
  data: any[];
}

const RecipeList: React.FC<RecipeListProps> = ({ title, data }) => {
  const { keyExtractor, footer } = React.useMemo(() => {
    const keyExtractor = (item: any, index: number) => {
      return `__recipeList${index}__${item.node.id}`;
    };

    const footer = () => <View style={{ height: 40 }} />;

    return {
      keyExtractor,
      footer,
    };
  }, []);

  const renderItem = React.useCallback(
    ({ item: { node } }: ListRenderItemInfo<{ node: any }>) => {
      return (
        <RecipeItem
          title={node.name}
          subTitle={node.description}
          image={node.image}
          rating={node.totalRating}
        />
      );
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
