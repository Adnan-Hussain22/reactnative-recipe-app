import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import Typography from "src/components/Typography";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import FlexStyles from "src/components/FlexBox/FlexStyles";

interface RecipeItemProps {
  name: string;
  image: string;
  street: string;
  city: string;
  distance: string;
  priceRange: string;
  tags: string[];
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  name,
  image,
  street,
  city,
  distance,
  priceRange,
  tags,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={normalizeImageSrc(image)} style={styles.itemImage} />
      <View style={styles.itemContentWithoutBookmark}>
        <Typography
          variant="BodySemiBold"
          color={COLORS.listTitle}
          numberOfLines={2}
        >
          {name}
        </Typography>
        <Typography
          variant="P"
          color={COLORS.textGrey}
          marginTop={moderateScale(5)}
          numberOfLines={2}
        >
          {`${street}, ${city}`}
        </Typography>
        <View style={[FlexStyles.flexDirectionRow]}>
          <Typography
            variant="P"
            color={COLORS.textGrey}
            marginTop={moderateScale(5)}
            numberOfLines={2}
          >
            {`${distance}${distance ? " | " : ""}${priceRange}${
              priceRange ? " | " : ""
            }${tags.slice(0, 3).join(", ")}`}
          </Typography>
        </View>
      </View>
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
    height: widthPercentageToDP("27%"),
    width: widthPercentageToDP("25.5%"),
    borderRadius: widthPercentageToDP("2.5%"),
  },
  itemContentWithoutBookmark: {
    width: widthPercentageToDP("55.5%"),
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
