import * as React from "react";
import { View } from "react-native";
import { useFieldArray, useFormContext } from "react-hook-form";

import { useTogglState } from "src/hooks/useToggleState";
import Divider from "src/components/Divider/Divider";
import Spacer from "src/components/Spacer";
import { moderateScale } from "src/utils/scale";
import IngrediantInput from "./IngrediantInput";
import TextWithEditButton from "./TextWithEditButton";
import { RecipeIngredientsForm } from "./type";

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

export const CreateIngrediantInput: React.FC<PropsType> = ({
  ingredientIndex,
  categoryIndex,
}) => {
  const [editable, toggleEditable] = useTogglState(true);
  const { control } = useFormContext<RecipeIngredientsForm>();
  const { remove, fields: ingredients } = useFieldArray({
    control,
    name: `categorizedIngredients.${categoryIndex}.ingredients`,
  });

  const ingredient = React.useMemo(
    () => ingredients[ingredientIndex],
    [ingredients, ingredientIndex]
  );

  const onDeleteIngredient = () => {
    if (ingredients.length > 1) {
      remove(ingredientIndex);
    }
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
            onDelete={onDeleteIngredient}
          />
        ) : (
          <TextWithEditButton
            text={`${ingredientIndex + 1} ) ${ingredient.amount} ${
              ingredient.scale
            } ${ingredient.name}`}
            onEdit={toggleEditable}
          />
        )}
      </View>
      <Divider />
      <Spacer size={8} />
    </React.Fragment>
  );
};
