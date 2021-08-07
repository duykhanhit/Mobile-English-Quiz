import React from "react";
import GetStarted from "../../App/GetStartedScreen";
import Login from "../../App/Login";
import SignIn from "../../App/SignIn";
import ForgotPassword from "../../App/ForgotPassword";
import { createStackNavigator } from "@react-navigation/stack";
import VerifyCode from "../../App/VerifyCode";
import ResetPassword from "../../App/ResetPassword";

const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none" initialRouteName="GetStarted">
      {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default LoginStack;
