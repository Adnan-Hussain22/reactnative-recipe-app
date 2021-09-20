import axios from "axios";
import { Config } from "src/constants/config";
import { getImageNameTypeFromUri } from "src/utils/image";

type FileUploadInput = {
  uri: string;
  type: string;
  name: string;
};

export const uploadMedia = async (uri: string) => {
  const { name, type } = getImageNameTypeFromUri(uri);
  const file: FileUploadInput = {
    uri,
    name,
    type: `image/${type}`,
  };
  const data = new FormData();
  data.append("file", file as any);
  data.append("upload_preset", Config.CLOUNDINARY_UPLOAD_PRESET);
  data.append("cloud_name", Config.CLOUNDINARY_CLOUD_NAME);
  const { data: imageRes } = await axios.post(
    `${Config.CLOUNDINARY_API_BASE_URL}/${Config.CLOUNDINARY_CLOUD_NAME}/image/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  const url = imageRes.secure_url || imageRes.url;
  if (!url) {
    throw new Error("Unable to upload media");
  }
  return url as string;
};
