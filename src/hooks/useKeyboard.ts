import { useCallback, useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";
import { usePlateform } from "./usePlateform";

export const useKeyboard = () => {
  const { isIos } = usePlateform();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const keyboardDidShow = useCallback((event: KeyboardEvent) => {
    setKeyboardHeight(event.endCoordinates.height);
    setIsKeyboardOpen(true);
  }, []);

  const keyboardDidHide = useCallback(() => {
    setIsKeyboardOpen(false);
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    Keyboard.addListener(
      isIos ? "keyboardWillShow" : "keyboardDidShow",
      keyboardDidShow
    );
    Keyboard.addListener(
      isIos ? "keyboardWillHide" : "keyboardDidHide",
      keyboardDidHide
    );
    return () => {
      Keyboard.removeListener(
        isIos ? "keyboardWillShow" : "keyboardDidShow",
        keyboardDidShow
      );
      Keyboard.removeListener(
        isIos ? "keyboardWillHide" : "keyboardDidHide",
        keyboardDidHide
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { keyboardHeight, isKeyboardOpen };
};
