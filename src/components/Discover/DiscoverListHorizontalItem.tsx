import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { INormalizeImageProps, normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";

interface DiscoverListHorizontalItemProps {
  image: INormalizeImageProps;
  title: string;
  subTitle?: string;
  type: number;
  isLast: boolean;
}

export const DiscoverListHorizontalItem: React.FC<DiscoverListHorizontalItemProps> =
  ({ image, title, subTitle, type, isLast }) => {
    const navigation = useNavigation();

    const _navigator = () => navigation.navigate("Recipe");
    return (
      <TouchableOpacity
        onPress={_navigator}
        style={[
          styles.container,
          type === 0 ? styles.itemRectangle : styles.itemSquare,
          isLast ? { marginRight: moderateScale(18) } : null,
        ]}
      >
        <Image
          source={normalizeImageSrc(image)}
          resizeMode="cover"
          style={[
            { width: "100%" },
            type === 0 ? styles.imageRectangle : styles.imageSquared,
          ]}
        />
        <Typography fontSize={moderateScale(19)} marginTop={moderateScale(12)}>
          {title}
        </Typography>
        {subTitle ? (
          <Typography
            fontSize={moderateScale(14)}
            marginTop={moderateScale(5)}
            color={COLORS.textGrey}
          >
            {subTitle}
          </Typography>
        ) : null}
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  container: { marginLeft: moderateScale(18) },
  itemRectangle: {
    width: 180,
  },
  itemSquare: {
    width: 115,
  },
  imageRectangle: {
    height: 125,
    borderRadius: moderateScale(12),
  },
  imageSquared: {
    height: 115,
    borderRadius: moderateScale(10),
  },
});
