import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { graphql, useQueryLoader } from "react-relay";
import Icon from "src/components/Icon";
import RecipeItem from "src/components/RecipeItem";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

const recipesQuery = 

const restaurantquery = graphql`
  query RecipeListSearchRestaurantQuery($queryString: String) {
    searchRestraunts(queryString: $queryString) {
      count
      edges {
        node {
          _id
          name
          tags
        }
      }
    }
  }
`;

interface RecipeListProps {
  title: string;
}

const List = ({ title, type }) => {
  const { keyExtractor, footer } = React.useMemo(() => {
    const keyExtractor = (_: any, index: number) => `__recipeList${index}__`;

    const footer = () => <View style={{ height: 40 }} />;

    return {
      keyExtractor,
      footer,
    };
  }, []);

  const renderItem = React.useCallback(() => <RecipeItem />, []);

  return (
    <>
      <View style={styles.listTitle}>
        <Typography variant="BodySemiBold">{title}</Typography>
        <Icon name="chevron-down" type="Entypo" style={styles.iconDown} />
      </View>
      <FlatList
        data={new Array(5).fill(0)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListFooterComponent={footer}
      />
    </>
  );
};

const RecipeListContainer = () => {};

const RecipeList: React.FC<RecipeListProps> = ({ title, type }) => {
  

  const [restaurantQueryRef, loadRestaurantQuery] =
    useQueryLoader<RecipeListSearchRestaurantQuery>(restaurantQuery);

  React.useEffect(() => {
    if (!queryRef) {
      loadQuery({ queryString: "" });
    }
  }, [queryRef, loadQuery]);

  if (!queryRef) return null;

  return (
    <React.Suspense
      fallback={
        <View>
          <Text>Loading..</Text>
        </View>
      }
    >
      <RecipeListContainer queryRef={queryRef} />
    </React.Suspense>
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
