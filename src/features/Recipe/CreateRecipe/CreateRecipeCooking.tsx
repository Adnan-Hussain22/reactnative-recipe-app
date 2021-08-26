/* eslint-disable no-unused-vars */
import * as React from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { CreateInstruction } from "src/features/Recipe/CreateRecipe/CreateInstruction";
import { moderateScale } from "src/utils/scale";
import { NextButton } from "./NextButton";

type CreateRecipeCookingProps = {
  onSubmit: (formVal: ICookingForm) => void;
};

export type ICookingForm = {
  instructions: string[];
};

export const CreateRecipeCooking: React.FC<CreateRecipeCookingProps> = ({
  onSubmit,
}) => {
  const [instructions, setInstructions] = React.useState<string[]>([]);

  const handleSetState = React.useCallback(
    (index: number) => (value: string) => {
      setInstructions((prev) => {
        if (!value) {
          return prev;
        }
        const newState = [...prev];
        newState[index] = value;
        return newState;
      });
    },
    []
  );

  const handleAdd = React.useCallback(() => {
    setInstructions((prev) => {
      const newState = [...prev];
      newState.push("");
      return newState;
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="BodySemiBold" textAlign="center">
          Enter Cooking instructions
        </Typography>
      </View>
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
        renderItem={({ index }) => (
          <CreateInstruction
            onChange={handleSetState(index)}
            step={index + 1}
          />
        )}
      />
      <NextButton onPress={() => onSubmit({ instructions })} />
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
