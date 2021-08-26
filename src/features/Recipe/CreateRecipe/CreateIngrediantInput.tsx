import * as React from "react";
import { View } from "react-native";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { styles } from "./styles";

const CreateIngrediantInput: React.FC = () => {
  return (
    <React.Fragment>
      <Typography
        variant="P"
        color={COLORS.statsGreySecondary}
        // marginBottom={moderateScale(8)}
      >
        Name
      </Typography>
      <TextInput
        placeholder="Name of ingredients"
        containerStyle={{
          ...styles.input,
        }}
        style={typographyStyles.P}
      />
      <View style={[FlexStyles.flexRow, FlexStyles.justifyContentSpaceBetween]}>
        <View>
          <Typography variant="P" color={COLORS.statsGreySecondary}>
            Amount
          </Typography>
          <TextInput
            placeholder="Ingredient amount"
            containerStyle={{
              ...styles.input,
            }}
            style={typographyStyles.P}
          />
        </View>
        <View>
          <Typography variant="P" color={COLORS.statsGreySecondary}>
            Scale
          </Typography>
          <TextInput
            placeholder="Amount scale"
            containerStyle={{
              ...styles.input,
            }}
            style={typographyStyles.P}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default CreateIngrediantInput;
