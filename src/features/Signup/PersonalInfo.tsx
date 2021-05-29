import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Button from "src/components/Button";
import DatePicker from "src/components/Datepicker";
import Icon from "src/components/Icon";
import { Gender, PersonalInfoNameBox } from "src/components/PersonalInfo";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { iconStyles } from "src/constants/globalStyles";
import { moderateScale, width } from "src/utils/scale";

interface PersonalInfoProps {}

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: moderateScale(30) }}
      >
        <Typography
          variant="H1"
          marginBottom={moderateScale(15)}
          marginTop={moderateScale(60)}
        >
          Tell me about yourself
        </Typography>
        <PersonalInfoNameBox />
        <DatePicker />
        <Gender />
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
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.07,
  },
  button: {
    marginTop: 25,
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
  },
  nextTxt: { color: COLORS.white, letterSpacing: moderateScale(2) },
});
