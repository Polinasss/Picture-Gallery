import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Main, Profile } from "../../pages";

const Tab = createBottomTabNavigator();

export const NavigationMenu: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Main"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Main") {
            return focused ? (
              <Ionicons name="md-home" size={24} color="black" />
            ) : (
              <Ionicons name="md-home-outline" size={24} color="gray" />
            );
          } else if (route.name === "Profile") {
            return focused ? (
              <FontAwesome name="user" size={24} color="black" />
            ) : (
              <FontAwesome name="user-o" size={24} color="gray" />
            );
          }
        },
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 80, paddingBottom: 17, paddingTop: 15 },
      })}
    >
      <Tab.Screen name={"Main"}>{() => <Main />}</Tab.Screen>
      <Tab.Screen name={"Profile"}>{() => <Profile />}</Tab.Screen>
    </Tab.Navigator>
  );
};
