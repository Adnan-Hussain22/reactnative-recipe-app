import * as React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import TextInput from "src/components/TextInput";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";
import { CreateIngrediantInput, Ingrediant } from "./CreateIngrediantInput";
import { styles as commonStyles } from "./styles";

type IngrediantGroup = { group: string; ingrediants: Ingrediant[] };

export const CreateIngrediantGroup: React.FC = () => {
  const [state] = React.useState<IngrediantGroup>({
    group: "",
    ingrediants: [{ name: "", scale: "", amount: "" }],
  });
  return (
    <View style={styles.container}>
      <View
        style={[
          FlexStyles.flexDirectionRow,
          FlexStyles.justifyContentSpaceBetween,
        ]}
      >
        <TextInput
          placeholder="Name of category"
          containerStyle={{
            ...commonStyles.input,
            borderBottomColor: COLORS.dotgrey,
            backgroundColor: "transparent",
            width: widthPercentageToDP("90%") - 40,
          }}
          style={typographyStyles.P}
          value={state.group}
          // onChangeText={onChange}
        />
        <TouchableOpacity>
          <Icon
            type="Feather"
            name="plus-circle"
            style={{
              color: COLORS.statsGreyPrimary,
              fontSize: moderateScale(18),
              top: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={state.ingrediants}
        renderItem={({ index }) => <CreateIngrediantInput step={index + 1} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    padding: moderateScale(15),
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(30),
  },
});
