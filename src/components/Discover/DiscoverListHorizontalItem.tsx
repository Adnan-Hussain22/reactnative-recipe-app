import * as React from "react";
import { useMemo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { graphql, useFragment } from "react-relay";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { DiscoverListHorizontalItem_recipe$key } from "src/services/graphql/__generated__/DiscoverListHorizontalItem_recipe.graphql";
import { normalizeImageSrc } from "src/utils/image";
import { moderateScale } from "src/utils/scale";

interface DiscoverListHorizontalItemProps {
  type: number;
  isLast: boolean;
  recipe: DiscoverListHorizontalItem_recipe$key;
}

const RecipeFragment = graphql`
  fragment DiscoverListHorizontalItem_recipe on Recipe {
    id
    name
    description
    image
    tags
    totalRating
    ingredients {
      amount
      name
      group
    }
  }
`;

export const DiscoverListHorizontalItem: React.FC<DiscoverListHorizontalItemProps> =
  ({ type, isLast, recipe }) => {
    const data = useFragment(RecipeFragment, recipe);
    const { image, name, description } = useMemo(() => {
      return {
        ...data,
      };
    }, [data]);

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
        <Typography
          fontSize={moderateScale(19)}
          marginTop={moderateScale(12)}
          numberOfLines={2}
        >
          {name}
        </Typography>
        {description ? (
          <Typography
            fontSize={moderateScale(14)}
            marginTop={moderateScale(5)}
            color={COLORS.textGrey}
            numberOfLines={2}
          >
            {description}
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
