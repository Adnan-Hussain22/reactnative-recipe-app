import * as React from "react";
import { useMemo } from "react";
import { ListRenderItemInfo } from "react-native";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "src/components/Icon";
import RestaurantListItem from "src/components/RestaurantListItem";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { SearchRestaurants_restaurant$data } from "src/services/graphql/__generated__/SearchRestaurants_restaurant.graphql";
import { moderateScale } from "src/utils/scale";

interface RestaurantListProps {
  title: string;
  data: SearchRestaurants_restaurant$data;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ title, data }) => {
  const { keyExtractor, footer } = React.useMemo(() => {
    const keyExtractor = (item: any, index: number) => {
      return `__recipeList${index}__${item.node?.id}`;
    };

    const footer = () => <View style={{ height: 40 }} />;

    return {
      keyExtractor,
      footer,
    };
  }, []);

  const renderItem = React.useCallback(
    ({ item: { node } }: ListRenderItemInfo<{ node?: any }>) => {
      return (
        <RestaurantListItem
          name={node.name}
          image={node.image}
          street={node.street}
          city={node.city}
          distance=""
          priceRange={node.priceRange}
          tags={node.tags}
        />
      );
    },
    [data]
  );

  const restaurants = useMemo(() => data.searchRestraunts?.edges ?? [], [data]);

  return (
    <>
      <View style={styles.listTitle}>
        <Typography variant="BodySemiBold">{title}</Typography>
        <Icon name="chevron-down" type="Entypo" style={styles.iconDown} />
      </View>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListFooterComponent={footer}
      />
    </>
  );
};

export default React.memo(RestaurantList);

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
