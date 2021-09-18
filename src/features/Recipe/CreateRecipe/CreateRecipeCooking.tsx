import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { CREATE_RECIPE_VALIDATIONS } from "src/constants/Errors";
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
  const [instructions, setInstructions] = React.useState<string[]>([""]);
  const [error, setError] = React.useState("");

  const checkIsValidated = (newState: string[] = instructions) => {
    if (newState.some((val) => val.trim().length)) {
      setError("");
      return true;
    }
    setError(CREATE_RECIPE_VALIDATIONS.INSTRUCTION_MIN);
    return false;
  };

  const handleSetState = React.useCallback(
    (index: number) => (value: string) => {
      setInstructions((prev) => {
        const newState = [...prev];
        newState[index] = value;
        checkIsValidated(newState);
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

  const handleDelete = React.useCallback((index: number) => {
    if (index < 0) {
      return;
    }
    setInstructions((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  }, []);

  const handleSubmit = () => {
    if (!checkIsValidated()) {
      return;
    }
    onSubmit({ instructions: instructions.map((val) => val.trim()) });
  };

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
      <Typography
        variant="P"
        color={COLORS.primaryRed}
        marginTop={-10}
        marginBottom={moderateScale(15)}
      >
        {error}
      </Typography>
      <View style={{ minHeight: heightPercentageToDP("50%") }}>
        {instructions.map((instruction, index) => (
          <CreateInstruction
            key={`instruction_${index}`}
            index={index}
            instruction={instruction}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onChange={handleSetState(index)}
            allowDelete={instructions.length > 1}
          />
        ))}
      </View>
      <NextButton onPress={handleSubmit} />
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
