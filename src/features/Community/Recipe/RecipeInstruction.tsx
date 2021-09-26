import * as React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { COLORS } from "src/constants/colors";
import { CUSTOM_FONTS } from "src/constants/fonts";
// import { IInstruction } from "src/typings/recipe";
import { moderateScale } from "src/utils/scale";

interface RecipeInstructionProps {
  instructions: string[];
}

const RecipeInstruction: React.FC<RecipeInstructionProps> = ({
  instructions,
}) => {
  return (
    <View>
      <FlatList
        data={instructions}
        keyExtractor={(_, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Text style={styles.id}>{index + 1}</Text>
            <Text style={styles.instruction}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecipeInstruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 10,
    backgroundColor: COLORS.primaryGrey,
  },
  id: {
    flex: 0.1,
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
    color: COLORS.primaryRed,
    paddingLeft: 15,
  },
  instruction: {
    flex: 0.8,
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
    color: COLORS.statsGreyPrimary,
    paddingLeft: 5,
    paddingBottom: 5,
  },
});
