import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackScreen from "./stacks/Decider";

export default function App() {
  const [userToken, setUserToken] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setUserToken("123");
    }, 200);
  });

  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
}
