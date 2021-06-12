import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface RecipeRequestButtonProps {
  onPress: () => void;
}

const RecipeRequestButton: React.FC<RecipeRequestButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon type="SimpleLineIcons" name="plus" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default RecipeRequestButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: "100%",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.dotgrey,
  },
  icon: {
    color: COLORS.primaryRed,
    fontSize: moderateScale(30),
  },
});
