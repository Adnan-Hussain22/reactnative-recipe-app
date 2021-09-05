/* eslint-disable no-unused-vars */
import * as React from "react";
import { View } from "react-native";
import { useTogglState } from "src/hooks/useToggleState";
import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import { moderateScale } from "src/utils/scale";
import { ConnectRecipeIngrediantForm } from "src/utils/ConnectRecipeContext";
import { OnChangeIngredient } from "src/providers";
import IngrediantInput from "./IngrediantInput";
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

type PropsType = {
  ingredientIndex: number;
  categoryIndex: number;
  onDeleteIngredient: (index: number) => void;
};

type MapStateToPropsType = {
  onChangeIngredient: OnChangeIngredient;
};

const Component: React.FC<PropsType & Partial<MapStateToPropsType>> = ({
  ingredientIndex,
  categoryIndex,
  onChangeIngredient,
  onDeleteIngredient,
}) => {
  const [editable, toggleEditable] = useTogglState(true);
  const [ingrediant, setIngrediant] = React.useState<Ingrediant>({
    name: "",
    amount: 1,
    scale: "",
  });

  const handleSubmit = (formValues: Ingrediant) => {
    setIngrediant({ ...formValues });
    onChangeIngredient?.({ ...formValues }, categoryIndex, ingredientIndex);
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
            ingredientIndex={ingredientIndex}
            categoryIndex={categoryIndex}
            onSubmit={handleSubmit}
            onDelete={onDeleteIngredient}
          />
        ) : (
          <TextWithEditButton
            text={`${ingredientIndex + 1} ) ${ingrediant.amount} ${
              ingrediant.scale
            } ${ingrediant.name}`}
            onEdit={toggleEditable}
          />
        )}
      </View>
      <Divider />
      <Spacer size={8} />
    </React.Fragment>
  );
};

export const CreateIngrediantInput = ConnectRecipeIngrediantForm<
  MapStateToPropsType,
  PropsType
>(({ onChangeIngredient }) => ({
  onChangeIngredient,
}))(Component);
