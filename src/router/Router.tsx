import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../pages";
import { NavigationMenu } from "../components/navigation";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NavigationMenu"
        component={NavigationMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
