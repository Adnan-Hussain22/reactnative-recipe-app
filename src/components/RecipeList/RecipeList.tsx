import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "src/components/Icon";
import RecipeItem from "src/components/RecipeItem";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface RecipeListProps {
  title: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ title }) => {
  return (
    <>
      <View style={styles.listTitle}>
        <Typography variant="BodySemiBold">{title}</Typography>
        <Icon name="chevron-down" type="Entypo" style={styles.iconDown} />
      </View>
      <FlatList
        data={new Array(5).fill(0)}
        renderItem={() => <RecipeItem />}
        keyExtractor={(_, index) => `__recipeList${index}__`}
      />
    </>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(20),
  },
  iconDown: { color: COLORS.primaryRed, fontSize: moderateScale(20) },
});
