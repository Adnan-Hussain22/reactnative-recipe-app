import * as React from "react";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

import { COLORS } from "src/constants/colors";
import { formStyles } from "src/constants/globalStyles";
import InputWrapper from "../InputWrapper/InputWrapper";
import Typography from "../Typography";

interface DatePickerProps {
  onChange: (newDate: Date) => void;
  date: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
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
