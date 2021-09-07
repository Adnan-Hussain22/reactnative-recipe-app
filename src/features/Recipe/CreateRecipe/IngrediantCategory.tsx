import * as React from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import { TouchableIcon } from "src/components/Icon";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { moderateScale } from "src/utils/scale";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { styles as commonStyles } from "./styles";
import TextWithEditButton from "./TextWithEditButton";

type IngrediantCategoryProps = {
  category: string;
  toggle?: boolean;
  error?: string;
  setToggle: () => void;
  onAdd: () => void;
  onDelete: () => void;
  onChangeCategory: (text: string) => void;
};

const IngrediantCategory: React.FC<IngrediantCategoryProps> = ({
  category,
  toggle,
  error,
  setToggle,
  onAdd,
  onDelete,
  onChangeCategory,
}) => {
  return (
    <View
      style={[
        FlexStyles.flexDirectionRow,
        FlexStyles.justifyContentSpaceBetween,
        FlexStyles.alignItemsCenter,
        styles.container,
      ]}
    >
      {toggle ? (
        <View>
          <Typography variant="P" color={COLORS.statsGreySecondary}>
            Category
          </Typography>
          <TextInput
            placeholder="Name of category"
            containerStyle={{
              ...commonStyles.input,
              ...styles.input,
            }}
            style={typographyStyles.P}
            value={category}
            error={error}
            onChangeText={onChangeCategory}
          />
        </View>
      ) : (
        <TextWithEditButton
          style={{ width: "100%" }}
          text={`1 ) ${category}`}
          onEdit={setToggle}
        />
      )}
      {toggle ? (
        <React.Fragment>
          <TouchableIcon
            type="FontAwesome5"
            name="check-circle"
            size={20}
            color={COLORS.primaryRed}
            onPress={setToggle}
          />
          <TouchableIcon
            type="Fontisto"
            name="close"
            size={20}
            color={COLORS.primaryRed}
            onPress={onDelete}
          />
          <TouchableIcon
            type="Feather"
            name="plus-circle"
            size={20}
            color={COLORS.fbBlue}
            onPress={onAdd}
          />
        </React.Fragment>
      ) : null}
    </View>
  );
};

export default IngrediantCategory;

const styles = StyleSheet.create({
  container: { paddingHorizontal: moderateScale(15) },
  input: {
    borderBottomColor: COLORS.dotgrey,
    backgroundColor: "transparent",
    paddingVertical: moderateScale(5),
    width: widthPercentageToDP("90%") - moderateScale(100),
  },
});
