/* eslint-disable no-unused-vars */
import * as React from "react";
import { View } from "react-native";
import { useTogglState } from "src/hooks/useToggleState";
import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import { moderateScale } from "src/utils/scale";
import { ConnectRecipeIngrediantForm } from "src/utils/ConnectRecipeContext";
import { OnChangeIngredient, RecipeIngredientsForm } from "src/providers";
import IngrediantInput from "./IngrediantInput";
import TextWithEditButton from "./TextWithEditButton";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

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
};

type MapStateToPropsType = {
  onChangeIngredient: OnChangeIngredient;
};

export const CreateIngrediantInput: React.FC<
  PropsType & Partial<MapStateToPropsType>
> = ({ ingredientIndex, categoryIndex, onChangeIngredient }) => {
  const [editable, toggleEditable] = useTogglState(true);
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<RecipeIngredientsForm>();
  const { remove } = useFieldArray({
    control,
    name: `categorizedIngredients.${categoryIndex}.ingredients`,
  });

  const handleSubmit = (formValues: Ingrediant) => {
    onChangeIngredient?.({ ...formValues }, categoryIndex, ingredientIndex);
  };

  const onDeleteIngredient = (index: number) => {
    remove(index);
  };

  return (
    <React.Fragment>
      <View
        style={{
          paddingHorizontal: moderateScale(15),
          paddingVertical: moderateScale(10),
        }}
      >
        <Controller
          control={control}
          name={`categorizedIngredients.${categoryIndex}.ingredients.${ingredientIndex}`}
          render={({ field: { value } }) => {
            return editable ? (
              <IngrediantInput
                toggleEditable={toggleEditable}
                ingredientIndex={ingredientIndex}
                categoryIndex={categoryIndex}
                onSubmit={handleSubmit}
                onDelete={onDeleteIngredient}
              />
            ) : (
              <TextWithEditButton
                text={`${ingredientIndex + 1} ) ${value.amount} ${
                  value.scale
                } ${value.name}`}
                onEdit={toggleEditable}
              />
            );
          }}
        />
      </View>
      <Divider />
      <Spacer size={8} />
    </React.Fragment>
  );
};
