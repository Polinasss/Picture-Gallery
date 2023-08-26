import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SavedImg } from "../../components/savedImg";
import { UsersDownloadedImg } from "../../components/usersDownloadedImg";

const Tab = createMaterialTopTabNavigator();

export const Profile: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: { paddingTop: 60 },
        tabBarIndicatorStyle: {
          backgroundColor: "red",
          height: 3,
        },
      })}
    >
      <Tab.Screen name="Сохранено" component={SavedImg} />
      <Tab.Screen name="Созданные" component={UsersDownloadedImg} />
    </Tab.Navigator>
  );
};
