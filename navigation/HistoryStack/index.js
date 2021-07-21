import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HistoryScreen from "../../App/HistoryScreen";
import ExamHistoryScreen from "../../App/ExamHistoryScreen";

const HistoryStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Stack.Screen
        name="ExamHistoryScreen"
        component={ExamHistoryScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
