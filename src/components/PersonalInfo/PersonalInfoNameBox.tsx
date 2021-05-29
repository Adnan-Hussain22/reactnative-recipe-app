import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { width } from "src/utils/scale";
import TextInput from "../TextInput";

interface PersonalInfoNameBoxProps {}

export const PersonalInfoNameBox = (props: PersonalInfoNameBoxProps) => {
  return (
    <View style={styles.nameContainer}>
      <TextInput
        placeholder="First Name"
        containerStyle={styles.name}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        containerStyle={styles.name}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: { flexDirection: "row", justifyContent: "space-between" },
  name: { width: width * 0.4, marginVertical: 12 },
  input: {
    ...typographyStyles.P,
    color: COLORS.textGrey,
  },
});
