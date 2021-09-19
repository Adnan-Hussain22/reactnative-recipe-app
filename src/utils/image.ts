// eslint-disable-next-line @typescript-eslint/ban-types
export type INormalizeImageProps = object | string;

export const normalizeImageSrc = (source: INormalizeImageProps) =>
  typeof source === "string" ? { uri: source } : source;

export const getImageNameTypeFromUri = (uri: string) => {
  const arr = uri.split("/");
  const [name, type] = arr[arr.length - 1].split(".");
  return { name: `${name}.${type}`, type };
};
