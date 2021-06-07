import * as React from "react";
import { StyleSheet, SafeAreaView, View, Image, FlatList } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

const spacing = {
  marginLeft: moderateScale(18),
};

const DiscoverScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: moderateScale(12),
          marginBottom: moderateScale(20),
          paddingHorizontal: spacing.marginLeft,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="H1">Top Picks</Typography>
        <Typography variant="P" color={COLORS.primaryRed}>
          See All
        </Typography>
      </View>
      <FlatList
        data={new Array(8).fill(0)}
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => (
          <View
            style={[
              spacing,
              index === 7 ? { marginRight: spacing.marginLeft } : null,
            ]}
          >
            <Image
              source={{
                uri: "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
              }}
              resizeMode="cover"
              style={{
                height: 125,
                width: 180,
                borderRadius: moderateScale(12),
              }}
            />
            <Typography
              fontSize={moderateScale(19)}
              marginTop={moderateScale(12)}
            >
              Italian Pasta
            </Typography>
            <Typography
              fontSize={moderateScale(14)}
              marginTop={moderateScale(5)}
              color={COLORS.textGrey}
            >
              Ridan Style
            </Typography>
          </View>
        )}
      />
      <View
        style={{
          marginTop: moderateScale(12),
          marginBottom: moderateScale(20),
          paddingHorizontal: spacing.marginLeft,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="H1">By Cuisines</Typography>
        <Typography variant="P" color={COLORS.primaryRed}>
          See All
        </Typography>
      </View>
      <FlatList
        data={new Array(8).fill(0)}
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => (
          <View
            style={[
              spacing,
              index === 7 ? { marginRight: moderateScale(18) } : null,
            ]}
          >
            <Image
              source={{
                uri: "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
              }}
              resizeMode="cover"
              style={{
                height: 115,
                width: 115,
                borderRadius: moderateScale(10),
              }}
            />
            <Typography
              fontSize={moderateScale(19)}
              marginTop={moderateScale(12)}
            >
              Americal
            </Typography>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
