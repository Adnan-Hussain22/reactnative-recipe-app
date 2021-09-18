import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { moderateScale, width } from "src/utils/scale";

interface SearchInputProps {
  value: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Icon
        type="AntDesign"
        name="search1"
        style={{ fontSize: moderateScale(17), color: COLORS.primaryRed }}
      />
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 80,
    borderColor: COLORS.primaryRed,
    borderWidth: 1,
    paddingLeft: moderateScale(22),
    paddingRight: moderateScale(25),
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    ...typographyStyles.P,
    marginLeft: moderateScale(8),
    paddingVertical: moderateScale(10),
    width: width - 115,
  },
});
