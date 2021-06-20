import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeStack from "../HomeStack";
import SettingScreen from "../../App/SettingScreen";

import styles from './styles';

const TabBottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: "#fff",
          borderRadius: 10,
          height: 60,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="home"
                size={26}
                color={focused ? "black" : "#666"}
              />
            );
          },
        }}
        name="HomeTab"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-cog"
                size={26}
                color={focused ? "black" : "#666"}
              />
            );
          },
        }}
        name="SettingTab"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default TabBottomNavigation;
