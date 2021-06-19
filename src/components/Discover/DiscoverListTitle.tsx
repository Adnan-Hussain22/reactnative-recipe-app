import * as React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface DiscoverListTitleProps {
  sectionIndex?: number;
  title: string;
  onPress?: () => void;
}

export const DiscoverListTitle: React.FC<DiscoverListTitleProps> = ({
  sectionIndex,
  title,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        sectionIndex && sectionIndex > 0 ? styles.spacingTop : null,
      ]}
    >
      <Typography variant="H1">{title}</Typography>
      <Typography onPress={onPress} variant="P" color={COLORS.primaryRed}>
        See All
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(20),
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(18),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spacingTop: {
    marginTop: moderateScale(40),
  },
});
