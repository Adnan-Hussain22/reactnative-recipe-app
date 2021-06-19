import * as React from "react";
import { View, StyleSheet } from "react-native";
import Button from "src/components/Button";
import { NoRecipeIcon } from "src/components/Svgs/NoRecipeIcon";
import { SvgWrapper } from "src/components/Svgs/SvgWrapper";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { iconStyles, typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";

interface NoRecipesProps {
  onPress: () => void;
}

const NoRecipes: React.FC<NoRecipesProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <SvgWrapper size={moderateScale(160)}>
        <NoRecipeIcon />
      </SvgWrapper>
      <Typography
        variant="BodySemiBold"
        color={COLORS.statsGreyPrimary}
        marginTop={moderateScale(20)}
        fontSize={moderateScale(21)}
      >
        No recipes yet
      </Typography>
      <Button
        icon={{
          type: "MaterialIcons",
          name: "keyboard-arrow-right",
          style: { ...iconStyles.iosChevron, fontSize: moderateScale(30) },
        }}
        iconRight
        onPress={onPress}
        width={moderateScale(250)}
        text="CREATE RECIPE"
        background={COLORS.primaryRed}
        textStyle={styles.createTxt}
        style={styles.createBtn}
      />
    </View>
  );
};

export default NoRecipes;

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: moderateScale(40) },
  createBtn: {
    marginTop: moderateScale(40),
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(40),
  },
  createTxt: {
    color: COLORS.white,
    letterSpacing: moderateScale(2),
    ...typographyStyles.BodySemiBold,
    fontSize: moderateScale(19),
  },
});
