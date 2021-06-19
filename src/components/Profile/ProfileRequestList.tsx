import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProfileRequestItem from "./ProfileRequestItem";
import RecipeRequestModal from "./RecipeRequestModal";

interface ProfileRequestListProps {
  requests: unknown[];
}

const ProfileRequestList: React.FC<ProfileRequestListProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        ListHeaderComponent={() => <RecipeRequestModal />}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <ProfileRequestItem
            name="Grace bee"
            username="gracebee"
            avatar="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            description="something very very special that i cannot describe :P"
            likes={56}
          />
        )}
      />
    </View>
  );
};

export default ProfileRequestList;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
});
