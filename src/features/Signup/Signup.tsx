/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import {
  SignupLogo,
  SignupForm,
  SignupButtonBox,
  SignupFooterText,
  SignupFormFields,
} from "src/components/Signup";
import { COLORS } from "src/constants/colors";
import { ERRORS } from "src/constants/errors";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";
import {
  matchValue,
  validateEmail,
  validateStrongPassword,
} from "src/utils/validator";

const Signup: React.FC = () => {
  const { isIos } = usePlateform();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleValidate = (key: string, value: string) => {
    switch (key) {
      case "email":
        if (!validateEmail(value)) {
          setFormErrors((prevState) => {
            const newState = { ...prevState };
            newState.email = ERRORS.EMAIL;
            return newState;
          });
          return true;
        }
        setFormErrors((prevState) => {
          if (!prevState.email) return prevState;
          const newState = { ...prevState };
          newState.email = "";
          return newState;
        });
        return false;
      case "password":
        if (!validateStrongPassword(value)) {
          setFormErrors((prevState) => {
            const newState = { ...prevState };
            newState.password = ERRORS.STRONG_PASSWORD;
            return newState;
          });
          return true;
        }
        setFormErrors((prevState) => {
          if (!prevState.password) return prevState;
          const newState = { ...prevState };
          newState.password = "";
          return newState;
        });
        return false;
      case "verifyPassword":
        if (!matchValue(form.password, value)) {
          setFormErrors((prevState) => {
            const newState = { ...prevState };
            newState.verifyPassword = ERRORS.PASSWORD_NOTMATCH;
            return newState;
          });
          return true;
        }
        setFormErrors((prevState) => {
          if (!prevState.verifyPassword) return prevState;
          const newState = { ...prevState };
          newState.verifyPassword = "";
          return newState;
        });
        return false;
      default:
        return false;
    }
  };

  const handleChange = React.useCallback(
    (key: SignupFormFields, value: string) => {
      setForm((prevState) => {
        const newState = { ...prevState };
        newState[key] = value;
        return newState;
      });
      handleValidate(key, value);
    },
    []
  );

  const handleCreate = React.useCallback(async () => {
    // let count = 0;
    const formValues = Object.entries(form);
    // let hasError: boolean | undefined;
    const errors = [
      handleValidate(formValues[0][0], formValues[0][1]),
      handleValidate(formValues[1][0], formValues[1][1]),
      handleValidate(formValues[2][0], formValues[2][1]),
    ];
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 200);
    });
    if (errors.includes(true)) return;
    console.log("create==>", errors);
  }, [form]);

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
          <SignupForm onChange={handleChange} errors={formErrors} />
          <SignupButtonBox
            onCreate={handleCreate}
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
  container: { flex: 1 },
  main: {
    paddingHorizontal: moderateScale(15),
    backgroundColor: COLORS.white,
  },
});
