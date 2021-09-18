import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import Icon from "src/components/Icon";
import ImagePicker from "src/components/ImagePicker";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface RecipeCoverProps {
  onChange: (image: string) => void;
  imagePath: string;
}

const LEFT_SPACING = moderateScale(15);

const RecipeCover: React.FC<RecipeCoverProps> = ({ imagePath, onChange }) => {
  return (
    <ImagePicker setImage={onChange}>
      <View
        style={[
          FlexStyles.alignItemsCenter,
          FlexStyles.justifyContentCenter,
          styles.container,
        ]}
      >
        {imagePath ? (
          <Image source={{ uri: imagePath }} style={styles.image} />
        ) : (
          <>
            <Icon
              type="Feather"
              name="upload-cloud"
              style={styles.uploadIcon}
            />
            <Typography variant="BodyBold" marginBottom={moderateScale(5)}>
              Upload Cover
            </Typography>
            <Typography variant="P" color={COLORS.statsGreySecondary}>
              Click here to upload cover photo
            </Typography>
          </>
        )}
      </View>
    </ImagePicker>
  );
};

export default RecipeCover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginHorizontal: LEFT_SPACING,
    borderWidth: moderateScale(2.6),
    padding: moderateScale(3),
    borderStyle: "dotted",
    borderColor: COLORS.dotgrey,
    borderRadius: moderateScale(8),
    height: widthPercentageToDP("55%"),
    marginVertical: moderateScale(15),
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: moderateScale(8),
  },
  uploadIcon: {
    fontSize: moderateScale(50),
    color: COLORS.googleOrange,
    marginBottom: moderateScale(10),
  },
});
