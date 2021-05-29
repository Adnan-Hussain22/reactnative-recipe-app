/* eslint-disable react/jsx-fragments */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { GENDER } from "src/constants/common";
import { moderateScale, width } from "src/utils/scale";
import Icon from "../Icon";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface GenderProps {}

export const Gender: React.FC<GenderProps> = () => {
  const [gender, setGender] = React.useState(-1);
  return (
    <React.Fragment>
      <Typography
        variant="Body"
        color={COLORS.textGrey}
        marginLeft={moderateScale(8)}
        marginVertical={moderateScale(10)}
      >
        Gender
      </Typography>
      <View style={styles.genderContainer}>
        <InputWrapper
          style={styles.genderWrapper}
          touchable
          onPress={() => setGender(GENDER.MALE)}
        >
          <Icon
            name="dot-circle-o"
            type="FontAwesome"
            style={[
              styles.dot,
              gender === GENDER.MALE ? styles.dotActive : null,
            ]}
          />
          <Typography variant="P" color={COLORS.textGrey}>
            Male
          </Typography>
        </InputWrapper>
        <InputWrapper
          style={styles.genderWrapper}
          touchable
          onPress={() => setGender(GENDER.FEMALE)}
        >
          <Icon
            name="dot-circle-o"
            type="FontAwesome"
            style={[
              styles.dot,
              gender === GENDER.FEMALE ? styles.dotActive : null,
            ]}
          />
          <Typography variant="P" color={COLORS.textGrey}>
            Female
          </Typography>
        </InputWrapper>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.8,
    maxWidth: 280,
    alignSelf: "center",
  },
  genderWrapper: {
    width: width * 0.35,
    maxWidth: 125,
    paddingVertical: moderateScale(16),
    alignItems: "center",
    flexDirection: "row",
  },
  dot: {
    color: COLORS.textGrey,
    fontSize: moderateScale(15),
    marginRight: moderateScale(10),
  },
  dotActive: {
    color: COLORS.primaryRed,
  },
});
