import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import * as yup from "yup";

import Button from "src/components/Button";
import Icon from "src/components/Icon";
import { ProfileImageBox, UsernameBox } from "src/components/ProfileInfo";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { ProfileInfoFormFields } from "src/typings/signup";
import { moderateScale } from "src/utils/scale";
import { ApiNames } from "src/constants/api";
import { useApi, useAuth } from "src/hooks";
import { Spinner } from "src/components/Spinner";
import { AuthResponse, UpdateUserRequest } from "src/services/api";

export const validationSchema = yup.object().shape({});

const ProfileInfo: React.FC = () => {
  const { control, handleSubmit } = useForm<ProfileInfoFormFields>({
    defaultValues: {
      username: "",
      avatar: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { inFlight, commit } = useApi(ApiNames.SIGNUP);
  const { onAuthenticated } = useAuth();

  const onSubmit = React.useCallback(async (form: ProfileInfoFormFields) => {
    const res = await commit({
      ...form,
    } as UpdateUserRequest);
    console.log("res==>", res);
    onAuthenticated(res.data as AuthResponse);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={inFlight} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <UsernameBox value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="avatar"
          render={({ field: { onChange, value } }) => (
            <ProfileImageBox value={value} onChange={onChange} />
          )}
        />
        <Button
          round
          center
          iconRight
          text="SAVE"
          variant="Body"
          background={COLORS.primaryRed}
          width={moderateScale(150)}
          style={styles.button}
          textStyle={styles.nextTxt}
          icon={
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              style={iconStyles.iosChevron}
            />
          }
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
  },
  nextTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});
