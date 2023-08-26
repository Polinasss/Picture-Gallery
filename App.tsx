import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "./src/router";
import DataContextProvider from "./src/contexts/DataContextProvider";

export default function App() {
  return (
    <NavigationContainer>
      <DataContextProvider>
        <AuthNavigation />
      </DataContextProvider>
    </NavigationContainer>
  );
}
