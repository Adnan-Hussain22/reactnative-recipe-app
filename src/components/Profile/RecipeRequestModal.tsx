import * as React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import FlexStyles from "src/components/FlexBox/FlexStyles";
import RecipeRequestModalCard, {
  RecipeRequestModalCardProps,
} from "./RecipeRequestModalCard";

type RecipeRequestModalProps = {
  visible: boolean;
  onClose: () => void;
} & RecipeRequestModalCardProps;

export const RecipeRequestModal: React.FC<RecipeRequestModalProps> = ({
  visible,
  onClose,
  ...props
}) => {
  return (
    <View style={FlexStyles.flexContainer}>
      <Modal
        isVisible={visible}
        onBackdropPress={onClose}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={[FlexStyles.flexContainer, FlexStyles.flexCenter]}
      >
        <RecipeRequestModalCard {...props} />
      </Modal>
    </View>
  );
};

export type { RecipeRequestModalCardProps };
