import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import UserAvatar from "react-native-user-avatar";
import { DismissKeyboardView } from "src/components";

import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { typographyStyles } from "src/constants/globalStyles";
import { useImagePicker } from "src/hooks";
import { moderateScale } from "src/utils";

export type RecipeRequestModalCardProps = {
  name: string;
  avatar: string;
  onSubmit: (form: RecipeRequestForm) => void;
};

export type RecipeRequestForm = {
  value: string;
  image: string | null;
};

export const RecipeRequestModalCard: React.FC<RecipeRequestModalCardProps> = ({
  name,
  avatar,
  onSubmit,
}) => {
  const [value, setValue] = React.useState("");
  const { open, result } = useImagePicker({});

  const handleSubmit = () => {
    onSubmit({ value, image: result?.uri ?? null });
  };

  const isDisabled = React.useMemo(() => !value.trim().length, [value]);

  return (
    <DismissKeyboardView>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <UserAvatar
            size={styles.avatar.width}
            name={name}
            src={avatar}
            style={styles.avatar}
            key={`_recipe_avatar${name}_${avatar}`}
          />
          <TextInput
            multiline
            placeholder="Tell us what recipe you would like to see!"
            placeholderTextColor={COLORS.statsGreySecondary}
            style={styles.input}
            value={value}
            onChangeText={setValue}
          />
        </View>
        {result ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: result.uri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ) : null}
        <View style={styles.actionsContainer}>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionWrapper} onPress={open}>
              <Icon
                name="ios-image"
                type="Ionicons"
                style={[styles.actionIcon, styles.colorRed]}
              />
              <Typography color={COLORS.statsGreySecondary} variant="BodyLight">
                Photo
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={[styles.actionContainer, styles.noBorder]}>
            <TouchableOpacity
              style={styles.actionWrapper}
              onPress={handleSubmit}
              disabled={isDisabled}
            >
              <Icon
                name="check-circle"
                type="FontAwesome"
                style={[
                  styles.actionIcon,
                  isDisabled ? styles.colorDisabled : styles.colorYellow,
                ]}
              />
              <Typography color={COLORS.statsGreySecondary} variant="BodyLight">
                Submit
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

export default RecipeRequestModalCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: widthPercentageToDP("93%"),
  },
  infoContainer: {
    paddingTop: moderateScale(20),
    height: 100,
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(15),
  },
  input: {
    ...typographyStyles.P,
    fontSize: moderateScale(14),
    width: widthPercentageToDP("68%"),
    minHeight: moderateScale(40),
  },
  imageContainer: {
    height: 179,
    margin: moderateScale(5),
  },
  image: { height: "100%", width: "100%" },
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    borderTopWidth: 0.8,
    borderTopColor: COLORS.dotgrey,
  },
  actionContainer: {
    width: "50%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: COLORS.dotgrey,
  },
  actionWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  actionIcon: {
    fontSize: moderateScale(20),
    color: COLORS.primaryRed,
    marginRight: moderateScale(12),
  },
  colorRed: {
    color: COLORS.primaryRed,
  },
  colorYellow: {
    color: COLORS.primaryYellow,
  },
  colorDisabled: { color: COLORS.statsGreySecondary },
  noBorder: { borderRightWidth: 0, paddingLeft: "15%" },
});
