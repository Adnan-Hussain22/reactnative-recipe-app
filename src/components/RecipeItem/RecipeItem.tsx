import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import StartRating from "src/components/StarRating";
import Typography from "src/components/Typography";
import { desiCusine } from "src/assets/images";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";

interface RecipeItemProps {
  title: string;
  subTitle: string;
  rating: number;
}

const RecipeItem: React.FC<RecipeItemProps> = () => {
  return (
    <View style={styles.itemContainer}>
      <Image source={normalizeImageSrc(desiCusine)} style={styles.itemImage} />
      <View style={styles.itemContent}>
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
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(5),
  },
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
  itemContent: {
    width: widthPercentageToDP("56%"),
  },
});
