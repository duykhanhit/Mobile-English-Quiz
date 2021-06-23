import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as colors from "../../assets/colors";

// import HomeStack from "../HomeStack";
import HomeScreen from '../../App/HomeScreen';
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
          backgroundColor: colors.mainGreen,
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
                color={focused ? colors.darkGreen : colors.lightGreen}
              />
            );
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-cog"
                size={26}
                color={focused ? colors.darkGreen : colors.lightGreen}
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
