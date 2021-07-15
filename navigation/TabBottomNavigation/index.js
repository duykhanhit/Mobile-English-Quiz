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

import styles from "./styles";

const buttonSize = new Animated.Value(1);
// const mode = new Animated.Value(0);

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
    // Animated.timing(mode, {
    //   toValue: mode._value === 0 ? 1 : 0,
    //   useNativeDriver: false,
    // }),
  ]).start();
};
const CustomTabBarButton = () => {
  const navigation = useNavigation();

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  // const spin = mode.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "-270deg"],
  // });

  return (
    <View style={styles.buttonHistory}>
      <Animated.View style={[styles.customButton, sizeStyle]}>
        <TouchableOpacity
          onPress={() => {
            handlePress();
            navigation.navigate("HistoryScreen");
          }}
        >
          <Animated.View 
          // style={[{ transform: [{ rotate: spin }]}]}
          >
            <MaterialCommunityIcons
              name="history"
              color={colors.lightGreen}
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
          backgroundColor: colors.mainGreen,
          borderRadius: 10,
          height: 60,
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
