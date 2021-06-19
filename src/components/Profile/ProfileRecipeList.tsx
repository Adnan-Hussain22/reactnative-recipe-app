import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import NoRecipes from "./NoRecipes";

interface ProfileRecipeListProps {
  recipes: unknown[];
}

const ProfileRecipeList: React.FC<ProfileRecipeListProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => null}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoRecipes onPress={() => {}} />}
      />
    </View>
  );
};

export default ProfileRecipeList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
