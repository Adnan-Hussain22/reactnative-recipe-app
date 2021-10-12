import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import ImagePicker from "src/components/ImagePicker";
import { COLORS } from "src/constants/colors";
import { height, moderateScale } from "src/utils/scale";
import Icon from "../Icon";
import Typography from "../Typography";

export const ProfileImageBox: React.FC<{
  value: string;
  onChange: (text: string) => void;
}> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <ImagePicker setImage={onChange}>
        <View style={styles.pickerContainer}>
          {value ? (
            <Image style={styles.image} source={{ uri: value }} />
          ) : (
            <Icon
              name="plus"
              type="AntDesign"
              style={{
                color: COLORS.textGrey,
                fontSize: moderateScale(height * 0.1),
              }}
            />
          )}
        </View>
      </ImagePicker>
      <Typography
        variant="BodyBold"
        marginBottom={moderateScale(12)}
        marginTop={moderateScale(20)}
      >
        Add Profile Picture
      </Typography>
      <Typography>or add it later</Typography>
    </View>
  );
};

const PICKER_SIZE = moderateScale(height * 0.27);

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    height: PICKER_SIZE,
    width: PICKER_SIZE,
    backgroundColor: COLORS.dotgrey,
    borderRadius: PICKER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: PICKER_SIZE / 2,
  },
});
