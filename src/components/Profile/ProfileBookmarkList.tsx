import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RecipeItem from "src/components/RecipeItem";

interface ProfileBookmarkListProps {
  bookmarks: unknown[];
}

const ProfileBookmarkList: React.FC<ProfileBookmarkListProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <RecipeItem bookmark />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => `__Bookmark${index}__`}
      />
    </View>
  );
};

export default ProfileBookmarkList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
