import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "src/constants/colors";
import { UNAUHTENTICATED_ROUTES } from "src/constants/Routes";
import Typography from "../Typography";

interface SignupFooterTextProps {
  type?: "signup" | "signin";
}

export const SignupFooterText: React.FC<SignupFooterTextProps> = ({
  type = "signup",
}) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(
      type === "signin"
        ? UNAUHTENTICATED_ROUTES.SIGNUP
        : UNAUHTENTICATED_ROUTES.LOGIN
    );
  };

  return (
    <View style={styles.container}>
      <Typography variant="BodyLight" color={COLORS.textGrey} marginRight={8}>
        {type === "signin" ? "Don't" : ""} Have an account?
      </Typography>
      <TouchableOpacity onPress={handleNavigate}>
        <Typography variant="Body" color={COLORS.primaryRed}>
          {type === "signin" ? "Sign Up" : "Sign In"}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "center",
  },
});
