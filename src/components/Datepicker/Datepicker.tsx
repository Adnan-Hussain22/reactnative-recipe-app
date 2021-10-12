import * as React from "react";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

import { COLORS } from "src/constants/colors";
import { formStyles } from "src/constants/globalStyles";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";
import { moderateScale } from "src/utils";
import { TextStyle } from "react-native";

interface DatePickerProps {
  date: Date;
  error?: string;
  errorStyle?: TextStyle;
  onChange: (newDate: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  error,
  errorStyle,
  onChange: propDateChange,
}) => {
  const [showPicker, setShowPicker] = React.useState(false);

  const onChange = (_, selectedDate?: Date) => {
    if (selectedDate) {
      propDateChange(selectedDate);
    }
    setShowPicker(false);
  };

  const handleOnPicker = () => {
    setShowPicker(true);
  };

  return (
    <>
      <InputWrapper
        touchable
        style={formStyles.inputContainer}
        onPress={handleOnPicker}
      >
        <Typography variant="P" color={COLORS.textGrey}>
          {!date ? "Date of Birth" : moment(date).format("MMMM Do YYYY")}
        </Typography>
      </InputWrapper>
      <Typography
        variant="P"
        color={COLORS.primaryRed}
        opacity={error ? 1 : 0}
        marginTop={moderateScale(5)}
        {...errorStyle}
      >
        {error || "some error"}
      </Typography>
      {showPicker ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          display="spinner"
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default DatePicker;
