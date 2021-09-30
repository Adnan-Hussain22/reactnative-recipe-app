import * as React from "react";
import { TouchableOpacity } from "react-native";
import Typography from "src/components/Typography";
import { COLORS } from "src/constants/colors";
import { moderateScale } from "src/utils/scale";
import { useImagePicker } from "src/hooks";

interface ImagePickerProps {
  allowMultiple?: boolean;
  errorMessage?: string;
  setImage: (path: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  allowMultiple,
  children,
  errorMessage,
  setImage,
}) => {
  const { open } = useImagePicker({ allowMultiple });

  const onPressImagePicker = React.useCallback(async () => {
    const res = await open();
    if (res) {
      setImage(res.uri);
    }
  }, [open]);

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
