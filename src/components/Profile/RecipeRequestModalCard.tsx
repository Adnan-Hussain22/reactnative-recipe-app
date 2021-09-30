import * as React from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import UserAvatar from "react-native-user-avatar";
import { DismissKeyboardView } from "src/components";

import Icon from "src/components/Icon";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { useImagePicker } from "src/hooks";
import { recipeRequestCard as styles } from "./styles";

export type RecipeRequestModalCardProps = {
  name: string;
  avatar: string;
  onSubmit: (form: RecipeRequestForm) => void;
  autoFocusInput?: boolean;
};

export type RecipeRequestForm = {
  value: string;
  image: string | null;
};

export const RecipeRequestModalCard: React.FC<RecipeRequestModalCardProps> = ({
  name,
  avatar,
  autoFocusInput,
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
            autoFocus={autoFocusInput}
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
