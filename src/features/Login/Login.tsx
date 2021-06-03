import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import * as yup from "yup";

import { SignupLogo } from "src/components/Signup";
import { COLORS } from "src/constants/colors";
import LoginForm from "src/features/Login/LoginForm";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";
import { FormFields } from "./LoginForm";
import { ERRORS } from "src/constants/errors";
import Icon from "src/components/Icon";
import { iconStyles } from "src/constants/globalStyles";
import Button from "src/components/Button";

interface LoginProps {}

export const validationSchema = yup.object().shape({
  email: yup.string().email(ERRORS.EMAIL).required(ERRORS.EMAIL),
  password: yup.string().length(6).required(ERRORS.STRONG_PASSWORD),
});

const Login: React.FC<LoginProps> = () => {
  const onLogin = React.useCallback(async (data: FormFields) => {
    console.log("login==>", data);
  }, []);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { isIos } = usePlateform();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* <Text>Login</Text> */}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={isIos ? "padding" : undefined}
        >
          <ScrollView style={styles.main}>
            <SignupLogo />
            <LoginForm control={control} errors={errors} />
            <Button
              background={COLORS.primaryRed}
              icon={
                <Icon
                  type="MaterialIcons"
                  name="keyboard-arrow-right"
                  style={iconStyles.iosChevron}
                />
              }
              iconRight
              round
              center
              width={moderateScale(150)}
              style={styles.createBtn}
              text="SIGN IN"
              textStyle={styles.createTxt}
              onPress={handleSubmit(onLogin)}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: { paddingHorizontal: moderateScale(15) },
  createBtn: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
  },
  createTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});
