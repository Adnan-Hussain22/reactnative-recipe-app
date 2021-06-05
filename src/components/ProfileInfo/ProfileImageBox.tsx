import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "src/constants/colors";
import { height, moderateScale } from "src/utils/scale";
import { IconRoundButton } from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

export const ProfileImageBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <IconRoundButton
        icon={
          <Icon
            name="plus"
            type="AntDesign"
            style={{
              color: COLORS.textGrey,
              fontSize: moderateScale(height * 0.1),
            }}
          />
        }
        background={COLORS.dotgrey}
        size={moderateScale(height * 0.25)}
        onPress={() => {}}
      />
      <Typography
        variant="BodyBold"
        marginBottom={moderateScale(12)}
        marginTop={moderateScale(20)}
      >
        Add Profile Picture
      </Typography>
      <Typography>or add it later</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
