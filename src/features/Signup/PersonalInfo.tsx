import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

import Button from "src/components/Button";
import DatePicker from "src/components/Datepicker";
import Icon from "src/components/Icon";
import { Gender, PersonalInfoNameBox } from "src/components/PersonalInfo";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { PersonalInfoFormFields } from "src/typings/signup";
import { moderateScale, width } from "src/utils/scale";
import { ERRORS } from "src/constants/errors";
import { GENDER } from "src/constants/common";

export const validationSchema = yup.object().shape({
  firstName: yup.string().required(ERRORS.REQUIRED_FIRSTNAME),
  dateOfBirth: yup
    .date()
    .max(moment().subtract(14, "year").toDate(), ERRORS.MIN_DOB),
  gender: yup
    .number()
    .oneOf([GENDER.MALE, GENDER.FEMALE], ERRORS.OPTION_REQUIRED),
});

const PersonalInfo: React.FC = () => {
  const { control, handleSubmit } = useForm<PersonalInfoFormFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      gender: -1,
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleNext = React.useCallback(() => {
    //
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(30),
          width: Math.min(360, width),
        }}
      >
        <Typography
          variant="H1"
          marginBottom={moderateScale(15)}
          marginTop={moderateScale(60)}
        >
          Tell me about yourself
        </Typography>
        <PersonalInfoNameBox control={control} />
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field: { value, onChange } }) => (
            <DatePicker date={value} onChange={onChange} />
          )}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <Gender
              value={value}
              onChange={onChange}
              error={errors.gender?.message}
            />
          )}
        />

        <Button
          text="NEXT"
          background={COLORS.primaryRed}
          round
          center
          width={moderateScale(150)}
          style={styles.button}
          variant="Body"
          textStyle={styles.nextTxt}
          icon={
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              style={iconStyles.iosChevron}
            />
          }
          iconRight
          onPress={handleSubmit(handleNext)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 25,
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
  },
  nextTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});
