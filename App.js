import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBottomNavigation from './navigation/TabBottomNavigation';
import { useFonts } from 'expo-font';
// import { View, Text } from 'react-native';

export default function App() {

  const [loaded] = useFonts({
    AptimaBold: require('./assets/fonts/AptimaBold.ttf'),
    Aptima: require('./assets/fonts/Aptima.ttf'),
  })
  
  if(!loaded){
    return null;
  }
  return (
    <NavigationContainer>
      <TabBottomNavigation/>
    </NavigationContainer>
  );
}