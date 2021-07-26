import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import RootStackScreen from "./stacks/Decider";
import { CUSTOM_FONTS } from "./constants/fonts";

export default function App() {
  const [userToken, setUserToken] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [loaded] = useFonts({
    [CUSTOM_FONTS.PROXIMA_REGULAR]: require("../assets/fonts/FontsFree-Net-pr10.ttf"),
    [CUSTOM_FONTS.PROXIMA_SEMIBOLD]: require("../assets/fonts/FontsFree-Net-Proxima-Nova-Sbold.otf"),
    [CUSTOM_FONTS.PROXIMA_SEMIBOLD_ITALIC]: require("../assets/fonts/FontsFree-Net-Proxima-Nova-Sbold-It.otf"),
    [CUSTOM_FONTS.PROXIMA_BOLD]: require("../assets/fonts/FontsFree-Net-proxima_nova_bold-webfont.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setUserToken("123");
      setLoading(false);
    }, 200);
  });

  if (!loaded || loading) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
}
