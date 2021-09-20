import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/core";
import { AirbnbRating } from "react-native-ratings";

import BackArrow from "src/components/Svgs/BackArrow";
import RecipeInfo from "src/components/Community/RecipeInfoBox";
import RecipeInstruction from "src/features/Community/Recipe/RecipeInstruction";
import ProfileTabBar from "src/components/Profile/TabBar/ProfileTabBar";
import Icon from "src/components/Icon";
import styles from "./styles";
import { useCallback } from "react";
import RecipeIngredient from "src/features/Community/Recipe/RecipeIngrideint";
import { RECIPE_DATA } from "src/features/Community/Recipe/data";
import { useMemo } from "react";
import ProfileRequestList from "src/components/Profile/ProfileRequestList";
import Typography from "src/components/Typography";
import { moderateScale } from "src/utils/scale";
import Spacer from "src/components/Spacer";

const RecipeScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  const routes = useMemo(
    () => [
      { key: "INGREDIENTS", title: "Ingredients" },
      { key: "INSTRUCCTIONS", title: "Instructions" },
      { key: "TIPS", title: "Tips" },
    ],
    []
  );

  const {
    name,
    origan,
    chefName,
    rating,
    image,
    cookTime,
    calories,
    serving,
    ingredients,
    instructions,
  } = RECIPE_DATA;

  const renderIngredients = useCallback(() => null, []);

  const renderInstructions = useCallback(() => null, []);

  const renderTips = useCallback(() => null, []);

  const renderScene = SceneMap({
    INGREDIENTS: renderIngredients,
    INSTRUCCTIONS: renderInstructions,
    TIPS: renderTips,
  });

  const goBack = () => navigation.goBack();

  const _render = useMemo(() => {
    if (index === 0) return <RecipeIngredient ingredients={ingredients} />;
    if (index === 1) return <RecipeInstruction instructions={instructions} />;
    return <ProfileRequestList requests={[]} />;
  }, [index]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TouchableOpacity style={styles.backArrow} onPress={goBack}>
        <BackArrow />
      </TouchableOpacity>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.headingParent}>
            <Text style={styles.heading}>{name}</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.origin}>{origan}</Text>
          <Text style={styles.name}>Style by {chefName}</Text>
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
          <RecipeInfo {...{ calories, cookTime, serving }} />
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
export default RecipeScreen;
