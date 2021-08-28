/* eslint-disable no-unused-vars */
import * as React from "react";
import { View } from "react-native";
import IngrediantInput from "./IngrediantInput";
import { useTogglState } from "src/hooks/useToggleState";
import { moderateScale } from "src/utils/scale";
import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import TextWithEditButton from "./TextWithEditButton";

export type Ingrediant = {
  name: string;
  amount: number;
  scale: string;
};

export enum IngrediantFormEnum {
  NAME = "name",
  AMOUNT = "amount",
  SCALE = "scale",
}

export const CreateIngrediantInput: React.FC<{ step: number }> = ({ step }) => {
  const [editable, toggleEditable] = useTogglState(true);
  const [ingrediant, setIngrediant] = React.useState<Ingrediant>({
    name: "",
    amount: 1,
    scale: "",
  });

  const handleSubmit = (formValues: Ingrediant) => {
    setIngrediant({ ...formValues });
  };

  return (
    <React.Fragment>
      <View
        style={{
          paddingHorizontal: moderateScale(15),
          paddingVertical: moderateScale(10),
        }}
      >
        {editable ? (
          <IngrediantInput
            toggleEditable={toggleEditable}
            onSubmit={handleSubmit}
            step={step}
          />
        ) : (
          <TextWithEditButton
            text={`${step} ) ${ingrediant.amount} ${ingrediant.scale} ${ingrediant.name}`}
            onEdit={toggleEditable}
          />
        )}
      </View>
      <Divider />
      <Spacer size={8} />
    </React.Fragment>
  );
};
