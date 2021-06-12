import * as React from "react";
import { useCallback } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { CommunityUserItem } from "src/components/Community";
import DiscoverListHorizontal from "src/components/Discover/DiscoverListHorizontal";
import { DiscoverListTitle } from "src/components/Discover/DiscoverListTitle";
import { APP_NAME } from "src/constants/common";
import { DISCOVER_DATA } from "src/features/Discover/data";

const CommunityScreen: React.FC = () => {
  const renderUsers = useCallback(() => {
    return <CommunityUserItem />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverListTitle title={`Top ${APP_NAME}s`} onPress={() => {}} />
        <FlatList
          data={new Array(7).fill(0)}
          horizontal
          renderItem={renderUsers}
          keyExtractor={(_, index) => `__${index}__`}
        />
        <View style={{ height: 25 }} />
        <DiscoverListHorizontal
          data={DISCOVER_DATA[0].data}
          title="Trending Recipes"
          onPress={() => {}}
          type={0}
        />
        <DiscoverListTitle title="Recipe Requests" onPress={() => {}} />
        <FlatList
          data={new Array(7).fill(0)}
          horizontal
          renderItem={renderUsers}
          keyExtractor={(_, index) => `__${index}__`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
