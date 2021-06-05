/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  SignupLogo,
  SignupForm,
  SignupButtonBox,
  SignupFooterText,
  validationSchema,
  FormFields,
} from "src/components/Signup";
import { COLORS } from "src/constants/colors";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";

const Signup: React.FC = () => {
  const { isIos } = usePlateform();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
      verifyPassword: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleCreate = React.useCallback(async (data: FormFields) => {
    console.log("create==>", data);
  }, []);

  const handleOnSignupGmail = React.useCallback(() => {
    console.log("Signup Gmail");
  }, []);

  const handleOnSignupFacebook = React.useCallback(() => {
    console.log("Signup Facebook");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={isIos ? "padding" : undefined}
      >
        <ScrollView style={styles.main}>
          <SignupLogo />
          <SignupForm control={control} errors={errors} />
          <SignupButtonBox
            onCreate={handleSubmit(handleCreate)}
            onFacebook={handleOnSignupFacebook}
            onGmail={handleOnSignupGmail}
          />
          <SignupFooterText />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  main: {
    paddingHorizontal: moderateScale(15),
  },
});
