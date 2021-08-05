import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { graphql, useFragment } from "react-relay";

import StartRating from "src/components/StarRating";
import Typography from "src/components/Typography";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import Icon from "src/components/Icon";
import { RecipeItem_recipe$key } from "src/services/graphql/__generated__/RecipeItem_recipe.graphql";

interface RecipeItemProps {
  bookmark?: boolean;
  recipeRef: RecipeItem_recipe$key;
}

const recipeFragment = graphql`
  fragment RecipeItem_recipe on Recipe {
    _id
    name
    description
    image
    totalRating
  }
`;

const RecipeItem: React.FC<RecipeItemProps> = ({ bookmark, recipeRef }) => {
  const data = useFragment(recipeFragment, recipeRef);

  return (
    <View style={styles.itemContainer}>
      <Image source={normalizeImageSrc(data?.image)} style={styles.itemImage} />
      <View
        style={
          bookmark
            ? styles.itemContentWithBookmark
            : styles.itemContentWithoutBookmark
        }
      >
        <Typography
          variant="BodySemiBold"
          color={COLORS.listTitle}
          numberOfLines={2}
        >
          {data?.name}
        </Typography>
        <Typography
          variant="P"
          color={COLORS.textGrey}
          marginTop={moderateScale(5)}
          numberOfLines={2}
        >
          {data?.description}
        </Typography>
        <View style={styles.ratingContainer}>
          <StartRating rating={data?.totalRating} />
          <Typography
            fontSize={moderateScale(10)}
            marginLeft={moderateScale(5)}
          >
            {data?.totalRating}
          </Typography>
        </View>
      </View>
      {bookmark ? (
        <View style={styles.bookmark}>
          <Icon name="bookmark" type="Foundation" style={styles.bookmarkIcon} />
        </View>
      ) : null}
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: moderateScale(20),
    backgroundColor: COLORS.primaryGrey,
    padding: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: widthPercentageToDP("2.5%"),
  },
  itemImage: {
    height: widthPercentageToDP("20%"),
    width: widthPercentageToDP("25%"),
    borderRadius: widthPercentageToDP("2.5%"),
  },
  itemContentWithoutBookmark: {
    width: widthPercentageToDP("58%"),
  },
  itemContentWithBookmark: {
    width: widthPercentageToDP("45%"),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(5),
  },
  bookmark: {
    width: widthPercentageToDP("10%"),
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  bookmarkIcon: { fontSize: moderateScale(25), color: COLORS.primaryRed },
});
