import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { useNavigation, useRoute } from "@react-navigation/core";
import { AirbnbRating } from "react-native-ratings";
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";

import BackArrow from "src/components/Svgs/BackArrow";
import RecipeInfo from "src/components/Community/RecipeInfoBox";
import RecipeInstruction from "src/features/Community/Recipe/RecipeInstruction";
import ProfileTabBar from "src/components/Profile/TabBar/ProfileTabBar";
import Icon from "src/components/Icon";
import styles from "./styles";
import RecipeIngredient from "src/features/Community/Recipe/RecipeIngredient";
// import { RECIPE_DATA } from "src/features/Community/Recipe/data";
// import ProfileRequestList from "src/components/Profile/ProfileRequestList";
import Typography from "src/components/Typography";
import { moderateScale } from "src/utils/scale";
import Spacer from "src/components/Spacer";
import { RecipeScreen_recipe$key } from "src/services/graphql/__generated__/RecipeScreen_recipe.graphql";
import { normalizeImageSrc } from "src/utils/image";
import { RecipeIngredient_ingredients$key } from "src/services/graphql/__generated__/RecipeIngredient_ingredients.graphql";
import { RecipeTips } from "./RecipeTips";
import { Spinner } from "src/components/Spinner";
import { RecipeScreenQuery } from "src/services/graphql/__generated__/RecipeScreenQuery.graphql";
import { RecipeTips_tips$key } from "src/services/graphql/__generated__/RecipeTips_tips.graphql";

const RecipeScreenFragment = graphql`
  fragment RecipeScreen_recipe on Recipe {
    _id
    name
    description
    image
    totalRating
    cookingTime
    serving
    calories
    instructions
    ingredients {
      ...RecipeIngredient_ingredients
    }
  }
`;

const Screen: React.FC<{
  recipeRef: RecipeScreen_recipe$key | RecipeTips_tips$key;
}> = ({ recipeRef }) => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const routes = React.useMemo(
    () => [
      { key: "INGREDIENTS", title: "Ingredients" },
      { key: "INSTRUCCTIONS", title: "Instructions" },
      { key: "TIPS", title: "Tips" },
    ],
    []
  );
  const data = useFragment(
    RecipeScreenFragment,
    recipeRef as RecipeScreen_recipe$key
  );

  const {
    ingredients,
    instructions,
    totalRating: rating,
    cookingTime,
    calories,
    serving,
  } = React.useMemo(() => {
    return {
      ...data,
      cookingTime: data.cookingTime ?? 0,
      calories: data.calories ?? 0,
      serving: data.serving ?? 0,
      instructions: data.instructions ?? [],
    };
  }, [data]);

  const renderIngredients = React.useCallback(() => null, []);

  const renderInstructions = React.useCallback(() => null, []);

  const renderTips = React.useCallback(() => null, []);

  const renderScene = SceneMap({
    INGREDIENTS: renderIngredients,
    INSTRUCCTIONS: renderInstructions,
    TIPS: renderTips,
  });

  const goBack = () => navigation.goBack();

  const _render = React.useMemo(() => {
    if (index === 0)
      return (
        <RecipeIngredient
          ingredientsRef={ingredients as RecipeIngredient_ingredients$key}
        />
      );
    if (index === 1)
      return <RecipeInstruction instructions={instructions as string[]} />;
    return <RecipeTips recipeRef={recipeRef as RecipeTips_tips$key} />;
  }, [index, instructions, ingredients]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TouchableOpacity style={styles.backArrow} onPress={goBack}>
        <BackArrow />
      </TouchableOpacity>
      <Image source={normalizeImageSrc(data.image)} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.headingParent}>
            <Text style={styles.heading}>{data.name}</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          {/* <Text style={styles.origin}>{origan}</Text> */}
          <Text style={styles.name} numberOfLines={2}>
            {data.description}
          </Text>
        </View>

        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5}
            showRating={false}
            size={20}
            defaultRating={rating}
          />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.boxParent}>
          <RecipeInfo {...{ calories, cookingTime, serving }} />
        </View>
        <View style={styles.dropDownParent}>
          <View style={styles.dropDown}>
            <Typography
              variant="BodyLight"
              padding={moderateScale(16)}
              fontSize={moderateScale(18)}
            >
              Nutrition Information
            </Typography>
            <Text style={styles.dropDownHeading}></Text>

            <View style={styles.iconDownParent}>
              <Icon name="chevron-down" type="Entypo" style={styles.iconDown} />
            </View>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TabView
            style={styles.tabView}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width, height: layout.height }}
            renderTabBar={(props) => {
              return (
                <ProfileTabBar
                  routes={routes}
                  index={index}
                  onPress={(key) => props.jumpTo(key)}
                />
              );
            }}
          />
          {_render}
        </View>
      </View>
      <Spacer size={10} />
    </ScrollView>
  );
};

const query = graphql`
  query RecipeScreenQuery($recipeId: MongoID!) {
    recipeById(_id: $recipeId) {
      ...RecipeScreen_recipe
      ...RecipeTips_tips
    }
  }
`;

const RecipeLoader: React.FC<{ recipeRef: PreloadedQuery<RecipeScreenQuery> }> =
  ({ recipeRef }) => {
    const data = usePreloadedQuery(query, recipeRef);
    return <Screen recipeRef={data.recipeById as RecipeScreen_recipe$key} />;
  };

const RecipeScreen = () => {
  const [queryRef, loadQuery] = useQueryLoader<RecipeScreenQuery>(query);
  const { params: { recipeId } = { recipeId } } = useRoute();

  React.useEffect(() => {
    if (!queryRef) {
      loadQuery({ recipeId });
    }
  }, [queryRef, loadQuery]);

  if (!queryRef) {
    return <Spinner visible />;
  }

  return (
    <React.Suspense fallback={<Spinner visible />}>
      <RecipeLoader recipeRef={queryRef} />
    </React.Suspense>
  );
};

export default RecipeScreen;
