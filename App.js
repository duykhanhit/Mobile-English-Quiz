import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./navigation/HomeStack";
import { useFonts } from "expo-font";

import GetStarted from "./App/GetStartedScreen";
import Login from "./App/Login";
import SignIn from "./App/SignIn";
import ForgotPassword from "./App/ForgotPassword";
import CameraScreen from "./App/CameraScreen";
import GlobalUserProvider from "./contexts/GlobalState/GlobaleUserState";
import GlobalExamProvider from "./contexts/GlobalState/GlobalExamState";
import VerifyCode from "./App/VerifyCode";
import LoginStack from './navigation/LoginStack';
import { UserContext } from "./contexts/GlobalState/GlobaleUserState";
import _ from 'lodash';


const RootStackScreen = () => {
  const Stack = createStackNavigator();
  const { userState, retrieveToken } = useContext(UserContext);
  useEffect(() => {
    retrieveToken();
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      {!_.isEmpty(userState.dataToken) &&  userState.dataToken.token ? (<Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          gestureEnabled: false,
        }}
      />) : (<Stack.Screen name="LoginStack" component={LoginStack}/>)}
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default function App() {
  const [loaded] = useFonts({
    Helve: require("./assets/fonts/Helve.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <GlobalUserProvider>
      <GlobalExamProvider>
        <RootStackScreen/>
      </GlobalExamProvider>
    </GlobalUserProvider>
  );
}
