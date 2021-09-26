import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CUSTOM_FONTS } from "src/constants/fonts";

interface RecipeInfoProps {
  cookingTime: number;
  calories: number;
  serving: number;
}
interface BoxProps {
  title: string;
  value: string;
}

const Box: React.FC<BoxProps> = ({ title, value }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{value}</Text>
    </View>
  );
};

const RecipeInfoBox: React.FC<RecipeInfoProps> = ({
  calories,
  serving,
  cookingTime,
}) => {
  return (
    <React.Fragment>
      <Box
        title="Cook Time"
        value={cookingTime ? `${cookingTime} Mins` : "N/A"}
      />
      <Box title="Servings" value={serving ? `${serving}` : "N/A"} />
      <Box title="Calories" value={calories ? `${calories}` : "N/A"} />
    </React.Fragment>
  );
};

export default RecipeInfoBox;

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 110,
    borderRadius: 10,
    backgroundColor: "#E8E8E84a",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  text1: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: 14,
    color: "#000000AA",
    paddingLeft: 5,
  },
  text2: {
    fontFamily: CUSTOM_FONTS.PROXIMA_BOLD,
    fontSize: 18,
    color: "#000000",
    paddingLeft: 5,
  },
});
