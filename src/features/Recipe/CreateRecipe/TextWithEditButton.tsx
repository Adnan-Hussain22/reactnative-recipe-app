import * as React from "react";
import { View, ViewStyle } from "react-native";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import { TouchableIcon } from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

type TextWithEditButtonProps = {
  text: string;
  style?: ViewStyle;
  onEdit: () => void;
};

const TextWithEditButton: React.FC<TextWithEditButtonProps> = ({
  text,
  style,
  onEdit,
}) => {
  return (
    <React.Fragment>
      <View
        style={[
          FlexStyles.flexDirectionRow,
          FlexStyles.justifyContentSpaceBetween,
          style,
        ]}
      >
        <Typography variant="P" color={COLORS.statsGreySecondary}>
          {text}
        </Typography>
        <TouchableIcon
          type="Feather"
          name="edit"
          color={COLORS.statsGreyPrimary}
          size={15}
          style={{ marginLeft: moderateScale(10) }}
          onPress={onEdit}
        />
      </View>
    </React.Fragment>
  );
};

export default TextWithEditButton;
