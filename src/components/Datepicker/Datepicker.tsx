import * as React from "react";
import { View, StyleSheet } from "react-native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface DatePickerProps {}

const DatePicker = () => {
  const [showPicker, setShowPicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const onChange = (_, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
    setShowPicker(false);
  };

  const handleOnPicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <InputWrapper
        touchable
        style={{ paddingVertical: moderateScale(16) }}
        onPress={handleOnPicker}
      >
        <Typography variant="P" color={COLORS.textGrey}>
          {!date ? "Date of Birth" : moment(date).format("MMMM Do YYYY")}
        </Typography>
      </InputWrapper>
      {showPicker ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          display="spinner"
          onChange={onChange}
        />
      ) : null}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {},
});
