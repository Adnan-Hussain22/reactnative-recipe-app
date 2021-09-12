import * as React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";

import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { moderateScale } from "src/utils/scale";
import { CreateRecipeCooking, ICookingForm } from "./CreateRecipeCooking";
import CreateRecipeInfo, { RecipeInfoForm } from "./CreateRecipeInfo";
import CreateRecipeIngrediants from "./CreateRecipeIngrediants";
import { RecipeIngredientsForm } from "./type";
import { styles } from "./styles";

enum CreateRecipeSteps {
  RECIPE_INFO,
  RECIPE_INGREDIANTS,
  RECIPE_COOKING,
}

const CreateRecipeScreen: React.FC = () => {
  const [step, setStep] = React.useState<CreateRecipeSteps>(
    CreateRecipeSteps.RECIPE_INFO
  );
  const [, setFormState] = React.useState<
    [RecipeInfoForm | null, RecipeIngredientsForm | null, ICookingForm | null]
  >([null, null, null]);

  const onStep = React.useCallback(
    (data: RecipeInfoForm | RecipeIngredientsForm | ICookingForm) => {
      console.log("onStep==>", data);
      if (step !== CreateRecipeSteps.RECIPE_COOKING) {
        setStep((prev) => prev + 1);
      }
      setFormState((prev) => {
        const newState = [...prev];
        newState[step] = data;
        return newState as any;
      });
    },
    [step, setFormState, setStep]
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{ height: moderateScale(45) }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: "absolute",
              left: moderateScale(12),
              zIndex: 1,
            }}
          >
            <Icon
              type="Ionicons"
              name="chevron-back"
              style={{ fontSize: moderateScale(23) }}
            />
          </TouchableOpacity>
          <Typography variant="H2" textAlign="center">
            Create Recipe
          </Typography>
        </View>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
          >
            {step === CreateRecipeSteps.RECIPE_INFO ? (
              <CreateRecipeInfo onSubmit={onStep} />
            ) : step === CreateRecipeSteps.RECIPE_INGREDIANTS ? (
              <CreateRecipeIngrediants onSubmit={onStep} />
            ) : (
              <CreateRecipeCooking onSubmit={onStep} />
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateRecipeScreen;
