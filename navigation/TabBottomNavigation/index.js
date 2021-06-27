import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

// import HomeStack from "../HomeStack";
import HomeScreen from "../../App/HomeScreen";
import SettingScreen from "../../App/SettingScreen";
import HistoryScreen from "../../App/HistoryScreen";

import styles from "./styles";

const TabBottomNavigation = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = () => {
    return (
      <View style={styles.buttonHistory}>
        <View style={styles.customButton}>
          <TouchableOpacity onPress={() => navigation.navigate("HistoryScreen")}>
            <MaterialCommunityIcons style={{}} name="history" color={colors.lightGreen} size={26} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            // focused && mode._value === 1 ? handlePress() : null;
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
