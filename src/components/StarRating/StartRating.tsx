import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <View style={styles.container}>
      {new Array(5).fill(0).map((_, index) => (
        <Icon
          key={`__start${index}rating__`}
          type="FontAwesome"
          name={`star${rating < index + 1 ? "-o" : ""}`}
          style={styles.starIcon}
        />
      ))}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  starIcon: {
    fontSize: moderateScale(10),
    marginRight: moderateScale(3),
    color: COLORS.primaryYellow,
  },
});
