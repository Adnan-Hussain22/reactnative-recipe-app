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
  signupValidationSchema,
  SignupFormFields,
} from "src/components/Signup";
import { COLORS } from "src/constants/colors";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";
import { useApi, useAuth } from "src/hooks";
import { ApiNames } from "src/constants/api";
import { AuthRequest, AuthResponse } from "src/services/api";
import { Spinner } from "src/components/Spinner";

const Signup: React.FC = () => {
  const { isIos } = usePlateform();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupFormFields>({
    defaultValues: {
      email: "",
      password: "",
      verifyPassword: "",
    },
    mode: "all",
    resolver: yupResolver(signupValidationSchema),
  });
  const { inFlight, commit } = useApi(ApiNames.SIGNUP);
  const { onAuthenticated } = useAuth();

  const handleCreate = React.useCallback(async (form: SignupFormFields) => {
    const { data, message, status } = await commit({
      email: form.email,
      password: form.password,
    } as AuthRequest);
    if (!status) {
      return alert(message);
    }
    await onAuthenticated(data as AuthResponse);
  }, []);

  const handleOnSignupGmail = React.useCallback(() => {}, []);

  const handleOnSignupFacebook = React.useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={inFlight} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={isIos ? "padding" : undefined}
      >
        <ScrollView style={styles.main} keyboardShouldPersistTaps="handled">
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
