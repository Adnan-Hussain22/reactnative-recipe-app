import * as React from "react";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";

import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import { CreateIngrediantInput, Ingrediant } from "./CreateIngrediantInput";
import Divider from "src/components/Divider/Divider";
import { useTogglState } from "src/hooks/useToggleState";
import IngrediantCategory from "./IngrediantCategory";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Spacer from "src/components/Spacer";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";

export const CategorySchema = yup.object().shape({
  category: yup.string().required(CREATE_RECIPE_VALIDATIONS.CATEGORY_NAME),
});

export type IngrediantGroup = {
  category: string;
  ingrediants: Ingrediant[];
};

export const CreateIngrediantGroup: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<{ category: string }>({
    defaultValues: {
      category: "",
    },
    mode: "all",
    resolver: yupResolver(CategorySchema),
  });
  const [ingrediants, setIngrediants] = React.useState<Ingrediant[]>([
    { name: "", scale: "", amount: 1 },
  ]);
  const [collapse, toggleCollapse] = useTogglState(false);

  const handleAdd = React.useCallback(() => {
    setIngrediants((prev) => {
      const newState = [...prev];
      newState.push({ name: "", scale: "", amount: 1 });
      return newState;
    });
  }, []);

  const onSubmit = () => {
    toggleCollapse();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="category"
        render={({ field: { value, onChange } }) => (
          <IngrediantCategory
            category={value}
            setToggle={handleSubmit(onSubmit)}
            toggle={!collapse}
            onAdd={handleAdd}
            error={errors.category?.message}
            onChangeCategory={onChange}
          />
        )}
      />
      <Spacer size={5} />
      <Divider />
      {!collapse
        ? ingrediants.map((_, index) => (
            <CreateIngrediantInput
              step={index + 1}
              key={`_ingrediant_${index}_`}
            />
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    paddingVertical: moderateScale(15),
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(30),
  },
});
