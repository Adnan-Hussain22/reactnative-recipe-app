import * as React from "react";
import { StyleSheet } from "react-native";
import DropDownPicker, {
  ItemType,
  ValueType,
} from "react-native-dropdown-picker";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface SearchDropdownProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (data: any) => void;
  items: ItemType[];
  placeholder?: string;
  searchPlaceholder?: string;
  value: ValueType;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  items,
  onChange,
  placeholder,
  searchPlaceholder,
  value,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropDownPicker
      listMode="MODAL"
      items={items}
      containerStyle={styles.dropdownContainer}
      style={styles.dropdown}
      placeholderStyle={{ color: COLORS.statsGreySecondary }}
      placeholder={placeholder ?? "Select Item"}
      open={open}
      setOpen={setOpen}
      setValue={onChange}
      value={value}
      CloseIconComponent={() => (
        <Icon
          type="Ionicons"
          name="close-outline"
          style={{
            fontSize: moderateScale(30),
            color: COLORS.statsGreySecondary,
          }}
        />
      )}
      searchContainerStyle={{ borderBottomColor: COLORS.dotgrey }}
      searchTextInputStyle={{
        borderColor: COLORS.dotgrey,
        paddingVertical: 10,
      }}
      searchable={true}
      searchPlaceholder={searchPlaceholder}
      searchPlaceholderTextColor={COLORS.dotgrey}
    />
  );
};

const styles = StyleSheet.create({
  dropdownContainer: { height: 40 },
  dropdown: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.dotgrey,
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
});
