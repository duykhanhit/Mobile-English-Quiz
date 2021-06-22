import React from "react";
import HomeStack from "./navigation/HomeStack";
import { useFonts } from "expo-font";
import GetStarted from "./App/GetStartedScreen";
import Login from "./App/Login/index";
import SignIn from "./App/SignIn/index";
import ForgotPassword from "./App/ForgotPassword/index";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Helve: require("./assets/fonts/Helve.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" headerMode="none">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
