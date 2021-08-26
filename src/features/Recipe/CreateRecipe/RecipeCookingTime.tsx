import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import TextInput from "src/components/TextInput";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Typography from "src/components/Typography";
import Icon from "src/components/Icon";
import { COLORS } from "src/constants/colors";
import { typographyStyles, formStyles } from "src/constants/globalStyles";
import { moderateScale } from "src/utils/scale";

interface RecipeCookingTimeProps {
  time: string;
  scale: "hr" | "min";
  // eslint-disable-next-line no-unused-vars
  onChange: (prop: { time: string; scale: "hr" | "min" }) => void;
}

const RecipeCookingTime: React.FC<RecipeCookingTimeProps> = ({
  time,
  scale,
  onChange,
}) => {
  const onChangeScale = (newScale: "hr" | "min") => {
    onChange({ time, scale: newScale });
  };

  const onChangeTime = (newTime: string) => {
    onChange({ time: newTime, scale });
  };

  return (
    <View
      style={[
        styles.inputContainer,
        FlexStyles.flexDirectionRow,
        FlexStyles.justifyContentSpaceBetween,
      ]}
    >
      <View
        style={{
          width: moderateScale(125),
        }}
      >
        <Typography variant="P" color={COLORS.statsGreySecondary}>
          Cooking Time
        </Typography>
        <TextInput
          placeholder="Cooking Time"
          containerStyle={styles.input}
          style={typographyStyles.P}
          value={time}
          onChangeText={onChangeTime}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP("80%") - moderateScale(125),
        }}
      >
        <Typography variant="P" color={COLORS.statsGreySecondary}>
          Scale
        </Typography>
        <View
          style={[
            FlexStyles.flexDirectionRow,
            FlexStyles.justifyContentSpaceBetween,
          ]}
        >
          <TouchableOpacity
            onPress={() => onChangeScale("hr")}
            style={[
              FlexStyles.flexDirectionRow,
              FlexStyles.alignItemsCenter,
              styles.input,
              styles.scaleContainer,
            ]}
          >
            <Icon
              name="dot-circle-o"
              type="FontAwesome"
              style={[styles.dot, scale === "hr" ? styles.dotActive : null]}
            />
            <Typography variant="BodyLight" color={COLORS.textGrey}>
              hr's
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeScale("min")}
            style={[
              FlexStyles.flexDirectionRow,
              FlexStyles.alignItemsCenter,
              styles.input,
              styles.scaleContainer,
            ]}
          >
            <Icon
              name="dot-circle-o"
              type="FontAwesome"
              style={[styles.dot, scale === "min" ? styles.dotActive : null]}
            />
            <Typography variant="BodyLight" color={COLORS.textGrey}>
              min's
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecipeCookingTime;

const LEFT_SPACING = moderateScale(15);

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: LEFT_SPACING,
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: "transparent",
    borderRadius: moderateScale(4),
    ...formStyles.inputContainer,
  },
  scaleContainer: {
    width: 90,
    height: 50,
    marginTop: 5,
    paddingHorizontal: moderateScale(8),
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
