import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import StartRating from "src/components/StarRating";
import Typography from "src/components/Typography";
import { desiCusine } from "src/assets/images";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import Icon from "src/components/Icon";

interface RecipeItemProps {
  title: string;
  subTitle: string;
  rating: number;
  bookmark?: boolean;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ bookmark }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={normalizeImageSrc(desiCusine)} style={styles.itemImage} />
      <View
        style={
          bookmark
            ? styles.itemContentWithBookmark
            : styles.itemContentWithoutBookmark
        }
      >
        <Typography variant="BodySemiBold" color={COLORS.listTitle}>
          Chicken Panini
        </Typography>
        <Typography
          variant="P"
          color={COLORS.textGrey}
          marginTop={moderateScale(5)}
        >
          Awesome Club Style
        </Typography>
        <View style={styles.ratingContainer}>
          <StartRating rating={4} />
          <Typography
            fontSize={moderateScale(10)}
            marginLeft={moderateScale(5)}
          >
            5.0
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
