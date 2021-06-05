import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { GENDER } from "src/constants/common";
import { moderateScale, width } from "src/utils/scale";
import Icon from "../Icon";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface GenderProps {
  value: GENDER;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: GENDER) => void;
  error?: string;
}

export const Gender: React.FC<GenderProps> = ({ value, onChange, error }) => {
  // const [gender, setGender] = React.useState(-1);
  return (
    <React.Fragment>
      <Typography
        variant="Body"
        color={COLORS.textGrey}
        marginLeft={moderateScale(8)}
        marginBottom={moderateScale(15)}
        marginTop={moderateScale(20)}
      >
        Gender
      </Typography>
      <View style={styles.genderContainer}>
        <InputWrapper
          style={styles.genderWrapper}
          touchable
          onPress={() => onChange(GENDER.MALE)}
        >
          <Icon
            name="dot-circle-o"
            type="FontAwesome"
            style={[
              styles.dot,
              value === GENDER.MALE ? styles.dotActive : null,
            ]}
          />
          <Typography variant="P" color={COLORS.textGrey}>
            Male
          </Typography>
        </InputWrapper>
        <InputWrapper
          style={styles.genderWrapper}
          touchable
          onPress={() => onChange(GENDER.FEMALE)}
        >
          <Icon
            name="dot-circle-o"
            type="FontAwesome"
            style={[
              styles.dot,
              value === GENDER.FEMALE ? styles.dotActive : null,
            ]}
          />
          <Typography variant="P" color={COLORS.textGrey}>
            Female
          </Typography>
        </InputWrapper>
      </View>
      <Typography
        variant="P"
        color={COLORS.primaryRed}
        paddingLeft={moderateScale(18)}
        opacity={error ? 1 : 0}
        marginTop={moderateScale(5)}
        textAlign="center"
      >
        {error || "some error"}
      </Typography>
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
