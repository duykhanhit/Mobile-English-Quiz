import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RulesScreen from "../../App/RulesScreen";
import ExamScreen from "../../App/ExamScreen";
import ExamedScreen from "../../App/ExamedScreen";
import TabBottomNavigation from "../TabBottomNavigation";

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeTab" component={TabBottomNavigation} />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen
        name="ExamScreen"
        component={ExamScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ExamedScreen"
        component={ExamedScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
