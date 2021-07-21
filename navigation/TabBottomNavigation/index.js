import React, { useRef, createRef, useState } from "react";
import { TouchableOpacity, View, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

// import HomeStack from "../HomeStack";
import * as colors from "../../assets/colors";
import HomeScreen from "../../App/HomeScreen";
import SettingScreen from "../../App/SettingScreen";
import HistoryScreen from "../../App/HistoryScreen";
import HistoryStack from '../HistoryStack';

import styles from "./styles";

const buttonSize = new Animated.Value(1);

const handlePress = () => {
  Animated.sequence([
    Animated.timing(buttonSize, {
      toValue: 0.9,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(buttonSize, {
      toValue: 1,
      useNativeDriver: true,
    }),
  ]).start();
};
const CustomTabBarButton = () => {
  const navigation = useNavigation();

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <View style={styles.buttonHistory}>
      <Animated.View style={[styles.customButton, sizeStyle]}>
        <TouchableOpacity
          onPress={() => {
            handlePress();
            navigation.navigate("HistoryStack");
          }}
        >
          <Animated.View >
            <MaterialCommunityIcons
              name="history"
              color="#98A6D4"
              size={26}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const TabBottomNavigation = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  const [openHistory, setOpenHistory] = useState(false);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: "#98A6D4",
          borderRadius: 10,
          height: 60,
          borderTopWidth: 0
          // ...styles.shadow, 
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
                color={focused ? "#44344F" : "#D3FCD5"}
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
        name="HistoryStack"
        component={HistoryStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-cog"
                size={26}
                color={focused ? "#44344F" : "#D3FCD5"}
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
