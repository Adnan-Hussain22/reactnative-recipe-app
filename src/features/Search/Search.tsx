import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import RecipeList from "src/components/RecipeList";

import SearchInput from "src/components/SearchInput/SearchInput";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <SearchInput />
        <RecipeList title="Top Rated" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
});
