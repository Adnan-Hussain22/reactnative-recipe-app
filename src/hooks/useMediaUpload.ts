import { useCallback } from "react";
import { uploadMedia } from "src/api/media";
import { useTogglState } from "./useToggleState";

export const useMediaUpload = () => {
  const [isLoading, toggleIsLoading] = useTogglState();

  const onUploadMedia = useCallback(
    async (uri: string) => {
      try {
        toggleIsLoading();
        const res = await uploadMedia(uri);
        toggleIsLoading();
        return res;
      } catch (error) {
        console.log("error uploading media: ", error.message);
        toggleIsLoading();
      }
    },
    [toggleIsLoading]
  );
  return {
    uploadMediaInFlight: isLoading,
    onUploadMedia,
  };
};
