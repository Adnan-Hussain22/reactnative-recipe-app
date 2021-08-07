import * as React from "react";
import { Platform, TouchableOpacity } from "react-native";
import * as Picker from "expo-image-picker";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";

interface ImagePickerProps {
  allowMultiple?: boolean;
  errorMessage?: string;
  // eslint-disable-next-line no-unused-vars
  setImage: (path: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  allowMultiple,
  children,
  errorMessage,
  setImage,
}) => {
  const requestPermission = React.useCallback(async () => {
    if (Platform.OS !== "web") {
      const { status } = await Picker.requestMediaLibraryPermissionsAsync();
      if (status !== Picker.PermissionStatus.GRANTED) {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }, []);

  const onPressImagePicker = React.useCallback(async () => {
    const result = await Picker.launchImageLibraryAsync({
      mediaTypes: Picker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: allowMultiple,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, [allowMultiple]);

  React.useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <TouchableOpacity onPress={onPressImagePicker}>
        {children}
      </TouchableOpacity>
      {errorMessage && (
        <Typography
          variant="P"
          color={COLORS.primaryRed}
          marginTop={moderateScale(8)}
        >
          {errorMessage}
        </Typography>
      )}
    </>
  );
};

export default ImagePicker;
