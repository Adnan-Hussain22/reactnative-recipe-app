/* eslint-disable no-unused-vars */
import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import TextInput from "src/components/TextInput";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { useTogglState } from "src/hooks/useToggleState";
import { moderateScale } from "src/utils/scale";
import { styles } from "./styles";

export type Ingrediant = {
  name: string;
  amount: string;
  scale: string;
};

export enum IngrediantFormEnum {
  NAME = "name",
  AMOUNT = "amount",
  SCALE = "scale",
}

const IngrediantInput: React.FC<{
  onChange: (key: IngrediantFormEnum, value: any) => void;
  ingrediant: Ingrediant;
  toggleEditable: () => void;
}> = ({ onChange, ingrediant: { name, amount, scale }, toggleEditable }) => {
  const handleBlur = React.useCallback(() => {
    if (name.trim().length && scale.trim().length && amount.trim().length) {
      toggleEditable();
      console.log("toggle maro");
    }
  }, []);

  const handleChange = React.useCallback(
    (key: IngrediantFormEnum) => (value: any) => {
      onChange(key, value);
    },
    []
  );

  return (
    <React.Fragment>
      <Typography variant="P" color={COLORS.statsGreySecondary}>
        Name
      </Typography>
      <TextInput
        placeholder="Name of ingredients"
        containerStyle={componentStyles.input}
        style={typographyStyles.P}
        autoFocus
        value={name}
        onChangeText={handleChange(IngrediantFormEnum.NAME)}
        onBlur={handleBlur}
      />
      <View style={[FlexStyles.flexRow, FlexStyles.justifyContentSpaceBetween]}>
        <View>
          <Typography variant="P" color={COLORS.statsGreySecondary}>
            Amount
          </Typography>
          <TextInput
            placeholder="Ingredient amount"
            containerStyle={{
              ...componentStyles.input,
              width: widthPercentageToDP("35%"),
            }}
            style={typographyStyles.P}
            value={amount}
            onChangeText={handleChange(IngrediantFormEnum.AMOUNT)}
            onBlur={handleBlur}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Typography variant="P" color={COLORS.statsGreySecondary}>
            Scale
          </Typography>
          <TextInput
            placeholder="tbsp, tsp, g/G, l/L"
            containerStyle={{
              ...componentStyles.input,
              width: widthPercentageToDP("35%"),
            }}
            style={typographyStyles.P}
            value={scale}
            onChangeText={handleChange(IngrediantFormEnum.SCALE)}
            onBlur={handleBlur}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

const IngredientComponent: React.FC<{
  ingrediant: Ingrediant;
  toggleEditable: () => void;
  step: number;
}> = ({ step, ingrediant, toggleEditable }) => {
  return (
    <React.Fragment>
      <View style={[FlexStyles.flexDirectionRow]}>
        <Typography variant="P" color={COLORS.statsGreySecondary}>
          {step} ){" "}
          {`${ingrediant.amount} ${ingrediant.scale} ${ingrediant.name}`}
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
    </React.Fragment>
  );
};

export const CreateIngrediantInput: React.FC<{ step: number }> = ({ step }) => {
  const [editable, toggleEditable] = useTogglState(true);
  const [ingrediant, setIngrediant] = React.useState<Ingrediant>({
    name: "",
    amount: "",
    scale: "",
  });

  const handleChange = (key: IngrediantFormEnum, value: any) => {
    setIngrediant((prev) => {
      const newState = { ...prev } as any;
      newState[key] = value;
      return newState;
    });
  };
  console.log("ingrediant==>", ingrediant);
  return (
    <React.Fragment>
      {editable ? (
        <IngrediantInput
          ingrediant={ingrediant}
          toggleEditable={toggleEditable}
          onChange={handleChange}
        />
      ) : (
        <IngredientComponent
          ingrediant={ingrediant}
          toggleEditable={toggleEditable}
          step={step}
        />
      )}
    </React.Fragment>
  );
};

const componentStyles = StyleSheet.create({
  input: {
    ...styles.input,
    borderWidth: 1,
    borderColor: COLORS.dotgrey,
  },
});
