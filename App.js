import React from "react";
import HomeStack from "./navigation/HomeStack";
import { useFonts } from "expo-font";
import GetStarted from "./App/GetStartedScreen";
import Login from "./App/Login";
import SignIn from "./App/SignIn";
import ForgotPassword from "./App/ForgotPassword";
import CameraScreen from "./App/CameraScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalUserProvider from "./contexts/GlobalState/GlobaleUserState";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Helve: require("./assets/fonts/Helve.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GlobalUserProvider>
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
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalUserProvider>
  );
}
