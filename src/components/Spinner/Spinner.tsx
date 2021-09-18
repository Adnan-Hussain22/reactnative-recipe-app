import * as React from "react";
import { StyleSheet } from "react-native";
import OverlaySpinner from "react-native-loading-spinner-overlay";
import { COLORS } from "src/constants/colors";

interface SpinnerProps {
  visible?: boolean;
  text?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ visible = false, text }) => {
  return (
    <OverlaySpinner
      visible={visible}
      textContent={text}
      textStyle={styles.spinnerTextStyle}
    />
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: COLORS.white,
  },
});
