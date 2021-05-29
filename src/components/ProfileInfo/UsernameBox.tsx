import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { APP_NAME } from "src/constants/common";
import { typographyStyles } from "src/constants/globalStyles";
import { height, moderateScale } from "src/utils/scale";
import TextInput from "../TextInput";
import Typography from "../Typography";

interface UsernameBoxProps {}

export const UsernameBox: React.FC<UsernameBoxProps> = () => {
  return (
    <View style={styles.formContainer}>
      <Typography variant="H1">Create a username</Typography>
      <TextInput
        style={{ ...typographyStyles.P, color: COLORS.textGrey }}
        placeholder="Username"
        containerStyle={{ marginTop: moderateScale(18) }}
      />
      <Typography
        variant="P"
        color={COLORS.textGrey}
        marginVertical={moderateScale(12)}
      >
        Your username will be displayed on your profile and {APP_NAME} community
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: height * 0.3,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginTop: moderateScale(20),
  },
});
