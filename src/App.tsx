import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
