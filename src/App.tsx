import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { RelayEnvironmentProvider } from "react-relay";
import { RecoilRoot } from "recoil";

import RootStackScreen from "src/stacks/Decider";
import { CUSTOM_FONTS } from "src/constants/fonts";
import { relayEnvironment } from "src/services/graphql/relayEnvironment";
import AuthProvider from "src/providers/Auth";
import { Spinner } from "src/components/Spinner";

export default function App() {
  // const [loading, toggleLoading] = useTogglState();
  const [loaded] = useFonts({
    [CUSTOM_FONTS.PROXIMA_REGULAR]: require("../assets/fonts/FontsFree-Net-pr10.ttf"),
    [CUSTOM_FONTS.PROXIMA_SEMIBOLD]: require("../assets/fonts/FontsFree-Net-Proxima-Nova-Sbold.otf"),
    [CUSTOM_FONTS.PROXIMA_SEMIBOLD_ITALIC]: require("../assets/fonts/FontsFree-Net-Proxima-Nova-Sbold-It.otf"),
    [CUSTOM_FONTS.PROXIMA_BOLD]: require("../assets/fonts/FontsFree-Net-proxima_nova_bold-webfont.ttf"),
  });

  // React.useEffect(() => {
  //   if (loaded) {
  //     setTimeout(() => {
  //       toggleLoading();
  //     }, 1200);
  //   }
  // }, [loaded]);

  if (!loaded) return <Spinner visible />;

  return (
    <RecoilRoot>
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <NavigationContainer>
          <AuthProvider>
            <RootStackScreen />
          </AuthProvider>
        </NavigationContainer>
      </RelayEnvironmentProvider>
    </RecoilRoot>
  );
}
