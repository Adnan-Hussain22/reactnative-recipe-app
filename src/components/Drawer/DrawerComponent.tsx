import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import * as React from "react";
import { View, StyleSheet } from "react-native";

import { categoryIcon, homeIcon, searchIcon } from "src/assets/images";
import MenuButton from "src/components/MenuButton";

const DrawerComponent: React.FC<
  DrawerContentComponentProps<DrawerContentOptions>
> = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={homeIcon}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={categoryIcon}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={searchIcon}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});
