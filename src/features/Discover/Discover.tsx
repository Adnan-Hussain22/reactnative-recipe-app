import * as React from "react";
import { SafeAreaView, View, SectionList } from "react-native";
import { DiscoverListTitle } from "src/components/Discover";
import DiscoverListHorizontal from "src/components/Discover/DiscoverListHorizontal";
import { DISCOVER_DATA } from "src/features/Discover/data";
import { styles } from "./style";

const DiscoverScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DISCOVER_DATA}
        keyboardShouldPersistTaps="never"
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `__discoverItem__${index}`}
        renderSectionHeader={({ section }) => {
          return (
            <>
              <DiscoverListTitle
                sectionIndex={section.index}
                title={section.title}
                onPress={() => {}}
              />
              {section.horizontal ? (
                <DiscoverListHorizontal
                  data={section.data}
                  type={section.type}
                />
              ) : null}
            </>
          );
        }}
        renderItem={() => {
          // if (section.horizontal) return null;
          return null;
        }}
        ListFooterComponent={() => <View style={{ height: 80 }} />}
      />
    </SafeAreaView>
  );
};

export default DiscoverScreen;
