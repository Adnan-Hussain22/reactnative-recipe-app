import * as React from "react";
import { SafeAreaView, View, FlatList, SectionList } from "react-native";
import {
  DiscoverListTitle,
  DiscoverListHorizontalItem,
} from "src/components/Discover";
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
                <FlatList
                  data={section.data}
                  keyExtractor={(_, index) => `${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ index, item }) => (
                    <DiscoverListHorizontalItem
                      title={item.title}
                      subTitle={item.subTitle}
                      image={item.image}
                      type={section.type}
                      isLast={index === section.data.length - 1}
                    />
                  )}
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
