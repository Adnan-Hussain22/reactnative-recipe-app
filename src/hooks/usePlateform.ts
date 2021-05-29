import { useMemo } from "react";
import { Platform } from "react-native";

export const usePlateform = () =>
  useMemo(
    () => ({
      isIos: Platform.OS === "ios",
      isAndroid: Platform.OS === "android",
    }),
    []
  );
