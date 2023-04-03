import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StatusBar } from "react-native";

import firebaseConnection from "./src/services/firebaseConnection";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#131313"} barStyle={"light-content"} />
      <Routes />
    </NavigationContainer>
  );
}
