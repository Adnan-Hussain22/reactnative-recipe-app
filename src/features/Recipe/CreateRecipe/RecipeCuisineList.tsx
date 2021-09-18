import * as React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, ScrollView } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { formStyles } from "src/constants/globalStyles";
import { CUISINES } from "src/constants/recipe";
import { moderateScale } from "src/utils/scale";

interface RecipeCuisineListProps {
  cuisine: string;
  onChange: (selected: string) => void;
}

const RecipeCuisineList: React.FC<RecipeCuisineListProps> = ({
  cuisine,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Typography variant="P" color={COLORS.statsGreySecondary}>
        Select Cuisine
      </Typography>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CUISINES.map((val, index) => (
          <TouchableOpacity
            style={[
              styles.tagContainer,
              val === cuisine ? styles.tagActive : null,
            ]}
            key={`_cuisine_${index}_`}
            onPress={() => onChange(val)}
          >
            <Typography variant="P" textAlign="center" color={COLORS.textGrey}>
              {val}
            </Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecipeCuisineList;

const LEFT_SPACING = moderateScale(15);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: LEFT_SPACING,
  },
  tagContainer: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    ...formStyles.inputContainer,
    marginTop: moderateScale(8),
    marginRight: moderateScale(8),
    minWidth: moderateScale(80),
  },
  tagActive: {
    borderColor: COLORS.googleOrange,
    borderWidth: 1.7,
  },
});
