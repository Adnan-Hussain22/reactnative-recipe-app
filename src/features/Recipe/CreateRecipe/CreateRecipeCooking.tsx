import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import * as yup from "yup";

import { CreateInstruction } from "src/features/Recipe/CreateRecipe/CreateInstruction";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
import { moderateScale } from "src/utils/scale";
import { NextButton } from "./NextButton";
import { ICookingForm } from "./type";

type CreateRecipeCookingProps = {
  onSubmit: (formVal: ICookingForm) => void;
};

const schema = yup.object().shape({
  instructions: yup
    .array()
    .of(yup.string())
    .test("instructions", (val) => !!val?.some((val) => !!val?.trim().length)),
});

export const CreateRecipeCooking: React.FC<CreateRecipeCookingProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICookingForm>({
    defaultValues: {
      instructions: [""],
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const {
    append,
    remove,
    fields: instructions,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const handleAdd = React.useCallback(() => {
    append("");
  }, [append]);

  const handleDelete = React.useCallback(
    (index: number) => {
      if (instructions.length > 1) {
        remove(index);
      }
    },
    [remove, instructions]
  );

  return (
    <View>
      <View style={styles.header}>
        <Typography variant="BodySemiBold" textAlign="center">
          Enter Cooking instructions
        </Typography>
      </View>
      <View style={styles.container}>
        <View
          style={[FlexStyles.flexDirectionRow, styles.instructionBtnContainer]}
        >
          <Typography
            variant="BodyLight"
            color={COLORS.statsGreyPrimary}
            marginRight={moderateScale(15)}
          >
            Add Instructions
          </Typography>
          <TouchableOpacity onPress={handleAdd}>
            <Icon
              type="Feather"
              name="plus-circle"
              style={{
                color: COLORS.statsGreyPrimary,
                fontSize: moderateScale(18),
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={instructions}
          contentContainerStyle={{ minHeight: heightPercentageToDP("50%") }}
          keyExtractor={(_, index) => `instruction_${index}`}
          ListFooterComponent={
            <Typography
              variant="P"
              color={COLORS.primaryRed}
              marginTop={-10}
              marginBottom={moderateScale(15)}
            >
              {(errors as any)?.instructions?.message
                ? CREATE_RECIPE_VALIDATIONS.INSTRUCTION_MIN
                : ""}
            </Typography>
          }
          renderItem={({ index }) => (
            <CreateInstruction
              index={index}
              control={control}
              onAdd={handleAdd}
              onDelete={handleDelete}
              allowDelete={instructions.length > 1}
            />
          )}
        />
        <NextButton onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  header: {
    backgroundColor: COLORS.white,
    paddingBottom: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  instructionBtnContainer: {
    marginVertical: moderateScale(20),
  },
});
