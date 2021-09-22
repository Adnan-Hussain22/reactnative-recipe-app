import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "src/constants/colors";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { moderateScale } from "src/utils/scale";
import { IIngredient, ISteps } from "src/typings/recipe";

interface RecipeIngredientItemsProps {
  ingredient: IIngredient;
}

// const fragment = graphql`
//   fragment RecipeIngredientItems_ingredients on RecipeIngredients {

//   }
// `;

const RecipeIngredientItems: React.FC<RecipeIngredientItemsProps> = ({
  ingredient: { title, steps },
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      {steps.map((item: ISteps, index: number) => {
        const { name, quantity, substitutes } = item;
        const isSubtitutes = Boolean(substitutes?.length);
        return (
          <React.Fragment key={`RecipeIngredientItems${index}`}>
            <View style={styles.stepContainer}>
              <TouchableOpacity style={styles.checkbox} />
              <Text
                style={[
                  styles.desc,
                  {
                    color: isSubtitutes ? COLORS.primaryRed : COLORS.textGrey,
                    fontFamily: isSubtitutes
                      ? CUSTOM_FONTS.PROXIMA_BOLD
                      : CUSTOM_FONTS.PROXIMA_REGULAR,
                  },
                ]}
              >{`${name}${isSubtitutes ? "*" : ""}`}</Text>
              <View style={styles.quantityParent}>
                <Text style={styles.quantity}>{quantity}</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default RecipeIngredientItems;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: COLORS.primaryGrey,
    padding: 20,
    marginVertical: moderateScale(10),
    borderRadius: 10,
  },
  title: {
    flex: 0.8,
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(16),
    color: COLORS.statsGreyPrimary,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  separator: {
    width: "100%",
    marginHorizontal: moderateScale(2),
    borderBottomColor: COLORS.inputBorder,
    borderBottomWidth: 1,
  },
  stepContainer: {
    flexDirection: "row",
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(10),
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    marginTop: moderateScale(1),
  },
  desc: { flex: 0.7, fontSize: moderateScale(15), paddingLeft: 15 },
  quantityParent: {
    flex: 0.3,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  quantity: {
    fontFamily: CUSTOM_FONTS.PROXIMA_REGULAR,
    fontSize: moderateScale(15),
    color: "#000",
    paddingLeft: 15,
  },
});
