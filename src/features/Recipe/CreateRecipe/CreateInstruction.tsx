/* eslint-disable no-unused-vars */
import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { useTogglState } from "src/hooks/useToggleState";
import { moderateScale } from "src/utils/scale";
import { styles as commonStyles } from "./styles";

type CreateInstructionProps = {
  step: number;
  onChange: (value: string) => void;
};

export const CreateInstruction: React.FC<CreateInstructionProps> = ({
  step,
  onChange,
}) => {
  const [editable, toggleEditable] = useTogglState(true);
  const [instruction, setInstruction] = React.useState("");

  return (
    <React.Fragment>
      {editable ? (
        <View>
          <Typography
            variant="P"
            color={COLORS.statsGreySecondary}
            marginBottom={moderateScale(8)}
          >
            Step {step}
          </Typography>
          <TextInput
            placeholder="Instruction..."
            containerStyle={commonStyles.input}
            style={typographyStyles.P}
            autoFocus
            onBlur={() => {
              if (instruction.trim().length) {
                toggleEditable();
              }
              onChange(instruction);
            }}
            value={instruction}
            onChangeText={setInstruction}
          />
        </View>
      ) : (
        <View style={[FlexStyles.flexDirectionRow, styles.step]}>
          <Typography
            variant="P"
            color={COLORS.statsGreyPrimary}
            marginRight={moderateScale(5)}
            fontSize={moderateScale(14)}
            letterSpacing={moderateScale(1.2)}
          >
            {step} ) {instruction}
          </Typography>
          <TouchableOpacity onPress={toggleEditable}>
            <Icon
              type="Feather"
              name="edit"
              style={{
                color: COLORS.statsGreyPrimary,
                fontSize: moderateScale(15),
                marginLeft: moderateScale(10),
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  step: {
    marginBottom: moderateScale(10),
    padding: moderateScale(12),
    backgroundColor: COLORS.white,
  },
});
