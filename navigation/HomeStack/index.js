import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../App/HomeScreen';
import RulesScreen from '../../App/RulesScreen';
import ExamScreen from '../../App/ExamScreen';
import ExamedScreen from '../../App/ExamedScreen';

const HomeStack = () => {
  
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="RulesScreen" component={RulesScreen}/>
      <Stack.Screen name="ExamScreen" component={ExamScreen}/>
      <Stack.Screen name="ExamedScreen" component={ExamedScreen}/>
    </Stack.Navigator>
  )
}

export default HomeStack;
