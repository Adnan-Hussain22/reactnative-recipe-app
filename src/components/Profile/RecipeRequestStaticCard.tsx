import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import UserAvatar from "react-native-user-avatar";

import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { recipeRequestCard as styles } from "./styles";

export type RecipeRequestStaticCardProps = {
  name: string;
  avatar: string;
  onPress: () => void;
};

export const RecipeRequestStaticCard: React.FC<RecipeRequestStaticCardProps> =
  ({ name, avatar, onPress }) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.infoContainer}>
          <UserAvatar
            size={styles.avatar.width}
            name={name}
            src={avatar}
            style={styles.avatar}
            key={`_recipe_avatar${name}_${avatar}`}
          />
          <Typography
            variant="P"
            color={COLORS.statsGreySecondary}
            {...styles.input}
          >
            Tap to request a recipe from chef's community!
          </Typography>
        </View>
      </TouchableOpacity>
    );
  };
