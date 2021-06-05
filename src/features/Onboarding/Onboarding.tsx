import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Dot from "src/components/Dot";

import OnboardingComponent from "src/components/Onboarding/OnboardingComponent";
import { COLORS } from "src/constants/colors";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { height, moderateScale } from "src/utils/scale";

const Onboarding: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef<Swiper>(null);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skipBtn}>
        <Text style={styles.skipTxt}>SKIP</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 0.8,
          paddingTop: moderateScale(10),
        }}
      >
        <Swiper
          index={activeIndex}
          style={{ flexGrow: 1 }}
          scrollEnabled={false}
          loop
          ref={(e) => (swiperRef.current = e)}
          dot={
            <Dot
              color={COLORS.dotgrey}
              size={moderateScale(9)}
              spacing={moderateScale(6)}
            />
          }
          activeDot={
            <Dot
              color={COLORS.primaryRed}
              size={moderateScale(13)}
              spacing={moderateScale(6)}
            />
          }
          paginationStyle={{
            bottom: 12,
          }}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          <OnboardingComponent step={0} />
          <OnboardingComponent step={1} />
          <OnboardingComponent step={2} />
        </Swiper>
      </View>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          swiperRef.current?.scrollBy(1);
        }}
      >
        <Text style={styles.nextTxt}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFF",
  },
  skipBtn: {
    alignItems: "flex-end",
    flex: 0.1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  skipTxt: {
    fontSize: moderateScale(16),
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    color: COLORS.primaryRed,
  },
  nextBtn: {
    position: "absolute",
    bottom: height * 0.12 - 5,
    right: moderateScale(35),
  },
  nextTxt: {
    fontSize: moderateScale(16),
    fontFamily: CUSTOM_FONTS.PROXIMA_SEMIBOLD,
    color: "#5b5b5b",
  },
});
