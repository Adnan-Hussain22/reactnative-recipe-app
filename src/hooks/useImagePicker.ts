import { useCallback, useState } from "react";
import { Platform } from "react-native";
import * as Picker from "expo-image-picker";

type ImageResult = {
  uri: string;
  width: number;
  height: number;
  type?: "image" | "video";
  exif?: {
    [key: string]: any;
  };
  base64?: string;
};

export const useImagePicker = ({
  allowMultiple,
}: {
  allowMultiple?: boolean;
}) => {
  const [result, setResult] = useState<ImageResult>();

  const requestPermission = useCallback(async () => {
    if (Platform.OS !== "web") {
      const { status } = await Picker.requestMediaLibraryPermissionsAsync();
      if (status !== Picker.PermissionStatus.GRANTED) {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }, []);

  const onPressImagePicker = useCallback(async () => {
    await requestPermission();
    const result = await Picker.launchImageLibraryAsync({
      mediaTypes: Picker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: allowMultiple,
    });

    if (!result.cancelled) {
      setResult(result);
      return result;
    }
    return null;
  }, [allowMultiple]);

  return {
    result,
    open: onPressImagePicker,
  };
};
