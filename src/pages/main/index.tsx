import React from "react";
import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PinterestLayout } from "../../components/main/PinterestLayout";
import SearchContextProvider from "../../contexts/SearchContextProvider";

export const Main: React.FC = () => {
  return (
    <SafeAreaView>
      <SearchContextProvider>
          <PinterestLayout />
      </SearchContextProvider>
    </SafeAreaView>
  );
};
