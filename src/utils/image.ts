// eslint-disable-next-line @typescript-eslint/ban-types
export type INormalizeImageProps = object | string;

export const normalizeImageSrc = (source: INormalizeImageProps) =>
  typeof source === "string" ? { uri: source } : source;
