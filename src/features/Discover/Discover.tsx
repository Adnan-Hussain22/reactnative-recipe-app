import * as React from "react";
import { SafeAreaView, View, Image, FlatList, SectionList } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { DISCOVER_DATA } from "src/features/Discover/data";
import { moderateScale } from "src/utils/scale";
import { styles } from "./style";

const spacing = {
  marginLeft: moderateScale(18),
};

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
              <View
                style={[
                  styles.titleContainer,
                  section.index > 0 ? styles.listSpacingTop : null,
                ]}
              >
                <Typography variant="H1">{section.title}</Typography>
                <Typography
                  onPress={() => {}}
                  variant="P"
                  color={COLORS.primaryRed}
                >
                  See All
                </Typography>
              </View>
              {section.horizontal ? (
                <FlatList
                  data={section.data}
                  keyExtractor={(_, index) => `${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ index, item }) => (
                    <View
                      style={[
                        spacing,
                        section.type === 0
                          ? styles.itemRectangle
                          : styles.itemSquare,
                        index === section.data.length - 1
                          ? { marginRight: moderateScale(18) }
                          : null,
                      ]}
                    >
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        resizeMode="cover"
                        style={[
                          { width: "100%" },
                          section.type === 0
                            ? styles.imageRectangle
                            : styles.imageSquared,
                        ]}
                      />
                      <Typography
                        fontSize={moderateScale(19)}
                        marginTop={moderateScale(12)}
                      >
                        {item.title}
                      </Typography>
                      {item.subTitle ? (
                        <Typography
                          fontSize={moderateScale(14)}
                          marginTop={moderateScale(5)}
                          color={COLORS.textGrey}
                        >
                          {item.subTitle}
                        </Typography>
                      ) : null}
                    </View>
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
